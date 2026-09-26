// Dữ liệu Vụ án Phần 2: "Hộp Thư Ẩn Danh"
// Nguồn: docs/phan-2-script.md — mọi thay đổi nội dung nên đồng bộ ngược lại file đó.
// Cùng schema chung với case1.js (xem docs/engine-lessons.md).

export const meta = {
  id: 'case2',
  partLabel: 'Phần 2',
  title: 'Hộp Thư Ẩn Danh',
  investigationChapterTitle: 'Chương 2-3 — Ba người trong thư viện & Dấu vết trên giấy',
  thinkingBoardChapterTitle: 'Chương 4 — Kết luận Phần 2',
};

export const characters = {
  lam: { name: 'Lam', role: 'Nhân vật chính (bạn)' },
  coHanh: { name: 'Cô Hạnh', role: 'GVCN kiêm chủ nhiệm CLB Ống Kính' },
  vy: { name: 'Vy', role: 'Trợ thủ — trở lại trường sau Phần 1' },
  bao: { name: 'Bảo', role: 'Người mất tích — admin trang confession' },
  tuan: { name: 'Tuấn', role: 'Đồng admin trang confession' },
  ngan: { name: 'Ngân', role: 'Em gái anh Minh' },
  phong: { name: 'Phong', role: 'Bí thư Đoàn trường' },
  minh: { name: 'Minh', role: 'Nhân vật quá khứ — mất tích năm ngoái, đã chuyển trường' },
};

// Cảnh mở đầu season (ColdOpen) — xem docs/phan-2-script.md mục 1b.
export const coldOpen = {
  timestamp: 'Thứ Tư, 19:40',
  hesitant: false, // lần này người gửi KHÔNG do dự — tương phản có chủ ý với Phần 1
  finalLine: 'Xóa đi thì an toàn.',
  chatListEntries: [
    { name: 'M.', date: 'thg 4, năm ngoái', preview: 'Im lặng thì an toàn.' },
    { name: '■■■■■', date: '2 tuần trước', preview: '■■■ ■■■ ■■■■...' },
  ],
};

export const prologue = {
  briefing: 'Phần 2 — Hai tuần sau vụ của Vy',
  innerThought:
    'Lam (nội tâm — nhắc lại Phần 1 cho người chơi mới): "Hai tuần trước, Vy biến mất sau một buổi học nhóm online, rồi được tìm thấy an toàn ở nhà dì. Vy bỏ đi vì một tin nhắn ẩn danh: \'giống vụ của anh Minh năm ngoái... Im lặng thì an toàn.\' Tớ vẫn chưa biết anh Minh là ai."',
  lines: [
    {
      speaker: 'Cô Hạnh',
      text:
        '"Lam, con biết Bảo lớp 12A4 không — bạn quản lý trang confession ấy? Bảo chưa về nhà, điện thoại không liên lạc được. Cô giáo chủ nhiệm 12A4 nhờ cô, vì chuyện của Vy lần trước. Cô đang ở trường với bác bảo vệ, con qua được không?"',
    },
    { speaker: 'Lam (nội tâm)', text: '"Trang confession... đúng cái trang Đức từng đăng ảnh giả của Vy."' },
    {
      speaker: '(nhóm chat trường)',
      text: 'Mọi người chuyền tay ảnh chụp bài đăng tối qua của Bảo: "Ai còn nhớ anh Minh 12A1 năm ngoái không?"',
    },
    { speaker: 'Lam (nội tâm)', text: '"Anh Minh. Cái tên trong tin nhắn ẩn danh gửi cho Vy."' },
  ],
};

export const chatLog = null; // Phần 2 không có chat-log buổi học nhóm như Phần 1

