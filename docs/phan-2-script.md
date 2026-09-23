# Kịch bản Chi tiết — Phần 2: "Hộp Thư Ẩn Danh"

> Tiếp nối Phần 1 ("Buổi Livestream Cuối Cùng"). Toàn bộ tên riêng là placeholder, có thể đổi tự do. Chưa có dữ liệu game (`case2.js`) — khi triển khai, file đó và file này phải luôn khớp nhau.
>
> **Bản sửa sau phản biện PersonaTwin (09/2026)** — xem mục 8. Đã vá: vì sao Bảo tin tài khoản giả, bỏ sự trùng hợp địa chỉ, bỏ manh mối dâng sẵn "Ngân là em Minh", giảm giải thích kỹ thuật, thêm một nhịp nghi ngờ cho Ngân.
>
> **Điểm khác Phần 1 (để người chơi không thấy lặp lại)**:
> - Phần 1: người mất tích *tự nguyện* rời đi, có người giúp. Phần 2: người mất tích bị *lừa* đi — và việc biến mất chỉ là phương tiện, mục tiêu thật nằm ở chỗ khác.
> - Vụ án có **hai giai đoạn**: tìm ra người mất tích (gấp, trong đêm), rồi mới tìm ra kẻ đứng sau.
> - Thủ phạm là người **tỏ ra giúp đỡ nhiều nhất**, và có ngoại phạm bề mặt mạnh nhất ("không biết mật khẩu").

---

## 0. Bảng nhân vật

| Vai trò | Tên | Ghi chú |
|---|---|---|
| Nhân vật chính | **Lam** (lớp 11) | Thành viên CLB Ống Kính, phụ trách quay dựng; được biết đến sau vụ của Vy. **Chính Lam quay video Hội trại năm ngoái** — xem `story-bible.md` mục 2 |
| Người giao nhiệm vụ | **Cô Hạnh** | Được GVCN lớp 12A4 nhờ, vì Lam đã tìm ra Vy |
| Trợ thủ (mới) | **Vy** | Trở lại trường, kể cho Lam điều cô từng thấy. Không phải nghi phạm |
| Người mất tích | **Bảo** (12A4) | Admin trang "Trúc Lâm Confessions", thành viên CLB Tin học. Cẩn thận, hay ghi giấy nhớ |
| Nghi phạm 1 | **Tuấn** (12A4) | Đồng admin trang, bạn thân kiêm "đối thủ" của Bảo. Nóng tính |
| Nghi phạm 2 | **Ngân** (10A2) | **Em gái anh Minh**. Ít nói, rất bảo vệ anh mình |
| Nghi phạm 3 | **Phong** (12A3) | Bí thư Đoàn trường, học sinh gương mẫu, đang xét học bổng. Người đứng ra tổ chức tìm Bảo |
| Nhân vật quá khứ | **Minh** (Trần Minh, năm ngoái học 12A1) | Mất tích 2 ngày hồi tháng Tư năm ngoái, sau đó chuyển trường về quê ở Bến Tre. Chỉ xuất hiện qua điện thoại |
| Nhân vật nền | Bác bảo vệ, cô y tế, cô thủ thư | Giữ các sổ ghi chép (nguồn chứng cứ) |

**Bối cảnh kỹ thuật then chốt** (được nêu rõ trong game, không giấu):
- Trang confession có **Hộp thư ẩn danh** lưu mọi tin gửi đến từ trước tới nay. Xóa tin trong hộp thư là **mất hẳn**, không khôi phục được.
- **Máy số 3** ở **tầng 2 thư viện** là máy duy nhất Bảo tích "Ghi nhớ đăng nhập" — trên màn hình còn dán tờ giấy *"Máy của Bảo — đừng đăng xuất!"*. Vào trang từ bất kỳ máy nào khác đều phải nhập mã gửi về điện thoại Bảo. Chiều thứ Sáu nào Bảo cũng ngồi máy này cập nhật trang.
  *(Trình bày trong game bằng hình ảnh tờ giấy dán trên máy, không bằng đoạn giải thích.)*
- Thứ Hai, Bảo **đổi mật khẩu** trang và ghi mật khẩu mới lên một tờ giấy dán sau màn hình trong **phòng CLB Tin học**. Phòng này luôn khóa; muốn vào phải mượn chìa ở phòng bảo vệ và ký sổ.

---

## 1. Sự thật đằng sau (người chơi không thấy — dùng để kiểm tra logic)

**Năm ngoái**: tháng Tư, anh Minh gửi vào Hộp thư ẩn danh một tin: anh biết có một nhóm chat bán đề kiểm tra, có ảnh chụp làm bằng, và liệt kê vài người đã mua — trong đó có "Phong 11A3". Cuối tin anh viết: *"Nếu cần gặp em, em ở quê Bến Tre, hỏi nhà ông Tư Trần. Em không sợ, chỉ sợ im lặng."* Trang (khi đó do admin cũ quản lý — Bảo chưa làm admin) trả lời: *"Cảm ơn em, page sẽ xử lý."* Một ngày sau, Minh nhận tin nhắn ẩn danh *"Im lặng thì an toàn"*, sợ hãi bỏ về quê 2 ngày, rồi chuyển trường. Gia đình nói với trường là Minh ốm.

**Tuần này**:

| Thời điểm | Chuyện thật sự xảy ra |
|---|---|
| Thứ Hai 19:50 | Bảo mượn chìa phòng CLB Tin học (ký sổ) |
| Thứ Hai 20:14 | Bảo đọc lại hộp thư cũ, thấy tin của anh Minh, thấy bất an nên đổi mật khẩu trang. Mật khẩu dài quá nên ghi giấy dán sau màn hình phòng CLB. Chưa kịp báo Tuấn |
| Thứ Tư | Bảo xuất toàn bộ hộp thư ra USB để giữ bản sao. **19:12** tài khoản TL.admin2024 hoạt động lần cuối. **19:40** Phong nhận tin nhắn ẩn danh (cảnh mở đầu Phần 2) kèm **ảnh chụp nguyên tin của anh Minh** (có tên Phong, câu "Em không sợ, chỉ sợ im lặng" và địa chỉ quê): *"Hộp thư của trang có tên em từ năm ngoái. Xóa đi thì an toàn."* |
| Thứ Năm 21:30 | Bảo đăng bài: *"Ai còn nhớ anh Minh 12A1 năm ngoái không? Inbox page nếu biết chuyện gì."* |
| Thứ Năm 21:40 | Tuấn định vào trang xóa bài nhưng **đăng nhập thất bại (sai mật khẩu)** vì không biết mật khẩu mới |
| Thứ Năm 21:45 | Tuấn gọi điện, cãi nhau với Bảo, đòi xóa bài vì "rước họa vào thân" |
| Thứ Năm 21:48 | Dưới bài đăng, tài khoản **Kim Ngân** bình luận: *"Làm ơn đừng đào lại chuyện đó nữa."* |
| Thứ Năm 21:52 | Bảo xóa bài. Nhiều người đã kịp chụp màn hình |
| Thứ Năm 22:02 | Phong tạo tài khoản mạng xã hội giả tên "Trần Minh", ảnh đại diện cắt từ video Hội trại 26/3 năm ngoái (CLB Ống Kính quay, đăng công khai) |
| Thứ Năm 22:10 | Tài khoản giả nhắn Bảo: *"Anh thấy bài em đăng. Em còn nhớ câu anh viết cho page không: 'Em không sợ, chỉ sợ im lặng.' Mai 13h ra bến xe Miền Tây, về Bến Tre, hỏi nhà ông Tư Trần, anh kể hết. Để điện thoại lại, người ta theo dõi được. Đừng nói với ai."* Bảo tin, vì câu đó chỉ có trong tin anh Minh gửi vào hộp thư — Bảo vừa đọc hôm thứ Hai. Phong lấy cả câu trích lẫn địa chỉ từ ảnh chụp nhận hôm thứ Tư. Phong không cần Bảo gặp được Minh; chỉ cần Bảo đi thật xa chiều thứ Sáu |
| Thứ Sáu 12:30 | Phong mượn chìa phòng CLB Tin học (ký sổ: "mượn ghế cho lễ chào cờ"), chụp lại tờ giấy mật khẩu |
| Thứ Sáu 12:50 | Bảo cất điện thoại vào tủ đồ, nói với lớp là đau bụng |
| Thứ Sáu 12:55 | Bảo xin ra cổng, lý do "đau bụng, về nhà" — nhưng **không hề ghé phòng y tế** |
| Thứ Sáu 13:30 | Bảo lên xe đi Bến Tre |
| Thứ Sáu 16:20–16:28 | Tuấn (16:20), Phong (16:25), Ngân (16:28) quẹt thẻ vào thư viện. **Bảo không đến** — lần đầu tiên sau 6 tuần liền |
| 16:30–17:00 | Phong làm tình nguyện viên xếp sách ở kệ 500, **tầng 2**, cạnh máy PC-THUVIEN-03 |
| 16:38–16:42 | Ngân lên tầng 2 tìm Bảo, định xin Bảo đừng đăng chuyện anh mình nữa. Máy số 3 trống, chỉ có "một anh áo Đoàn đang xếp sách". Tiện tay mượn một cuốn ở kệ 800 bằng máy mượn sách tự động tầng 2 (16:41), rồi xuống |
| 16:45–16:52 | Ngân thuyết trình liên tục trong phòng học nhóm **tầng 1**, nhóm bạn quay video để góp ý |
| 16:48:10 | Tuấn quẹt thẻ nhận bản in ở máy in **tầng 1** — trang bìa in sẵn giờ |
| **16:48:40** | Từ PC-THUVIEN-03, Phong đăng nhập bằng mật khẩu mới, **xóa 312 tin trong Hộp thư ẩn danh**. Điện thoại Bảo (trong tủ đồ) nhận thông báo của ứng dụng quản lý trang |
| 18:30 | Bảo tới chợ xã, hỏi đường tới nhà ông Tư Trần |
| 19:00 | Bảo tới nhà Minh. Minh ngỡ ngàng: anh chưa từng nhắn gì. Hết xe về. Bảo vẫn sợ "người ta theo dõi", nài Minh đợi tới sáng mới báo; Minh — từng trải qua chuyện năm ngoái — đồng ý. Không ai báo cho Ngân (đang ở trọ nhà dì trên thành phố) |
| 19:30 | Bố mẹ Bảo báo trường. Cô Hạnh gọi Lam |
| 20:00 | Phong tổ chức nhóm đi tìm, **gợi ý tìm ở bến xe Miền Đông** vì "Bảo hay nói muốn lên Đà Lạt" — hướng ngược lại |
| 21:30 | Nhờ suy luận của Lam, Ngân gọi về nhà — Bảo đang ở đó, an toàn |

---

## 1b. Cảnh mở đầu — "Tin nhắn thứ hai" (trước Prologue)

