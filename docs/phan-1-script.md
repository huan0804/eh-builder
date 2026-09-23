# Kịch bản Chi tiết — Phần 1: "Buổi Livestream Cuối Cùng"

> File này triển khai chi tiết Phần 1 đã phác thảo trong `story-bible.md`. Toàn bộ tên riêng là placeholder, có thể đổi tự do trước khi sản xuất chính thức.
>
> **Bản sửa 09/2026**: viết lại cơ chế che giấu và cách loại nghi phạm để vá lỗ hổng logic (xem mục 7). Dữ liệu trong game: `game/src/data/case1.js` — hai file phải luôn khớp nhau.

---

## 0. Bảng nhân vật

| Vai trò | Tên | Ghi chú |
|---|---|---|
| Nhân vật chính (người chơi) | **Lam** (An Lam, lớp 11) | Thành viên CLB Ống Kính, phụ trách quay dựng. Giới tính để trung tính. Hồ sơ đầy đủ: `story-bible.md` mục 2 |
| Trường | **THPT Trúc Lâm** | Hư cấu |
| CLB của Lam | **CLB Ống Kính** (báo trường kiêm quay dựng video) | Có quyền ghi hình các buổi học nhóm online của trường |
| Người giao nhiệm vụ | **Cô Hạnh** (GVCN kiêm chủ nhiệm CLB) | Nhờ Lam xác minh trước khi báo công an |
| Người mất tích | **Vy** (Nguyễn Thảo Vy, lớp 11A2) | Dùng laptop cho buổi học; điện thoại bị khóa và để lại ở nhà |
| Nghi phạm 1 | **Khang** — thủ quỹ nhóm, mâu thuẫn tiền bạc với Vy | Động cơ bề nổi mạnh nhất. Dùng **iPhone** |
| Nghi phạm 2 | **Chi** — thầm thích Vy | Có bí mật thật (ghi âm tỏ tình chưa gửi) nhưng không liên quan. Dùng **Samsung Galaxy** |
| Nghi phạm 3 | **Đức** — người duy nhất Vy tâm sự chuyện muốn tạm rời đi | Người giúp Vy che giấu. Dùng **Redmi Note 12** (không được nêu trực tiếp — người chơi suy ra bằng loại trừ) |

**Chi tiết then chốt**: cả nhóm đều biết mật khẩu tài khoản học nhóm của Vy vì hay đăng nhập hộ nhau tải đề (Khang nói ra ở Chương 2). Nền tảng học nhóm chỉ cho **1 thiết bị/tài khoản** — đăng nhập ở máy mới thì phiên ở máy cũ bị đóng.

---

## 1. Sự thật đằng sau (người chơi không thấy — dùng để kiểm tra logic)

Ba ngày trước, Vy nhận một tin nhắn ẩn danh khiến cô sợ hãi (xem Epilogue). Cô quyết định tạm lánh ở nhà dì (huyện bên) vài ngày để suy nghĩ, để điện thoại ở nhà cho không ai lần ra, và nhờ Đức che giấu.

| Giờ | Chuyện thật sự xảy ra |
|---|---|
| 20:58 | Vy vào phòng học nhóm từ laptop |
| 21:05 | Vy tắt đèn phòng ("cho đỡ chói") → camera Vy tối đen từ đây, không ai thấy cô rời đi |
| 21:34 | Vy gõ trên laptop: "tao đi lấy nước xíu" |
| 21:35 | Mic Vy thu tiếng cửa mở, bước chân |
| 21:36 | Vy tháo tai nghe đặt lên bàn (ngắt Bluetooth), rời nhà. Laptop vẫn trong cuộc gọi |
| 21:36–21:40 | Log hệ thống trường của Khang trống — Khang chuyển sang tab bảng trắng nhóm để giải câu 7 |
| 21:40 | Khang: "Vy ơi câu 7 mày ra gì" — không ai trả lời |
| 21:43–21:44 | Chi cúi xuống điện thoại Samsung: mở lại rồi xóa đoạn ghi âm tỏ tình |
| 21:45–21:47 | Đức tắt mic, cúi đầu. 21:46 đăng nhập tài khoản Vy trên Redmi Note 12, gửi "thôi tao buồn ngủ quá, để mai tính tiếp nha" |
| 21:47 | Phiên laptop Vy bị đóng → "Vy đã rời phòng". Đức lập tức gõ "ơ Vy thoát lẹ vậy" |
| 6:40 thứ Sáu | Đức đăng ảnh giả "Vy ở quán trà sữa gần trường lúc 22:00" lên trang confession trường, chỉnh bằng app AI trên chính chiếc Redmi |

