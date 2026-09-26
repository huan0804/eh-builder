// Dữ liệu Vụ án Phần 1: "Buổi Livestream Cuối Cùng"
// Nguồn: docs/phan-1-script.md — mọi thay đổi nội dung nên đồng bộ ngược lại file đó.
//
// Schema chung cho mọi case (case1/case2/case3...) — xem docs/engine-lessons.md.
// Case này còn giữ thêm 2 export cũ (`hypotheses`, `ducConfrontation`) đã đổi tên/hình
// dạng sang `hypotheses` (có `isCulprit`) + `confrontation` để dùng chung với Investigation.jsx.

export const meta = {
  id: 'case1',
  partLabel: 'Phần 1',
  title: 'Buổi Livestream Cuối Cùng',
  investigationChapterTitle: 'Chương 2-3 — Ba người bạn cùng nhóm & Dữ liệu không biết nói dối',
  thinkingBoardChapterTitle: 'Chương 4 — Kết luận Phần 1',
};

// `portraits`: map emotion → tên file ảnh trong game/src/assets/portraits/<suspectId>/<emotion>.png.
// Ảnh CHƯA tồn tại (chờ tạo bằng AI theo docs/portrait-prompts.md) — CharacterPortrait.jsx tự
// fallback về khung màu + icon khi ảnh chưa có, không phá UI. Nghi phạm nào không khai báo
// `portraits` thì luôn hiện fallback (vd Lam/Cô Hạnh/Vy — chưa cần ảnh vì không bị phỏng vấn).
export const characters = {
  lam: {
    name: 'Lam',
    role: 'Nhân vật chính (bạn)',
    portraits: { neutral: 'lam/neutral.png', thinking: 'lam/thinking.png' },
  },
  coHanh: {
    name: 'Cô Hạnh',
    role: 'GVCN kiêm chủ nhiệm CLB Ống Kính',
    portraits: { neutral: 'coHanh/neutral.png', worried: 'coHanh/worried.png' },
  },
  vy: { name: 'Vy', role: 'Người mất tích' },
  khang: {
    name: 'Khang',
    role: 'Thủ quỹ nhóm ôn thi',
    portraits: { neutral: 'khang/neutral.png', nervous: 'khang/nervous.png', defensive: 'khang/defensive.png' },
  },
  chi: {
    name: 'Chi',
    role: 'Thành viên nhóm ôn thi',
    portraits: { neutral: 'chi/neutral.png', nervous: 'chi/nervous.png', defensive: 'chi/defensive.png' },
  },
  duc: {
    name: 'Đức',
    role: 'Thành viên nhóm ôn thi',
    portraits: { neutral: 'duc/neutral.png', nervous: 'duc/nervous.png', confession: 'duc/confession.png' },
  },
};

// Nội dung màn Prologue — Prologue.jsx chỉ render, không còn chứa lời thoại cứng.
// `background`: tên file ảnh nền cảnh trong game/src/assets/backgrounds/<tên>.jpg (chưa tồn
// tại — chờ tạo bằng AI, xem docs/portrait-prompts.md mục "Ảnh nền cảnh"). Chưa có ảnh →
// TitleScreen/Prologue/Chapter1 tự fallback gradient, không phá layout.
// `lines[].speakerId`: khoá trong `characters`, dùng để hiện portrait đúng người đang nói
// (khác `speaker` cũ chỉ là tên hiển thị tự do — giữ `speaker` để hiện tên khi speakerId
// trỏ tới một biến thể xưng hô khác, vd "Lam (nội tâm)" vẫn dùng portrait của `lam`).
export const prologue = {
  background: 'clb-ong-kinh-room.jpg',
  briefing: 'Phần 1 — Một vụ án dành cho CLB Ống Kính',
  innerThought:
    'Lam (nội tâm): "Quay phim thì dễ. Cái khó là biết cắt đoạn nào. Mà thôi — máy quay không nói dối, chỉ có người dựng là hay nói dối thôi."',
  lines: [
    {
      speaker: 'Cô Hạnh',
      speakerId: 'coHanh',
      emotion: 'worried',
      text:
        '"Lam này, con biết tin Vy lớp 11A2 chưa đến lớp sáng nay chứ? Gia đình đang rất lo, nhưng công an nói chưa đủ 24 tiếng nên chưa thể vào cuộc chính thức. CLB Ống Kính có quay lại buổi học nhóm tối qua đúng không? Mình xác minh trước, đỡ làm gia đình hoảng thêm nếu chưa chắc chắn. Mẹ Vy cũng gửi cô laptop, điện thoại và tai nghe Vy để lại — điện thoại thì khóa, nhưng laptop con xem được."',
    },
    {
      speaker: 'Lam',
      speakerId: 'lam',
      emotion: 'thinking',
      text: '"Dạ, con sẽ xem lại bản ghi ạ. Cô cho con hỏi thêm vài bạn trong nhóm được không ạ?"',
    },
    {
      speaker: 'Cô Hạnh',
      speakerId: 'coHanh',
      emotion: 'neutral',
      text: '"Được, nhưng hỏi han thôi, đừng làm quá lên. Có gì nghiêm trọng, báo cô ngay."',
    },
  ],
};

