# Kịch bản Chi tiết — Phần 3: "Bản Gốc"

> Tiếp nối Phần 1 ("Buổi Livestream Cuối Cùng") và Phần 2 ("Hộp Thư Ẩn Danh"). Toàn bộ tên riêng là placeholder, có thể đổi tự do. Chưa có dữ liệu game (`case3.js`) — khi triển khai, file đó và file này phải luôn khớp nhau.
>
> **Quyết định đã chốt (09/2026)**: kẻ đứng sau season là **chị Thư** (lớp 12, trưởng ban dựng CLB Ống Kính) = chủ tài khoản **TL.admin2024**, với một lớp vùng xám từ Cô Hạnh (từng nghi ngờ, chọn im lặng). Xem `docs/phan-3-de-xuat.md` (phương án B + vùng xám A) và `docs/tom-tat-session-2026-09-23.md`.
>
> **Điểm khác Phần 1-2 (để người chơi không thấy lặp lại)**:
> - Phần 1: người mất tích tự nguyện rời đi, có người giúp. Phần 2: người mất tích bị lừa đi, biến mất chỉ là phương tiện. Phần 3: **không có người mất tích** — vật chứng (thẻ nhớ gốc) biến mất, và nạn nhân "danh dự" của vụ này chính là Lam.
> - Đây là phần đầu tiên nhân vật chính **tự là người trong cuộc** — thẻ nhớ là của Lam, đoạn phim là do Lam quay. Không thể "đưa cho người lớn xử lý" và đứng ngoài.
> - Cấu trúc 2 lớp: tìm ai lấy thẻ nhớ (Chương 1-3), rồi nhận ra người đó cũng là TL.admin2024 và là kẻ đứng sau cả đường dây bán đề (Chương 4) — giống Phần 2 có "hai giai đoạn", nhưng ở đây lớp thứ hai không phải một pha khẩn cấp mới mà là một tầng ý nghĩa sâu hơn của cùng một manh mối.
> - Đây là phần **kết season** — Thinking Board không chỉ kết luận vụ án mà khép chủ đề: *Im lặng thì an toàn — hay im lặng là tiếp tay?*

---

## 0. Bảng nhân vật

| Vai trò | Tên | Ghi chú |
|---|---|---|
| Nhân vật chính | **Lam** (lớp 11) | Thành viên CLB Ống Kính, phụ trách quay dựng. Lần đầu tiên vụ án là chuyện của chính mình — xem `story-bible.md` mục 2 |
| Người giao nhiệm vụ (không chính thức) | **Cô Hạnh** | Lam không báo cô ngay từ đầu — xem mục 3 |
| Trưởng ban dựng CLB Ống Kính | **Chị Thư** (Đặng Thư, lớp 12) | Thủ phạm (Nghi phạm B). Học giỏi, được thầy cô tin tưởng, hay ở lại muộn "lo việc CLB". Giữ chìa dự phòng phòng giáo viên (Cô Hạnh gửi từ đầu năm để tiện cất máy dựng phim) |
| Nghi phạm A | **Kiên** — phó ban dựng CLB Ống Kính, lớp 12 | Có chìa phòng CLB (dùng chung với chị Thư), từng thua chị Thư suất trưởng ban đầu năm; có mặt ở phòng CLB đúng buổi chiều thẻ nhớ mất |
| Nhân vật cũ | **Vy, Bảo, Phong, Ngân, Minh** | Xuất hiện lại ngắn gọn — xác nhận một vài chi tiết chéo phần (không phải nghi phạm) |
| Nhân vật nền | Bác bảo vệ, cô thủ thư, **thầy Vũ** (dạy Tin, cố vấn kỹ thuật không chính thức cho trang confession) | Giữ sổ sách / nguồn chứng cứ. Thầy Vũ là người hướng dẫn kỹ thuật chung khi trang mới lập (không phải người cấp quyền TL.admin2024 — quyền đó do một đàn anh khóa trên tự cấp cho chị Thư, xem mục 1); thầy chỉ xuất hiện ngắn để xác nhận lịch sử hệ thống khi Lam hỏi, không có mặt ở phòng CLB ngày thẻ nhớ mất nên không phải nghi phạm |

**Bối cảnh kỹ thuật then chốt** (nêu rõ trong game, không giấu):
- Phòng sinh hoạt **CLB Ống Kính** có tủ kho thiết bị (máy quay, thẻ nhớ, ổ cứng). Ai vào phòng đều phải quẹt thẻ ở cửa (hệ thống chung của trường, gắn từ đầu năm nay).
- Tài khoản quản trị trang confession có 3 vai trò: *Chủ trang* (Bảo, sau Phần 2), *Biên tập viên* (nhiều tài khoản cũ chưa từng bị thu hồi quyền — trong đó có **TL.admin2024**), *Kiểm duyệt viên*. Biên tập viên đọc được Hộp thư ẩn danh nhưng (từ Phần 2 trở đi, sau khi Bảo siết lại) không tự xóa được nếu không xác minh 2 bước qua máy đã đăng ký.
- Đường dây bán đề lấy đề từ **phòng giáo viên tổ Tự nhiên** — nơi cất đề gốc trước khi photo. CLB Ống Kính được phép mượn phòng này ngoài giờ để cất máy dựng phim (phòng có ổ điện tốt, ít người qua lại), nên có chìa dự phòng.

---

## 1. Sự thật đằng sau (người chơi không thấy — dùng để kiểm tra logic)