**Vì sao cần Đức**: nếu hết buổi Vy vẫn "treo" trong phòng không trả lời, Khang sẽ gọi điện về nhà Vy như mọi lần và cả nhà phát hiện ngay trong đêm. Ảnh giả kéo việc tìm kiếm về quanh trường, ngược hướng nhà dì.

---

## 1b. Cảnh mở đầu — "Tin nhắn chưa gửi" (trước Prologue)

> Cảnh mở đầu của **cả season**. Mục đích: đặt một nhân vật bí ẩn trước mặt người chơi ngay giây đầu tiên (bài học số 3 từ Black Myth: Wukong — xem `insights-black-myth-wukong.md`), để câu hỏi *"người đó là ai?"* đi theo người chơi qua mọi phần. Người chơi **không điều khiển** gì; bấm để bỏ qua được sau lần xem đầu.

**Thời lượng**: ~25 giây. **Không lời thoại, không nhạc hù dọa** — game không kinh dị, cảnh này phải *hồi hộp nhẹ* chứ không *đáng sợ*: tiếng gõ phím, tiếng quạt trần, một khoảng lặng.

### Kịch bản từng khung

| # | Thời gian | Hình | Âm thanh |
|---|---|---|---|
| 1 | 0–3s | Màn hình đen. Dòng chữ nhỏ góc dưới: *Thứ Hai, 22:17.* | Tiếng quạt trần đều đều |
| 2 | 3–7s | Màn hình một chiếc điện thoại, nhìn từ góc người cầm. Một ô chat mới, **tên người nhận bị che** bởi vệt sáng phản chiếu đèn bàn. Ô nhập liệu trống, con trỏ nhấp nháy | Tiếng quạt |
| 3 | 7–13s | Ngón tay gõ, chữ hiện dần nhưng **mờ, ngoài vùng lấy nét** (chỉ thấy hình dáng dòng chữ, không đọc được). Rồi ngón tay dừng. Xóa một câu. Gõ lại | Tiếng gõ phím điện thoại, chậm |
| 4 | 13–18s | Máy lấy nét lại vào **dòng cuối cùng**, vừa gõ xong: ***"Im lặng thì an toàn."*** Ngón tay dừng trên nút gửi. Một nhịp lặng | Quạt tắt dần — im lặng |
| 5 | 18–21s | Bấm gửi. Bong bóng tin nhắn bay lên. Trong một khoảnh khắc, danh sách chat lướt qua phía sau: một cuộc trò chuyện **đã lưu trữ**, tên chỉ còn chữ **"M."**, ngày *"thg 4, năm ngoái"*, dòng xem trước: *"Im lặng thì an toàn."* | Một tiếng "tách" nhỏ khi gửi |
| 6 | 21–23s | Màn hình điện thoại tắt, đen, phản chiếu mờ **một bóng người không rõ mặt** | Im lặng |
| 7 | 23–25s | Cắt sang: đèn đỏ **● REC** nhấp nháy trên một chiếc máy quay — vào Prologue, phòng CLB Ống Kính của Lam | Tiếng bíp bắt đầu ghi hình |

### Quy tắc fair-play cho cảnh này
- **Không làm lộ lời giải Phần 1**: người nhận bị che, nội dung chính bị mờ — người chơi không biết tin nhắn gửi cho ai, không đọc được câu *"giống vụ của anh Minh năm ngoái"*. Chỉ dòng cuối được lấy nét.
- **Trả thưởng ở Epilogue**: khi Vy mở điện thoại cho Lam xem, bong bóng tin nhắn hiện **giống hệt** khung 4-5 (cùng giờ *Thứ Hai 22:17*). Người chơi nhận ra trước cả Lam — Lam chưa từng thấy cảnh mở đầu.
- **Chi tiết "M." — thg 4 năm ngoái**: khớp Phần 2 (anh Minh nhận "Im lặng thì an toàn" một ngày sau khi trang trả lời, tháng 4 năm ngoái). Người chơi Phần 1 chưa hiểu được; người chơi Phần 2 sẽ nhận ra.
- **Không gài chi tiết nào về danh tính người gửi** (giới tính, tuổi, đồ vật, nơi chốn). Kẻ đứng sau season chưa được chốt — mọi chi tiết hình ảnh ở đây phải trung tính để không trói tay Phần 3.