// Chat log buổi học nhóm tối thứ Năm (hiển thị ở Chương 1)
export const chatLog = [
  { time: '21:02', who: 'Khang', text: 'mọi người load đề chưa, tao gửi link rồi đó' },
  { time: '21:05', who: 'Vy', text: 'đợi tao xíu, đang tắt đèn phòng cho đỡ chói màn hình' },
  { time: '21:10', who: 'Chi', text: 'câu 7 tao ra đáp án B, ai ra giống không' },
  { time: '21:11', who: 'Đức', text: 'tao ra C, để check lại đề' },
  { time: '21:34', who: 'Vy', text: 'tao đi lấy nước xíu' },
  { time: '21:40', who: 'Khang', text: 'Vy ơi câu 7 mày ra gì' },
  { time: '21:46', who: 'Vy', text: 'thôi tao buồn ngủ quá, để mai tính tiếp nha' },
  { time: '21:47', who: 'system', text: '[Vy đã rời khỏi phòng học nhóm]' },
  { time: '21:47', who: 'Đức', text: 'ơ Vy thoát lẹ vậy' },
  { time: '21:48', who: 'Chi', text: 'chắc buồn ngủ thật á' },
];

// Nội dung màn Chương 1 — Chapter1.jsx chỉ render, không còn chứa lời thoại cứng.
// `steps`: 1 bước duy nhất kiểu 'search' (khớp hành vi gốc của Phần 1).
export const chapter1 = {
  background: 'clb-ong-kinh-room.jpg',
  title: 'Chương 1 — Buổi tối cuối cùng',
  briefing:
    'Tại phòng CLB, Lam xem lại bản ghi buổi học nhóm tối thứ Năm. Trên bàn là laptop và tai nghe mẹ Vy gửi cô Hạnh — những thứ Vy để lại ở nhà.',
  nextChapterLabel: 'Tiếp tục sang Chương 2 →',
  steps: [
    {
      type: 'search',
      innerThoughtBefore:
        'Lam (nội tâm): "Cả buổi, khung hình của Vy chỉ là một màu đen. Không ai thấy Vy rời đi — vì chẳng có gì để thấy."',
      actionLabel: '🎧 Kiểm tra laptop và tai nghe của Vy',
      hintText:
        'Những thứ Vy để lại ở nhà có thể cho biết cô ấy rời bàn học lúc nào. Thử xem kỹ laptop và tai nghe.',
      stuckThresholdMs: 15000,
      evidenceIds: ['sessionRecording', 'earbudsBluetoothLog', 'momoTransfer', 'chiVoiceDraft'],
      reveal: {
        heading: '🎧 Tai nghe không dây của Vy',
        paragraphs: [
          'Cắm tai nghe vào laptop, Lam nghe riêng kênh mic của Vy trong bản ghi: lúc 21:35 có tiếng cửa mở, tiếng bước chân... rồi chỉ còn tiếng quạt. Căn phòng trống.',
          'Log Bluetooth trên laptop cho thấy tai nghe ngắt kết nối lúc 21:36 — tức 10 phút trước dòng "thôi tao buồn ngủ quá" lúc 21:46.',
          'Trong thư mục chung của nhóm trên laptop Vy có một ảnh chụp màn hình chuyển khoản MoMo liên quan đến quỹ nhóm. Còn trên máy tính chung của CLB, Lam thấy một tin nhắn thoại nháp chưa gửi tự đồng bộ từ điện thoại của Chi.',
        ],
        deductionHint: '🤔 Nếu Vy đã rời phòng từ 21:36 và không quay lại... thì ai đã gõ dòng "buồn ngủ" lúc 21:46?',
      },
    },
  ],
};

