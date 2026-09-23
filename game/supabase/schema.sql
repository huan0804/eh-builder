-- EH Builder — Supabase schema
-- Mô hình tham khảo từ dự án "Ne Sep" (Postgres, RPC security-definer, RLS chặn ghi
-- trực tiếp, idempotent hoàn toàn) — xem D:\1. Personal Working\6. Ne Sep\supabase\schema.sql
-- cho bối cảnh đầy đủ các bài học an toàn đã áp dụng lại ở đây.

-- ============================================================
-- 1. cases_saves — save game qua mã khôi phục (cross-device)
-- ============================================================
-- Lưu JSON snapshot toàn bộ state của gameState.js (state đã tự đặt nguyên tắc
-- "MỘT object thuần JSON" — xem game/src/state/gameState.js), không chuẩn hoá
-- thành cột riêng để không phải đồng bộ 2 nguồn sự thật khi case1.js đổi cấu trúc.
create table if not exists cases_saves (
  recovery_code text primary key,
  save_version integer not null,
  case_id text not null default 'case1',
  state jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  alter table cases_saves add constraint cases_saves_code_length check (char_length(recovery_code) = 7);
exception when duplicate_object then null;
end $$;
do $$
begin
  alter table cases_saves add constraint cases_saves_version_positive check (save_version >= 1);
exception when duplicate_object then null;
end $$;

-- RLS: bật, KHÔNG có policy SELECT/INSERT/UPDATE public trực tiếp. Bài học từ
-- Ne Sep: "update using(true)" từng cho phép sửa dữ liệu người chơi khác qua
-- REST API thẳng, không cần chơi game — lỗ hổng thật, không phải lý thuyết.
-- Toàn bộ đọc/ghi đi qua RPC security definer bên dưới.
alter table cases_saves enable row level security;
drop policy if exists "cases_saves: không cho truy cập trực tiếp" on cases_saves;

-- ============================================================
-- 2. RPC lưu/đọc save qua mã khôi phục
-- ============================================================

-- Ghi/cập nhật save. Nhận toàn bộ state JSON từ client (đây không phải điểm số
-- tích luỹ cần validate delta như Ne Sep — save game là snapshot toàn quyền của
-- chính người chơi đó, rủi ro thấp vì không có PII/thanh toán), nhưng vẫn giới
-- hạn kích thước payload hợp lý để chặn lạm dụng ghi rác.
create or replace function save_game_progress(
  p_code text,
  p_state jsonb,
  p_save_version int,
  p_case_id text default 'case1'
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_code !~ '^[A-Za-z0-9]{7}$' then
    raise exception 'invalid recovery code format';
  end if;
  if p_save_version < 1 then
    raise exception 'invalid save version: %', p_save_version;
  end if;
  if pg_column_size(p_state) > 200000 then
    raise exception 'save state too large';
  end if;

  insert into cases_saves (recovery_code, save_version, case_id, state, updated_at)
  values (p_code, p_save_version, coalesce(p_case_id, 'case1'), p_state, now())
  on conflict (recovery_code) do update set
    save_version = excluded.save_version,
    case_id = excluded.case_id,
    state = excluded.state,
    updated_at = now();
end;
$$;

grant execute on function save_game_progress(text, jsonb, int, text) to anon, authenticated;

-- Đọc save theo đúng mã truyền vào — không có cách nào liệt kê/duyệt toàn bộ
-- bảng qua RPC này (chỉ SELECT 1 dòng khớp mã).
create or replace function load_game_progress(p_code text)
returns table(save_version int, case_id text, state jsonb, updated_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_code !~ '^[A-Za-z0-9]{7}$' then
    raise exception 'invalid recovery code format';
  end if;

  return query
    select cs.save_version, cs.case_id, cs.state, cs.updated_at
    from cases_saves cs
    where cs.recovery_code = p_code;
end;
$$;

grant execute on function load_game_progress(text) to anon, authenticated;

-- ============================================================
-- 3. analytics_stage_events_daily — funnel theo STAGES, theo ngày (giờ VN)
-- ============================================================
-- Khoá theo ngày THẬT theo giờ Việt Nam (UTC+7) — tính SẴN Ở CLIENT (hàm
-- vnDateKeyPadded() trong game/src/lib/supabaseClient.js, cùng logic Ne Sep),
-- KHÔNG để Postgres tự suy ra từ server timestamp, tránh lệch múi giờ nếu
-- server không chạy UTC+7.
create table if not exists analytics_stage_events_daily (
  date_key text not null,
  stage text not null,
  event_type text not null default 'enter',
  count integer not null default 0,
  primary key (date_key, stage, event_type)
);

alter table analytics_stage_events_daily enable row level security;
drop policy if exists "stage_events_daily: đọc" on analytics_stage_events_daily;
create policy "stage_events_daily: đọc" on analytics_stage_events_daily for select using (true);

-- RPC tăng nguyên tử — cùng lý do/cơ chế atomic như Ne Sep (increment_* RPCs):
-- "insert ... on conflict do update set count = count + 1" khoá row trong 1
-- câu lệnh, tránh race condition của pattern SELECT-rồi-UPDATE ở client khi
-- nhiều người chơi cùng vào 1 stage gần như đồng thời.
create or replace function increment_stage_event(p_date_key text, p_stage text, p_event_type text default 'enter')
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_stage not in ('prologue', 'chapter1', 'investigation', 'thinkingBoard', 'epilogue') then
    raise exception 'invalid stage: %', p_stage;
  end if;
  if p_event_type not in ('enter') then
    raise exception 'invalid event_type: %', p_event_type;
  end if;

  insert into analytics_stage_events_daily (date_key, stage, event_type, count)
  values (p_date_key, p_stage, p_event_type, 1)
  on conflict (date_key, stage, event_type) do update set
    count = analytics_stage_events_daily.count + 1;
end;
$$;

grant execute on function increment_stage_event(text, text, text) to anon, authenticated;

-- ============================================================
-- 4. ad_events — chuẩn bị cho rewarded-ads thật (CHƯA gọi từ client lần này)
-- ============================================================
-- RewardedAdModal.jsx hiện là bản giả lập hoàn toàn (xem game/src/components/
-- RewardedAdModal.jsx) — bảng/RPC này tạo sẵn chỗ ghi nhận cho khi tích hợp
-- SDK CrazyGames/Poki thật sau này, nhưng KHÔNG được nối dây trong đợt này để
-- tránh lẫn dữ liệu giả lập với dữ liệu SDK thật.
create table if not exists ad_events (
  id bigint generated always as identity primary key,
  date_key text not null,
  event_type text not null,
  stage text,
  hint_context text,
  recovery_code text,
  created_at timestamptz not null default now()
);

do $$
begin
  alter table ad_events add constraint ad_events_event_type_check
    check (event_type in ('requested', 'completed', 'skipped'));
exception when duplicate_object then null;
end $$;
do $$
begin
  alter table ad_events add constraint ad_events_stage_check
    check (stage is null or stage in ('chapter1', 'investigation'));
exception when duplicate_object then null;
end $$;

-- RLS: cho phép INSERT public (ghi sự kiện), nhưng KHÔNG có SELECT public —
-- dữ liệu này nhạy hơn analytics_stage_events_daily vì có thể liên kết
-- recovery_code với hành vi xem quảng cáo của một save cụ thể.
alter table ad_events enable row level security;
drop policy if exists "ad_events: đọc" on ad_events;

create or replace function log_ad_event(
  p_date_key text,
  p_event_type text,
  p_stage text default null,
  p_hint_context text default null,
  p_recovery_code text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_event_type not in ('requested', 'completed', 'skipped') then
    raise exception 'invalid event_type: %', p_event_type;
  end if;
  if p_stage is not null and p_stage not in ('chapter1', 'investigation') then
    raise exception 'invalid stage: %', p_stage;
  end if;

  insert into ad_events (date_key, event_type, stage, hint_context, recovery_code)
  values (p_date_key, p_event_type, p_stage, p_hint_context, p_recovery_code);
end;
$$;

grant execute on function log_ad_event(text, text, text, text, text) to anon, authenticated;
