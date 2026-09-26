// Dữ liệu Vụ án Phần 3: "Bản Gốc" (kết season)
// Nguồn: docs/phan-3-script.md — mọi thay đổi nội dung nên đồng bộ ngược lại file đó.
// Cùng schema chung với case1.js/case2.js (xem docs/engine-lessons.md).
//
// Khác biệt so với Phần 1-2: chỉ 2 nghi phạm (Kiên / chị Thư) — không có "3 giả thuyết",
// chỉ 1 giả thuyết loại được (Kiên) + chị Thư là culprit. Không có ColdOpen (xem meta.hasColdOpen).

export const meta = {
  id: 'case3',
  partLabel: 'Phần 3',
  title: 'Bản Gốc',
  investigationChapterTitle: 'Chương 2-3 — Hai chiếc chìa khóa & Một byte không nói dối',
  thinkingBoardChapterTitle: 'Chương 4 — Kết luận & Khép season',
  hasColdOpen: false, // Phần 3 không mở bằng khuôn "...thì an toàn" — xem phan-3-script.md mục 1b
};

export const characters = {
  lam: { name: 'Lam', role: 'Nhân vật chính (bạn)' },
  coHanh: { name: 'Cô Hạnh', role: 'GVCN kiêm chủ nhiệm CLB Ống Kính' },
  kien: { name: 'Kiên', role: 'Phó ban dựng CLB Ống Kính' },
  thu: { name: 'Chị Thư', role: 'Trưởng ban dựng CLB Ống Kính' },
  bao: { name: 'Bảo', role: 'Nhân vật cũ — xác nhận danh sách khách mua đề' },
};

export const prologue = {
  briefing: 'Phần 3 — Một tuần sau khi Phần 2 kết thúc',
  innerThought:
    'Lam (nội tâm): "Tối Chủ nhật, Bảo cho tớ xem lại nhật ký hoạt động trang. TL.admin2024 — hoạt động lần cuối đúng tối thứ Tư tuần trước, đúng giờ Phong nhận tin nhắn giả. Tớ không nói ai. Nhưng chiều thứ Ba, tớ lục hộp thiết bị cũ, tìm ra thẻ nhớ \'HT 26-3 — gốc\', cất tạm vào ngăn bàn ở phòng CLB, định tối nay mới có máy dựng rảnh để xem lại. Nếu đúng là mình nhớ, đoạn bị cắt có anh Minh."',
  lines: [
    {
      speaker: 'Lam (nội tâm)',
      text: '"Sáng nay tớ định cắm thẻ nhớ vào máy dựng, nhưng khay đựng không đúng thẻ."',
    },
    {
      speaker: 'Lam (nội tâm)',
      text: '"Cùng vỏ, cùng nhãn viết tay của tớ. Nhưng dung lượng đã dùng: 0 byte. Đây không phải thẻ của tớ."',
    },
    {
      speaker: 'Lam (nội tâm)',
      text: '"Máy quay không nói dối. Nhưng có ai vừa nói dối máy quay của tớ."',
    },
  ],
};

export const chatLog = null; // Phần 3 không có chat-log buổi học nhóm