// Chứng cứ: mỗi chứng cứ có id duy nhất
export const evidenceList = {
  sessionRecording: {
    id: 'sessionRecording',
    name: 'Bản ghi buổi học nhóm (video + chat)',
    description:
      'Camera của Vy tối đen từ 21:05 (tắt đèn). Chi cúi xuống điện thoại lúc 21:43–21:44, rồi ngồi đọc to lời giải trước webcam lúc 21:46. Đức tắt mic, cúi đầu từ 21:45 đến 21:47.',
  },
  earbudsBluetoothLog: {
    id: 'earbudsBluetoothLog',
    name: 'Tai nghe của Vy + log Bluetooth trên laptop',
    description:
      'Kênh mic của Vy: 21:35 có tiếng cửa mở, bước chân, sau đó phòng trống. Tai nghe ngắt kết nối lúc 21:36 — 10 phút TRƯỚC dòng "buồn ngủ" (21:46).',
  },
  momoTransfer: {
    id: 'momoTransfer',
    name: 'Ảnh chuyển khoản MoMo (Khang → Vy)',
    description:
      'Khang hoàn trả 200.000đ cho Vy hôm thứ Ba. Ảnh chụp màn hình có giao diện iOS — điện thoại của Khang là iPhone.',
  },
  chiVoiceDraft: {
    id: 'chiVoiceDraft',
    name: 'Tin nhắn thoại nháp của Chi (chưa gửi)',
    description:
      '"Vy ơi, tao muốn nói với cậu một chuyện quan trọng..." — đồng bộ từ Samsung Galaxy của Chi. Mở lại lúc 21:43, xóa lúc 21:44, chưa từng gửi.',
  },
  roomAccessLog: {
    id: 'roomAccessLog',
    name: 'Nhật ký truy cập phòng học nhóm',
    description:
      'Vy vào phòng 20:58 từ Laptop. 21:46: tài khoản Vy đăng nhập từ thiết bị mới "Redmi Note 12" và gửi dòng "buồn ngủ". Nền tảng chỉ cho 1 thiết bị/tài khoản → phiên laptop bị đóng lúc 21:47.',
  },
  schoolSystemLog: {
    id: 'schoolSystemLog',
    name: 'Log hệ thống học tập trường',
    description:
      'Khang làm bài online 21:36–22:15, nhưng không ghi nhận hoạt động nào từ 21:36 đến 21:40 — trùng lúc Vy rời nhà.',
  },
  whiteboardLog: {
    id: 'whiteboardLog',
    name: 'Lịch sử chỉnh sửa bảng trắng nhóm',
    description:
      'Khang chỉnh sửa bảng trắng liên tục từ 21:33 đến 21:48 (có mốc thời gian từng nét), kể cả 21:36–21:40 và lúc 21:46.',
  },
  fakeCheckinPhoto: {
    id: 'fakeCheckinPhoto',
    name: 'Ảnh check-in "Vy ở quán trà sữa"',
    description:
      'Đăng 6:40 sáng thứ Sáu trên trang confession trường. Bóng đổ sai hướng, ngón tay lỗi tỉ lệ. Dữ liệu ảnh: chỉnh bằng app AI trên "Redmi Note 12".',
  },
  vySearchHistory: {
    id: 'vySearchHistory',
    name: 'Lịch sử tìm kiếm trên laptop Vy',
    description:
      '3 ngày trước khi biến mất, Vy tìm: "tin nhắn ẩn danh có truy ra người gửi không", "làm gì khi biết một chuyện nguy hiểm".',
  },
};