**Bối cảnh xa (năm ngoái và trước đó)**:
- Đầu năm ngoái, chị Thư (khi đó lớp 11) giúp một đàn anh khóa trên thiết lập hệ thống quản trị cho trang confession mới lập, được cấp quyền Biên tập viên với tên **TL.admin2024** (viết tắt "Trúc Lâm admin"). Đàn anh tốt nghiệp, quên thu hồi quyền. Chị Thư không dùng tới, gần như quên mất tài khoản này tồn tại.
- Đầu năm nay, bố chị Thư ốm nặng, gia đình vay một khoản qua ứng dụng tài chính để lo viện phí. Áp lực trả nợ hằng tháng ngày càng lớn. Chị Thư nhận ra qua công việc CLB (hay ở lại phòng giáo viên tổ Tự nhiên cất máy), mình có cơ hội tiếp cận đề kiểm tra trước khi photo.
- Chị Thư bắt đầu lặng lẽ chụp đề, bán qua một nhóm chat kín, thu tiền qua một tài khoản ví điện tử đứng tên khác (mượn của một người quen ngoài trường). Phong (Phần 2) là một khách mua đề giữa kỳ năm ngoái.

**Tháng Tư năm ngoái**: anh Minh gửi Hộp thư ẩn danh tố nhóm bán đề, nêu tên Phong. Chị Thư — vẫn còn quyền Biên tập viên, thỉnh thoảng đăng nhập kiểm tra vì thói quen cũ — đọc được tin trước khi ai khác kịp xử lý. Sợ lộ, chị tự tay trả lời "Cảm ơn em, page sẽ xử lý" (để không ai để ý thêm) rồi một ngày sau gửi thẳng cho Minh dòng "Im lặng thì an toàn" từ một số điện thoại rác mua ở tiệm net. Minh sợ, bỏ về quê, chuyển trường.

**Hội trại 26/3 năm ngoái**: chị Thư khi đó là người phụ trách hướng dẫn Lam (mới vào CLB) dựng video sự kiện. Xem qua bản thô, chị thấy một đoạn vài giây ở rìa khung hình có Minh đứng cạnh một cô bé cầm bảng "Cổ vũ anh hai 12A1" (Ngân). Chị nhận ra: nếu đoạn này lên bản public, ai tò mò tra ra Minh chuyển trường về Bến Tre, rồi tra ra vì sao — có thể lần ngược đến đúng giai đoạn chị vừa gửi tin đe dọa. Chị bảo Lam: "Đoạn đó không hay, không liên quan, cắt đi." Lam cắt, không hỏi lại.

**Ba tuần trước** (giữa mạch Phần 1): Vy vô tình hỏi trong nhóm chat lớp (chị Thư có trong nhóm này vì từng kèm học cho vài bạn lớp Vy) về "nhóm rao bán đề" mà Vy tình cờ thấy. Chị Thư hoảng, gửi Vy dòng "giống vụ của anh Minh năm ngoái... Im lặng thì an toàn" — lần này ngập ngừng vì Vy là học sinh chị từng quý thật lòng (khớp cảnh mở đầu Phần 1: người gửi do dự).

**Giữa Phần 2**: chị Thư (qua quyền Biên tập viên) thấy Bảo xuất hộp thư ra USB, sợ thêm — tin của Minh (có tên Phong) đang trong đó. Nhưng chị mất quyền ưu tiên vào máy số 3 thư viện (không phải học sinh CLB Tin học, đăng nhập từ máy khác sẽ bị hệ thống xác minh 2 bước gửi mã về điện thoại Bảo). Chị biết Phong từng mua đề — tra được số điện thoại Phong qua chính danh sách khách mua đề chị giữ — nên gửi tin dọa Phong "Hộp thư của trang có tên em từ năm ngoái. Xóa đi thì an toàn", kèm ảnh chụp màn hình tin của Minh (chị chụp lại từ lâu, phòng trường hợp cần). Lần này chị **không do dự** (khớp cảnh mở đầu Phần 2) — Phong là khách hàng, không phải học trò chị quý.

**Tuần này (sau khi Phần 2 kết thúc)**:

| Thời điểm | Chuyện thật sự xảy ra |
|---|---|
| Thứ Hai | Trường họp toàn thể sau vụ Bảo. Cô Hạnh được giao rà soát lại quyền quản trị trang confession — nhờ chị Thư (biết kỹ thuật, uy tín) hỗ trợ kiểm tra danh sách Biên tập viên. Chị Thư thấy tên **TL.admin2024** trong danh sách chính mình phải rà — cơ hội để âm thầm tự xóa quyền, nhưng nếu xóa ngay lúc đang có đợt rà soát sẽ bị chú ý; chị quyết định chờ vài ngày |
| Thứ Ba 16:00 | Lam, sau khi xem lại nhật ký hoạt động trang ở cuối Phần 2 (TL.admin2024 hoạt động thứ Tư 19:12), lên phòng CLB tìm lại thẻ nhớ "HT 26-3 — gốc" định xem lại đoạn từng cắt. Nói với Kiên (đang ở phòng CLB) rằng mình sắp xem lại video Hội trại năm ngoái |
| Thứ Ba 16:05 | Kiên tò mò hỏi "xem gì mà bí hiểm vậy", Lam chỉ nói "video cũ thôi", cất thẻ nhớ vào ngăn kéo bàn cá nhân trong phòng CLB (không khóa — ngăn kéo chung, ai trong CLB cũng biết Lam để đồ ở đây) |
| Thứ Ba 16:10 | Kiên rời phòng CLB đi tập bóng rổ (có bạn cùng đội xác nhận, 16:15–17:30) |
| Thứ Ba 16:20 | Chị Thư ghé phòng giáo viên tổ Tự nhiên lấy đề kiểm tra 15 phút sắp tới (ảnh chụp có giờ EXIF), tiện đường qua phòng CLB |
| **Thứ Ba 16:32** | Chị Thư vào phòng CLB (quẹt thẻ, có log), thấy ngăn kéo Lam hé mở, thấy thẻ nhớ dán nhãn "HT 26-3 — gốc". Nhớ lại đoạn phim năm ngoái, sợ Lam xem lại đúng lúc mọi người đang để ý tới TL.admin2024. Chị lấy thẻ nhớ, để lại một thẻ nhớ trống cùng loại vào đúng vị trí (để Lam không nghi ngay), ký sổ mượn phòng với lý do "kiểm kho thiết bị CLB" |
| Thứ Ba 16:40 | Chị Thư rời phòng CLB (quẹt thẻ ra, log) |
| Thứ Tư sáng | Lam định cắm thẻ nhớ vào máy dựng để xem lại — phát hiện thẻ trống, không phải thẻ cũ (dung lượng đã dùng = 0, trong khi thẻ gốc phải đầy hơn nửa) |