export const evidenceList = {
  deletedPostScreenshot: {
    id: 'deletedPostScreenshot',
    name: 'Ảnh chụp bài đăng đã xóa',
    description:
      'Bài "Ai còn nhớ anh Minh 12A1 năm ngoái không?" (21:30–21:52 thứ Năm), kèm bình luận của tài khoản Kim Ngân: "Làm ơn đừng đào lại chuyện đó nữa."',
  },
  gateLog: {
    id: 'gateLog',
    name: 'Sổ ra vào cổng (bác bảo vệ)',
    description: '"12:55 — Bảo 12A4 — đau bụng, xin về nhà." — Bảo tự xin ra, không ai đưa đi.',
  },
  infirmaryLog: {
    id: 'infirmaryLog',
    name: 'Sổ phòng y tế',
    description: 'Thứ Sáu không có tên Bảo trong sổ — Bảo nói dối lý do "đau bụng" để ra khỏi trường.',
  },
  baoPhoneNotification: {
    id: 'baoPhoneNotification',
    name: 'Điện thoại của Bảo — thông báo 16:48',
    description:
      'Trên màn hình khóa: "Hộp thư ẩn danh: 312 cuộc trò chuyện đã bị xóa" (16:48 thứ Sáu). Trong máy có tin nhắn từ tài khoản "Trần Minh" (tạo 22:02 thứ Năm, không bạn bè, không bài đăng): trích "Em không sợ, chỉ sợ im lặng", hẹn Bảo về Bến Tre "hỏi nhà ông Tư Trần".',
  },
  campVideoFrame: {
    id: 'campVideoFrame',
    name: 'Khung hình video Hội trại 26/3 năm ngoái',
    description:
      'Ảnh đại diện tài khoản giả "Trần Minh" cắt từ khung hình này. Khung hình rộng hơn cho thấy anh Minh đứng cạnh một cô bé THCS giơ bảng "Cổ vũ anh hai 12A1!" — đó là Ngân.',
  },
  searchPartyPlan: {
    id: 'searchPartyPlan',
    name: 'Bảng phân công tìm kiếm của Phong',
    description:
      'Gửi nhóm chat tối thứ Năm, khoanh vùng bến xe Miền Đông "vì Bảo hay nói muốn lên Đà Lạt" — hướng ngược với Bến Tre.',
  },
  libraryGateLog: {
    id: 'libraryGateLog',
    name: 'Log quẹt thẻ thư viện chiều thứ Sáu',
    description:
      'Tuấn 16:20, Phong 16:25, Ngân 16:28 vào thư viện. Không có Bảo — trong khi 6 thứ Sáu trước đó tuần nào Bảo cũng vào khoảng 16:00.',
  },
  securityEmailLog: {
    id: 'securityEmailLog',
    name: 'Email bảo mật trong hộp thư của Bảo',
    description:
      'Thứ Hai 20:14: "Mật khẩu trang đã được thay đổi." Thứ Năm 21:40: "Đăng nhập không thành công — sai mật khẩu — thiết bị: iPhone của Tuấn." → Tuấn không biết mật khẩu mới.',
  },
  passwordNoteLocation: {
    id: 'passwordNoteLocation',
    name: 'Tờ giấy mật khẩu (phòng CLB Tin học)',
    description:
      'Bảo dán mật khẩu mới sau màn hình phòng CLB Tin học — phòng luôn khóa, muốn vào phải mượn chìa ở phòng bảo vệ và ký sổ. Ai biết mật khẩu mới thì phải từng vào phòng này.',
  },
  pageActivityLog: {
    id: 'pageActivityLog',
    name: 'Nhật ký hoạt động của trang confession',
    description:
      '"16:48:40 thứ Sáu — Xóa 312 tin trong Hộp thư ẩn danh — thiết bị: PC-THUVIEN-03." Danh sách vai trò quản trị còn một tài khoản "TL.admin2024" (Biên tập viên), hoạt động lần cuối thứ Tư 19:12.',
  },
  keyLogbook: {
    id: 'keyLogbook',
    name: 'Sổ mượn chìa khóa (phòng bảo vệ)',
    description:
      'Phòng CLB Tin học từ thứ Hai: Bảo — thứ Hai 19:50; Phong — thứ Sáu 12:30, lý do "mượn ghế cho lễ chào cờ". Không còn ai khác mượn chìa phòng này.',
  },
  printerReceiptTuan: {
    id: 'printerReceiptTuan',
    name: 'Trang bìa bản in của Tuấn',
    description:
      'Máy in tự in: "Nhận bản in lúc 16:48:10 — Máy in tầng 1 — Thẻ: Tuấn 12A4." Nhận bản in phải quẹt thẻ ngay tại máy — 30 giây sau, hộp thư bị xóa ở tầng 2.',
  },
  libraryKioskLog: {
    id: 'libraryKioskLog',
    name: 'Lịch sử máy mượn sách tự động tầng 2',
    description: '"16:41 — Kim Ngân 10A2 — mượn 1 cuốn, kệ 800."',
  },
  ngamPresentationVideo: {
    id: 'ngamPresentationVideo',
    name: 'Video tập thuyết trình của nhóm Ngân',
    description:
      'Quay liên tục 16:45–16:52 trong phòng học nhóm tầng 1, Ngân đứng nói suốt, đồng hồ phòng hiện rõ trong khung hình.',
  },
  librarySchedule: {
    id: 'librarySchedule',
    name: 'Lịch tình nguyện thư viện (cô thủ thư)',
    description:
      '"Phong 12A3 — xếp sách kệ 500 (tầng 2) — 16:30–17:00." Sơ đồ thư viện: máy PC-THUVIEN-03 nằm ngay cạnh kệ 500.',
  },
};