> Lặp lại **khuôn mở đầu của season** (xem `phan-1-script.md` mục 1b): mỗi phần mở bằng người gửi bí ẩn gõ một tin nhắn cho nhân vật then chốt của phần đó. Người chơi Phần 1 sẽ nhận ra ngay khuôn hình.

**Thời lượng**: ~20 giây. Cùng ngôn ngữ hình ảnh với Phần 1 (khung điện thoại, người nhận bị che, chữ mờ, chỉ dòng cuối lấy nét), để lặp lại thành "chữ ký" của season.

| # | Thời gian | Hình | Âm thanh |
|---|---|---|---|
| 1 | 0–3s | Màn hình đen: *Thứ Tư, 19:40.* | Tiếng mưa nhẹ ngoài cửa sổ |
| 2 | 3–8s | Ô chat mới, người nhận bị che. Ngón tay **đính kèm một ảnh chụp màn hình** — ảnh mờ, chỉ thấy đó là một đoạn tin nhắn dài | Tiếng gõ |
| 3 | 8–14s | Chữ mờ hiện dần; lấy nét vào dòng cuối: ***"Xóa đi thì an toàn."*** Lần này ngón tay **không do dự** — gửi ngay | Một tiếng "tách" |
| 4 | 14–17s | Danh sách chat lướt qua: bây giờ có **hai** cuộc trò chuyện lưu trữ — "M." (thg 4, năm ngoái) và một cuộc mới hơn, tên bị che, *"2 tuần trước"* | Mưa |
| 5 | 17–20s | Màn hình tắt → cắt sang: tiếng điện thoại Lam đổ chuông (cuộc gọi của Cô Hạnh) — vào Prologue | Chuông điện thoại |

**Fair-play & trả thưởng**:
- Giờ *Thứ Tư 19:40* nằm **sau** lần hoạt động cuối của tài khoản TL.admin2024 (*thứ Tư 19:12*, nhật ký trang ở Chương 3) — người chơi tinh ý nối được hai mốc giờ này, nhưng nó không cần để giải vụ án.
- Cuộc trò chuyện *"2 tuần trước"* chính là tin gửi cho Vy (Phần 1) — người chơi cũ nhận ra.
- Trả thưởng ở lời thú nhận của Phong: khi Phong đưa điện thoại cho Lam xem, bong bóng tin nhắn hiện giống hệt khung 3.
- **Tương phản có chủ ý với Phần 1**: lần này người gửi không ngập ngừng. Giữ nguyên câu hỏi để ngỏ "đe dọa hay cảnh báo?", nhưng nghiêng người chơi về phía đáng lo hơn.

---

## 2. Prologue

Hai tuần sau vụ của Vy. Tối thứ Sáu, Lam nhận cuộc gọi của Cô Hạnh.

> **Lam** (nội tâm — nhắc lại Phần 1 cho người chơi mới): "Hai tuần trước, Vy biến mất sau một buổi học nhóm online, rồi được tìm thấy an toàn ở nhà dì. Vy bỏ đi vì một tin nhắn ẩn danh: *'giống vụ của anh Minh năm ngoái... Im lặng thì an toàn.'* Tớ vẫn chưa biết anh Minh là ai."

> **Cô Hạnh**: "Lam, con biết Bảo lớp 12A4 không — bạn quản lý trang confession ấy? Bảo chưa về nhà, điện thoại không liên lạc được. Cô giáo chủ nhiệm 12A4 nhờ cô, vì chuyện của Vy lần trước. Cô đang ở trường với bác bảo vệ, con qua được không?"
>
> **Lam** (nội tâm): "Trang confession... đúng cái trang Đức từng đăng ảnh giả của Vy."

Cùng lúc, trong nhóm chat của trường, mọi người chuyền tay ảnh chụp bài đăng tối qua của Bảo: *"Ai còn nhớ anh Minh 12A1 năm ngoái không?"*

**Lam** (nội tâm): "Anh Minh. Cái tên trong tin nhắn ẩn danh gửi cho Vy."

---

## 3. Chương 1 — "Người rời cổng lúc 12:55"

**Mục tiêu gameplay**: giai đoạn khẩn cấp — tìm ra Bảo đang ở đâu trước khi quá khuya. Làm quen lại cơ chế đối chiếu sổ sách.

### Chứng cứ thu thập
1. **Ảnh chụp bài đăng đã xóa** (tối thứ Năm, 21:30–21:52), kèm vài bình luận — trong đó có tài khoản **Kim Ngân**: *"Làm ơn đừng đào lại chuyện đó nữa."*
2. **Sổ ra vào cổng** (bác bảo vệ): *"12:55 — Bảo 12A4 — đau bụng, xin về nhà."*
3. **Sổ phòng y tế** (cô y tế): thứ Sáu không có tên Bảo. → Bảo **nói dối để ra khỏi trường**: cậu tự rời đi, không bị ai đưa đi.

### Vật thể hai tầng — tủ đồ của Bảo
- *Tầng công cụ*: tủ khóa số 4 chữ số. Trên bàn Bảo ở lớp có poster CLB Tin học với dòng "Thành lập 15/09" và Bảo hay đùa "mật khẩu nào của tao cũng dính tới CLB". Người chơi thử **1509** để mở tủ.
- *Tầng chứng cứ*: **điện thoại của Bảo** nằm trong tủ (bố mẹ Bảo đọc mật mã mở máy qua điện thoại cho Cô Hạnh). Trên màn hình khóa có một thông báo lúc 16:48: *"Hộp thư ẩn danh: 312 cuộc trò chuyện đã bị xóa."* (Giữa lúc đang gấp tìm người, chi tiết này dễ bị bỏ qua — nó trở thành trung tâm ở Chương 2.) Trong máy có tin nhắn từ tài khoản **"Trần Minh"**: tạo lúc 22:02 thứ Năm, không có bạn bè, không có bài đăng, ảnh đại diện là một khung hình từ video Hội trại 26/3 năm ngoái của CLB Ống Kính.

