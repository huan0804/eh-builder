// Trạng thái game tập trung — học từ Monogatari (`storage` + `state` + `history`)
// và SugarCube (`State.variables` + moment history + autosave có version).
//
// Nguyên tắc:
// 1. MỌI thứ cần lưu nằm trong MỘT object thuần JSON (không hàm, không Set/Map, không class).
// 2. Chỉ đổi state qua reducer (sự kiện có tên) → dễ lưu, dễ debug, dễ viết test.
// 3. State tạm của giao diện (ô đang chọn, thông báo, modal) KHÔNG nằm ở đây.
// 4. Save có `version`. Đổi cấu trúc state → tăng SAVE_VERSION và viết migration,
//    đừng để save cũ làm crash game của người chơi.

export const STAGES = ['prologue', 'chapter1', 'investigation', 'thinkingBoard', 'epilogue'];

// Autosave riêng theo từng case (case1/case2/case3...) — mỗi phần lưu tiến độ độc lập,
// người chơi có thể quay lại chơi/replay một phần cũ mà không mất tiến độ phần khác.
export function saveKeyFor(caseId) {
  return `eh-builder:${caseId}:autosave`;
}
export const SAVE_VERSION = 1;

// Khởi tạo state cho một case cụ thể — interviewHistory bắt đầu ở node "intro" cho mỗi
// suspect của case đó (đọc từ `suspectOrder`, không hardcode tên nghi phạm), eliminated bắt
// đầu false cho mỗi giả thuyết loại được (đọc từ `hypotheses`, không hardcode 'A'/'B').
export function createInitialState(caseData) {
  const interviewHistory = {};
  for (const suspectId of caseData.suspectOrder) {
    interviewHistory[suspectId] = ['intro'];
  }
  const eliminated = {};
  for (const hyp of Object.values(caseData.hypotheses)) {
    if (!hyp.isCulprit) eliminated[hyp.id] = false;
  }
  return {
    stage: 'prologue',
    collectedIds: [],
    interviewHistory,
    unlockedSteps: [],
    eliminated,
  };
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'NEXT_STAGE': {
      const idx = STAGES.indexOf(state.stage);
      return { ...state, stage: STAGES[idx + 1] ?? STAGES[STAGES.length - 1] };
    }
    case 'COLLECT':
      return state.collectedIds.includes(action.id)
        ? state
        : { ...state, collectedIds: [...state.collectedIds, action.id] };
    case 'ADVANCE_NODE': {
      const history = state.interviewHistory[action.suspectId];
      if (history.includes(action.nodeId)) return state;
      return {
        ...state,
        interviewHistory: { ...state.interviewHistory, [action.suspectId]: [...history, action.nodeId] },
      };
    }
    case 'UNLOCK_STEP':
      return state.unlockedSteps.includes(action.id)
        ? state
        : { ...state, unlockedSteps: [...state.unlockedSteps, action.id] };
    case 'ELIMINATE':
      return { ...state, eliminated: { ...state.eliminated, [action.hypId]: true } };
    case 'LOAD':
      return action.state;
    case 'RESTART':
      return createInitialState(action.caseData);
    default:
      return state;
  }
}

// Migration: mỗi hàm nâng save từ version N lên N+1. Hiện chưa có (mới version 1).
const MIGRATIONS = {
  // 1: (state) => ({ ...state, newField: defaultValue }),
};

function migrate(save) {
  let { version, state } = save;
  while (version < SAVE_VERSION) {
    const step = MIGRATIONS[version];
    if (!step) return null; // không nâng cấp được → bỏ save, không crash
    state = step(state);
    version += 1;
  }
  return version === SAVE_VERSION ? state : null;
}

// Kiểm tra save có đúng hình dạng không trước khi dùng (localStorage có thể bị sửa tay/hỏng).
// Export để cloudSave.js tái dùng khi validate save tải về từ Supabase — không viết lại logic.
// Tổng quát theo mọi case: không hardcode tên suspect, chỉ kiểm tra hình dạng chung
// (interviewHistory là object có mọi giá trị là array id node).
export function isValidState(s) {
  return (
    s &&
    STAGES.includes(s.stage) &&
    Array.isArray(s.collectedIds) &&
    s.interviewHistory &&
    typeof s.interviewHistory === 'object' &&
    Object.values(s.interviewHistory).every((h) => Array.isArray(h)) &&
    Array.isArray(s.unlockedSteps) &&
    s.eliminated &&
    typeof s.eliminated === 'object'
  );
}

export function loadAutosave(caseId) {
  try {
    const raw = localStorage.getItem(saveKeyFor(caseId));
    if (!raw) return null;
    const state = migrate(JSON.parse(raw));
    return isValidState(state) ? state : null;
  } catch {
    return null;
  }
}

export function writeAutosave(caseId, state) {
  try {
    if (state.stage === 'prologue') return; // chưa bắt đầu thì không ghi đè save cũ
    localStorage.setItem(
      saveKeyFor(caseId),
      JSON.stringify({ version: SAVE_VERSION, savedAt: Date.now(), state })
    );
  } catch {
    // Trình duyệt chặn storage (ẩn danh, iframe của cổng game...) → game vẫn chơi được, chỉ không lưu
  }
}

export function clearAutosave(caseId) {
  try {
    localStorage.removeItem(saveKeyFor(caseId));
  } catch {
    /* bỏ qua */
  }
}

// Cờ "đã xem cảnh mở đầu season" (ColdOpen) — tách riêng khỏi save chính vì đây là một lựa chọn
// hiển thị (settings), không phải tiến trình vụ án: lưu ngay cả khi người chơi chưa "Bắt đầu điều
// tra" chính thức (Prologue chưa ghi save), và giữ nguyên qua mọi lần chơi lại (RESTART).
const COLD_OPEN_KEY = 'eh-builder:season:coldOpenSeen';

export function hasSeenColdOpen() {
  try {
    return localStorage.getItem(COLD_OPEN_KEY) === '1';
  } catch {
    return false; // storage bị chặn → luôn xem đầy đủ, không sao (chỉ mất khả năng "Bỏ qua")
  }
}

export function markColdOpenSeen() {
  try {
    localStorage.setItem(COLD_OPEN_KEY, '1');
  } catch {
    /* bỏ qua — game vẫn chơi được, chỉ không nhớ để hiện nút Bỏ qua lần sau */
  }
}

// Mã khôi phục cross-device (Supabase) — key riêng, KHÔNG nằm trong object state
// của reducer (state phải giữ nguyên "MỘT object thuần JSON" khớp isValidState,
// xem cloudSave.js). Giữ nguyên qua RESTART giống COLD_OPEN_KEY: mã khôi phục là
// danh tính đồng bộ của người chơi trên thiết bị này, không phải tiến trình vụ án.
const RECOVERY_CODE_KEY = 'eh-builder:season:recoveryCode';

export function getStoredRecoveryCode() {
  try {
    return localStorage.getItem(RECOVERY_CODE_KEY);
  } catch {
    return null;
  }
}

export function storeRecoveryCode(code) {
  try {
    localStorage.setItem(RECOVERY_CODE_KEY, code);
  } catch {
    /* bỏ qua — mã vẫn hiện trên màn hình để người chơi tự ghi lại tay */
  }
}