export const chapter1 = {
  title: 'Chương 1 — "Người rời cổng lúc 12:55"',
  briefing:
    'Giai đoạn khẩn cấp: tìm ra Bảo đang ở đâu trước khi quá khuya. Cô Hạnh đưa Lam sổ ra vào cổng, sổ phòng y tế, và ảnh chụp bài đăng đã xóa mà cả trường đang chuyền tay.',
  nextChapterLabel: 'Tiếp tục sang Chương 2 →',
  steps: [
    {
      type: 'search',
      innerThoughtBefore:
        'Lam (nội tâm): "Sổ ra vào cổng, sổ phòng y tế, ảnh chụp bài đăng đã xóa. Bảo tự rời trường — không ai đưa cậu đi."',
      actionLabel: '📋 Đối chiếu sổ ra vào cổng, sổ y tế và bài đăng đã xóa',
      hintText: 'Bảo xin ra cổng lý do gì? Có ghé phòng y tế không? Bài đăng đã xóa có bình luận nào đáng chú ý?',
      stuckThresholdMs: 15000,
      evidenceIds: ['deletedPostScreenshot', 'gateLog', 'infirmaryLog'],
      reveal: {
        heading: '📋 Sổ ra vào cổng & sổ y tế',
        paragraphs: [
          'Sổ bảo vệ: "12:55 — Bảo 12A4 — đau bụng, xin về nhà." Nhưng sổ phòng y tế không có tên Bảo hôm thứ Sáu.',
          'Bảo nói dối lý do đau bụng để tự ra khỏi trường — không bị ai đưa đi.',
          'Dưới bài đăng đã xóa (chụp lại được), tài khoản Kim Ngân bình luận: "Làm ơn đừng đào lại chuyện đó nữa."',
        ],
        deductionHint: '🤔 Bảo tự rời trường mà không mang điện thoại thì không thể gọi được. Còn manh mối nào khác?',
        nextLabel: 'Mở tủ đồ của Bảo →',
      },
    },
    {
      type: 'codeInput',
      innerThoughtBefore:
        'Lam (nội tâm): "Tủ khóa số 4 chữ số. Trên bàn Bảo có poster CLB Tin học: \'Thành lập 15/09\'. Bảo hay đùa \'mật khẩu nào của tao cũng dính tới CLB\'."',
      prompt: 'Nhập mã 4 số để mở tủ đồ của Bảo:',
      placeholder: 'VD: 0000',
      maxLength: 4,
      correctCode: '1509',
      wrongCodeText: 'Không mở được. Thử lại — nhớ lại poster CLB Tin học trên bàn Bảo.',
      actionLabel: 'Mở tủ',
      hintText: 'Bảo hay đùa "mật khẩu nào của tao cũng dính tới CLB" — CLB Tin học thành lập ngày nào?',
      stuckThresholdMs: 20000,
      evidenceIds: ['baoPhoneNotification', 'campVideoFrame', 'searchPartyPlan'],
      reveal: {
        heading: '📱 Điện thoại của Bảo trong tủ',
        paragraphs: [
          'Màn hình khóa hiện thông báo lúc 16:48: "Hộp thư ẩn danh: 312 cuộc trò chuyện đã bị xóa." Giữa lúc đang gấp tìm người, chi tiết này dễ bị bỏ qua.',
          'Trong máy có tin nhắn từ tài khoản "Trần Minh" (tạo 22:02 thứ Năm, không bạn bè, không bài đăng), ảnh đại diện là một khung hình từ video Hội trại 26/3 năm ngoái của CLB Ống Kính. Nội dung trích "Em không sợ, chỉ sợ im lặng" và hẹn Bảo về Bến Tre, "hỏi nhà ông Tư Trần".',
          'Lam (nội tâm): "Góc máy này. Ánh nắng xiên này. Khung hình này... là tớ quay. Ai đó đã lấy video của tớ để lừa Bảo."',
          'Tua lại video Hội trại gốc: khung hình rộng hơn cho thấy anh Minh đứng cạnh một cô bé THCS giơ bảng "Cổ vũ anh hai 12A1!" — đó là Ngân.',
        ],
        deductionHint:
          '🤔 Tài khoản "Trần Minh" có vẻ giả — nhưng nếu không phải giả thì Bảo đang ở nhà Minh. Bình luận "Kim Ngân" dưới bài đăng + cô bé cầm bảng trong video... Ngân có phải em gái anh Minh?',
        nextLabel: 'Quyết định nhờ ai liên lạc →',
      },
    },
    {
      type: 'choice',
      innerThoughtBefore:
        'Lam (nội tâm): "Hồ sơ học sinh nằm trong văn phòng đã khóa, tối nay không tra được. Nhưng nếu Ngân đúng là em gái anh Minh — cô ấy có thể gọi thẳng về nhà."',
      prompt: 'Nhờ ai liên lạc để tìm Bảo ngay bây giờ?',
      hintText: 'Bình luận "Kim Ngân" dưới bài đăng đã xóa + cô bé cầm bảng "Cổ vũ anh hai" trong video Hội trại — hai chi tiết này chỉ về ai?',
      stuckThresholdMs: 20000,
      options: [
        {
          id: 'tuan',
          label: 'Gọi Tuấn — đồng admin trang',
          correct: false,
          wrongText: 'Tuấn: "Tao cũng không biết Bảo đi đâu. Mày hỏi gì lạ vậy?" — không giúp được gì, Tuấn không liên quan đến gia đình Minh.',
        },
        {
          id: 'phong',
          label: 'Gọi Phong — đang tổ chức nhóm đi tìm',
          correct: false,
          wrongText: 'Phong: "Bọn mình đang khoanh vùng bến xe Miền Đông rồi." — hướng này ngược với Bến Tre, không phải hướng đúng.',
        },
        {
          id: 'wait',
          label: 'Đợi sáng mai hỏi văn phòng nhà trường',
          correct: false,
          wrongText: 'Quá lâu — nếu Bảo thật sự đang đi xa một mình trong đêm, không thể đợi đến sáng.',
        },
        {
          id: 'ngan',
          label: 'Nhờ Ngân gọi về nhà — nghi Ngân là em gái anh Minh',
          correct: true,
          evidenceIds: [],
        },
      ],
      reveal: {
        heading: '📞 Ngân gọi về nhà',
        paragraphs: [
          'Ngân (qua điện thoại, 21:30): "...Anh Bảo đang ở nhà em thật. Anh tới lúc 7 giờ tối, hỏi anh Minh chuyện gì đó. Anh Bảo sợ quá nên xin đợi sáng mai mới báo ai. Anh Minh bảo anh ấy chưa từng nhắn tin cho ai cả."',
          'Minh (giọng qua loa ngoài): "Tài khoản đó không phải của anh. Anh bỏ mạng xã hội từ năm ngoái rồi."',
          'Kết thúc giai đoạn 1: Bảo an toàn, sáng mai sẽ về. Nhưng một câu hỏi mới lớn hơn: ai đã giả làm anh Minh để kéo Bảo đi xa — và để làm gì?',
        ],
      },
    },
  ],
};