> **Lam** (nội tâm): "Góc máy này. Ánh nắng xiên này. Khung hình này... là tớ quay. Ai đó đã lấy video của tớ để lừa Bảo." Nội dung trích câu *"Em không sợ, chỉ sợ im lặng"* và hẹn Bảo về Bến Tre, "hỏi nhà ông Tư Trần".

### Vật thể mới — video Hội trại 26/3 năm ngoái (kho lưu trữ CLB Ống Kính)
- *Tầng công cụ*: Lam tua video tới đúng khung hình được dùng làm ảnh đại diện giả.
- *Tầng chứng cứ*: khung hình rộng hơn cho thấy anh Minh đứng cạnh một cô bé mặc đồng phục THCS, giơ tấm bảng *"Cổ vũ anh hai 12A1!"*. Đó là Ngân.

### Suy luận của người chơi
- Bảo đã lên đường đi Bến Tre, không mang điện thoại → không thể gọi Bảo.
- Tài khoản "Trần Minh" có vẻ giả, nhưng nếu *không phải giả* thì Bảo đang ở nhà Minh. Cần liên lạc với gia đình Minh.
- Hồ sơ học sinh nằm trong văn phòng đã khóa, tối nay không tra được. Người chơi phải tự nối: bình luận của **Kim Ngân** dưới bài đăng + cô bé cầm bảng "Cổ vũ anh hai" trong video Hội trại → Ngân là em gái anh Minh.

→ Người chơi chọn người để nhờ (Tuấn / Ngân / Phong / đợi sáng mai hỏi văn phòng). Chọn đúng: **nhờ Ngân gọi về nhà**.

> **Ngân** (qua điện thoại, 21:30): "...Anh Bảo đang ở nhà em thật. Anh tới lúc 7 giờ tối, hỏi anh Minh chuyện gì đó. Anh Bảo sợ quá nên xin đợi sáng mai mới báo ai. Anh Minh bảo anh ấy chưa từng nhắn tin cho ai cả."
>
> **Minh** (giọng qua loa ngoài): "Tài khoản đó không phải của anh. Anh bỏ mạng xã hội từ năm ngoái rồi."

**Kết thúc giai đoạn 1**: Bảo an toàn, sáng mai sẽ về. Nhưng một câu hỏi mới lớn hơn: **ai đã giả làm anh Minh để kéo Bảo đi xa — và để làm gì?**

*(Chi tiết cài sẵn — fair-play: trong lúc Lam tìm manh mối, Phong đã lập **bảng phân công tìm kiếm** gửi nhóm chat, khoanh vùng bến xe Miền Đông "vì Bảo hay nói muốn lên Đà Lạt". Người chơi nhận được bảng này như một chứng cứ bình thường.)*

---

## 4. Chương 2 — "Ba người trong thư viện"

**Mục tiêu gameplay**: xác định *mục đích* của việc dụ Bảo đi, rồi mở 3 giả thuyết song song.

### Cảnh mở đầu: Bảo gọi về (sáng thứ Bảy)

> **Lam** *[Trình: điện thoại của Bảo — thông báo 16:48]*: "Bảo, điện thoại cậu báo hộp thư ẩn danh bị xóa 312 tin lúc 16:48 chiều qua."
>
> **Bảo** *(im lặng)*: "...Ba trăm mấy tin, từ hồi lập trang tới giờ. Cái đó xóa là mất hẳn luôn. Nhưng ai vào được? Chiều thứ Sáu nào tao cũng ngồi thư viện cập nhật trang cơ mà."
>
> **Lam**: "Trừ chiều hôm qua."
>
> **Bảo**: "Máy số 3 tầng 2 — cái máy dán giấy 'đừng đăng xuất' ấy. Máy khác muốn vào trang đều phải nhập mã gửi về điện thoại tao — mà điện thoại tao thì nằm trong tủ đồ."

**Người chơi tự rút ra**: kẻ đứng sau cần **(1)** Bảo không ngồi ở máy số 3 chiều thứ Sáu, **(2)** điện thoại Bảo không ở bên người để cậu không thấy cảnh báo. Việc dụ Bảo đi xa và dặn "để điện thoại lại" đáp ứng đúng cả hai. → Biến mất là phương tiện; **mục tiêu thật là xóa Hộp thư ẩn danh**.

**Suy luận thứ hai** (từ tin nhắn giả): câu *"Em không sợ, chỉ sợ im lặng"* chỉ có trong tin anh Minh gửi hộp thư. Kẻ giả mạo **đã từng đọc được tin đó** — hoặc được ai đó cho xem. Người chơi ghi nhận; Chương 3 và lời thú nhận sẽ trả lời "ai cho xem".

### Chứng cứ mới
- **Log quẹt thẻ thư viện chiều thứ Sáu**: Tuấn 16:20, Phong 16:25, Ngân 16:28. Không có Bảo — trong khi 6 thứ Sáu trước đó, tuần nào Bảo cũng vào lúc khoảng 16:00.

→ Ba người có mặt trong thư viện vào chiều hôm đó. Ba giả thuyết.

### Cảnh phụ: Vy kể chuyện

