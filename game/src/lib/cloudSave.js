// Đồng bộ save game lên Supabase qua mã khôi phục ngắn — tách khỏi gameState.js
// (reducer/autosave cục bộ) để giữ ranh giới trách nhiệm rõ ràng: file này chỉ
// lo phần mạng, không đụng vào shape của state game.
import { supabase } from './supabaseClient';
import { SAVE_VERSION, isValidState, getStoredRecoveryCode, storeRecoveryCode } from '../state/gameState';

// Bảng chữ cái loại ký tự dễ nhầm khi chép tay: không 0/O, không 1/I/L.
const RECOVERY_CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const RECOVERY_CODE_LENGTH = 7;

function randomCode() {
  const bytes = new Uint8Array(RECOVERY_CODE_LENGTH);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => RECOVERY_CODE_ALPHABET[b % RECOVERY_CODE_ALPHABET.length]).join('');
}

// Sinh mã mới, kiểm tra trùng bằng cách thử tải về (xác suất trùng rất thấp với
// 7 ký tự trên bảng 32 ký tự, nhưng kiểm tra không tốn kém nên vẫn làm).
async function generateUniqueRecoveryCode() {
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = randomCode();
    const existing = await pullSaveFromCloud(code);
    if (!existing) return code;
  }
  // 5 lần trùng liên tiếp gần như không thể xảy ra — vẫn trả mã cuối để không kẹt luồng,
  // upsert ở save_game_progress sẽ ghi đè đúng dòng đó nếu thật sự trùng.
  return randomCode();
}

// Đẩy state hiện tại lên cloud. Nếu chưa có mã, tự sinh mã mới và lưu cục bộ.
// Trả về mã đã dùng, hoặc null nếu lỗi mạng/không có Supabase (không throw).
export async function pushSaveToCloud(state) {
  if (!supabase) return null;
  try {
    let code = getStoredRecoveryCode();
    if (!code) {
      code = await generateUniqueRecoveryCode();
      storeRecoveryCode(code);
    }
    const { error } = await supabase.rpc('save_game_progress', {
      p_code: code,
      p_state: state,
      p_save_version: SAVE_VERSION,
      p_case_id: 'case1',
    });
    if (error) return null;
    return code;
  } catch {
    return null;
  }
}

// Tải save theo mã. Trả về state hợp lệ, hoặc null nếu mã không tồn tại, lỗi
// mạng, hoặc dữ liệu tải về không đúng hình dạng (isValidState — tái dùng
// đúng validate của save cục bộ, không viết lại logic).
export async function pullSaveFromCloud(code) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.rpc('load_game_progress', { p_code: code });
    if (error || !data || data.length === 0) return null;
    const { state } = data[0];
    return isValidState(state) ? state : null;
  } catch {
    return null;
  }
}