// Nguồn thu thập chứng cứ — mỗi chứng cứ PHẢI có đúng một nguồn (validator kiểm tra)
// Chương 1: nhận khi kiểm tra laptop + tai nghe của Vy
export const chapter1Evidence = ['sessionRecording', 'earbudsBluetoothLog', 'momoTransfer', 'chiVoiceDraft'];

// Chương 2-3: các bước thu thập thêm. lockedLabel = bị khóa đến khi một node hội thoại mở khóa
export const investigationSteps = [
  { id: 'roomAccessLog', label: '📋 Nhờ Cô Hạnh xin nền tảng học nhóm nhật ký truy cập phòng' },
  { id: 'schoolSystemLog', label: '🏫 Xin xem log hệ thống học tập của trường' },
  {
    id: 'whiteboardLog',
    label: '🖊️ Xem lịch sử chỉnh sửa bảng trắng của nhóm',
    lockedLabel: '🔒 (Có thể có thêm dữ liệu — hỏi kỹ Khang về khoảng trống trong log trường)',
  },
  { id: 'fakeCheckinPhoto', label: '🔍 Soi ảnh check-in ẩn danh "Vy ở quán trà sữa"' },
  { id: 'vySearchHistory', label: '💻 Xem kỹ lịch sử tìm kiếm trên laptop Vy' },
];

// Danh sách nghi phạm được phỏng vấn, theo đúng thứ tự hiển thị tab (Investigation.jsx đọc
// từ đây thay vì hardcode ['khang','chi','duc']).
export const suspectOrder = ['khang', 'chi', 'duc'];

// Câu phản hồi khi trình sai chứng cứ (không khớp requiresEvidence của node kế tiếp)
export const wrongEvidenceReply = {
  khang: 'Cái đó thì liên quan gì đến tao? Mày hỏi gì cụ thể đi.',
  chi: 'Tao không hiểu cậu đang muốn nói gì...',
  duc: 'Tao không hiểu cậu đang nói cái gì.',
};

// 3 giả thuyết song song. Người chơi phải CHỌN đúng tổ hợp chứng cứ để loại một giả thuyết.
// requiredToEliminate: phải có đủ; allowedExtra: được phép chọn thêm mà không bị tính là sai.
// isCulprit: true đánh dấu giả thuyết KHÔNG bị loại — suspect này là thủ phạm/người cần đối chất
// cuối cùng (thay cho quy ước ẩn cũ "requiredToEliminate rỗng nghĩa là đúng").
export const hypotheses = {
  A: {
    id: 'A',
    suspect: 'khang',
    label: 'Khang giúp Vy vì hối lỗi chuyện quỹ tiền',
    requiredToEliminate: ['roomAccessLog', 'whiteboardLog', 'momoTransfer'],
    allowedExtra: ['schoolSystemLog', 'sessionRecording'],
    eliminationText:
      'Người gửi dòng "buồn ngủ" dùng Redmi Note 12. Khang dùng iPhone, và lúc 21:46 đang viết liên tục trên bảng trắng — Khang không thể là người làm việc đó.',
  },
  B: {
    id: 'B',
    suspect: 'chi',
    label: 'Chi giúp Vy vì biết bí mật riêng của Vy',
    requiredToEliminate: ['roomAccessLog', 'chiVoiceDraft', 'sessionRecording'],
    allowedExtra: [],
    eliminationText:
      'Lần Chi cầm điện thoại (21:43–21:44) là lúc xóa đoạn ghi âm trên chiếc Samsung. Lúc 21:46 Chi đang đọc lời giải trước webcam — không phải Chi.',
  },
  C: {
    id: 'C',
    suspect: 'duc',
    label: 'Đức giúp Vy giấu đi',
    isCulprit: true,
    requiredToEliminate: [],
    allowedExtra: [],
  },
};