export const evidenceList = {
  blankMemoryCard: {
    id: 'blankMemoryCard',
    name: 'Thẻ nhớ trống (tráo vào ngăn bàn)',
    description:
      'Cắm vào máy dựng — máy báo "Thẻ trống, chưa từng ghi dữ liệu" (không phải thẻ bị xóa, mà là thẻ MỚI). Cùng lô với thẻ CLB hay mua dự phòng — kẻ tráo lấy từ chính kho thiết bị CLB.',
  },
  clubDoorAccessLog: {
    id: 'clubDoorAccessLog',
    name: 'Log quẹt thẻ cửa phòng CLB (thứ Ba)',
    description:
      'Lam 15:50 vào / 16:10 ra. Kiên 14:00 vào / 16:10 ra. Chị Thư 16:32 vào / 16:40 ra. Không còn ai khác trong khung 15:50–17:00.',
  },
  afterHoursLogbook: {
    id: 'afterHoursLogbook',
    name: 'Sổ mượn phòng ngoài giờ (bác bảo vệ)',
    description: 'Chị Thư ghi: "16:30 — kiểm kho thiết bị CLB."',
  },
  basketballSchedule: {
    id: 'basketballSchedule',
    name: 'Lịch tập đội bóng rổ (xác nhận huấn luyện viên)',
    description:
      'Điểm danh Kiên có mặt tại sân 16:15–17:30, không rời sân trong buổi — huấn luyện viên (người ngoài CLB Ống Kính) xác nhận Kiên không xin ra ngoài lần nào.',
  },
  clubBulletinBoard: {
    id: 'clubBulletinBoard',
    name: 'Bảng phân công CLB dán tường',
    description:
      'Lịch kiểm kê thiết bị định kỳ ghi rõ là thứ Sáu hàng tuần — không phải thứ Ba. Sổ mượn phòng ngoài giờ của chị Thư ghi sai lịch quy định.',
  },
  equipmentSystemLog: {
    id: 'equipmentSystemLog',
    name: 'Nhật ký hệ thống kho thiết bị số (bảng tính chia sẻ)',
    description:
      'Dòng cuối: "16:33 — chỉnh sửa bởi tài khoản Đặng Thư — số lượng thẻ nhớ trống: 11 → 10." Trước đó không có dòng nào của Kiên trong ngày thứ Ba.',
  },
  hallwaySecurityFootage: {
    id: 'hallwaySecurityFootage',
    name: 'Video an ninh hành lang tầng có phòng CLB',
    description:
      '16:32 chị Thư đi vào phòng CLB, tay không. 16:40 chị Thư đi ra, túi xách phồng hơn lúc vào.',
  },
  buyerListNote: {
    id: 'buyerListNote',
    name: 'Danh sách khách mua đề (rơi ra từ sổ chị Thư)',
    description:
      'Tờ giấy ghi tắt tên viết tay, tìm thấy tình cờ khi khám phòng CLB: "P.", "H.", kèm số tiền — chưa rõ ý nghĩa đầy đủ cho tới khi hỏi Bảo.',
  },
  clubDutyRosterCrossRef: {
    id: 'clubDutyRosterCrossRef',
    name: 'Lịch trực CLB tối thứ Tư (đối chiếu với Bảo)',
    description:
      'Tối thứ Tư là ca chị Thư ở lại muộn dựng phim một mình, có wifi trường — đúng giờ TL.admin2024 hoạt động lần cuối (thứ Tư 19:12, từ nhật ký Phần 2).',
  },
};