> **Vy**: "Hôm trước tao chưa kể hết với mày. Ba tuần trước, tao lỡ thấy trong một nhóm chat có người rao bán đề kiểm tra giữa kỳ — hai ngày trước khi thi. Tao mới hỏi một câu thì nhận được tin nhắn kia: 'giống vụ của anh Minh năm ngoái'... Nếu hộp thư của trang có gì về chuyện năm ngoái, thì chắc là chuyện này."

*(Cho người chơi bối cảnh để suy ra động cơ ở Thinking Board — không nói ai là người mua.)*

### Giả thuyết A — Tuấn xóa hộp thư để dập chuyện bài đăng

> **Tuấn**: "Ừ tao gọi chửi nó tối thứ Năm đấy. Đăng mấy bài kiểu đó, trang bị báo cáo thì sao? Nhưng tao không lừa ai đi đâu hết."
>
> *[Trình: ảnh chụp bài đăng đã xóa]* **Lam**: "Cậu là đồng admin. Sao không tự vào xóa bài mà phải gọi Bảo?"
>
> **Tuấn**: "...Chiều thứ Sáu tao ở dưới tầng 1 in đề cương cả buổi. Mày muốn tin hay không thì tùy."

**Khe hở**: Tuấn là admin (người đầu tiên người chơi nghĩ là "biết mật khẩu"), **có thể đã đọc tin của anh Minh trong hộp thư từ trước**, vừa cãi nhau với Bảo, có mặt ở thư viện. Né câu hỏi về việc không tự xóa bài. Máy in ở cạnh cầu thang — lên tầng 2 chỉ mất chưa tới một phút.

### Giả thuyết B — Ngân xóa hộp thư để bảo vệ anh trai

> **Ngân**: "Tài khoản giả đó dùng ảnh anh em... Ảnh đó em cũng có trong máy. Nhưng em không làm."
>
> *[Trình: điện thoại của Bảo / tin nhắn tài khoản giả]* **Lam**: "Cậu biết nhà ông Tư Trần là nhà cậu. Cậu biết anh Minh từng gặp chuyện gì năm ngoái, đúng không?"
>
> **Ngân**: "Anh em khổ đủ rồi. Ai đào lại chuyện năm ngoái em cũng ghét. Nhưng chiều thứ Sáu em ở tầng 1 cả buổi, tập thuyết trình với nhóm, cả nhóm thấy mà."
>
> *[Trình: lịch sử mượn sách tự động tầng 2 — mở khóa sau khi hỏi cô thủ thư]* **Lam**: "Máy mượn sách tầng 2 ghi cậu mượn một cuốn lúc 16:41."
>
> **Ngân** *(cúi mặt)*: "...Em lên tìm anh Bảo, định xin anh ấy đừng đăng chuyện anh em nữa. Nhưng máy số 3 trống trơn, chỉ có một anh áo Đoàn đang xếp sách. Em sợ bị nghi nên mới nói dối. Rồi em xuống tập thuyết trình."

**Khe hở**: Ngân có động cơ bảo vệ anh, có ảnh của Minh, biết địa chỉ quê, **có thể biết câu anh mình viết**, có mặt ở thư viện — và **đã nói dối** về việc lên tầng 2. Lời chứng của nhóm bạn thân chưa phải bằng chứng độc lập.

*(Nhiễu có lời giải: lời nói dối của Ngân khiến giả thuyết B mạnh lên ở giữa Chương 2, nhưng lời giải thích của cô — "một anh áo Đoàn đang xếp sách" — lại là một manh mối nhỏ hướng về Phong.)*

### Giả thuyết C — Phong

> **Phong**: "Tối qua mình đi tìm Bảo tới 11 giờ đêm. Chiều thứ Sáu mình xếp sách trên tầng 2 giúp cô thủ thư, cô xác nhận được. Mà mình đâu phải admin trang — mình chưa từng thấy cái hộp thư đó, cũng chẳng biết mật khẩu."

**Khe hở**: gần như không có — ngoại phạm "không phải admin, chưa từng thấy hộp thư, không biết mật khẩu" là mạnh nhất trong ba người. Chỉ có một chi tiết lạ: Phong ở đúng tầng 2. Người chơi *chưa* hỏi sâu được.

**Kết thúc Chương 2**: người chơi nghiêng về Tuấn (người duy nhất "biết mật khẩu"), nhưng cả 3 giả thuyết đều mở.

---

## 5. Chương 3 — "Dấu vết trên giấy"

**Mục tiêu gameplay**: đối chiếu *ai có thể biết mật khẩu mới* và *ai có thể ngồi ở máy số 3 lúc xóa*.

### Chứng cứ

1. **Email bảo mật trong hộp thư của Bảo** (Bảo cho phép xem qua điện thoại):
   - Thứ Hai 20:14: *"Mật khẩu trang đã được thay đổi."*
   - Thứ Năm 21:40: *"Đăng nhập không thành công — sai mật khẩu — thiết bị: iPhone của Tuấn."*
   → **Tuấn không biết mật khẩu mới.** Đây chính là lý do tối thứ Năm Tuấn phải gọi Bảo thay vì tự xóa bài.

2. **Vật thể hai tầng — tờ giấy mật khẩu** (sau màn hình phòng CLB Tin học; Bảo chỉ chỗ qua điện thoại):
   - *Tầng công cụ*: Lam dùng mật khẩu này đăng nhập trang trên PC-THUVIEN-03 (có Cô Hạnh đi cùng) để xem **nhật ký hoạt động của trang**.
   - *Tầng chứng cứ*: tờ giấy chỉ ở trong một phòng luôn khóa → ai biết mật khẩu mới thì phải từng vào phòng này (hoặc được Bảo nói cho — Bảo khẳng định chưa nói ai).