// Đối chất cuối cùng: chỉ mở khi mọi giả thuyết KHÔNG phải culprit đã bị loại, và phải trình
// đúng tổ hợp chứng cứ. Investigation.jsx suy ra suspect cần đối chất từ hypotheses (isCulprit).
export const confrontation = {
  required: ['earbudsBluetoothLog', 'roomAccessLog', 'fakeCheckinPhoto'],
  allowedExtra: ['sessionRecording', 'vySearchHistory'],
};

// Kiểm tra tổ hợp chứng cứ người chơi chọn: đủ required, không có gì ngoài required + allowedExtra
export function isValidEvidenceSet(selectedIds, required, allowedExtra = []) {
  const hasAll = required.every((id) => selectedIds.includes(id));
  const noIrrelevant = selectedIds.every(
    (id) => required.includes(id) || allowedExtra.includes(id)
  );
  return hasAll && noIrrelevant;
}

// Cây hội thoại phỏng vấn — mỗi node mở khóa khi trình đúng chứng cứ (requiresEvidence của node kế tiếp)
export const interviews = {
  khang: {
    suspectId: 'khang',
    nodes: [
      {
        id: 'intro',
        prompt: 'Khang này, tuần trước Vy có nhắc gì đến chuyện quỹ nhóm không?',
        reply: 'À... có, nhưng giải quyết xong rồi mà. Tao trả lại tiền cho Vy hôm thứ Ba rồi.',
        requiresEvidence: null,
        unlocksNext: 'afterMomo',
        emotion: 'neutral',
      },
      {
        id: 'afterMomo',
        prompt:
          'Đúng là cậu đã chuyển khoản thật, nhưng hôm thứ Tư Vy vẫn nhắn trong nhóm là "từ tuần sau quỹ để tao tự giữ". Sao vậy?',
        reply:
          '...Vy còn giận vì tao giấu chuyện thiếu tiền cả tuần, dọa nói với cả nhóm là tao "không đáng tin". Tao có nhắn xin Vy đừng nói ra. Nhưng tối đó tao ngồi máy làm bài suốt, có nghỉ đâu. Mà cả nhóm ai chẳng biết mật khẩu tài khoản Vy, hay đăng nhập hộ nhau tải đề mà.',
        requiresEvidence: 'momoTransfer',
        unlocksNext: 'confrontGap',
        emotion: 'nervous',
      },
      {
        id: 'confrontGap',
        prompt:
          'Log hệ thống trường có khoảng trống 21:36–21:40 — đúng lúc Vy rời nhà. Cậu chắc là không rời máy chứ?',
        reply:
          'Tao chuyển sang tab bảng trắng của nhóm để giải câu 7 thôi! Mày xem lịch sử chỉnh sửa bảng trắng đi, từng nét đều có giờ.',
        requiresEvidence: 'schoolSystemLog',
        unlocksNext: null,
        unlocksEvidenceStep: 'whiteboardLog',
        emotion: 'defensive',
      },
    ],
  },
  chi: {
    suspectId: 'chi',
    nodes: [
      {
        id: 'intro',
        prompt: 'Chi ơi, tối hôm đó ngoài nhóm chat chính, cậu với Vy có nhắn gì riêng không?',
        reply:
          'Có... hồi đầu buổi, hỏi bài thôi. Chuyện đó không liên quan gì đến việc Vy mất tích đâu, đừng hỏi nữa được không?',
        requiresEvidence: null,
        unlocksNext: 'afterVoiceDraft',
        emotion: 'neutral',
      },
      {
        id: 'afterVoiceDraft',
        prompt: 'Tớ tìm thấy một đoạn tin nhắn thoại nháp cậu định gửi cho Vy. Cậu định nói gì vậy?',
        reply:
          'Được rồi... tao định tỏ tình với Vy qua tin nhắn thoại, nhưng không dám gửi, xóa đi rồi. Webcam tao bật suốt buổi mà, mọi người xem lại là thấy.',
        requiresEvidence: 'chiVoiceDraft',
        unlocksNext: 'confrontPhone',
        emotion: 'nervous',
      },
      {
        id: 'confrontPhone',
        prompt:
          'Webcam thấy cậu cúi xuống điện thoại lúc 21:43–21:44 — chỉ vài phút trước dòng "buồn ngủ" của Vy. Lúc đó cậu làm gì?',
        reply:
          'Tao... mở lại đoạn ghi âm đó rồi xóa đi. Chỉ vậy thôi. Mày xem thông tin đồng bộ trên máy tao là thấy giờ xóa mà.',
        requiresEvidence: 'sessionRecording',
        unlocksNext: null,
        emotion: 'defensive',
      },
    ],
  },
  duc: {
    suspectId: 'duc',
    nodes: [
      {
        id: 'intro',
        prompt: 'Đức này, cậu để ý thấy Vy dạo này có gì khác thường không?',
        reply: 'Vy vẫn bình thường mà, học hành, làm bài đầy đủ. Tao không thấy gì lạ cả.',
        requiresEvidence: null,
        unlocksNext: null, // Khóa cho đến khi A và B bị loại và trình đúng chứng cứ (xử lý trong Investigation)
        emotion: 'neutral',
      },
      {
        id: 'confronted',
        prompt:
          '(Bình thường tớ đưa bằng chứng cho cô Hạnh là xong. Lần này thì phải tự nói — với một người bạn.) Đức... tớ không giỏi mấy chuyện này, nên tớ nói thẳng. Vy rời phòng từ 21:36. Dòng "buồn ngủ" lúc 21:46 được gửi từ một chiếc Redmi Note 12 — và ảnh trà sữa cũng được chỉnh trên đúng chiếc Redmi đó. Lúc 21:46 cậu tắt mic, cúi đầu, rồi một phút sau là người đầu tiên hỏi "ơ Vy thoát lẹ vậy".',
        reply:
          '...Vy nhờ tao. Nó gõ "đi lấy nước" rồi đi luôn, để laptop lại trong phòng. Tao đăng nhập tài khoản nó trên điện thoại tao, gõ câu buồn ngủ để mọi người khỏi gọi về nhà nó như mọi lần. Sáng nay tao đăng cái ảnh kia để mọi người đi tìm quanh trường, trong khi Vy về nhà dì ở huyện bên. Vy bảo nó thấy một thứ khiến nó sợ, cần vài ngày để nghĩ... nhưng không chịu kể là gì.',
        requiresEvidence: null,
        unlocksNext: null,
        isFinalConfession: true,
        emotion: 'confession',
      },
    ],
  },
};