### Chủ ý để ngỏ (quan trọng cho cả season)
Cảnh cố ý **không cho biết đây là lời đe dọa hay lời cảnh báo**. Ngón tay ngập ngừng, xóa rồi gõ lại — một kẻ đe dọa thì cần gì do dự? Người chơi có thể hiểu theo cả hai cách. Hai cách hiểu này là chất liệu cho giả thuyết của fan (bài học số 6) và để ngỏ khả năng ở Phần 3+: *người gửi tin nhắn và kẻ đứng sau đường dây bán đề có phải là một người không?* — chốt khi viết Phần 3.

### Ghi chú triển khai
- Dựng bằng HTML/CSS trong game (khung điện thoại + hiệu ứng mờ/lấy nét + hoạt ảnh gõ chữ) — không cần video, nhẹ cho điện thoại tầm trung.
- Lưu cờ "đã xem cảnh mở đầu" trong save để hiện nút **Bỏ qua** từ lần thứ hai.

---

## 2. Prologue

Giờ ra chơi sáng thứ Sáu, phòng CLB Ống Kính. Lam đang sắp xếp kho video cũ trên máy chung — trên màn hình lướt qua vài thư mục: *"Khai giảng"*, *"Hội trại 26-3 (năm ngoái)"*, *"Học nhóm online"*... *(Chi tiết gài sẵn cho cả season — không nhấn mạnh.)*

> **Lam** (nội tâm): "Quay phim thì dễ. Cái khó là biết cắt đoạn nào. Mà thôi — máy quay không nói dối, chỉ có người dựng là hay nói dối thôi."

Sáng nay Vy không đến lớp. Mẹ Vy gửi Cô Hạnh laptop, điện thoại (bị khóa) và tai nghe Vy để lại trên bàn học.

> **Cô Hạnh**: "Lam này, con biết tin Vy lớp 11A2 chưa đến lớp sáng nay chứ? Gia đình đang rất lo, nhưng công an nói chưa đủ 24 tiếng nên chưa thể vào cuộc chính thức. CLB Ống Kính có quay lại buổi học nhóm tối qua đúng không? Mình xác minh trước, đỡ làm gia đình hoảng thêm nếu chưa chắc chắn. Mẹ Vy cũng gửi cô laptop, điện thoại và tai nghe Vy để lại — điện thoại thì khóa, nhưng laptop con xem được."
>
> **Lam**: "Dạ, con sẽ xem lại bản ghi ạ. Cô cho con hỏi thêm vài bạn trong nhóm được không ạ?"
>
> **Cô Hạnh**: "Được, nhưng hỏi han thôi, đừng làm quá lên. Có gì nghiêm trọng, báo cô ngay."

---

## 3. Chương 1 — "Buổi tối cuối cùng"

**Mục tiêu gameplay**: làm quen giao diện quan sát (bản ghi video 4 khung, chat, kênh âm thanh riêng từng người).

**Chat log (chứng cứ công khai)**:

```
21:02  Khang: mọi người load đề chưa, tao gửi link rồi đó
21:05  Vy: đợi tao xíu, đang tắt đèn phòng cho đỡ chói màn hình
21:10  Chi: câu 7 tao ra đáp án B, ai ra giống không
21:11  Đức: tao ra C, để check lại đề
21:34  Vy: tao đi lấy nước xíu
21:40  Khang: Vy ơi câu 7 mày ra gì
21:46  Vy: thôi tao buồn ngủ quá, để mai tính tiếp nha
21:47  [Vy đã rời khỏi phòng học nhóm]
21:47  Đức: ơ Vy thoát lẹ vậy
21:48  Chi: chắc buồn ngủ thật á
```

> **Lam** (nội tâm): "Cả buổi, khung hình của Vy chỉ là một màu đen. Không ai thấy Vy rời đi — vì chẳng có gì để thấy."

**Vật thể hai tầng — tai nghe của Vy**:
- *Tầng công cụ*: cắm tai nghe vào laptop Vy để nghe riêng kênh mic của Vy trong bản ghi. 21:35: tiếng cửa mở, bước chân; sau đó chỉ còn tiếng quạt — phòng trống.
- *Tầng chứng cứ*: log Bluetooth trên laptop — tai nghe **ngắt lúc 21:36**, 10 phút *trước* dòng "buồn ngủ".