3. **Nhật ký hoạt động của trang**: *"16:48:40 thứ Sáu — Xóa 312 tin trong Hộp thư ẩn danh — thiết bị: PC-THUVIEN-03."*
   *(Chi tiết cài sẵn — fair-play cho hook: danh sách vai trò quản trị có một tài khoản **"TL.admin2024"**, vai trò "Biên tập viên", hoạt động lần cuối **thứ Tư 19:12**. Bảo tưởng tài khoản này đã bỏ từ năm ngoái. Game để người chơi thấy, không giải thích.)*

4. **Sổ mượn chìa khóa** (phòng bảo vệ), phòng CLB Tin học từ thứ Hai: Bảo — thứ Hai 19:50; **Phong — thứ Sáu 12:30, lý do "mượn ghế cho lễ chào cờ"**. Không còn ai khác.

5. **Vật thể hai tầng — trang bìa bản in của Tuấn**:
   - *Tầng công cụ*: tập đề cương Tuấn in là tài liệu ôn thi Tuấn cho Lam mượn (dùng ở một câu đố nhỏ).
   - *Tầng chứng cứ*: trang bìa máy in tự in: *"Nhận bản in lúc 16:48:10 — Máy in tầng 1 — Thẻ: Tuấn 12A4."* Nhận bản in phải quẹt thẻ ngay tại máy. 30 giây sau, hộp thư bị xóa ở tầng 2.

6. **Lịch sử máy mượn sách tự động tầng 2**: *"16:41 — Kim Ngân 10A2 — mượn 1 cuốn, kệ 800."* (Mở khóa khi hỏi cô thủ thư về tầng 2; dùng để đối chất Ngân ở Chương 2-3.)

7. **Video tập thuyết trình của nhóm Ngân**: quay liên tục 16:45–16:52 trong phòng học nhóm tầng 1, Ngân đứng nói suốt, đồng hồ phòng hiện rõ trong khung hình.

8. **Lịch tình nguyện thư viện** (cô thủ thư): *"Phong 12A3 — xếp sách kệ 500 (tầng 2) — 16:30–17:00."* Sơ đồ thư viện: máy PC-THUVIEN-03 nằm ngay cạnh kệ 500.

### Loại trừ

**Loại giả thuyết A** (người chơi tự chọn tổ hợp): email bảo mật (Tuấn không có mật khẩu mới) + trang bìa bản in (16:48:10 Tuấn ở máy in tầng 1) + nhật ký hoạt động (xóa lúc 16:48:40 từ tầng 2). *Được phép kèm*: log thư viện, sổ mượn chìa khóa.

**Loại giả thuyết B** (chỉ mở sau khi Ngân thú nhận chuyện lên tầng 2): video tập thuyết trình (Ngân đang nói ở tầng 1 suốt 16:45–16:52) + sổ mượn chìa khóa (Ngân chưa từng vào phòng có tờ giấy) + nhật ký hoạt động. *Được phép kèm*: log thư viện, email bảo mật, lịch sử mượn sách.

**Kết luận chương**: người duy nhất *vừa* có thể biết mật khẩu mới *vừa* ở cạnh máy số 3 lúc 16:48 là Phong — người có ngoại phạm "không biết mật khẩu" tưởng như vững nhất.

---

## 6. Chương 4 — Đối chất, kết luận, hook

### Đối chất Phong

Chỉ mở khi A và B đã bị loại. Người chơi phải trình: **nhật ký hoạt động + sổ mượn chìa khóa + lịch tình nguyện thư viện**. *Được phép kèm*: tờ giấy mật khẩu, bảng phân công tìm kiếm, log thư viện.

> **Lam** (nội tâm): "Lần trước tớ phải lấy hết can đảm. Lần này... vẫn phải lấy hết can đảm. Có lẽ chuyện này không bao giờ dễ hơn."
>
> **Lam**: "Cậu nói cậu không biết mật khẩu. Nhưng trưa thứ Sáu cậu mượn chìa phòng CLB Tin học — nơi duy nhất có tờ giấy ghi mật khẩu mới. Lúc 16:48 cậu đứng ở kệ 500, cạnh máy số 3. Và tối qua, cậu đưa cả nhóm đi tìm ở bến xe Miền Đông, trong khi Bảo đi Miền Tây."
>
> **Phong** *(im lặng rất lâu, rồi gỡ kính)*: "...Tao không muốn hại Bảo. Thật đấy. Tối thứ Tư tao nhận một tin nhắn ẩn danh" *(Phong đưa điện thoại — bong bóng tin nhắn hiện giống hệt cảnh mở đầu, lần này lấy nét đầy đủ)*: "'Hộp thư của trang có tên em từ năm ngoái. Xóa đi thì an toàn.' Năm ngoái tao... đã mua đề kiểm tra giữa kỳ một lần, trong một nhóm chat. Một lần thôi. Nếu lộ ra, tao mất suất học bổng, mất hết. Chiều thứ Sáu nào tao cũng làm tình nguyện ở thư viện, thấy Bảo ngồi máy số 3 — nó từng than trang chỉ vào được từ máy đó. Nên tao tạo tài khoản giả anh Minh để nó đi thật xa, không mang điện thoại. Câu trích với địa chỉ quê... tao lấy từ cái ảnh chụp người ta gửi kèm tin nhắn. Tao không cần Bảo gặp anh Minh. Tao chỉ cần nó không ngồi ở máy số 3 chiều hôm đó."
>
> **Lam**: "Người nhắn cho cậu có ảnh chụp tin của anh Minh. Tức là người đó đọc được hộp thư — trước cả khi cậu xóa nó."
>
> **Phong**: "...Tao chưa từng nghĩ tới chuyện đó. Tao chỉ nghĩ tới tao."