// Gợi ý theo ngữ cảnh (rewarded ads) — Investigation.jsx đọc theo thứ tự, trả về gợi ý đầu
// tiên có `when` còn chưa thoả (mỗi case tự định nghĩa điều kiện theo state riêng của mình).
export const investigationHints = {
  stuckThresholdMs: 25000,
  rules: [
    {
      when: (ctx) => !ctx.collectedIds.includes('roomAccessLog'),
      text:
        'Vy rời phòng lúc 21:36, nhưng dòng "buồn ngủ" xuất hiện lúc 21:46. Nền tảng học nhóm có ghi lại tài khoản nào đăng nhập từ thiết bị nào không?',
    },
    {
      when: (ctx) => !ctx.eliminated.A,
      text:
        'Người gửi dòng "buồn ngủ" dùng thiết bị gì? Khang dùng điện thoại gì, và lúc 21:46 Khang đang làm gì? Hỏi kỹ Khang về khoảng trống trong log trường.',
    },
    {
      when: (ctx) => !ctx.eliminated.B,
      text: 'Chi cầm điện thoại lúc 21:43–21:44 để làm gì, trên thiết bị nào? Lúc 21:46 bản ghi hình thấy Chi đang làm gì?',
    },
    {
      when: () => true,
      text: 'Cùng một thiết bị đã làm cả hai việc che giấu. Hãy đối chất Đức bằng những chứng cứ cho thấy điều đó.',
    },
  ],
};

