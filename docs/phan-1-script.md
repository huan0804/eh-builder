# Kịch bản Chi tiết — Phần 1: "Buổi Livestream Cuối Cùng"

> File này triển khai chi tiết Phần 1 đã phác thảo trong `story-bible.md`. Toàn bộ tên riêng dưới đây là placeholder gợi ý — có thể đổi tự do trước khi sản xuất chính thức.

---

## 0. Bảng tên nhân vật (đề xuất)

| Vai trò | Tên đề xuất | Ghi chú |
|---|---|---|
| Nhân vật chính (người chơi) | **Lam** (An Lam, lớp 11) | Tên trung tính, dễ xưng hô ở ngôi thứ nhất/thứ hai tùy thiết kế |
| Trường | **THPT Trúc Lâm** | Tên hư cấu, không trùng trường thật cụ thể nào |
| CLB của Lam | **CLB Ống Kính** (báo trường kiêm truyền thông, tự quay/dựng video sự kiện trường) | Lý do tự nhiên để "có máy quay, có quyền phỏng vấn, biết chỉnh sửa video/ảnh" |
| Giáo viên phụ trách / người giao nhiệm vụ | **Cô Hạnh** (GVCN kiêm chủ nhiệm CLB Ống Kính) | Người "nhờ" Lam xác minh trước khi báo lên trên |
| Nạn nhân (người mất tích) | **Vy** (Nguyễn Thảo Vy, lớp 11, cùng nhóm ôn thi với 3 nghi phạm) | |
| Nghi phạm 1 | **Khang** — bạn thân của Vy trong nhóm, có mâu thuẫn tiền bạc (quỹ nhóm ôn thi) | Động cơ bề nổi mạnh nhất → dễ bị nghi oan |
| Nghi phạm 2 | **Chi** — thầm thích Vy, hay nhắn tin riêng cho Vy | Có bí mật (tin nhắn tỏ tình chưa gửi) nhưng không liên quan vụ mất tích |
| Nghi phạm 3 | **Đức** — người duy nhất biết Vy định rời nhóm, giấu chuyện này | Là người "giúp" Vy giấu đi ở Chương 4 |

---

## 1. Bối cảnh khởi đầu (Prologue/Intro — trước Chương 1)

**Bối cảnh**: Nhóm 4 bạn (Vy, Khang, Chi, Đức) cùng ôn thi học kỳ, thường livestream buổi tối trong nhóm chat riêng (dùng nền tảng học nhóm online) để cùng giải bài, có ghi hình lại để xem lại sau. Tối thứ Năm, buổi livestream kết thúc lúc 21:47. Sáng thứ Sáu, Vy không đến lớp, không ai liên lạc được.

**Lời thoại mở đầu (Cô Hạnh giao nhiệm vụ cho Lam)**:

> **Cô Hạnh**: "Lam này, con biết tin Vy lớp 11A2 chưa đến lớp sáng nay chứ? Gia đình đang rất lo, nhưng công an nói chưa đủ 24 tiếng nên chưa thể vào cuộc chính thức. CLB Ống Kính có quay lại vài buổi sinh hoạt nhóm ôn thi tối qua đúng không? Cô muốn con xem giúp cô, xem có manh mối gì không — mình xác minh trước, đỡ làm gia đình hoảng thêm nếu chưa chắc chắn."
>
> **Lam**: "Dạ, con sẽ xem lại bản ghi ạ. Nhưng cô cho con xin phép hỏi thêm vài bạn trong nhóm được không ạ?"
>
> **Cô Hạnh**: "Được, nhưng nhớ là hỏi han thôi, đừng làm quá lên. Nếu có gì nghiêm trọng, báo cô ngay để cô báo công an."

---

## 2. Chương 1 — "Buổi tối cuối cùng"

### Mục tiêu gameplay
Người chơi làm quen giao diện quan sát (xem lại video call/chat log) + Thinking Board cơ bản.

### Cảnh 1: Xem lại bản ghi livestream
Người chơi được xem một đoạn ghi hình (dạng UI giả lập cửa sổ video call 4 người) kèm khung chat bên cạnh. Có thể tua đi/lại, click vào từng dòng chat để "ghim" làm chứng cứ.

**Nội dung chat log (chứng cứ công khai, người chơi phải tự đọc và rút ra mốc thời gian)**:

```
21:02  Khang: mọi người load đề chưa, tao gửi link rồi đó
21:05  Vy: đợi tao xíu, đang tắt đèn phòng cho đỡ chói màn hình
21:10  Chi: câu 7 tao ra đáp án B, ai ra giống không
21:11  Đức: tao ra C, để check lại đề
21:34  Vy: thôi tao buồn ngủ quá, để mai tính tiếp câu này nha
21:40  Khang: okay ngủ ngon, mai gặp
21:47  [Vy đã rời khỏi phòng học nhóm]
21:47  Đức: ơ Vy thoát lẹ vậy
21:48  Chi: chắc buồn ngủ thật á
```

**Vật thể hai tầng (đầu tiên trong game)**: Chiếc tai nghe không dây của Vy, được tìm thấy ở phòng sinh hoạt CLB (nơi nhóm đôi khi họp trực tiếp trước khi chuyển sang online) vào chiều hôm sau.

- *Tầng công cụ*: Người chơi có thể dùng tai nghe kết nối vào máy tính CLB để nghe lại **file âm thanh gốc** (không qua nén video) của buổi livestream — phát hiện một đoạn tiếng ồn nền lúc 21:35 mà bản ghi hình chính không rõ (tiếng cửa mở, tiếng bước chân) — điều mà chat log không hề nhắc tới.
- *Tầng chứng cứ*: Log kết nối Bluetooth của tai nghe (xem trong phần cài đặt điện thoại của Vy, được Cô Hạnh cho phép kiểm tra vì điện thoại Vy để lại ở nhà) cho thấy tai nghe **ngắt kết nối lúc 21:36** — tức là Vy đã rời khỏi bàn học (tháo tai nghe) 11 phút *trước khi* thoát khỏi phòng chat lúc 21:47. Điều này mâu thuẫn với ấn tượng ban đầu rằng "Vy ngồi học đến tận 21:47 rồi buồn ngủ đi ngủ".

**Kết luận Chương 1 (điều người chơi phải tự ghi nhận, không có gợi ý)**: Ai đó (không phải Vy) có thể đã ở lại máy để gõ dòng "thôi tao buồn ngủ quá..." và thoát phòng thay Vy, HOẶC Vy đã rời bàn nhưng vẫn để chat chạy — cả hai khả năng đều mở, cần Chương 2-3 để làm rõ.

---

## 3. Chương 2 — "Ba người bạn cùng nhóm"

> **Cập nhật thiết kế (sau phản biện Mom Test với persona Thu Trang)**: Cấu trúc phỏng vấn KHÔNG còn là "hỏi 1 lượt → loại ngay" cho Khang/Chi. Mỗi người đều có một ngoại phạm *bề mặt* nghe hợp lý, nhưng đều để lại một khe hở nhỏ mà người chơi phải tự nhận ra là chưa đủ chắc chắn. Cả 3 giả thuyết (Khang / Chi / Đức đứng sau việc giúp Vy) đều mở song song đến hết Chương 2 — chỉ được thu hẹp dần ở Chương 3 khi có thêm chứng cứ đối chiếu, và người chơi phải tự ghép nhiều mảnh mới loại được 2 trong 3 giả thuyết. Đây là thay đổi so với bản trước, nơi Khang/Chi bị loại dứt khoát ngay trong Chương 2.

### Mục tiêu gameplay
Cơ chế phỏng vấn dạng "trình chứng cứ để mở khóa câu hỏi tiếp theo" — nhưng lần này, kết thúc Chương 2, người chơi phải rời đi với **3 giả thuyết cùng khả dĩ**, không phải 1.

### Nghi phạm 1: Khang — Giả thuyết A: "Khang giúp Vy vì hối lỗi chuyện quỹ tiền"

**Động cơ bề nổi**: Khang là thủ quỹ nhóm ôn thi (thu tiền mua tài liệu chung). Tuần trước, Vy chất vấn Khang vì quỹ nhóm thiếu 200.000đ.

**Đoạn phỏng vấn mẫu**:

> **Lam**: "Khang này, tuần trước Vy có nhắc gì đến chuyện quỹ nhóm không?"
> **Khang**: "À... có, nhưng giải quyết xong rồi mà. Tao trả lại tiền cho Vy hôm thứ Ba rồi."
>
> *(Nếu người chơi đã thu thập được ảnh chụp màn hình chuyển khoản MoMo từ Chương 1's phòng CLB — Vy có lưu ảnh này trong một thư mục chung của nhóm)*:
>
> **Lam**: *[Trình chứng cứ: Ảnh chuyển khoản MoMo, ghi ngày thứ Ba]* "Đúng là cậu đã chuyển khoản thật, nhưng sao Vy vẫn nhắn với Chi tối thứ Tư là 'chuyện tiền nong vẫn chưa xong'?"
> **Khang**: *(im lặng một lúc)* "...Tao chuyển tiền rồi, nhưng Vy nói còn giận vì tao giấu chuyện thiếu tiền cả tuần không nói ai biết. Vy dọa sẽ nói cho cả nhóm là tao 'không đáng tin'. Tao sợ mất mặt nên có nhắn xin Vy đừng nói ra... Tối đó tao ngồi máy làm bài suốt mà, có nghỉ đâu."

**Ngoại phạm bề mặt của Khang**: "Tao ngồi máy làm bài suốt tối đó" — nghe hợp lý, nhưng chỉ là lời khai, CHƯA có bằng chứng độc lập xác nhận. Người chơi tinh ý sẽ nhận ra: động cơ (sợ mất uy tín, vừa cãi nhau với Vy) + không có gì chứng minh Khang không rời máy — **giả thuyết A vẫn mở**.

### Nghi phạm 2: Chi — Giả thuyết B: "Chi giúp Vy vì biết bí mật riêng của Vy"

**Bí mật**: Chi thầm thích Vy, thường nhắn tin riêng ngoài nhóm chat chính.

**Đoạn phỏng vấn mẫu**:

> **Lam**: "Chi ơi, tối hôm đó ngoài nhóm chat chính, cậu với Vy có nhắn gì riêng không?"
> **Chi**: *(đỏ mặt, ấp úng)* "Có... nhưng chuyện đó không liên quan gì đến việc Vy mất tích đâu, đừng hỏi nữa được không?"
>
> *(Nếu người chơi trình được "ảnh chụp màn hình" một tin nhắn thoại chưa gửi mà Chi vô tình để lộ do đồng bộ trên máy tính chung của CLB)*:
>
> **Lam**: *[Trình chứng cứ: đoạn tin nhắn thoại nháp "Vy ơi, tao muốn nói với cậu một chuyện quan trọng..."]*
> **Chi**: "Được rồi... tao định tỏ tình với Vy tối hôm đó qua tin nhắn thoại, nhưng cuối cùng không dám gửi, xóa đi lúc 21:44. Camera webcam của tao trong buổi gọi vẫn bật suốt mà, mọi người xem lại video là thấy."

**Ngoại phạm bề mặt của Chi**: "Webcam vẫn bật suốt" — nghe như bằng chứng vững, nhưng người chơi tinh ý sẽ đặt câu hỏi: *webcam bật không đồng nghĩa với việc không dùng điện thoại thứ hai để nhắn tin ngoài luồng cùng lúc*. Chi có bí mật thật (tình cảm với Vy) và biết Vy nhiều hơn người khác qua tin nhắn riêng — **giả thuyết B vẫn mở**.

### Nghi phạm 3: Đức — Giả thuyết C: "Đức giúp Vy" (chưa xác nhận, chỉ là một khả năng ngang hàng)

**Manh mối then chốt**: Đức là người duy nhất Vy tâm sự riêng về việc muốn tạm rời nhóm/trường một thời gian — nhưng ở Chương 2, người chơi CHƯA biết điều này, chỉ thấy Đức có vẻ né tránh.

**Đoạn phỏng vấn mẫu (ban đầu Đức né tránh)**:

> **Lam**: "Đức này, cậu để ý thấy Vy dạo này có gì khác thường không?"
> **Đức**: "Vy vẫn bình thường mà, học hành, làm bài đầy đủ. Tao không thấy gì lạ cả."

*(Câu trả lời này CHƯA đủ để mở khóa tiếp — người chơi cần quay lại sau khi có bằng chứng từ Chương 3 mới hỏi được sâu hơn.)*

**Kết thúc Chương 2 — trạng thái Thinking Board**: Ba giả thuyết A/B/C đều được ghim lên bảng, không giả thuyết nào bị gạch bỏ. Đây là điểm khác biệt cốt lõi so với thiết kế cũ: người chơi bước sang Chương 3 với cảm giác thật sự phân vân, không phải đi qua trạm kiểm tra.

---

## 4. Chương 3 — "Dữ liệu không biết nói dối"

### Mục tiêu gameplay
Bảng đối chiếu thời gian (timeline cross-check) + phát hiện chi tiết ảnh chỉnh sửa AI + **2 mảnh chứng cứ bổ sung mới** dùng để thu hẹp 3 giả thuyết còn treo từ Chương 2.

### Chứng cứ số được cấp quyền xem (qua Cô Hạnh, có giới hạn)

**Log đăng nhập hệ thống học tập trường** (bảng thời gian, người chơi tự đối chiếu):

```
21:36 - Khang đăng nhập làm bài tập online (hệ thống trường)
21:40 - Khang tiếp tục làm bài (hoạt động liên tục, có timestamp mỗi 5-10 phút)
21:44 - Chi gửi tin nhắn trong nhóm ôn thi khác ("bài tập môn Văn nộp mai chưa ai làm hả")
22:15 - Khang nộp bài tập online
```

Thoạt nhìn, log này có vẻ xác nhận ngoại phạm của Khang — nhưng người chơi tinh ý sẽ để ý: **khoảng cách 21:36 → 21:40 là 4 phút không có hoạt động nào được ghi lại**, đủ để một người rời máy ngắn rồi quay lại kịp gõ tiếp. Log hệ thống một mình **chưa đủ** để loại Khang — cần chứng cứ bổ sung dưới đây.

**Chứng cứ bổ sung 1 — Ảnh chụp màn hình cuộc gọi nhóm (do Chi vô tình chụp lại lúc đang loay hoay tìm nút tắt mic)**: Trong ảnh, có thể thấy khung nhỏ hiển thị con trỏ chuột của Khang di chuyển liên tục trên màn hình chia sẻ trong suốt khung giờ 21:34–21:41 (tính năng "hiện con trỏ người dùng khác" của phần mềm học nhóm). Đây là chứng cứ **độc lập với lời khai của Khang** — người chơi phải tự đối chiếu mốc giờ trong ảnh với log hệ thống để nhận ra: con trỏ chuột hoạt động liên tục nghĩa là Khang **không hề rời máy** trong đúng khung giờ nghi vấn → **giờ mới thực sự loại được giả thuyết A.**

**Chứng cứ bổ sung 2 — Lịch sử cuộc gọi/tin nhắn của Chi (Cô Hạnh xin phép phụ huynh Chi cho xem, chỉ giới hạn khung giờ tối hôm đó)**: Danh sách hiển thị Chi không hề gọi hay nhắn tin cho bất kỳ ai ngoài nhóm chat chính trong suốt tối đó — kể cả không có "điện thoại thứ hai" nào được dùng để liên lạc riêng với Vy như người chơi có thể đã nghi ngờ. Chi chỉ đang dùng điện thoại để... lướt xem lại và xóa đi đoạn tin nhắn thoại chưa gửi (khớp với lời khai) → **loại được giả thuyết B.**

**Ảnh check-in bị chỉnh sửa AI**: Một tài khoản mạng xã hội ẩn danh đăng ảnh "thấy Vy ở quán trà sữa gần trường lúc 22:00 tối đó" kèm ảnh chụp mờ. Người chơi có công cụ đơn giản trong game (phóng to, so sánh) để phát hiện: bóng đổ trong ảnh sai hướng so với đèn đường thật ở địa điểm đó, và số ngón tay ở bàn tay cầm ly trà sữa trong ảnh bị lỗi (5 ngón nhưng tỉ lệ bất thường) — dấu hiệu ảnh dùng app chỉnh sửa AI ghép mặt, không phải ảnh thật.

**Kết luận Chương 3**: Chỉ sau khi ghép ĐỦ 4 mảnh (log hệ thống + con trỏ chuột Khang + lịch sử liên lạc Chi + ảnh giả) người chơi mới loại được cả giả thuyết A và B, còn lại duy nhất giả thuyết C (Đức) — và phát hiện thêm rằng có người **chủ động che giấu** sự thật bằng ảnh giả, không phải một vụ mất tích ngẫu nhiên.

*(Sau khi có đủ 4 mảnh chứng cứ này, người chơi có thể quay lại phỏng vấn Đức — giờ là giả thuyết duy nhất còn đứng vững, nhưng người chơi đến đây bằng cách LOẠI TRỪ có căn cứ, không phải vì Đức "trông đáng ngờ nhất" từ đầu.)*

---

## 5. Chương 4 — "Kết luận Phần 1 + Hé lộ"

### Phỏng vấn lại Đức (sau khi có đủ bằng chứng)

> **Lam**: *[Trình chứng cứ: Log Bluetooth tai nghe ngắt lúc 21:36 + Ảnh check-in giả bị phát hiện]* "Đức, tớ biết Vy đã rời bàn học lúc 21:36, không phải 21:47. Và cái ảnh "thấy Vy ở quán trà sữa" là ảnh giả — ai đó dựng lên. Cậu biết gì mà chưa nói phải không?"
>
> **Đức**: *(thở dài, im lặng một lúc)* "...Được rồi. Vy nhờ tao giữ bí mật. Tối đó, sau khi nói 'buồn ngủ' để thoát khỏi phòng chat — thật ra là tao gõ hộ dòng đó, còn Vy đã tắt camera từ trước và đi ra ngoài từ 21:36. Vy nhờ tao đăng cái ảnh giả kia sáng nay để mọi người nghĩ Vy vẫn ở gần trường, có thời gian để... để Vy đi giải quyết một việc riêng trước khi ai phát hiện ra."

### Sự thật (Thinking Board — người chơi tự ghép kết luận cuối)

Người chơi dùng Thinking Board kéo-thả các mảnh: **[Vy]** + **[tự ý rời đi lúc 21:36]** + **[nhờ Đức che giấu bằng ảnh giả]** + **[động cơ: phát hiện điều gì đó khiến sợ hãi]** → ghép thành kết luận:

> "Vy không bị hại. Vy chủ động rời đi lúc 21:36 tối thứ Năm, nhờ Đức gõ tin nhắn giả và đăng ảnh giả để che dấu vết, vì Vy phát hiện ra điều gì đó khiến cô ấy sợ hãi và cần thời gian suy nghĩ trước khi nói ra."

### Hook sang Phần 2

Sau khi Vy được tìm thấy an toàn (ở nhà một người họ hàng, không nguy hiểm), Lam tình cờ thấy trên điện thoại Vy (được Vy tự nguyện cho xem để "giải oan" cho Đức) một tin nhắn ẩn danh gửi đến 3 ngày trước khi biến mất:

> *Tin nhắn ẩn danh*: "Cậu cũng để ý thấy giống vụ của anh Minh năm ngoái đúng không? Đừng nói với ai. Im lặng thì an toàn."

**Lam** (nội tâm): "Vụ của anh Minh năm ngoái...? Mình chưa từng nghe ai nhắc đến chuyện này cả."

*(Kết thúc Phần 1 — mở ra bí ẩn xuyên suốt cho Phần 2: "anh Minh" là ai, "vụ năm ngoái" là gì, và tại sao có người muốn Vy im lặng.)*

---

## 6. Ghi chú thiết kế (để chuyển sang bàn công nghệ)

- Tổng số "vật thể hai tầng"/chứng cứ trong Phần 1: **7** (tai nghe, ảnh MoMo, tin nhắn thoại nháp của Chi, log hệ thống trường, ảnh con trỏ chuột Khang, lịch sử liên lạc Chi, ảnh check-in giả) — tăng so với bản đầu (5) sau khi bổ sung 2 chứng cứ mới để hỗ trợ cấu trúc 3-hướng-song-song.
- **Cơ chế 3 giả thuyết song song (mới, quan trọng)**: Thinking Board cần hỗ trợ trạng thái "nhiều giả thuyết cùng treo, chưa xác định" — không chỉ là danh sách nghi phạm tick đúng/sai tuần tự. Về mặt kỹ thuật, mỗi giả thuyết (A/B/C) cần một tập điều kiện "đủ chứng cứ để loại" độc lập — đây là điểm cần bàn kỹ ở buổi thảo luận công nghệ (state machine cho suy luận, không chỉ UI kéo-thả).
- Cơ chế phỏng vấn "trình chứng cứ để hỏi tiếp" cần một hệ thống đơn giản: mỗi nghi phạm có 2-3 lớp câu trả lời, chỉ mở lớp sâu hơn khi trình đúng chứng cứ.
- Độ dài ước tính mỗi chương (giả định, CẦN kiểm chứng bằng prototype thực tế, đã tăng nhẹ do thêm chứng cứ): Chương 1 ~5-7 phút, Chương 2 ~10-12 phút (3 giả thuyết cần thời gian cân nhắc), Chương 3 ~8-10 phút (đối chiếu nhiều mảnh), Chương 4 ~5 phút → tổng Phần 1 ước tính **30-35 phút** chơi thực — con số này quyết định trực tiếp tiềm năng doanh thu rewarded-ads đã bàn trong kế hoạch kinh doanh, và tăng nhẹ so với ước tính ban đầu là tín hiệu tích cực cho mô hình ads-first (thời lượng chơi dài hơn → nhiều cơ hội rewarded-ads hơn).
- **Nguồn gốc thay đổi này**: Phản biện Mom Test với persona Thu Trang (sinh viên) chỉ ra cấu trúc "phỏng vấn 1 lượt rồi loại" khiến trải nghiệm giống đọc truyện tuyến tính hơn là tự suy luận, so sánh trực tiếp với Golden Idol — nơi luôn có ít nhất 2 khả năng khiến người chơi thực sự phân vân. Đây cũng là lý do người dùng yêu cầu tổng quát hóa nguyên tắc "2-3 hướng suy luận song song" cho mọi vụ án trong game, không riêng Phần 1.