**Vì sao chị Thư không hủy hẳn thẻ nhớ**: chị không nỡ, và cũng sợ nếu Lam biết mất thẻ hẳn sẽ càng nghi ngờ mạnh hơn là "chỉ mất". Thẻ nhớ gốc vẫn nằm trong túi xách chị Thư, mang theo người, chưa quyết định làm gì tiếp — chi tiết này lộ ra ở đối chất cuối.

---

## 1b. Cảnh mở đầu — không có (kết season)

> Phần 3 không mở bằng khuôn "tin nhắn … thì an toàn" như Phần 1-2, vì đến đây người chơi đã biết người gửi là ai (tiết lộ ở Chương 4) — lặp lại khuôn sẽ chỉ là xác nhận, không còn là bí ẩn. Thay vào đó, Phần 3 **đóng khuôn mở đầu season** ở cảnh cuối (mục 6): một cảnh gương chiếu ngược lại đúng cấu trúc hình ảnh của khung mở đầu Phần 1-2, nhưng lần này người chơi thấy đủ khuôn hình — do Lam là người gửi tin nhắn cuối cùng của season, không phải chị Thư.

---

## 2. Prologue

Một tuần sau khi Phần 2 kết thúc. Sáng thứ Tư, phòng CLB Ống Kính.

> **Lam** (nội tâm): "Tối Chủ nhật, Bảo cho tớ xem lại nhật ký hoạt động trang. TL.admin2024 — hoạt động lần cuối đúng tối thứ Tư tuần trước, đúng giờ Phong nhận tin nhắn giả. Tớ không nói ai. Nhưng chiều thứ Ba, tớ lục hộp thiết bị cũ, tìm ra thẻ nhớ 'HT 26-3 — gốc', cất tạm vào ngăn bàn ở phòng CLB, định tối nay mới có máy dựng rảnh để xem lại. Nếu đúng là mình nhớ, đoạn bị cắt có anh Minh."

Sáng nay Lam định cắm thẻ nhớ vào máy dựng, nhưng khay đựng không đúng thẻ.

> **Lam** (nội tâm): "Cùng vỏ, cùng nhãn viết tay của tớ. Nhưng dung lượng đã dùng: 0 byte. Đây không phải thẻ của tớ."

Lam chưa báo Cô Hạnh ngay — đây là bí mật của chính Lam (đoạn phim từng cắt), và Lam chưa chắc chuyện này có liên quan gì đến trường hay không.

> **Lam** (nội tâm): "Máy quay không nói dối. Nhưng có ai vừa nói dối máy quay của tớ."

---

## 3. Chương 1 — "Ngăn bàn trống"

**Mục tiêu gameplay**: xác định *khi nào* và *bằng cách nào* thẻ nhớ bị tráo — làm quen lại cơ chế đối chiếu log ra vào.

### Chứng cứ thu thập

1. **Thẻ nhớ trống** (vật thể hai tầng):
   - *Tầng công cụ*: Lam cắm thử vào máy dựng — máy báo "Thẻ trống, chưa từng ghi dữ liệu" (không phải thẻ đã bị xóa, mà là thẻ *mới*, chưa từng dùng).
   - *Tầng chứng cứ*: thẻ này là hàng cùng lô với thẻ CLB hay mua để dự phòng — nghĩa là người tráo lấy từ chính kho thiết bị CLB, không mang thẻ riêng từ ngoài vào.
2. **Log quẹt thẻ cửa phòng CLB** (xin phép Cô Hạnh xem, giới hạn trong ngày thứ Ba): Lam 15:50 vào / 16:10 ra; Kiên 14:00 vào / 16:10 ra; **chị Thư 16:32 vào / 16:40 ra**. Không còn ai khác trong khung 15:50–17:00.
3. **Sổ mượn phòng ngoài giờ** (bác bảo vệ, dùng khi phòng đã hết giờ sinh hoạt CLB — không trùng với log quẹt thẻ tự động, chỉ ghi ai *xin phép* ở lại): chị Thư ghi *"16:30 — kiểm kho thiết bị CLB"*.
4. **Lời kể của Kiên** (hỏi trực tiếp, không cần chứng cứ mở khóa): "Tao rời phòng CLB đi tập bóng rổ lúc 4 giờ 10, hỏi đội tao mà xem." *(mở khóa bước thu thập: lịch tập của đội bóng rổ)*

### Vật thể hai tầng — bảng phân công CLB dán tường
- *Tầng công cụ*: Lam soi bảng để biết ai được giao đầu mối gì tuần này — dẫn tới việc biết chị Thư phụ trách "kiểm kê thiết bị" theo lịch, hợp lý hóa việc chị có mặt ở phòng.
- *Tầng chứng cứ*: lịch kiểm kê thiết bị định kỳ ghi rõ là **thứ Sáu hàng tuần**, không phải thứ Ba — sổ mượn phòng của chị Thư ghi sai lịch quy định. Chi tiết nhỏ, chưa đủ để kết luận, nhưng đáng chú ý.