// Thinking Board — các mảnh kết luận cần ghép ở Chương 4
export const thinkingBoardSolution = {
  slots: [
    {
      id: 'what',
      label: 'Chuyện gì xảy ra với Vy',
      correctAnswer: 'tuYRoiDi',
      options: ['tuYRoiDi', 'biDuaDi', 'gapTaiNan'],
    },
    {
      id: 'when',
      label: 'Vy thật sự rời đi lúc',
      correctAnswer: 't2136',
      options: ['t2134', 't2136', 't2147'],
    },
    {
      id: 'accomplice',
      label: 'Người giúp che giấu',
      correctAnswer: 'duc',
      options: ['khang', 'chi', 'duc'],
    },
    {
      id: 'method',
      label: 'Cách che giấu',
      correctAnswer: 'thietBiKhacVaAnhGia',
      options: ['thietBiKhacVaAnhGia', 'xoaTinNhan', 'tatCameraVy'],
    },
    {
      id: 'motive',
      label: 'Động cơ',
      correctAnswer: 'soHai',
      options: ['soHai', 'apLucHocTap', 'mauThuanBanBe'],
    },
  ],
  labels: {
    tuYRoiDi: 'Tự ý rời đi',
    biDuaDi: 'Bị người khác đưa đi',
    gapTaiNan: 'Gặp tai nạn',
    t2134: '21:34',
    t2136: '21:36',
    t2147: '21:47',
    khang: 'Khang',
    chi: 'Chi',
    duc: 'Đức',
    thietBiKhacVaAnhGia: 'Gõ tin nhắn từ thiết bị khác + đăng ảnh giả',
    xoaTinNhan: 'Xóa tin nhắn trong nhóm chat',
    tatCameraVy: 'Tắt camera của Vy từ xa',
    soHai: 'Sợ hãi vì phát hiện điều gì đó',
    apLucHocTap: 'Áp lực học tập',
    mauThuanBanBe: 'Mâu thuẫn bạn bè',
  },
  conclusionText:
    'Vy không bị hại. Vy chủ động rời nhà lúc 21:36 tối thứ Năm. Đức dùng tài khoản của Vy trên điện thoại mình để giả tin nhắn "buồn ngủ", rồi đăng ảnh giả để che dấu vết, vì Vy phát hiện ra điều gì đó khiến cô sợ hãi và cần thời gian trước khi nói ra.',
};

export const epilogue = {
  text: `Vy được tìm thấy an toàn ở nhà dì. Để giải oan cho Đức, Vy tự mở khóa điện thoại cho Lam xem một tin nhắn ẩn danh gửi đến 3 ngày trước khi cô rời đi:

"Cậu cũng để ý thấy giống vụ của anh Minh năm ngoái đúng không? Đừng nói với ai. Im lặng thì an toàn."

Lam (nội tâm): "Vụ của anh Minh năm ngoái...? Mình chưa từng nghe ai nhắc đến chuyện này cả."`,
  nextPartHint: 'Phần 2 sẽ hé lộ "vụ của anh Minh năm ngoái" là gì...',
};

// Cảnh mở đầu season (ColdOpen) — xem docs/phan-1-script.md mục 1b. ColdOpen.jsx chỉ render
// theo timestamp/hesitant, không còn hardcode nội dung riêng cho Phần 1.
export const coldOpen = {
  timestamp: 'Thứ Hai, 22:17',
  hesitant: true, // người gửi do dự (bong bóng "đang gõ" nhấp nháy trước khi gửi câu cuối)
  finalLine: 'Im lặng thì an toàn.',
  chatListEntry: { name: 'M.', date: 'thg 4, năm ngoái', preview: 'Im lặng thì an toàn.' },
};