export const chapter1 = {
  title: 'Chương 1 — "Ngăn bàn trống"',
  briefing:
    'Xác định khi nào và bằng cách nào thẻ nhớ bị tráo — làm quen lại cơ chế đối chiếu log ra vào.',
  nextChapterLabel: 'Tiếp tục sang Chương 2 →',
  steps: [
    {
      type: 'search',
      innerThoughtBefore:
        'Lam (nội tâm): "Thẻ này là hàng cùng lô CLB hay mua dự phòng. Ai tráo cũng phải lấy từ kho thiết bị CLB, không mang từ ngoài vào."',
      actionLabel: '💾 Đối chiếu log ra vào phòng CLB & sổ mượn phòng ngoài giờ',
      hintText: 'Ai có mặt ở phòng CLB đúng khung giờ thẻ nhớ bị tráo? Xem log quẹt thẻ và sổ mượn phòng ngoài giờ.',
      stuckThresholdMs: 15000,
      evidenceIds: ['blankMemoryCard', 'clubDoorAccessLog', 'afterHoursLogbook'],
      reveal: {
        heading: '💾 Thẻ nhớ trống & log ra vào',
        paragraphs: [
          'Máy dựng báo thẻ nhớ trong ngăn bàn là thẻ MỚI, chưa từng ghi dữ liệu — không phải thẻ cũ của Lam bị xóa.',
          'Log quẹt thẻ cửa phòng CLB ngày thứ Ba: Lam 15:50–16:10, Kiên 14:00–16:10, chị Thư 16:32–16:40. Không còn ai khác trong khung giờ liên quan.',
          'Sổ mượn phòng ngoài giờ (khi phòng đã hết giờ sinh hoạt CLB): chị Thư ghi "16:30 — kiểm kho thiết bị CLB".',
        ],
        deductionHint:
          '🤔 Kiên rời phòng lúc 16:10 — trước giờ chị Thư ghi trong sổ (16:30). Nhưng "kiểm kho thiết bị" nghe hợp lý — cần đối chiếu thêm.',
        nextLabel: 'Soi bảng phân công CLB →',
      },
    },
    {
      type: 'search',
      innerThoughtBefore:
        'Lam (nội tâm): "Bảng phân công dán tường ghi ai phụ trách gì tuần này. Chị Thư phụ trách kiểm kê thiết bị — nhưng theo lịch nào?"',
      actionLabel: '📌 Soi bảng phân công CLB dán tường',
      hintText: 'Lịch kiểm kê thiết bị định kỳ của CLB là ngày nào trong tuần?',
      stuckThresholdMs: 15000,
      evidenceIds: ['clubBulletinBoard'],
      reveal: {
        heading: '📌 Bảng phân công CLB',
        paragraphs: [
          'Lịch kiểm kê thiết bị định kỳ ghi rõ: thứ Sáu hàng tuần — không phải thứ Ba.',
          'Sổ mượn phòng ngoài giờ của chị Thư ghi lý do "kiểm kho thiết bị CLB" nhưng lại vào đúng thứ Ba, sai lịch quy định. Chi tiết nhỏ, chưa đủ để kết luận, nhưng đáng chú ý.',
        ],
        deductionHint:
          '🤔 Hai giả thuyết mở: Kiên và chị Thư. Ai có cơ hội thực hiện hành động tráo thẻ đúng lúc?',
      },
    },
  ],
};

export const chapter1Evidence = ['blankMemoryCard', 'clubDoorAccessLog', 'afterHoursLogbook', 'clubBulletinBoard'];

export const investigationSteps = [
  { id: 'basketballSchedule', label: '🏀 Xin xác nhận lịch tập đội bóng rổ từ huấn luyện viên' },
  {
    id: 'equipmentSystemLog',
    label: '🗂️ Xem nhật ký hệ thống kho thiết bị số',
    lockedLabel: '🔒 (Hỏi cô phụ trách CLB về hệ thống kho thiết bị trước)',
  },
  { id: 'hallwaySecurityFootage', label: '🎥 Xin xem video an ninh hành lang chiều thứ Ba' },
  { id: 'buyerListNote', label: '📄 Nhặt lại tờ giấy danh sách rơi ra ở phòng CLB' },
  { id: 'clubDutyRosterCrossRef', label: '📆 Đối chiếu lịch trực CLB tối thứ Tư (hỏi Bảo)' },
];

export const suspectOrder = ['kien', 'thu'];

export const wrongEvidenceReply = {
  kien: 'Tao không hiểu mày đang hỏi cái gì.',
  thu: 'Chị không hiểu em muốn nói gì.',
};

// Chỉ 1 giả thuyết loại được (Kiên) + chị Thư là culprit — khác Phần 1-2 (3 nghi phạm).
// Đúng nguyên tắc tối thiểu 2 hướng song song (Kiên / chị Thư), không cần nghi phạm thứ 3
// khi bối cảnh (log ra vào phòng CLB) đã tự nhiên thu hẹp về 2 người — xem phan-3-script.md mục 8.
export const hypotheses = {
  A: {
    id: 'A',
    suspect: 'kien',
    label: 'Kiên tráo thẻ vì ghen tị vị trí trưởng ban',
    requiredToEliminate: ['basketballSchedule', 'equipmentSystemLog'],
    allowedExtra: ['clubDoorAccessLog'],
    eliminationText:
      'Huấn luyện viên (người ngoài CLB, không có động cơ bênh Kiên) xác nhận Kiên có mặt liên tục ở sân bóng rổ 16:15–17:30, không rời sân. Nhật ký hệ thống kho thiết bị không ghi nhận Kiên chạm vào kho trong ngày đó.',
  },
  B: {
    id: 'B',
    suspect: 'thu',
    label: 'Chị Thư tráo thẻ vì sợ đoạn phim lần ra vụ Minh năm ngoái',
    isCulprit: true,
    requiredToEliminate: [],
    allowedExtra: [],
  },
};

