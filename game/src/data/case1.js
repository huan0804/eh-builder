// Dữ liệu Vụ án Phần 1: "Buổi Livestream Cuối Cùng"
// Nguồn: docs/phan-1-script.md — mọi thay đổi nội dung nên đồng bộ ngược lại file đó.

export const characters = {
  lam: { name: 'Lam', role: 'Nhân vật chính (bạn)' },
  coHanh: { name: 'Cô Hạnh', role: 'GVCN kiêm chủ nhiệm CLB Ống Kính' },
  vy: { name: 'Vy', role: 'Nạn nhân mất tích' },
  khang: { name: 'Khang', role: 'Thủ quỹ nhóm ôn thi' },
  chi: { name: 'Chi', role: 'Thành viên nhóm ôn thi' },
  duc: { name: 'Đức', role: 'Thành viên nhóm ôn thi' },
};

// Chứng cứ: mỗi chứng cứ có id duy nhất để dùng trong hội thoại (presentEvidence)
export const evidenceList = {
  chatLog: {
    id: 'chatLog',
    name: 'Nhật ký chat nhóm ôn thi',
    description:
      'Bản ghi chat buổi tối thứ Năm. Vy nói "buồn ngủ" lúc 21:34, rời phòng lúc 21:47.',
  },
  earbudsBluetoothLog: {
    id: 'earbudsBluetoothLog',
    name: 'Log Bluetooth tai nghe của Vy',
    description:
      'Tai nghe của Vy ngắt kết nối lúc 21:36 — sớm hơn 11 phút so với giờ Vy "rời phòng chat" (21:47).',
  },
  momoTransfer: {
    id: 'momoTransfer',
    name: 'Ảnh chuyển khoản MoMo (Khang → Vy)',
    description: 'Khang chuyển hoàn trả 200.000đ cho Vy vào thứ Ba, xác nhận qua MoMo.',
  },
  chiVoiceDraft: {
    id: 'chiVoiceDraft',
    name: 'Tin nhắn thoại nháp của Chi (chưa gửi)',
    description:
      'Đoạn ghi âm nháp "Vy ơi, tao muốn nói với cậu một chuyện quan trọng..." bị xóa lúc 21:44, chưa từng gửi đi.',
  },
  schoolSystemLog: {
    id: 'schoolSystemLog',
    name: 'Log đăng nhập hệ thống học tập trường',
    description:
      'Khang đăng nhập làm bài tập online 21:36–22:15. Có khoảng trống không ghi nhận hoạt động từ 21:36 đến 21:40.',
  },
  khangCursorScreenshot: {
    id: 'khangCursorScreenshot',
    name: 'Ảnh chụp màn hình cuộc gọi (con trỏ chuột của Khang)',
    description:
      'Chi vô tình chụp lại màn hình lúc tìm nút tắt mic — thấy con trỏ chuột của Khang di chuyển liên tục suốt 21:34–21:41.',
  },
  chiCallHistory: {
    id: 'chiCallHistory',
    name: 'Lịch sử cuộc gọi/tin nhắn của Chi',
    description:
      'Chi không gọi/nhắn cho ai ngoài nhóm chat chính tối hôm đó — không có "điện thoại thứ hai" liên lạc riêng với Vy.',
  },
  fakeCheckinPhoto: {
    id: 'fakeCheckinPhoto',
    name: 'Ảnh check-in bị chỉnh sửa AI',
    description:
      'Ảnh ẩn danh "Vy ở quán trà sữa lúc 22:00" — bóng đổ sai hướng, ngón tay lỗi tỉ lệ. Đây là ảnh giả do AI ghép.',
  },
};

// Trạng thái 3 giả thuyết song song — dùng để hiển thị trên Thinking Board / bảng suy luận
export const hypotheses = {
  A: {
    id: 'A',
    suspect: 'khang',
    label: 'Giả thuyết A: Khang giúp Vy vì hối lỗi chuyện quỹ tiền',
    // Chứng cứ cần để LOẠI giả thuyết này (không phải để xác nhận)
    requiredToEliminate: ['khangCursorScreenshot', 'schoolSystemLog'],
    eliminated: false,
  },
  B: {
    id: 'B',
    suspect: 'chi',
    label: 'Giả thuyết B: Chi giúp Vy vì biết bí mật riêng của Vy',
    requiredToEliminate: ['chiCallHistory', 'chiVoiceDraft'],
    eliminated: false,
  },
  C: {
    id: 'C',
    suspect: 'duc',
    label: 'Giả thuyết C: Đức giúp Vy giấu đi',
    requiredToEliminate: [], // Không bị loại — đây là đáp án đúng, chỉ "nổi lên" khi A và B bị loại
    eliminated: false,
  },
};