export const chapter1Evidence = [
  'deletedPostScreenshot',
  'gateLog',
  'infirmaryLog',
  'baoPhoneNotification',
  'campVideoFrame',
  'searchPartyPlan',
];

export const investigationSteps = [
  { id: 'libraryGateLog', label: '🪪 Xem log quẹt thẻ thư viện chiều thứ Sáu' },
  { id: 'securityEmailLog', label: '📧 Xem email bảo mật trong hộp thư của Bảo' },
  { id: 'keyLogbook', label: '🔑 Xem sổ mượn chìa khóa ở phòng bảo vệ' },
  { id: 'librarySchedule', label: '📅 Hỏi cô thủ thư về lịch tình nguyện thư viện' },
  {
    id: 'passwordNoteLocation',
    label: '📝 Đối chiếu vị trí tờ giấy mật khẩu',
    lockedLabel: '🔒 (Cần hỏi Bảo chỉ chỗ tờ giấy mật khẩu trước)',
  },
  { id: 'pageActivityLog', label: '🖥️ Xem nhật ký hoạt động của trang' },
  {
    id: 'printerReceiptTuan',
    label: '🖨️ Xem trang bìa bản in của Tuấn',
    lockedLabel: '🔒 (Hỏi kỹ Tuấn về việc gọi điện cho Bảo trước)',
  },
  {
    id: 'libraryKioskLog',
    label: '📚 Xem lịch sử máy mượn sách tự động tầng 2',
    lockedLabel: '🔒 (Cần hỏi cô thủ thư về tầng 2 trước)',
  },
  {
    id: 'ngamPresentationVideo',
    label: '🎥 Xem video tập thuyết trình của nhóm Ngân',
    lockedLabel: '🔒 (Ngân phải thú nhận việc lên tầng 2 trước)',
  },
];