export const confrontation = {
  required: ['equipmentSystemLog', 'hallwaySecurityFootage', 'buyerListNote'],
  allowedExtra: ['clubBulletinBoard', 'blankMemoryCard', 'clubDoorAccessLog', 'clubDutyRosterCrossRef'],
};

export function isValidEvidenceSet(selectedIds, required, allowedExtra = []) {
  const hasAll = required.every((id) => selectedIds.includes(id));
  const noIrrelevant = selectedIds.every((id) => required.includes(id) || allowedExtra.includes(id));
  return hasAll && noIrrelevant;
}

export const interviews = {
  kien: {
    suspectId: 'kien',
    nodes: [
      {
        id: 'intro',
        prompt: 'Kiên, đầu năm nghe nói cậu với chị Thư đều ứng cử trưởng ban dựng?',
        reply: 'Ừ, tao thua sát nút thôi. Nhưng chuyện đó qua lâu rồi, giờ tao với chị Thư vẫn làm việc chung bình thường mà.',
        requiresEvidence: null,
        unlocksNext: 'accessLogConfront',
      },
      {
        id: 'accessLogConfront',
        prompt: 'Log quẹt thẻ cửa phòng CLB ghi cậu ở phòng CLB 14:00 đến 16:10, đúng khung giờ thẻ nhớ của tớ bị tráo.',
        reply:
          'Tao ở đó thật, nhưng tao ra lúc 4 giờ 10, đi tập bóng rổ. Đội tao xác nhận được — bọn tao tập 4 rưỡi tới 5 rưỡi rưỡi.',
        requiresEvidence: 'clubDoorAccessLog',
        unlocksNext: 'afterHoursConfront',
        unlocksEvidenceStep: 'basketballSchedule',
      },
      {
        id: 'afterHoursConfront',
        prompt: 'Sổ mượn phòng ngoài giờ ghi lúc 16:30 có người vào phòng CLB kiểm kho — không phải cậu?',
        reply:
          '16:30 tao đang ở sân sau rồi, mày hỏi huấn luyện viên cũng được. À mà... tao thấy hơi lạ, hôm đó chị Thư dặn tao "nếu ai hỏi thì bảo hôm nay chị bận không ghé phòng CLB" — lúc đó tao tưởng chị ngại vì chưa làm xong việc gì đó, không nghĩ nhiều.',
        requiresEvidence: 'afterHoursLogbook',
        unlocksNext: null,
      },
    ],
  },
  thu: {
    suspectId: 'thu',
    nodes: [
      {
        id: 'intro',
        prompt: 'Chị Thư, sổ mượn phòng ghi chị vào phòng CLB lúc 4 rưỡi hôm thứ Ba để kiểm kho thiết bị?',
        reply: 'Ừ, tranh thủ giờ trống tiết. Kho mình hơi lộn xộn, chị hay tự giác dọn khi rảnh.',
        requiresEvidence: null,
        unlocksNext: 'scheduleConfront',
      },
      {
        id: 'scheduleConfront',
        prompt: 'Lịch kiểm kê thiết bị ghi là thứ Sáu hàng tuần mà chị?',
        reply: 'À, chị làm sớm hơn lịch thôi, có gì đâu. Tuần này chị bận thứ Sáu.',
        requiresEvidence: 'clubBulletinBoard',
        unlocksNext: 'cardConfront',
      },
      {
        id: 'cardConfront',
        prompt: 'Ngăn bàn em để một thẻ nhớ ghi "HT 26-3 — gốc". Hôm qua em cắm vào thì nó trống trơn, dung lượng 0 — như thẻ mới lấy từ kho CLB mình vậy.',
        reply:
          'Kho có cả chục thẻ giống vậy, em nghĩ ai cũng dễ lấy nhầm à? Mà đồ của em để ngăn bàn chung không khóa, em cũng nên cẩn thận hơn chứ.',
        requiresEvidence: 'blankMemoryCard',
        unlocksNext: null,
        unlocksEvidenceStep: 'equipmentSystemLog',
      },
      {
        id: 'confronted',
        prompt:
          '(Không phải cô Hạnh, không phải người lớn nào cả. Lần này là một người tớ vẫn chào mỗi ngày. Nếu tớ lại im lặng lần này...) Chị Thư... hôm thứ Ba, chị vào phòng CLB kiểm kho — nhưng hệ thống kho ghi giờ chị chỉnh sửa là 16:33, đúng lúc túi xách chị phồng lên khi ra khỏi phòng, theo camera hành lang. Thẻ nhớ "HT 26-3 — gốc" của em không tự biến thành thẻ trống được. Và tờ danh sách này... rơi ra từ sổ của chị.',
        reply:
          'Em định làm gì với cái thẻ đó? ...Năm ngoái chị bảo em cắt đoạn đó vì chị sợ. Không phải sợ cho em — sợ cho chị. Bố chị nằm viện từ đầu năm nay, tiền vay ngân hàng không đủ, chị vay qua app, lãi mỗi tháng chị không dám nói với ai... Chị bắt đầu chụp đề từ phòng thầy cô, bán được ít tiền, chỉ định làm tạm vài tháng. Rồi có một cậu năm ngoái — Minh — gửi vào hộp thư ẩn danh, tố đúng chuyện đó, nêu cả tên một khách mua. Chị vẫn còn quyền admin cũ từ hồi giúp dựng trang, chị đọc được trước ai hết. Chị sợ quá, tự trả lời cho qua chuyện, rồi nhắn thẳng cho Minh "im lặng thì an toàn". Cái đoạn phim của em có Minh đứng cạnh em gái cậu ấy — chị sợ ai đó tò mò lần ra Minh, rồi lần ra vì sao cậu ấy chuyển trường. Còn thẻ nhớ của em... chị chưa xóa nó. Chị định xóa, rồi lại không làm được. Có lẽ chị cũng không biết chị đang chờ cái gì. Chị tưởng nếu chị im lặng đủ lâu, đủ kỹ, mọi chuyện sẽ tự qua. Không phải vậy.',
        requiresEvidence: null,
        unlocksNext: null,
        isFinalConfession: true,
      },
    ],
  },
};