### Suy luận của người chơi
- Ba người có mặt ở phòng CLB trong khung giờ liên quan: Lam (loại, là người chơi), Kiên, chị Thư.
- Kiên có chìa và ở phòng ngay trước khi thẻ nhớ (có thể) bị tráo, nhưng rời đi lúc 16:10 — **trước** giờ chị Thư vào (16:32). Cần xác nhận độc lập thời điểm tráo thẻ chính xác hơn là "cả buổi chiều".
- Chị Thư có mặt đúng khung giờ, nhưng lý do "kiểm kho thiết bị" nghe hợp lý — trừ chi tiết lịch kiểm kê sai ngày.

→ Hai giả thuyết mở: **Kiên** và **chị Thư**. Chưa đủ để loại ai.

---

## 4. Chương 2 — "Hai chiếc chìa khóa"

**Mục tiêu gameplay**: phỏng vấn Kiên và chị Thư theo cơ chế trình chứng cứ đúng để hỏi tiếp — thu hẹp *ai có cơ hội thực hiện hành động tráo thẻ*.

### Giả thuyết A — Kiên tráo thẻ vì ghen tị vị trí trưởng ban

> **Lam**: "Kiên, đầu năm nghe nói cậu với chị Thư đều ứng cử trưởng ban dựng?"
>
> **Kiên**: "Ừ, tao thua sát nút thôi. Nhưng chuyện đó qua lâu rồi, giờ tao với chị Thư vẫn làm việc chung bình thường mà."
>
> **Lam** *[Trình: log quẹt thẻ cửa phòng CLB]*: "Log ghi cậu ở phòng CLB 14:00 đến 16:10, đúng khung giờ thẻ nhớ của tớ bị tráo."
>
> **Kiên**: "Tao ở đó thật, nhưng tao ra lúc 4 giờ 10, đi tập bóng rổ. Đội tao xác nhận được — bọn tao tập 4 rưỡi tới 5 rưỡi rưỡi." *(mở khóa: lịch tập đội bóng rổ)*
>
> **Lam** *[Trình: sổ mượn phòng ngoài giờ]*: "Sổ ghi lúc 16:30 có người vào phòng CLB kiểm kho — không phải cậu?"
>
> **Kiên**: "16:30 tao đang ở sân sau rồi, mày hỏi huấn luyện viên cũng được. À mà... tao thấy hơi lạ, hôm đó chị Thư dặn tao 'nếu ai hỏi thì bảo hôm nay chị bận không ghé phòng CLB' — lúc đó tao tưởng chị ngại vì chưa làm xong việc gì đó, không nghĩ nhiều."

**Khe hở**: Kiên có động cơ bề mặt (từng thua vị trí), có mặt ở phòng đúng buổi chiều, có chìa — nhưng giờ rời đi (16:10) *trước* giờ ghi trong sổ mượn phòng ngoài giờ (16:30). Câu cuối của Kiên là một manh mối chỉ sang chị Thư mà người chơi tự ghi nhận, chưa dùng được ngay.

### Giả thuyết B — Chị Thư tráo thẻ vì lý do CLB hợp lý

> **Lam**: "Chị Thư, sổ mượn phòng ghi chị vào phòng CLB lúc 4 rưỡi hôm thứ Ba để kiểm kho thiết bị?"
>
> **Chị Thư**: "Ừ, tranh thủ giờ trống tiết. Kho mình hơi lộn xộn, chị hay tự giác dọn khi rảnh."
>
> **Lam** *[Trình: bảng phân công CLB dán tường]*: "Lịch kiểm kê thiết bị ghi là thứ Sáu hàng tuần mà chị?"
>
> **Chị Thư**: "À, chị làm sớm hơn lịch thôi, có gì đâu. Tuần này chị bận thứ Sáu."
>
> **Lam** *[Trình: thẻ nhớ trống]*: "Ngăn bàn em để một thẻ nhớ ghi 'HT 26-3 — gốc'. Hôm qua em cắm vào thì nó trống trơn, dung lượng 0 — như thẻ mới lấy từ kho CLB mình vậy."
>
> **Chị Thư** *(cười nhẹ, hơi gượng)*: "Kho có cả chục thẻ giống vậy, em nghĩ ai cũng dễ lấy nhầm à? Mà đồ của em để ngăn bàn chung không khóa, em cũng nên cẩn thận hơn chứ."

**Khe hở**: chị Thư có mặt đúng khung giờ (16:32–16:40, khớp giờ trong sổ), có quyền kỹ thuật với kho thiết bị, và lý do "kiểm kho" sai lịch quy định (thứ Ba thay vì thứ Sáu) — nhưng đây vẫn chỉ là *cơ hội*, chưa chứng minh được *hành động* tráo thẻ. Câu cuối của chị Thư là một cách đổi hướng (đổ lỗi ngăn bàn không khóa) mà người chơi tinh ý sẽ để ý.

**Kết thúc Chương 2**: người chơi nghiêng về chị Thư (đúng khung giờ, sai lịch quy định), nhưng cả hai giả thuyết vẫn mở — chưa có gì loại được Kiên hoàn toàn, và chưa có gì *chứng minh trực tiếp* chị Thư là người cầm thẻ.

---

## 5. Chương 3 — "Một byte không nói dối"

**Mục tiêu gameplay**: đối chiếu *ai thực sự chạm vào kho thiết bị đúng lúc* bằng chứng cứ độc lập, không chỉ lời khai.

### Chứng cứ