**Chứng cứ phụ tìm thấy cùng lúc**: ảnh chuyển khoản MoMo (trong thư mục chung của nhóm trên laptop Vy); tin nhắn thoại nháp của Chi (tự đồng bộ lên máy tính chung của CLB, nơi Chi từng đăng nhập tài khoản đám mây).

**Kết luận người chơi tự rút ra**: Vy rời phòng từ 21:36 và không quay lại → **ai đã gõ dòng "buồn ngủ" lúc 21:46?** Chưa trả lời được.

---

## 4. Chương 2 — "Ba người bạn cùng nhóm"

**Mục tiêu gameplay**: phỏng vấn kiểu "trình đúng chứng cứ để hỏi tiếp". Mỗi người có ngoại phạm bề mặt hợp lý nhưng còn khe hở. Kết thúc chương, **cả 3 giả thuyết vẫn mở**.

### Giả thuyết A — Khang giúp Vy vì hối lỗi chuyện quỹ tiền

> **Lam**: "Khang này, tuần trước Vy có nhắc gì đến chuyện quỹ nhóm không?"
> **Khang**: "À... có, nhưng giải quyết xong rồi mà. Tao trả lại tiền cho Vy hôm thứ Ba rồi."
>
> **Lam** *[Trình: ảnh chuyển khoản MoMo]*: "Đúng là cậu đã chuyển khoản thật, nhưng hôm thứ Tư Vy vẫn nhắn trong nhóm là 'từ tuần sau quỹ để tao tự giữ'. Sao vậy?"
> **Khang**: "...Vy còn giận vì tao giấu chuyện thiếu tiền cả tuần, dọa nói với cả nhóm là tao 'không đáng tin'. Tao có nhắn xin Vy đừng nói ra. Nhưng tối đó tao ngồi máy làm bài suốt, có nghỉ đâu. Mà cả nhóm ai chẳng biết mật khẩu tài khoản Vy, hay đăng nhập hộ nhau tải đề mà."
>
> **Lam** *[Trình: log hệ thống trường]*: "Log hệ thống trường có khoảng trống 21:36–21:40 — đúng lúc Vy rời nhà. Cậu chắc là không rời máy chứ?"
> **Khang**: "Tao chuyển sang tab bảng trắng của nhóm để giải câu 7 thôi! Mày xem lịch sử chỉnh sửa bảng trắng đi, từng nét đều có giờ."
> *(Mở khóa bước thu thập: lịch sử chỉnh sửa bảng trắng.)*

**Khe hở**: động cơ rõ + khoảng trống log trùng giờ Vy rời đi + biết mật khẩu Vy.

### Giả thuyết B — Chi giúp Vy vì biết bí mật riêng của Vy

> **Lam**: "Chi ơi, tối hôm đó ngoài nhóm chat chính, cậu với Vy có nhắn gì riêng không?"
> **Chi**: "Có... hồi đầu buổi, hỏi bài thôi. Chuyện đó không liên quan gì đến việc Vy mất tích đâu, đừng hỏi nữa được không?"
>
> **Lam** *[Trình: tin nhắn thoại nháp]*: "Tớ tìm thấy một đoạn tin nhắn thoại nháp cậu định gửi cho Vy. Cậu định nói gì vậy?"
> **Chi**: "Được rồi... tao định tỏ tình với Vy qua tin nhắn thoại, nhưng không dám gửi, xóa đi rồi. Webcam tao bật suốt buổi mà, mọi người xem lại là thấy."
>
> **Lam** *[Trình: bản ghi buổi học]*: "Webcam thấy cậu cúi xuống điện thoại lúc 21:43–21:44 — chỉ vài phút trước dòng 'buồn ngủ' của Vy. Lúc đó cậu làm gì?"
> **Chi**: "Tao... mở lại đoạn ghi âm đó rồi xóa đi. Chỉ vậy thôi. Mày xem thông tin đồng bộ trên máy tao là thấy giờ xóa mà."

**Khe hở**: Chi dùng điện thoại đúng khung giờ nhạy cảm, và biết mật khẩu Vy.

### Giả thuyết C — Đức giúp Vy giấu đi

> **Lam**: "Đức này, cậu để ý thấy Vy dạo này có gì khác thường không?"
> **Đức**: "Vy vẫn bình thường mà, học hành, làm bài đầy đủ. Tao không thấy gì lạ cả."

