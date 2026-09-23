// Analytics ẩn danh qua Supabase — tách khỏi cloudSave.js vì đây là mối quan tâm
// khác (thống kê tổng hợp, không gắn với 1 người chơi cụ thể).
import { supabase, vnDateKeyPadded } from './supabaseClient';

// Gọi khi người chơi vào 1 stage (STAGES trong gameState.js). Lỗi bị bỏ qua âm
// thầm — analytics không bao giờ được ảnh hưởng tới trải nghiệm chơi game.
export async function logStageEnter(stage) {
  if (!supabase) return;
  try {
    await supabase.rpc('increment_stage_event', {
      p_date_key: vnDateKeyPadded(),
      p_stage: stage,
      p_event_type: 'enter',
    });
  } catch {
    /* bỏ qua — xem supabaseClient.js và ghi chú fallback graceful */
  }
}

// Chuẩn bị sẵn cho khi tích hợp SDK rewarded-ads thật (CrazyGames/Poki).
// CHƯA được gọi từ RewardedAdModal.jsx trong đợt này — modal hiện là giả lập
// hoàn toàn, gọi log ở đây bây giờ sẽ lẫn dữ liệu giả với dữ liệu SDK thật sau.
export async function logAdEvent(eventType, { stage, hintContext, recoveryCode } = {}) {
  if (!supabase) return;
  try {
    await supabase.rpc('log_ad_event', {
      p_date_key: vnDateKeyPadded(),
      p_event_type: eventType,
      p_stage: stage ?? null,
      p_hint_context: hintContext ?? null,
      p_recovery_code: recoveryCode ?? null,
    });
  } catch {
    /* bỏ qua */
  }
}