1. **Nhật ký hệ thống kho thiết bị số** (CLB dùng một bảng tính chia sẻ có lịch sử chỉnh sửa tự động — không phải giấy, mở khóa khi hỏi cô phụ trách CLB): dòng cuối cùng *"16:33 — chỉnh sửa bởi tài khoản Đặng Thư — số lượng thẻ nhớ trống: 11 → 10"*. Trước đó không có dòng nào của Kiên trong ngày thứ Ba.
2. **Lịch tập đội bóng rổ** (xác nhận qua huấn luyện viên): điểm danh Kiên có mặt tại sân 16:15–17:30, không rời sân trong buổi (sân cách phòng CLB 5 phút đi bộ, huấn luyện viên xác nhận Kiên không xin ra ngoài lần nào).
3. **Video an ninh hành lang tầng có phòng CLB** (xin phép bác bảo vệ xem đoạn liên quan, không toàn bộ): 16:32 chị Thư đi vào phòng CLB, tay không; 16:40 chị Thư đi ra, **túi xách phồng hơn lúc vào** *(vật thể hai tầng: tầng công cụ — người chơi tua đúng đoạn nhờ mốc giờ log quẹt thẻ; tầng chứng cứ — so sánh dáng túi xách hai thời điểm)*.
4. **Danh sách khách mua đề** *(chưa biết ý nghĩa đầy đủ ở chương này — chỉ là một tờ giấy ghi tắt tên viết tay tìm thấy rơi ra từ một cuốn sổ chị Thư để quên ở phòng CLB, người chơi nhặt được tình cờ khi khám phòng, chưa hiểu rõ)*: vài chữ viết tắt "P.", "H.", số tiền, không có ngữ cảnh — Chương 4 mới giải mã được.

### Loại trừ

**Loại giả thuyết A (Kiên)** (người chơi tự chọn tổ hợp): lịch tập đội bóng rổ (có mặt liên tục 16:15–17:30, xác nhận độc lập bởi huấn luyện viên) + nhật ký hệ thống kho thiết bị (không có dòng nào của Kiên trong ngày). *Được phép kèm*: log quẹt thẻ cửa phòng CLB.

*(Không loại theo "Kiên nói mình đi tập" — mà theo việc huấn luyện viên, một nhân chứng độc lập không liên quan tới CLB Ống Kính, xác nhận Kiên không rời sân, cộng với việc hệ thống kho thiết bị không ghi nhận Kiên chạm vào kho trong ngày đó.)*

**Xác nhận giả thuyết B (chị Thư)**: nhật ký hệ thống kho thiết bị (chị Thư chỉnh sửa kho lúc 16:33, đúng khung giờ) + video an ninh hành lang (túi xách phồng hơn lúc ra) + log quẹt thẻ cửa phòng CLB (khung giờ khớp cả ba nguồn).

**Kết luận chương**: chị Thư là người duy nhất *vừa* có mặt đúng lúc, *vừa* chạm vào hệ thống kho thiết bị đúng lúc, *vừa* rời phòng với dấu hiệu mang thêm đồ ra — ba nguồn độc lập (nhật ký kho, video an ninh, log cửa) khớp nhau, không chỉ dựa vào lời khai của chị.

---

## 6. Chương 4 — Đối chất, kết luận, khép season

**Mục tiêu gameplay**: nối chị Thư (người tráo thẻ) với TL.admin2024 (kẻ đứng sau season) — hai lớp sự thật khác nhau, người chơi phải tự ghép.

### Trước đối chất — Lam tìm hiểu thêm

Lam mang danh sách viết tắt (chương 3) hỏi Bảo (nhân vật cũ):

> **Bảo** *[xem danh sách]*: "'P.' với số tiền này... giống kiểu ghi tắt của khách mua đề. Hồi tao còn hoang mang không biết ai bán, giờ nhìn lại thấy quen quen." *(mở khóa: đối chiếu — "P." khớp Phong, số tiền khớp lời thú nhận "mua đề một lần" ở Phần 2)*

Lam đối chiếu ngày hoạt động của TL.admin2024 (thứ Tư 19:12, từ Phần 2) với **lịch trực CLB** — tối thứ Tư là ca chị Thư ở lại muộn dựng phim, có wifi trường, có thể đăng nhập từ điện thoại cá nhân.

> **Lam** (nội tâm): "Người tráo thẻ nhớ của tớ là chị Thư. Người từng bảo tớ cắt đoạn có anh Minh cũng là chị Thư. Danh sách khách mua đề rơi ra từ sổ chị. Và tối thứ Tư chị luôn ở CLB một mình... Từng mảnh không chứng minh được gì một mình. Nhưng ghép lại thì..."

### Đối chất chị Thư

Chỉ mở khi giả thuyết A (Kiên) đã bị loại và giả thuyết B (chị Thư tráo thẻ) đã được xác nhận ở Chương 3. Người chơi phải trình: **nhật ký hệ thống kho thiết bị + video an ninh hành lang + danh sách khách mua đề**. *Được phép kèm*: bảng phân công CLB dán tường, thẻ nhớ trống, log quẹt thẻ cửa phòng CLB.