// Cây hội thoại phỏng vấn — mỗi nghi phạm có các "node" trả lời, mở khóa dần theo chứng cứ đã trình
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
      },
      {
        id: 'afterMomo',
        prompt: 'Đúng là cậu đã chuyển khoản thật, nhưng sao Vy vẫn nhắn với Chi tối thứ Tư là "chuyện tiền nong vẫn chưa xong"?',
        reply:
          '...Tao chuyển tiền rồi, nhưng Vy nói còn giận vì tao giấu chuyện thiếu tiền cả tuần không nói ai biết. Vy dọa sẽ nói cho cả nhóm là tao "không đáng tin". Tao sợ mất mặt nên có nhắn xin Vy đừng nói ra... Tối đó tao ngồi máy làm bài suốt mà, có nghỉ đâu.',
        requiresEvidence: 'momoTransfer',
        unlocksNext: 'confrontCursor',
      },
      {
        id: 'confrontCursor',
        prompt:
          'Log hệ thống trường có một khoảng trống 21:36–21:40 không ghi nhận hoạt động. Cậu chắc là không rời máy chứ?',
        reply:
          'Tao thề tao không rời máy phút nào! Mày xem ảnh chụp màn hình cuộc gọi lúc đó đi, con trỏ chuột của tao vẫn di chuyển suốt mà — Chi chụp lại lúc tìm nút tắt mic đó.',
        requiresEvidence: 'schoolSystemLog',
        unlocksNext: null,
        eliminatesHypothesis: null, // chỉ loại khi CẢ hai chứng cứ đã trình (xem logic trong App)
      },
    ],
  },
  chi: {
    suspectId: 'chi',
    nodes: [
      {
        id: 'intro',
        prompt: 'Chi ơi, tối hôm đó ngoài nhóm chat chính, cậu với Vy có nhắn gì riêng không?',
        reply: 'Có... nhưng chuyện đó không liên quan gì đến việc Vy mất tích đâu, đừng hỏi nữa được không?',
        requiresEvidence: null,
        unlocksNext: 'afterVoiceDraft',
      },
      {
        id: 'afterVoiceDraft',
        prompt: 'Tớ tìm thấy một đoạn tin nhắn thoại nháp cậu định gửi cho Vy. Cậu định nói gì vậy?',
        reply:
          'Được rồi... tao định tỏ tình với Vy tối hôm đó qua tin nhắn thoại, nhưng cuối cùng không dám gửi, xóa đi lúc 21:44. Camera webcam của tao trong buổi gọi vẫn bật suốt mà, mọi người xem lại video là thấy.',
        requiresEvidence: 'chiVoiceDraft',
        unlocksNext: 'confrontCallHistory',
      },
      {
        id: 'confrontCallHistory',
        prompt: 'Webcam bật không có nghĩa là cậu không dùng điện thoại khác để nhắn tin riêng cho Vy. Có không?',
        reply:
          'Không hề! Mày xem lịch sử cuộc gọi/tin nhắn của tao đi, tao không gọi hay nhắn cho ai ngoài nhóm chat chính tối đó cả — chỉ ngồi tự dằn vặt vì không dám gửi đoạn ghi âm thôi.',
        requiresEvidence: 'chiVoiceDraft',
        unlocksNext: null,
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
        unlocksNext: null, // Khóa cho đến khi cả A và B bị loại (xử lý trong App)
      },
      {
        id: 'confronted',
        prompt:
          'Tớ biết Vy đã rời bàn học lúc 21:36, không phải 21:47. Và cái ảnh "thấy Vy ở quán trà sữa" là ảnh giả — ai đó dựng lên. Cậu biết gì mà chưa nói phải không?',
        reply:
          '...Được rồi. Vy nhờ tao giữ bí mật. Tối đó, sau khi nói "buồn ngủ" để thoát khỏi phòng chat — thật ra là tao gõ hộ dòng đó, còn Vy đã tắt camera từ trước và đi ra ngoài từ 21:36. Vy nhờ tao đăng cái ảnh giả kia sáng nay để mọi người nghĩ Vy vẫn ở gần trường, có thời gian để... để Vy đi giải quyết một việc riêng trước khi ai phát hiện ra.',
        requiresEvidence: ['earbudsBluetoothLog', 'fakeCheckinPhoto'],
        unlocksNext: null,
        isFinalConfession: true,
      },
    ],
  },
};

// Thinking Board — các mảnh kết luận đúng cần kéo-thả ghép lại ở Chương 4
export const thinkingBoardSolution = {
  slots: [
    { id: 'who', label: 'Ai', correctAnswer: 'vy', options: ['vy', 'khang', 'chi', 'duc'] },
    {
      id: 'action',
      label: 'Hành động',
      correctAnswer: 'tuYRoiDi',
      options: ['tuYRoiDi', 'bịBắtCóc', 'gặpTaiNạn'],
    },
    {
      id: 'accomplice',
      label: 'Người giúp giấu',
      correctAnswer: 'duc',
      options: ['khang', 'chi', 'duc'],
    },
    {
      id: 'motive',
      label: 'Động cơ',
      correctAnswer: 'sợHãiVìPhátHiệnĐiềuGì',
      options: ['sợHãiVìPhátHiệnĐiềuGì', 'ápLựcHọcTập', 'mâuThuẫnBạnBè'],
    },
  ],
  conclusionText:
    'Vy không bị hại. Vy chủ động rời đi lúc 21:36 tối thứ Năm, nhờ Đức gõ tin nhắn giả và đăng ảnh giả để che dấu vết, vì Vy phát hiện ra điều gì đó khiến cô ấy sợ hãi và cần thời gian suy nghĩ trước khi nói ra.',
};

export const epilogue = {
  text: `Sau khi Vy được tìm thấy an toàn, Lam tình cờ thấy trên điện thoại Vy một tin nhắn ẩn danh gửi đến 3 ngày trước khi biến mất:

"Cậu cũng để ý thấy giống vụ của anh Minh năm ngoái đúng không? Đừng nói với ai. Im lặng thì an toàn."

Lam (nội tâm): "Vụ của anh Minh năm ngoái...? Mình chưa từng nghe ai nhắc đến chuyện này cả."`,
};