**Khe hở**: rất nhỏ — mic Đức tắt 21:45–21:47 (thấy trong bản ghi), nhưng ai chẳng có lúc tắt mic. Chưa hỏi sâu được.

---

## 5. Chương 3 — "Dữ liệu không biết nói dối"

**Mục tiêu gameplay**: đối chiếu thời gian + thiết bị. Chứng cứ do Cô Hạnh xin phép, có giới hạn:

1. **Nhật ký truy cập phòng học**: Vy vào 20:58 từ *Laptop*. **21:46**: tài khoản Vy đăng nhập từ thiết bị mới **Redmi Note 12**, gửi dòng "buồn ngủ" → phiên laptop bị đóng 21:47. Xác nhận có người dùng tài khoản Vy.
2. **Log hệ thống học tập trường**: Khang làm bài 21:36–22:15, trống 21:36–21:40 → thoạt nhìn *tăng* nghi ngờ Khang.
3. **Lịch sử chỉnh sửa bảng trắng** (mở khóa sau khi hỏi Khang về khoảng trống): Khang sửa liên tục 21:33–21:48, kể cả lúc 21:46.
4. **Ảnh check-in giả**: bóng đổ sai hướng, ngón tay lỗi tỉ lệ; dữ liệu ảnh (EXIF): chỉnh bằng app AI trên **Redmi Note 12**, đăng 6:40 sáng thứ Sáu → cùng thiết bị đã làm cả hai việc che giấu.
5. **Lịch sử tìm kiếm trên laptop Vy** (3 ngày trước): "tin nhắn ẩn danh có truy ra người gửi không", "làm gì khi biết một chuyện nguy hiểm" → manh mối động cơ.

> **Lam** (nội tâm, khi soi ảnh check-in): "Bóng đổ sai hướng. Ngón tay thừa một đốt. Tớ vẫn nghĩ máy quay không nói dối... nhưng có vẻ ảnh thì biết."

**Loại giả thuyết A** (người chơi tự chọn tổ hợp): nhật ký truy cập (thủ phạm dùng Redmi) + ảnh MoMo (giao diện iOS → Khang dùng iPhone) + lịch sử bảng trắng (lúc 21:46 Khang đang viết liên tục). *Được phép kèm*: log trường, bản ghi buổi học.

**Loại giả thuyết B**: nhật ký truy cập + tin nhắn thoại nháp (đồng bộ từ Samsung, mở 21:43, xóa 21:44 → giải thích lần cầm điện thoại) + bản ghi buổi học (21:46 Chi đang đọc lời giải trước webcam).

**Kết luận chương**: chỉ còn giả thuyết C. Người chơi đến đây bằng loại trừ có căn cứ, không phải vì Đức "trông đáng ngờ".

---

## 6. Chương 4 — Đối chất, kết luận, hook

### Đối chất Đức

Chỉ mở khi A và B đã bị loại. Người chơi phải trình: **log Bluetooth tai nghe + nhật ký truy cập + ảnh giả** (được kèm: bản ghi buổi học, lịch sử tìm kiếm).

> **Lam** (nội tâm): "Bình thường tớ đưa bằng chứng cho cô Hạnh là xong. Lần này thì phải tự nói — với một người bạn."
>
> **Lam**: "Đức... tớ không giỏi mấy chuyện này, nên tớ nói thẳng. Vy rời phòng từ 21:36. Dòng 'buồn ngủ' lúc 21:46 được gửi từ một chiếc Redmi Note 12 — và ảnh trà sữa cũng được chỉnh trên đúng chiếc Redmi đó. Lúc 21:46 cậu tắt mic, cúi đầu, rồi một phút sau là người đầu tiên hỏi 'ơ Vy thoát lẹ vậy'."
>
> **Đức** *(im lặng rất lâu)*: "...Vy nhờ tao. Nó gõ 'đi lấy nước' rồi đi luôn, để laptop lại trong phòng. Tao đăng nhập tài khoản nó trên điện thoại tao, gõ câu buồn ngủ để mọi người khỏi gọi về nhà nó như mọi lần. Sáng nay tao đăng cái ảnh kia để mọi người đi tìm quanh trường, trong khi Vy về nhà dì ở huyện bên. Vy bảo nó thấy một thứ khiến nó sợ, cần vài ngày để nghĩ... nhưng không chịu kể là gì."

### Thinking Board