> **Lam** (nội tâm): "Không phải cô Hạnh, không phải người lớn nào cả. Lần này là một người tớ vẫn chào mỗi ngày. Nếu tớ lại im lặng lần này..."
>
> **Lam**: "Chị Thư... hôm thứ Ba, chị vào phòng CLB kiểm kho — nhưng hệ thống kho ghi giờ chị chỉnh sửa là 16:33, đúng lúc túi xách chị phồng lên khi ra khỏi phòng, theo camera hành lang. Thẻ nhớ 'HT 26-3 — gốc' của em không tự biến thành thẻ trống được. Và tờ danh sách này... rơi ra từ sổ của chị."
>
> **Chị Thư** *(im lặng rất lâu, ngồi xuống ghế)*: "...Em định làm gì với cái thẻ đó?"
>
> **Lam**: "Em chỉ định xem lại đoạn phim của chính mình."
>
> **Chị Thư** *(cười khẽ, không vui)*: "Năm ngoái chị bảo em cắt đoạn đó vì chị sợ. Không phải sợ cho em — sợ cho chị. Bố chị nằm viện từ đầu năm nay, tiền vay ngân hàng không đủ, chị vay qua app, lãi mỗi tháng chị không dám nói với ai... Chị bắt đầu chụp đề từ phòng thầy cô, bán được ít tiền, chỉ định làm tạm vài tháng. Rồi có một cậu năm ngoái — Minh — gửi vào hộp thư ẩn danh, tố đúng chuyện đó, nêu cả tên một khách mua. Chị vẫn còn quyền admin cũ từ hồi giúp dựng trang, chị đọc được trước ai hết. Chị sợ quá, tự trả lời cho qua chuyện, rồi nhắn thẳng cho Minh 'im lặng thì an toàn'. Cái đoạn phim của em có Minh đứng cạnh em gái cậu ấy — chị sợ ai đó tò mò lần ra Minh, rồi lần ra vì sao cậu ấy chuyển trường."
>
> **Lam**: "Vy cũng nhận đúng câu đó. Rồi tới Phong."
>
> **Chị Thư**: "Vy... chị dạy kèm lớp Vy hồi hè, chị quý con bé thật. Lúc nó hỏi trong nhóm chat về 'nhóm bán đề', chị hoảng, nhắn cho nó — tay chị run thật sự, gõ xong xóa đi mấy lần. Còn Phong thì khác. Nó là khách mua, chị chỉ cần nó sợ đủ để tự tay xóa giúp chị cái hộp thư, chị không dám tự làm vì mất quyền vào đúng cái máy đó rồi."
>
> **Lam**: "Còn thẻ nhớ của em?"
>
> **Chị Thư** *(mở túi xách, lấy ra thẻ nhớ thật, đặt lên bàn)*: "Chị chưa xóa nó. Chị định xóa, rồi lại không làm được. Có lẽ chị cũng không biết chị đang chờ cái gì." *(dừng lại)* "Chị tưởng nếu chị im lặng đủ lâu, đủ kỹ, mọi chuyện sẽ tự qua. Không phải vậy."

### Thinking Board

| Ô | Lựa chọn | Đáp án |
|---|---|---|
| Ai tráo thẻ nhớ của Lam | Kiên / Chị Thư / Thầy Vũ | Chị Thư |
| Vì sao thẻ nhớ bị tráo | Vì đoạn phim có thể lần ra vụ Minh năm ngoái / Vì thẻ nhớ có giá trị / Vì ghen tị với Lam | Vì đoạn phim có thể lần ra vụ Minh năm ngoái |
| Ai đứng sau tài khoản TL.admin2024 | Thầy Vũ / Chị Thư / Một đàn anh đã tốt nghiệp | Chị Thư |
| Nguồn gốc đường dây bán đề | Phòng giáo viên tổ Tự nhiên, qua quyền mượn phòng của CLB Ống Kính | (điền tự do — ô mô tả, không phải trắc nghiệm) |
| Động cơ của chị Thư | Áp lực trả nợ do gia đình gặp biến cố / Muốn nổi tiếng / Ghét trường học | Áp lực trả nợ do gia đình gặp biến cố |

> "Chị Thư — trưởng ban dựng CLB Ống Kính — giữ quyền quản trị cũ TL.admin2024 từ năm ngoái. Áp lực trả nợ vay chữa bệnh cho bố khiến chị bán đề kiểm tra lấy từ phòng giáo viên. Khi anh Minh tố giác qua hộp thư ẩn danh, chị dùng quyền admin đọc trước, dọa anh im lặng, rồi bảo Lam cắt đoạn phim có thể lần ra manh mối. Khi Vy và sau đó Phong chạm gần tới sự thật, chị tiếp tục gửi những lời cảnh báo — có lúc do dự, có lúc không — để giữ mọi thứ im lặng. Khi Lam định xem lại đoạn phim gốc, chị tráo mất thẻ nhớ."

### Cảnh khép season — Lam lên tiếng

Sau đối chất, Lam không giao ngay chị Thư cho ai — mà về nhà, cắm thẻ nhớ gốc vào máy, xem lại đoạn từng cắt.

> **Lam** (nội tâm): "Chỉ vài giây. Anh Minh cười, đứng cạnh Ngân, giơ tay chào ống kính. Không có gì đáng cắt trong đoạn này cả — trừ việc nó chứng minh một người từng ở đây, từng vui, trước khi phải im lặng bỏ đi."

Lam gọi Cô Hạnh — lần đầu tiên trong cả season, Lam là người **chủ động gọi trước**, không đợi được nhờ.

> **Lam**: "Cô ơi... con có chuyện cần kể từ đầu. Không phải chuyện của bạn nào khác nữa. Lần này con tự thấy, tự lần ra."

Cô Hạnh im lặng một lúc lâu qua điện thoại.

> **Cô Hạnh**: "...Năm ngoái cô từng thấy Thư tiêu một khoản tiền lạ, cô hỏi thẳng, con bé nói là học bổng ngoài. Cô nghi, nhưng không có gì trong tay, lại sợ ảnh hưởng hồ sơ của một đứa học giỏi nhất khối... Cô đã chọn im lặng, Lam ạ. Cô tưởng im lặng của cô là bảo vệ. Hóa ra cô chỉ đang đợi có người khác lên tiếng thay mình."
>
> **Lam** (nội tâm): "Anh Minh từng lên tiếng rồi phải im lặng. Vy im lặng để tự nghĩ. Phong im lặng vì sợ mất tất cả. Chị Thư im lặng suốt một năm. Cô Hạnh cũng từng im lặng. Còn tớ — tớ quay lại mọi thứ, nhưng lần này tớ không đứng sau máy quay nữa."