export const suspectOrder = ['tuan', 'ngan', 'phong'];

export const wrongEvidenceReply = {
  tuan: 'Tao không hiểu mày đang muốn nói gì.',
  ngan: 'Em không biết gì về cái đó cả.',
  phong: 'Cái đó thì liên quan gì đến mình?',
};

export const hypotheses = {
  A: {
    id: 'A',
    suspect: 'tuan',
    label: 'Tuấn xóa hộp thư để dập chuyện bài đăng',
    requiredToEliminate: ['securityEmailLog', 'printerReceiptTuan', 'pageActivityLog'],
    allowedExtra: ['libraryGateLog', 'keyLogbook'],
    eliminationText:
      'Email bảo mật cho thấy Tuấn đăng nhập sai mật khẩu lúc 21:40 — Tuấn không có mật khẩu mới. Lúc 16:48:10 (30 giây trước khi hộp thư bị xóa), Tuấn đang nhận bản in ở máy in tầng 1, không phải ở máy số 3 tầng 2.',
  },
  B: {
    id: 'B',
    suspect: 'ngan',
    label: 'Ngân xóa hộp thư để bảo vệ anh trai',
    requiredToEliminate: ['ngamPresentationVideo', 'keyLogbook', 'pageActivityLog'],
    allowedExtra: ['libraryGateLog', 'securityEmailLog', 'libraryKioskLog'],
    eliminationText:
      'Video tập thuyết trình cho thấy Ngân đứng nói liên tục ở tầng 1 từ 16:45 đến 16:52 — đúng lúc hộp thư bị xóa (16:48:40) ở tầng 2. Sổ mượn chìa khóa cũng cho thấy Ngân chưa từng vào phòng có tờ giấy mật khẩu.',
  },
  C: {
    id: 'C',
    suspect: 'phong',
    label: 'Phong dùng tài khoản giả để dụ Bảo đi xa rồi xóa hộp thư',
    isCulprit: true,
    requiredToEliminate: [],
    allowedExtra: [],
  },
};