| Ô | Lựa chọn | Đáp án |
|---|---|---|
| Chuyện gì xảy ra với Vy | Tự ý rời đi / Bị người khác đưa đi / Gặp tai nạn | Tự ý rời đi |
| Vy thật sự rời đi lúc | 21:34 / 21:36 / 21:47 | 21:36 |
| Người giúp che giấu | Khang / Chi / Đức | Đức |
| Cách che giấu | Gõ tin nhắn từ thiết bị khác + ảnh giả / Xóa tin nhắn trong nhóm / Tắt camera Vy từ xa | Gõ tin nhắn từ thiết bị khác + ảnh giả |
| Động cơ | Sợ hãi vì phát hiện điều gì đó / Áp lực học tập / Mâu thuẫn bạn bè | Sợ hãi (lịch sử tìm kiếm + lời Đức) |

> "Vy không bị hại. Vy chủ động rời nhà lúc 21:36 tối thứ Năm. Đức dùng tài khoản của Vy trên điện thoại mình để giả tin nhắn 'buồn ngủ', rồi đăng ảnh giả để che dấu vết, vì Vy phát hiện ra điều gì đó khiến cô sợ hãi và cần thời gian trước khi nói ra."

### Hook sang Phần 2 (Epilogue)

Vy được tìm thấy an toàn ở nhà dì. Để giải oan cho Đức, Vy tự mở khóa điện thoại cho Lam xem một tin nhắn ẩn danh gửi 3 ngày trước khi cô rời đi — *Thứ Hai, 22:17* *(hiệu ứng: bong bóng tin nhắn hiện giống hệt cảnh mở đầu; lần này lấy nét đầy đủ)*:

> *"Cậu cũng để ý thấy giống vụ của anh Minh năm ngoái đúng không? Đừng nói với ai. Im lặng thì an toàn."*

**Lam** (nội tâm): "Vụ của anh Minh năm ngoái...? Mình chưa từng nghe ai nhắc đến chuyện này cả. Vy đã chọn im lặng vì câu đó. Còn mình — mình quay lại mọi thứ, nhưng chưa bao giờ phải nói ra điều gì."

---

## 7. Ghi chú thiết kế

- **Chứng cứ Phần 1 (9)**: bản ghi buổi học, tai nghe + log Bluetooth, ảnh MoMo, tin nhắn thoại nháp của Chi, nhật ký truy cập phòng học, log hệ thống trường, lịch sử bảng trắng, ảnh check-in giả, lịch sử tìm kiếm của Vy.
- **Nguyên tắc loại trừ**: một giả thuyết "X giúp Vy" chỉ bị loại khi chứng minh được X *không thể* thực hiện các hành động che giấu (gửi tin từ Redmi lúc 21:46), không phải chỉ vì X "không rời máy" — người giúp thật cũng không rời máy.
- **Hai hướng nhiễu có lời giải**: khoảng trống log của Khang (giải thích bằng bảng trắng) và lần cầm điện thoại của Chi (giải thích bằng việc xóa ghi âm). Đức có một manh mối mờ (tắt mic 21:45–21:47, câu "ơ Vy thoát lẹ vậy" giả vờ ngạc nhiên) để người chơi tinh ý có thể nghi sớm, nhưng không đủ để kết luận.
- **Cơ chế trong game**: giả thuyết không tự loại khi thu thập chứng cứ. Người chơi phải phỏng vấn đến node cuối của nghi phạm, rồi chọn đúng tổ hợp chứng cứ. Khi phỏng vấn, trình sai chứng cứ thì nghi phạm phản hồi "không liên quan".
- **Thời lượng ước tính** (cần đo bằng prototype): Chương 1 ~5-7 phút, Chương 2 ~10-12 phút, Chương 3 ~8-10 phút, Chương 4 ~5 phút → tổng ~30-35 phút.
- **Lịch sử sửa đổi**: bản trước từng có các lỗ hổng — loại Khang bằng "không rời máy"; lời thú nhận của Đức mâu thuẫn mốc giờ chat log; Chi tự mâu thuẫn về việc nhắn riêng; "ảnh chụp màn hình" dùng để chứng minh hoạt động kéo dài 7 phút; tai nghe xuất hiện vô lý ở phòng CLB; động cơ ở Thinking Board không có manh mối trước đó. Nguồn gốc cấu trúc 3 giả thuyết song song: phản biện Mom Test với persona Thu Trang (so sánh với Golden Idol).