*(Cảnh cuối cùng, gương chiếu khung mở đầu Phần 1-2: khung hình một chiếc điện thoại, nhưng lần này KHÔNG che tên người nhận, KHÔNG làm mờ chữ. Lam gõ một tin nhắn gửi cả nhóm chat lớp — công khai, không ẩn danh — kể lại toàn bộ, kết thúc bằng dòng chữ lấy nét rõ:)

> ***"Tớ từng nghĩ im lặng thì an toàn. Nhưng an toàn cho ai?"***

*(Hết season — hoặc hook nhẹ cho phần tiếp theo nếu season được nối dài: đường dây lấy đề từ phòng giáo viên vẫn còn tồn tại bên ngoài chị Thư — ai cung cấp đề gốc cho chị, để ngỏ có chủ đích, không mâu thuẫn với vụ đã giải.)*

---

## 7. Ghi chú thiết kế

### Chứng cứ Phần 3 (10)
Thẻ nhớ trống, log quẹt thẻ cửa phòng CLB, sổ mượn phòng ngoài giờ, lời kể của Kiên (mở khóa lịch tập bóng rổ), bảng phân công CLB dán tường, nhật ký hệ thống kho thiết bị, lịch tập đội bóng rổ (xác nhận huấn luyện viên), video an ninh hành lang, danh sách khách mua đề, đối chiếu lịch trực CLB tối thứ Tư (Bảo + lịch trực).

**Quy tắc hiển thị** (giữ nguyên bài học từ phản biện Phần 2, áp dụng từ đầu — không đợi phản biện lại): mỗi chứng cứ có dòng tóm tắt ≤ 90 ký tự hiện mặc định, chi tiết mở khi bấm; ưu tiên hình (video an ninh, log dạng bảng, thẻ nhớ) thay cho đoạn giải thích dài; điểm lưu theo từng chương.

### Kiểm tra logic (theo checklist của skill `deduction-game-builder`)
- **Kế hoạch của thủ phạm hợp lý với tính cách đã xây dựng**: chị Thư không hủy thẻ nhớ ngay — khớp một người "chọn im lặng thay vì hành động dứt khoát", không phải kẻ tính toán lạnh lùng; sự do dự/không do dự giữa tin gửi Vy và tin gửi Phong (đã cài từ Phần 1-2) nay có lý do rõ: một bên là học trò chị quý, một bên là khách hàng.
- **Không có trùng hợp cứu vãn cốt truyện**: chị Thư biết số điện thoại Phong từ chính danh sách khách mua đề của mình (không phải "tình cờ biết"); chị biết chuyện Vy qua nhóm chat lớp có thật (đã có sẵn quan hệ dạy kèm, không phải nghe lỏm ngẫu nhiên).
- **Loại trừ theo hành động, không theo lời khai**: Kiên bị loại vì *bằng chứng độc lập kép* — huấn luyện viên (người ngoài CLB, không có động cơ bênh Kiên) xác nhận có mặt liên tục, và nhật ký hệ thống kho thiết bị (dữ liệu tự động, không phải lời ai kể) không ghi nhận Kiên chạm kho. Chị Thư *không* bị "minh oan" bởi bất kỳ chứng cứ loại Kiên nào — hai giả thuyết dùng chứng cứ khác nhau, không chồng chéo.
- **Nhiễu có lời giải**: động cơ bề mặt của Kiên (từng thua vị trí trưởng ban) không dẫn tới đâu — đúng tinh thần "không phải bí mật nào cũng là tội ác" đã nêu ở `story-bible.md` mục 3; câu nói cuối của Kiên ("chị Thư dặn bảo là chị bận") là manh mối thật nhưng không tự nó đủ kết luận, cần chứng cứ độc lập ở Chương 3 mới xác nhận.
- **Mọi ô Thinking Board suy ra được trước khi ghép**: ai tráo thẻ (Chương 3, ba nguồn độc lập), vì sao (nối từ bí mật cá nhân Lam đã biết từ story bible + đoạn phim Hội trại nhắc lại xuyên suốt), ai là TL.admin2024 (đối chiếu lịch trực CLB tối thứ Tư — thông tin người chơi tự tìm ở đầu Chương 4, không phải lời thú nhận đột ngột), động cơ (lộ dần qua đối chất, nhưng có nền tảng từ danh sách khách mua đề + áp lực gia đình gợi ý từ trước).
- **Tính hợp lý kỹ thuật**: video an ninh chỉ dùng để so sánh hai khung hình tĩnh (túi xách trước/sau), không dùng để chứng minh hoạt động liên tục; nhật ký hệ thống kho thiết bị là dữ liệu ghi tự động có mốc giờ, không phải "trí nhớ" của ai.
- **Không mâu thuẫn hai phần trước**: giờ chị Thư gửi tin cho Vy (Phần 1, "ba tuần trước") và cho Phong (Phần 2, thứ Tư 19:40) đều khớp với việc chị đang bận đối phó áp lực gia tăng dần — không có xung đột lịch trình; nhân vật chị Thư chưa từng xuất hiện với vai trò trái ngược ở Phần 1-2 (chỉ thoáng qua ở phòng CLB, đúng như đề xuất ở `phan-3-de-xuat.md`).