export const confrontation = {
  required: ['pageActivityLog', 'keyLogbook', 'librarySchedule'],
  allowedExtra: ['passwordNoteLocation', 'searchPartyPlan', 'libraryGateLog'],
};

export function isValidEvidenceSet(selectedIds, required, allowedExtra = []) {
  const hasAll = required.every((id) => selectedIds.includes(id));
  const noIrrelevant = selectedIds.every((id) => required.includes(id) || allowedExtra.includes(id));
  return hasAll && noIrrelevant;
}

export const interviews = {
  tuan: {
    suspectId: 'tuan',
    nodes: [
      {
        id: 'intro',
        prompt: 'Tuấn, tối thứ Năm cậu với Bảo có cãi nhau đúng không? Vì sao?',
        reply:
          'Ừ tao gọi chửi nó tối thứ Năm đấy. Đăng mấy bài kiểu đó, trang bị báo cáo thì sao? Nhưng tao không lừa ai đi đâu hết.',
        requiresEvidence: null,
        unlocksNext: 'whyNotDeleteYourself',
      },
      {
        id: 'whyNotDeleteYourself',
        prompt: 'Cậu là đồng admin. Sao không tự vào xóa bài mà phải gọi Bảo?',
        reply: '...Chiều thứ Sáu tao ở dưới tầng 1 in đề cương cả buổi. Mày muốn tin hay không thì tùy.',
        requiresEvidence: 'deletedPostScreenshot',
        unlocksNext: null,
        unlocksEvidenceStep: 'printerReceiptTuan',
      },
    ],
  },
  ngan: {
    suspectId: 'ngan',
    nodes: [
      {
        id: 'intro',
        prompt: 'Ngân, tài khoản giả dùng ảnh anh Minh của em. Em biết gì về chuyện này không?',
        reply: 'Tài khoản giả đó dùng ảnh anh em... Ảnh đó em cũng có trong máy. Nhưng em không làm.',
        requiresEvidence: null,
        unlocksNext: 'knowsAddress',
      },
      {
        id: 'knowsAddress',
        prompt: 'Em biết nhà ông Tư Trần là nhà em. Em biết anh Minh từng gặp chuyện gì năm ngoái, đúng không?',
        reply:
          'Anh em khổ đủ rồi. Ai đào lại chuyện năm ngoái em cũng ghét. Nhưng chiều thứ Sáu em ở tầng 1 cả buổi, tập thuyết trình với nhóm, cả nhóm thấy mà.',
        requiresEvidence: 'baoPhoneNotification',
        unlocksNext: 'kioskConfront',
        unlocksEvidenceStep: 'libraryKioskLog',
      },
      {
        id: 'kioskConfront',
        prompt: 'Máy mượn sách tầng 2 ghi em mượn một cuốn lúc 16:41 — không phải em ở tầng 1 cả buổi?',
        reply:
          '...Em lên tìm anh Bảo, định xin anh ấy đừng đăng chuyện anh em nữa. Nhưng máy số 3 trống trơn, chỉ có một anh áo Đoàn đang xếp sách. Em sợ bị nghi nên mới nói dối. Rồi em xuống tập thuyết trình.',
        requiresEvidence: 'libraryKioskLog',
        unlocksNext: null,
        unlocksEvidenceStep: 'ngamPresentationVideo',
      },
    ],
  },
  phong: {
    suspectId: 'phong',
    nodes: [
      {
        id: 'intro',
        prompt: 'Phong, tối qua cậu đi tìm Bảo tới mấy giờ? Chiều thứ Sáu cậu ở đâu?',
        reply:
          'Tối qua mình đi tìm Bảo tới 11 giờ đêm. Chiều thứ Sáu mình xếp sách trên tầng 2 giúp cô thủ thư, cô xác nhận được. Mà mình đâu phải admin trang — mình chưa từng thấy cái hộp thư đó, cũng chẳng biết mật khẩu.',
        requiresEvidence: null,
        unlocksNext: 'whyLibrarySchedule',
      },
      {
        id: 'whyLibrarySchedule',
        prompt: 'Cô thủ thư xác nhận cậu xếp sách đúng kệ 500 — ngay cạnh máy số 3. Cậu ở đó suốt 16:30–17:00?',
        reply:
          'Ừ, mình làm tình nguyện ở đó mỗi thứ Sáu mà. Nhưng mình đâu biết mật khẩu trang, sao đăng nhập được?',
        requiresEvidence: 'librarySchedule',
        unlocksNext: null,
        unlocksEvidenceStep: 'passwordNoteLocation',
      },
      {
        id: 'confronted',
        prompt:
          '(Lần trước tớ phải lấy hết can đảm. Lần này... vẫn phải lấy hết can đảm.) Cậu nói cậu không biết mật khẩu. Nhưng trưa thứ Sáu cậu mượn chìa phòng CLB Tin học — nơi duy nhất có tờ giấy ghi mật khẩu mới. Lúc 16:48 cậu đứng ở kệ 500, cạnh máy số 3. Và tối qua, cậu đưa cả nhóm đi tìm ở bến xe Miền Đông, trong khi Bảo đi Miền Tây.',
        reply:
          'Tao không muốn hại Bảo. Thật đấy. Tối thứ Tư tao nhận một tin nhắn ẩn danh kèm ảnh chụp tin của anh Minh: "Hộp thư của trang có tên em từ năm ngoái. Xóa đi thì an toàn." Năm ngoái tao... đã mua đề kiểm tra giữa kỳ một lần, trong một nhóm chat. Một lần thôi. Nếu lộ ra, tao mất suất học bổng, mất hết. Chiều thứ Sáu nào tao cũng làm tình nguyện ở thư viện, thấy Bảo ngồi máy số 3 — nó từng than trang chỉ vào được từ máy đó. Nên tao tạo tài khoản giả anh Minh để nó đi thật xa, không mang điện thoại. Câu trích với địa chỉ quê... tao lấy từ cái ảnh chụp người ta gửi kèm tin nhắn. Tao không cần Bảo gặp anh Minh. Tao chỉ cần nó không ngồi ở máy số 3 chiều hôm đó.',
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
      when: (ctx) => !ctx.collectedIds.includes('libraryGateLog'),
      text: 'Ai có mặt ở thư viện chiều thứ Sáu — đúng lúc hộp thư bị xóa? Xem log quẹt thẻ thư viện.',
    },
    {
      when: (ctx) => !ctx.eliminated.A,
      text: 'Tuấn có mật khẩu mới không? Lúc 16:48 cậu ấy đang ở đâu — email bảo mật và trang bìa bản in nói gì?',
    },
    {
      when: (ctx) => !ctx.eliminated.B,
      text: 'Ngân nói mình ở tầng 1 cả buổi — nhưng máy mượn sách tầng 2 ghi gì? Hỏi kỹ Ngân về việc lên tầng 2.',
    },
    {
      when: () => true,
      text: 'Ai vừa biết mật khẩu mới (từng vào phòng CLB Tin học), vừa ở cạnh máy số 3 lúc 16:48? Đối chất bằng nhật ký hoạt động trang + sổ mượn chìa khóa + lịch tình nguyện thư viện.',
    },
  ],
};

export const thinkingBoardSolution = {
  slots: [
    {
      id: 'why',
      label: 'Vì sao Bảo biến mất',
      correctAnswer: 'biLuaDiXa',
      options: ['biLuaDiXa', 'tuYBoDi', 'biEpDi'],
    },
    {
      id: 'realGoal',
      label: 'Mục đích thật của việc dụ Bảo đi',
      correctAnswer: 'xoaHopThu',
      options: ['xoaHopThu', 'traThu', 'chiemQuyen'],
    },
    {
      id: 'deleter',
      label: 'Người xóa hộp thư',
      correctAnswer: 'phong',
      options: ['tuan', 'ngan', 'phong'],
    },
    {
      id: 'howPassword',
      label: 'Cách có mật khẩu mới',
      correctAnswer: 'toGiayPhongCLB',
      options: ['toGiayPhongCLB', 'baoNoiCho', 'doanMatKhau'],
    },
    {
      id: 'motive',
      label: 'Động cơ',
      correctAnswer: 'soLoMuaDe',
      options: ['soLoMuaDe', 'baoVeAnhTrai', 'gianViBaoDangBai'],
    },
  ],
  labels: {
    biLuaDiXa: 'Bị lừa đi xa bằng tài khoản giả',
    tuYBoDi: 'Tự ý bỏ đi',
    biEpDi: 'Bị ép đi',
    xoaHopThu: 'Để xóa Hộp thư ẩn danh khi Bảo vắng mặt',
    traThu: 'Trả thù Bảo vì bài đăng',
    chiemQuyen: 'Chiếm quyền quản lý trang',
    tuan: 'Tuấn',
    ngan: 'Ngân',
    phong: 'Phong',
    toGiayPhongCLB: 'Tờ giấy trong phòng CLB Tin học',
    baoNoiCho: 'Được Bảo nói cho',
    doanMatKhau: 'Đoán mật khẩu',
    soLoMuaDe: 'Sợ lộ việc mua đề năm ngoái',
    baoVeAnhTrai: 'Bảo vệ anh trai',
    gianViBaoDangBai: 'Giận vì Bảo đăng bài',
  },
  conclusionText:
    'Bảo không tự bỏ đi. Phong dùng tài khoản giả mạo anh Minh để dụ Bảo về Bến Tre và để điện thoại lại, nhằm vắng mặt ở máy số 3 thư viện chiều thứ Sáu. Với mật khẩu chụp từ tờ giấy trong phòng CLB Tin học, Phong xóa toàn bộ Hộp thư ẩn danh lúc 16:48 — vì trong đó có tên cậu trong danh sách mua đề năm ngoái.',
};

export const epilogue = {
  text: `Bảo về đến trường sáng Chủ nhật. Cô Hạnh báo sự việc lên Ban giám hiệu. Phong tự nguyện kể lại với nhà trường.

Buổi chiều, Bảo cắm USB vào máy CLB Tin học: "Thứ Tư tao có xuất hộp thư ra đây. Tin của anh Minh vẫn còn." Bảo dừng lại. "Nhưng mày nhìn cái này. Tháng Tư năm ngoái, trang đã trả lời anh Minh: 'Cảm ơn em, page sẽ xử lý.' Hồi đó tao chưa làm admin. Người trả lời là tài khoản TL.admin2024."

Lam: "Cái tài khoản vẫn còn quyền biên tập... và vừa hoạt động tối thứ Tư. Đúng tối Phong nhận tin nhắn."

Minh (tin nhắn gửi Lam, từ số điện thoại của mẹ): "Một ngày sau khi trang trả lời anh, anh nhận được câu 'Im lặng thì an toàn'. Người gửi biết anh gửi gì vào hộp thư. Em cẩn thận."

Lam (nội tâm): "Vy, anh Minh, rồi Phong... Ba người, ba lần 'thì an toàn'. Và người gửi luôn biết trước mọi thứ — như thể đang ngồi ngay bên trong."

Tối đó, ở nhà, Lam mở ngăn bàn. Một thẻ nhớ cũ, nhãn dán viết tay: "HT 26-3 — gốc."

Lam (nội tâm): "Hội trại năm ngoái, lúc dựng video, có người bảo tớ cắt một đoạn có anh Minh ở rìa khung hình. 'Không hay, không liên quan.' Tớ cắt. Không hỏi lại câu nào. Bản dựng thì cả trường đã xem. Còn bản gốc... tớ chưa từng mở lại."`,
  nextPartHint: 'Ai đứng sau tài khoản TL.admin2024, nhóm bán đề lấy đề từ đâu — và đoạn phim Lam từng cắt đã ghi lại điều gì?',
};