export const investigationHints = {
  stuckThresholdMs: 25000,
  rules: [
    {
      when: (ctx) => !ctx.eliminated.A,
      text: 'Kiên nói mình đi tập bóng rổ lúc 4 giờ 10. Có ai xác nhận được ngoài lời Kiên không? Hệ thống kho thiết bị có ghi nhận Kiên chạm vào kho ngày đó không?',
    },
    {
      when: (ctx) => !ctx.collectedIds.includes('hallwaySecurityFootage'),
      text: 'Chị Thư ra khỏi phòng CLB lúc 16:40 — có gì khác so với lúc chị vào? Xin xem video an ninh hành lang.',
    },
    {
      when: () => true,
      text: 'Ai vừa chỉnh sửa hệ thống kho thiết bị đúng lúc, vừa có dấu hiệu mang thêm đồ ra? Đối chất bằng nhật ký hệ thống kho + video an ninh + danh sách khách mua đề.',
    },
  ],
};

export const thinkingBoardSolution = {
  slots: [
    {
      id: 'who',
      label: 'Ai tráo thẻ nhớ của Lam',
      correctAnswer: 'thu',
      options: ['kien', 'thu'],
    },
    {
      id: 'why',
      label: 'Vì sao thẻ nhớ bị tráo',
      correctAnswer: 'doanPhimLanRaVuMinh',
      options: ['doanPhimLanRaVuMinh', 'theNhoCoGiaTri', 'ghenTiVoiLam'],
    },
    {
      id: 'tlAdmin',
      label: 'Ai đứng sau tài khoản TL.admin2024',
      correctAnswer: 'thu',
      options: ['thu', 'thayVu', 'danhAnhTotNghiep'],
    },
    {
      id: 'motive',
      label: 'Động cơ của chị Thư',
      correctAnswer: 'apLucTraNo',
      options: ['apLucTraNo', 'muonNoiTieng', 'ghetTruongHoc'],
    },
  ],
  labels: {
    kien: 'Kiên',
    thu: 'Chị Thư',
    doanPhimLanRaVuMinh: 'Vì đoạn phim có thể lần ra vụ Minh năm ngoái',
    theNhoCoGiaTri: 'Vì thẻ nhớ có giá trị',
    ghenTiVoiLam: 'Vì ghen tị với Lam',
    thayVu: 'Thầy Vũ',
    danhAnhTotNghiep: 'Một đàn anh đã tốt nghiệp',
    apLucTraNo: 'Áp lực trả nợ do gia đình gặp biến cố',
    muonNoiTieng: 'Muốn nổi tiếng',
    ghetTruongHoc: 'Ghét trường học',
  },
  conclusionText:
    'Chị Thư — trưởng ban dựng CLB Ống Kính — giữ quyền quản trị cũ TL.admin2024 từ năm ngoái. Áp lực trả nợ vay chữa bệnh cho bố khiến chị bán đề kiểm tra lấy từ phòng giáo viên. Khi anh Minh tố giác qua hộp thư ẩn danh, chị dùng quyền admin đọc trước, dọa anh im lặng, rồi bảo Lam cắt đoạn phim có thể lần ra manh mối. Khi Vy và sau đó Phong chạm gần tới sự thật, chị tiếp tục gửi những lời cảnh báo để giữ mọi thứ im lặng. Khi Lam định xem lại đoạn phim gốc, chị tráo mất thẻ nhớ.',
};