### Thinking Board

| Ô | Lựa chọn | Đáp án |
|---|---|---|
| Vì sao Bảo biến mất | Bị lừa đi xa bằng tài khoản giả / Tự ý bỏ đi / Bị ép đi | Bị lừa đi xa bằng tài khoản giả |
| Mục đích thật của việc dụ Bảo đi | Để xóa Hộp thư ẩn danh khi Bảo vắng mặt / Trả thù Bảo vì bài đăng / Chiếm quyền quản lý trang | Để xóa Hộp thư ẩn danh khi Bảo vắng mặt |
| Người xóa hộp thư | Tuấn / Ngân / Phong | Phong |
| Cách có mật khẩu mới | Tờ giấy trong phòng CLB Tin học / Được Bảo nói cho / Đoán mật khẩu | Tờ giấy trong phòng CLB Tin học |
| Động cơ | Sợ lộ việc mua đề năm ngoái / Bảo vệ anh trai / Giận vì Bảo đăng bài | Sợ lộ việc mua đề năm ngoái |

> "Bảo không tự bỏ đi. Phong dùng tài khoản giả mạo anh Minh để dụ Bảo về Bến Tre và để điện thoại lại, nhằm vắng mặt ở máy số 3 thư viện chiều thứ Sáu. Với mật khẩu chụp từ tờ giấy trong phòng CLB Tin học, Phong xóa toàn bộ Hộp thư ẩn danh lúc 16:48 — vì trong đó có tên cậu trong danh sách mua đề năm ngoái."

### Epilogue — Hook sang Phần 3

Bảo về đến trường sáng Chủ nhật. Cô Hạnh báo sự việc lên Ban giám hiệu. Phong tự nguyện kể lại với nhà trường.

Buổi chiều, Bảo cắm USB vào máy CLB Tin học.

> **Bảo**: "Thứ Tư tao có xuất hộp thư ra đây. Tin của anh Minh vẫn còn." *(dừng lại)* "Nhưng mày nhìn cái này. Tháng Tư năm ngoái, trang đã trả lời anh Minh: 'Cảm ơn em, page sẽ xử lý.' Hồi đó tao chưa làm admin. Người trả lời là tài khoản **TL.admin2024**."
>
> **Lam**: "Cái tài khoản vẫn còn quyền biên tập... và vừa hoạt động tối thứ Tư. Đúng tối Phong nhận tin nhắn."
>
> **Minh** (tin nhắn gửi Lam, từ số điện thoại của mẹ): "Một ngày sau khi trang trả lời anh, anh nhận được câu 'Im lặng thì an toàn'. Người gửi biết anh gửi gì vào hộp thư. Em cẩn thận."

**Lam** (nội tâm): "Vy, anh Minh, rồi Phong... Ba người, ba lần 'thì an toàn'. Và người gửi luôn biết trước mọi thứ — như thể đang ngồi ngay bên trong."

Tối đó, ở nhà, Lam mở ngăn bàn. Một thẻ nhớ cũ, nhãn dán viết tay: *"HT 26-3 — gốc"*.

> **Lam** (nội tâm): "Hội trại năm ngoái, lúc dựng video, có người bảo tớ cắt một đoạn có anh Minh ở rìa khung hình. 'Không hay, không liên quan.' Tớ cắt. Không hỏi lại câu nào. Bản dựng thì cả trường đã xem. Còn bản gốc... tớ chưa từng mở lại."

*(Kết thúc Phần 2. Người chơi chưa được xem đoạn phim — đó là mở đầu Phần 3.)*

*(Câu hỏi mở cho Phần 3: ai đứng sau tài khoản TL.admin2024, nhóm bán đề lấy đề từ đâu — và đoạn phim Lam từng cắt đã ghi lại điều gì?)*

---

## 7. Ghi chú thiết kế

### Chứng cứ Phần 2 (15)
Ảnh chụp bài đăng đã xóa (kèm bình luận của Ngân), sổ ra vào cổng, sổ phòng y tế, điện thoại của Bảo (tin nhắn tài khoản giả + thông báo 16:48), video Hội trại 26/3, bảng phân công tìm kiếm của Phong, log quẹt thẻ thư viện, email bảo mật, tờ giấy mật khẩu, nhật ký hoạt động trang, sổ mượn chìa khóa, trang bìa bản in của Tuấn, lịch sử máy mượn sách tầng 2, video tập thuyết trình, lịch tình nguyện thư viện.

**Quy tắc hiển thị (từ phản biện với persona chơi trên điện thoại)**: mỗi chứng cứ có một dòng tóm tắt ≤ 90 ký tự hiện mặc định, chi tiết chỉ mở khi bấm; ưu tiên *hình* (trang bìa bản in, tờ giấy dán trên máy, khung hình video) thay cho đoạn giải thích; mỗi chương có điểm lưu để chơi từng đợt ~15 phút.

