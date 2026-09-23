// Kết nối Supabase — tách riêng để mọi nơi khác chỉ import 1 client dùng chung.
// Nguyên tắc fallback graceful (học từ Ne Sep): nếu thiếu biến môi trường,
// export null thay vì throw — game vẫn phải chạy được ở chế độ local-only.
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Ngày theo giờ Việt Nam (UTC+7) cố định, tính ở client — không tin server
// timestamp (tránh lệch múi giờ nếu server Postgres không chạy ở UTC+7).
// Port từ Ne Sep (vnDateKeyPadded), dùng offset cố định thay vì Intl timezone
// vì UTC+7 không có DST, không cần thư viện timezone đầy đủ.
export function vnDateKeyPadded(date = new Date()) {
  const vnMs = date.getTime() + 7 * 60 * 60 * 1000;
  const vn = new Date(vnMs);
  const y = vn.getUTCFullYear();
  const m = String(vn.getUTCMonth() + 1).padStart(2, '0');
  const d = String(vn.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