export const epilogue = {
  text: `Sau đối chất, Lam không giao ngay chị Thư cho ai — mà về nhà, cắm thẻ nhớ gốc vào máy, xem lại đoạn từng cắt.

Lam (nội tâm): "Chỉ vài giây. Anh Minh cười, đứng cạnh Ngân, giơ tay chào ống kính. Không có gì đáng cắt trong đoạn này cả — trừ việc nó chứng minh một người từng ở đây, từng vui, trước khi phải im lặng bỏ đi."

Lam gọi Cô Hạnh — lần đầu tiên trong cả season, Lam là người chủ động gọi trước, không đợi được nhờ.

Lam: "Cô ơi... con có chuyện cần kể từ đầu. Không phải chuyện của bạn nào khác nữa. Lần này con tự thấy, tự lần ra."

Cô Hạnh im lặng một lúc lâu qua điện thoại: "...Năm ngoái cô từng thấy Thư tiêu một khoản tiền lạ, cô hỏi thẳng, con bé nói là học bổng ngoài. Cô nghi, nhưng không có gì trong tay, lại sợ ảnh hưởng hồ sơ của một đứa học giỏi nhất khối... Cô đã chọn im lặng, Lam ạ. Cô tưởng im lặng của cô là bảo vệ. Hóa ra cô chỉ đang đợi có người khác lên tiếng thay mình."

Lam (nội tâm): "Anh Minh từng lên tiếng rồi phải im lặng. Vy im lặng để tự nghĩ. Phong im lặng vì sợ mất tất cả. Chị Thư im lặng suốt một năm. Cô Hạnh cũng từng im lặng. Còn tớ — tớ quay lại mọi thứ, nhưng lần này tớ không đứng sau máy quay nữa."

Cảnh cuối: một khung hình điện thoại — nhưng lần này KHÔNG che tên người nhận, KHÔNG làm mờ chữ. Lam gõ một tin nhắn gửi cả nhóm chat lớp — công khai, không ẩn danh — kể lại toàn bộ, kết thúc bằng dòng chữ lấy nét rõ:

"Tớ từng nghĩ im lặng thì an toàn. Nhưng an toàn cho ai?"`,
  nextPartHint: null, // Kết season — chưa chốt có Phần 4 hay không.
};