### Kiểm tra logic (theo checklist của skill `deduction-game-builder`)
- **Kế hoạch của thủ phạm phải hợp lý**: Bảo tin tài khoản giả vì nó trích đúng câu chỉ có trong hộp thư; Phong có câu đó nhờ ảnh chụp người ẩn danh gửi. Không có sự trùng hợp nào cứu nhân vật — địa chỉ thật đến từ chính tin của Minh.
- **Không dâng sẵn manh mối**: quan hệ Ngân–Minh phải tự nối từ bình luận + video Hội trại; hồ sơ học sinh không tra được trong đêm.
- **Đã vá khi tự rà soát**: (1) Minh có thể gọi ngay cho Ngân → giải thích bằng việc Bảo còn sợ và nài đợi tới sáng, Minh đồng ý vì chính anh từng trải qua; (2) sáng thứ Bảy Bảo không thể tự vào trang (mã xác minh gửi về điện thoại đang trong tủ) → việc hộp thư bị xóa được phát hiện qua thông báo trên điện thoại Bảo từ Chương 1; (3) Phong biết thói quen máy số 3 vì chính cậu làm tình nguyện ở thư viện mỗi thứ Sáu.
- **Loại trừ theo hành động**: hành động cần có là "đăng nhập bằng mật khẩu mới trên máy số 3, tầng 2, lúc 16:48:40". Tuấn bị loại vì không có mật khẩu (email sai mật khẩu) *và* đang ở tầng 1 lúc 16:48:10. Ngân bị loại vì đang thuyết trình trên video *và* chưa từng vào phòng có tờ giấy. Không chứng cứ loại trừ nào vô tình "minh oan" cho Phong.
- **Nhiễu có lời giải**: Tuấn không tự xóa bài (lời giải: không biết mật khẩu mới); Ngân có ảnh của Minh (lời giải: ảnh đại diện lấy từ video công khai, ai cũng lấy được); Phong ở tầng 2 (lúc đầu tưởng là chi tiết vô hại).
- **Manh mối về thủ phạm có sẵn từ sớm**: bảng phân công tìm kiếm chỉ sai hướng (Chương 1), Phong ở tầng 2 (Chương 2).
- **Mọi ô Thinking Board suy ra được trước khi ghép**: mục đích (từ lời Bảo về máy số 3 + hộp thư bị xóa), mật khẩu (tờ giấy + sổ chìa khóa), động cơ (cảnh Vy kể + lời thú nhận).
- **Tính hợp lý kỹ thuật**: xác minh 2 bước giải thích vì sao phải dùng đúng máy số 3 và vì sao cần Bảo xa điện thoại; trang bìa bản in là dữ liệu có giờ chính xác (không phải "ảnh chụp" một khoảnh khắc).
- **Hook không mâu thuẫn vụ đã giải**: TL.admin2024 xuất hiện trong nhật ký ở Chương 3 (fair-play), không ảnh hưởng lời giải Phần 2.

### Cơ chế mới so với Phần 1
- **Giai đoạn khẩn cấp** ở Chương 1: tìm người trước, suy luận "ai" sau.
- **Câu đố mở khóa nhỏ** (mã tủ 1509) làm tầng công cụ cho vật thể hai tầng.
- **Chọn người để hỏi** (nhờ Ngân gọi về nhà) như một bước suy luận có đúng/sai.

### Thời lượng ước tính (cần đo bằng prototype)
Chương 1 ~8-10 phút, Chương 2 ~10 phút, Chương 3 ~10-12 phút, Chương 4 ~5 phút → tổng **~35-40 phút**.

### Việc cần làm khi triển khai
- Tạo `game/src/data/case2.js` theo cùng cấu trúc `case1.js`; mở rộng validator để chạy cho cả hai vụ.
- Các màn hình hiện viết riêng cho Phần 1 (Prologue, Chương 1) cần tách nội dung ra dữ liệu trước — xem `docs/engine-lessons.md`, mục "Nên làm tiếp" số 1.
- Mã tủ và bước "chọn người để hỏi" là cơ chế mới — cần thêm vào engine.

---

## 8. Phản biện PersonaTwin (09/2026)

Chạy `/momtest` (skill [PersonaTwin](https://github.com/datht-work/PersonaTwin-skill), chế độ Cohort Simulation) với 3 persona trên bản nháp đầu của Phần 2:

| Persona | Kết luận | Phản đối chính | Đã xử lý |
|---|---|---|---|
| Minh Anh, 17, học sinh chơi trên điện thoại | Pivot | Phải đọc quá nhiều (14 chứng cứ dạng chữ, giải thích "xác minh 2 bước") trong đợt chơi 15 phút | Quy tắc hiển thị ở mục 7; máy số 3 được trình bày bằng tờ giấy dán thay vì thuật ngữ. **Áp dụng cho cả Phần 1** — xem `engine-lessons.md` |
| Thu Trang, 20, sinh viên đã trả tiền cho game suy luận | Accept + 1 phản đối | Địa chỉ trùng hợp đúng nhà Minh; hồ sơ lớp dâng sẵn quan hệ Ngân–Minh | Địa chỉ lấy từ tin của Minh; người chơi tự nối Ngân–Minh |
| Khoa, 24, fan game suy luận, viết review | Pivot | Admin trang confession sẽ không tin một tài khoản vừa tạo; Ngân bị loại quá dễ | Câu trích chỉ có trong hộp thư; thêm lời nói dối của Ngân về tầng 2 |

**Lưu ý**: đây là mô phỏng. Tín hiệu kiểm chứng thật (theo `business-plan.md`): 5-10 người chơi thật chơi *hết* Phần 1, đo thời gian chơi và số lần xem gợi ý, trước khi đầu tư triển khai Phần 2.