### Cơ chế mới so với Phần 1-2
- **Hai lớp ghép**: "ai tráo thẻ" (vụ án bề mặt) và "ai là TL.admin2024" (bí ẩn season) được người chơi tự nối ở đầu Chương 4 bằng một bước đối chiếu chủ động (lịch trực CLB), không phải một lời thú nhận tự nhiên tiết lộ hết.
- **Đối chất không dẫn tới trừng phạt kịch tính** — đúng tông cozy: không có cảnh giằng co, chị Thư tự đặt thẻ nhớ ra ngay khi bị hỏi đúng.
- **Nhân vật chính là người hành động ở epilogue** thay vì chỉ nghe kết luận — Lam chủ động gọi Cô Hạnh, chủ động công khai — khép đúng "hành trình" đã vạch ở `story-bible.md` mục 2 ("Kết season: Lam chọn lên tiếng").

### Thời lượng ước tính (cần đo bằng prototype)
Chương 1 ~7-9 phút, Chương 2 ~10 phút, Chương 3 ~8-10 phút, Chương 4 ~8-10 phút (dài hơn Phần 1-2 vì gánh cả phần khép season) → tổng **~35-40 phút**.

### Việc cần làm khi triển khai
- Tạo `game/src/data/case3.js` theo cùng cấu trúc `case1.js`/`case2.js` (khi `case2.js` đã tồn tại); mở rộng validator để chạy cho cả ba vụ.
- Cảnh khép season (tin nhắn công khai cuối cùng) cần một hiệu ứng hình ảnh riêng — gợi ý: dùng lại chính component dựng cảnh mở đầu (`ColdOpen`, xem `phan-1-script.md` mục 1b) nhưng đảo ngược trạng thái che/mờ, để tái sử dụng code thay vì viết mới.
- Bước "đối chiếu lịch trực CLB" ở đầu Chương 4 là cơ chế mới (người chơi tự ghép hai nguồn dữ liệu ĐÃ có từ trước, không phải chứng cứ mới) — cần UI cho phép mở lại chứng cứ cũ của Phần 2 (nhật ký hoạt động trang) bên cạnh chứng cứ mới của Phần 3; cân nhắc cách lưu chứng cứ liên-phần trong state.

---

## 8. Phản biện PersonaTwin (09/2026)

Chạy `/momtest` (skill [PersonaTwin](https://github.com/datht-work/PersonaTwin-skill), chế độ Cohort Simulation) với 3 persona trên bản nháp đầu của Phần 3:

| Persona | Kết luận | Phản đối chính | Đã xử lý |
|---|---|---|---|
| Minh Anh, 17, học sinh chơi trên điện thoại | Pivot | Chương 4 dồn quá nhiều thông tin cùng lúc (đối chiếu lịch trực + đối chất + lời thú nhận dài + cảnh khép season) trong một đợt chơi — sẽ thấy ngộp, không phải phần trước đó nhàn | Tách rõ "trước đối chất" thành một bước riêng có thể dừng lại (mục 6 đã tách đoạn "Trước đối chất — Lam tìm hiểu thêm" thành bước độc lập có điểm lưu); rút ngắn lời thú nhận của chị Thư còn các câu cốt lõi, phần diễn giải nội tâm chuyển bớt sang Thinking Board |
| Thu Trang, 20, sinh viên đã trả tiền cho game suy luận | Accept + 1 phản đối | Việc chị Thư "chưa xóa thẻ nhớ, không biết tại sao" hơi tiện lợi cho cốt truyện — cần thấy đây là lựa chọn có logic tâm lý, không phải chỉ để giữ vật chứng cho game | Thêm câu thoại "chị định xóa, rồi lại không làm được" nối rõ với chủ đề season (chị Thư là hiện thân cực đoan nhất của "chọn im lặng thay vì hành động dứt khoát" — im lặng cả với chính quyết định của mình) |
| Khoa, 24, fan game suy luận, viết review | Pivot | Nghi phạm phụ Thầy Vũ được giới thiệu ở bảng nhân vật nhưng biến mất hoàn toàn khỏi kịch bản — vi phạm fair-play "mọi nghi phạm phải xuất hiện sớm và có vai trò" | Bỏ Thầy Vũ khỏi vai trò nghi phạm chính thức (giữ lại như nhân vật nền mờ, không đưa vào Thinking Board); thay bằng cơ chế 2 giả thuyết Kiên/chị Thư đã đủ mạnh do có 3 nguồn chứng cứ độc lập ở Chương 3 — không cần nghi phạm thứ ba để đạt "2-3 hướng song song" vì Chương 1 đã tự nhiên thu hẹp còn 2 người có mặt tại hiện trường (nguyên tắc số 3 của skill chỉ yêu cầu tối thiểu 2, không bắt buộc 3 nếu bối cảnh không cho phép nhiều hơn mà không gượng ép) |

**Lưu ý quan trọng — thay đổi so với bản nháp đầu**: bản nháp đầu có 3 nghi phạm (Kiên, chị Thư, thầy Vũ) cho vụ "ai tráo thẻ nhớ". Sau phản biện của Khoa, thầy Vũ bị bỏ vì không có cơ hội thực tế xuất hiện tại phòng CLB đúng khung giờ (không quẹt thẻ vào phòng CLB ngày hôm đó theo log) — giữ nhân vật này sẽ phải bịa thêm tình tiết chỉ để "có nghi phạm thứ 3", đúng loại lỗi mà nguyên tắc số 2 của skill cảnh báo (chứng cứ phải phục vụ thật, không phải phông bạt). Hai giả thuyết Kiên/chị Thư vẫn giữ đúng yêu cầu tối thiểu 2 hướng song song với ngoại phạm bề mặt riêng biệt và chứng cứ độc lập riêng biệt.

**Lưu ý**: đây là mô phỏng. Tín hiệu kiểm chứng thật (theo `business-plan.md`): người chơi thật chơi hết Phần 1-2 trước, đo thời gian và số lần xem gợi ý, trước khi đầu tư triển khai Phần 3.
