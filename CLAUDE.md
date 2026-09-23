# CLAUDE.md — Dự án Game Trinh thám Suy luận (chưa đặt tên chính thức)

> File này giúp Claude Code (hoặc bất kỳ session mới nào) hiểu ngay bối cảnh dự án mà không cần đọc lại lịch sử hội thoại. Đọc file này trước, sau đó đọc `docs/` nếu cần chi tiết sâu hơn.

---

## 1. Dự án là gì

Một **game web giải trí tập trung vào rèn luyện tư duy suy luận logic**, lấy cảm hứng phong cách trinh thám kiểu Thám tử lừng danh Conan + escape room, nhưng **loại bỏ hoàn toàn yếu tố kinh dị** — khác với dòng game escape-room-kinh-dị đang thống trị thị trường indie Việt Nam.

**Ràng buộc bản quyền TUYỆT ĐỐI (không thương lượng)**: Game KHÔNG được nhắc trực tiếp tên phim/manga, tên nhân vật, hay bất kỳ yếu tố nhận diện thương hiệu nào của Conan hoặc bất kỳ IP nào khác. Đây là **IP gốc hoàn toàn**, chỉ mô phỏng phong cách suy luận (fair-play whodunit/Honkaku) — giống cách Golden Idol, Obra Dinn, Murders on Budapest! đều là IP gốc.

## 2. Quyết định kinh doanh đã chốt

| Hạng mục | Quyết định |
|---|---|
| Nền tảng | Web/trình duyệt trước (CrazyGames/Poki/itch.io) |
| Kiếm tiền | **Ads-first** — rewarded video là nguồn thu chính, chưa cần thu phí ngay. KHÔNG phải F2P+IAP ngay từ đầu (đã đổi hướng sau phản biện Mom Test) |
| Cấu trúc nội dung | Cốt truyện chia nhiều phần, **Phần 1 hoàn toàn miễn phí** để câu người chơi; IAP theo phần chỉ là nguồn thu bổ sung về sau |
| Đội ngũ | Solo/1-2 người, ngân sách hạn chế → MVP thu gọn |
| Công nghệ | Web thuần, tự code (React + Vite) |

**Chi tiết đầy đủ**: `docs/business-plan.md` (nghiên cứu thị trường, đối thủ cạnh tranh, TAM/SAM/SOM, GTM).

### Vì sao ads-first, không phải F2P+IAP?
Phản biện qua skill `personatwin` (Mom Test simulation) với 2 persona VN cho thấy: học sinh THPT (16-17 tuổi, đúng nhân vật chính trong cốt truyện) không có phương tiện thanh toán độc lập — rào cản này khiến IAP-ngay-từ-đầu không khả thi cho tệp người chơi cốt lõi. Ads-first giải quyết vấn đề này vì mọi lứa tuổi đều "trả" bằng cách xem quảng cáo, không cần thẻ.

### Case study tham chiếu quan trọng
**The Roottrees are Dead** — game indie 1 người, phát hành miễn phí trên web/itch.io, xây cộng đồng trước, sau đó remaster trả phí trên Steam, thu >1 triệu USD. Đây là mô hình GTM gần nhất với chiến lược của dự án này.

## 3. Nguyên tắc thiết kế game (bắt buộc tuân thủ khi viết thêm nội dung)

1. **Fair-play Honkaku**: Mọi nghi phạm phải xuất hiện sớm (không giới thiệu "thủ phạm bất ngờ" ở cuối). Mọi chứng cứ cần để kết luận đúng phải công khai trong game, không giấu để tạo bất ngờ giả tạo. Không dùng yếu tố siêu nhiên.
2. **Vật thể/chứng cứ hai tầng ý nghĩa**: Mỗi vật phẩm tương tác được nên vừa phục vụ cơ chế escape-room (công cụ) vừa là chứng cứ suy luận — tránh cảm giác "phông bạt" tách rời cốt truyện.
3. **LUÔN có 2-3 hướng suy luận song song** (nguyên tắc quan trọng nhất, áp dụng cho MỌI vụ án, không riêng Phần 1): Không được thiết kế kiểu "hỏi 1 lượt là loại xong" một nghi phạm. Mỗi giả thuyết cần ngoại phạm bề mặt hợp lý riêng + cần chứng cứ đối chiếu độc lập (không chỉ lời khai) mới thu hẹp được. Vi phạm nguyên tắc này khiến game giống đọc truyện tuyến tính thay vì tự suy luận — đây là bug thiết kế đã bị phát hiện và sửa 1 lần qua phản biện Mom Test, đừng lặp lại.
4. **Không kinh dị**: Không jumpscare, không yếu tố hù dọa. Vụ án dùng mô-típ "mất tích bí ẩn" (không xác chết) để giữ kịch tính mà vẫn cozy.

## 4. Cốt truyện — trạng thái hiện tại

**Chi tiết đầy đủ**: `docs/story-bible.md` (tổng quan season) và `docs/phan-1-script.md` (kịch bản chi tiết Phần 1, đã có lời thoại/chứng cứ cụ thể).

**Tóm tắt nhanh**:
- **Bí ẩn xuyên suốt season**: Chuỗi vụ mất tích bí ẩn tại trường THPT Trúc Lâm, có một mạng lưới lớn hơn đứng sau ("vụ của anh Minh năm ngoái" — CHƯA viết nội dung, để dành cho Phần 2).
- **Nhân vật chính**: Lam — thành viên CLB Ống Kính (báo trường/truyền thông), được Cô Hạnh (GVCN) nhờ xác minh trước khi báo cấp trên.
- **Phần 1 ("Buổi Livestream Cuối Cùng")**: Vy (người mất tích) tự rời nhà lúc 21:36 sau khi gõ "tao đi lấy nước xíu". Đức (đáp án đúng) dùng tài khoản Vy trên điện thoại Redmi Note 12 của mình để gõ "buồn ngủ" lúc 21:46 (khiến Vy "rời phòng" 21:47) và sáng hôm sau đăng ảnh check-in giả chỉnh AI. Nghi phạm bị loại theo *khả năng thực hiện hành động che giấu* (thiết bị Redmi + đang làm gì lúc 21:46), KHÔNG theo "có rời máy không". Khang (iPhone, đang viết bảng trắng) và Chi (Samsung, đang đọc lời giải trước webcam) là hai hướng gây nhiễu có lời giải. Động cơ: Vy sợ hãi sau một tin nhắn ẩn danh — hook sang Phần 2.
- **Phần 2 ("Hộp Thư Ẩn Danh")** — kịch bản đầy đủ ở `docs/phan-2-script.md`, CHƯA triển khai thành game. Bảo (admin trang confession) bị Phong dùng tài khoản giả mạo anh Minh dụ về Bến Tre, để Phong dùng máy thư viện số 3 xóa Hộp thư ẩn danh (có tên Phong trong danh sách mua đề năm ngoái). Kịch bản đã qua phản biện PersonaTwin (3 persona, xem mục 8 của file). Mạch season: nhóm bán đề thi + tài khoản "TL.admin2024" + các tin nhắn "... thì an toàn".
- **Nhân vật Lam & chủ đề season** (chốt 09/2026, `docs/story-bible.md` mục 2 và 2b): Lam phụ trách quay dựng, giới tính để trung tính (không dùng anh ấy/cô ấy), niềm tin "máy quay không nói dối", điểm yếu né đối đầu; bí mật cá nhân: từng cắt một đoạn có anh Minh trong video Hội trại 26/3 năm ngoái theo lời một người phụ trách CLB (ai bảo cắt và đoạn phim ghi gì — để ngỏ tới Phần 3). Chủ đề season: *Im lặng thì an toàn — hay im lặng là tiếp tay?* Lời thoại mới của Lam đã có trong kịch bản Phần 1-2 nhưng CHƯA cập nhật vào code game Phần 1 (Prologue, Chapter1, câu đối chất trong `case1.js`).
- **Cảnh mở đầu season** (09/2026): mỗi phần mở bằng cảnh ~20-25 giây người gửi bí ẩn gõ tin "… thì an toàn" (Phần 1: Thứ Hai 22:17 gửi Vy; Phần 2: Thứ Tư 19:40 gửi Phong), trả thưởng ở cuối phần. Kịch bản: mục 1b của `phan-1-script.md` và `phan-2-script.md`. CHƯA có trong code game (cần màn hình `ColdOpen` trước Prologue + cờ đã xem trong save).
- **Thị trường chính: Việt Nam** (chốt 09/2026, xem `docs/business-plan.md` mục 0 và `docs/insights-black-myth-wukong.md`). Kênh phát hành và mô hình kiếm tiền cần xem lại cho phù hợp.
- **Phần 3 ("Bản Gốc")** — kịch bản đầy đủ ở `docs/phan-3-script.md`, CHƯA triển khai thành game (`case3.js` chưa tồn tại). **Kẻ đứng sau season đã CHỐT (09/2026)**: chị Thư (lớp 12, trưởng ban dựng CLB Ống Kính) = chủ tài khoản TL.admin2024, bán đề kiểm tra lấy từ phòng giáo viên tổ Tự nhiên vì áp lực trả nợ vay chữa bệnh cho bố; năm ngoái bảo Lam cắt đoạn phim Hội trại 26/3 có anh Minh để tránh bị lần ra. Khung vụ án Phần 3: thẻ nhớ gốc "HT 26-3 — gốc" của Lam bị chị Thư tráo mất. Cô Hạnh là vùng xám (từng nghi ngờ chị Thư tiêu tiền bất thường, chọn im lặng). Kết season: Lam chủ động lên tiếng, Cô Hạnh lên tiếng theo. Đã qua phản biện PersonaTwin (3 persona, xem mục 8 của `phan-3-script.md`) — một vòng tự kiểm tra sau đó đã sửa 3 lỗi nhỏ (nghi phạm thầy Vũ dư thừa đã bỏ khỏi Thinking Board, sai ngày ở Prologue, trình tự Lam cất thẻ nhớ).
- **Việc CHƯA làm**: thêm dòng "Câu hỏi hiện tại" ở màn điều tra, lời giới thiệu game trung thực, làm chứng cứ dễ đọc trên điện thoại cho cả Phần 1 (xem `docs/engine-lessons.md` mục 0), triển khai Phần 2 (`case2.js`) và Phần 3 (`case3.js`) thành code — cả hai đều cần tách nội dung Prologue/Chương 1 khỏi JSX trước (`docs/engine-lessons.md`), tên chính thức của dự án/game.

## 5. Trạng thái kỹ thuật (MVP)

**Vị trí code**: `game/` (React + Vite, JavaScript thuần, không TypeScript).

**Lưu ý nếu đang làm việc trong thư mục `eh-builder-cap-nhat` này**: đây là gói cập nhật nội dung (xem `HUONG-DAN-CAP-NHAT.md`), KHÔNG phải repo đầy đủ — thiếu `vite.config.js`, `index.html`, `public/`, `node_modules`, và một số file screen (ví dụ `Epilogue.jsx`, `RewardedAdModal.jsx`) nằm ở repo gốc chứ không nằm trong gói này. KHÔNG chạy được `npm install`/`npm run dev`/`npm run build` trực tiếp ở đây. Việc thường làm là: sửa nội dung/code trong gói này, sau đó người dùng tự giải nén đè lên repo gốc rồi mới `npm run validate`/`npm run dev`/`npm run build` ở đó. Nếu cần chạy thử (Playwright, dev server) trong phiên làm việc này, hỏi người dùng đường dẫn repo gốc đầy đủ trước.

**Chạy dự án** (ở repo gốc, sau khi đã đè file):
```
cd game
npm install   # nếu chưa cài
npm run dev   # dev server tại http://localhost:5173/
npm run build # build production vào game/dist/
```

**Cấu trúc code**:
- `game/src/data/case1.js` — TOÀN BỘ dữ liệu vụ án Phần 1 (nhân vật, chứng cứ, cây hội thoại phỏng vấn, giả thuyết, giải pháp Thinking Board). Đây là nguồn sự thật duy nhất — mọi thay đổi nội dung cốt truyện nên sửa ở đây trước, rồi đồng bộ ngược lại `docs/phan-1-script.md`.
- `game/src/screens/` — 5 màn hình chính: `Prologue`, `Chapter1`, `Investigation` (gộp Chương 2-3), `ThinkingBoard`, `Epilogue`.
- `game/src/components/EvidenceInventory.jsx` — danh sách chứng cứ đã thu thập, dùng chung.
- `game/src/components/RewardedAdModal.jsx` — **mô phỏng rewarded-ads giả lập** (3 phase: confirm → playing → reward). Đây CHƯA phải SDK thật — khi tích hợp production cần thay bằng SDK CrazyGames/Poki thật (`window.CrazyGames.SDK.ad.requestAd('rewarded', ...)`).
- `game/src/state/gameState.js` — state game tập trung (reducer) + autosave có `SAVE_VERSION` và migration. Đổi cấu trúc state → PHẢI tăng `SAVE_VERSION` và thêm hàm vào `MIGRATIONS`, nếu không save của người chơi cũ sẽ bị bỏ.
- `game/src/App.jsx` — điều phối chuyển màn hình, giữ state tập trung qua `useReducer`, autosave sau mỗi thay đổi.
- `game/scripts/validate-case.mjs` — kiểm tra dữ liệu vụ án (`npm run validate`, tự chạy trước `npm run build`). Sửa `case1.js` xong phải chạy lại.
- `docs/engine-lessons.md` — bài học kiến trúc từ Monogatari & SugarCube, kèm danh sách việc nên làm tiếp.

**Đã hoàn thành và kiểm chứng** (qua Playwright, không chỉ build-pass):
- Toàn bộ golden path Phần 1 chạy đúng từ Prologue đến Epilogue, kết luận chính xác.
- Cơ chế 3 giả thuyết song song (Khang/Chi/Đức): giả thuyết KHÔNG tự loại khi thu thập chứng cứ. Người chơi phải phỏng vấn đến node cuối của nghi phạm, rồi tự CHỌN đúng tổ hợp chứng cứ (`requiredToEliminate` + `allowedExtra`, kiểm tra bằng `isValidEvidenceSet` trong `case1.js`) mới loại được. Đối chất Đức cũng phải chọn đúng tổ hợp (`ducConfrontation`).
- Khi phỏng vấn, chứng cứ trình ra phải ĐÚNG `requiresEvidence` của node kế tiếp — trình sai thì nghi phạm phản hồi "không liên quan".
- Animation/transition cơ bản (chapter fade-in, chat log staggered, evidence reveal pop-in).
- Rewarded-ads giả lập: nút gợi ý tự xuất hiện sau khi người chơi "đứng yên" quá lâu (15s Chương 1, 25s Investigation), gợi ý theo đúng ngữ cảnh giả thuyết chưa loại.

**Bug đã gặp và đã sửa (đừng lặp lại)**:
1. Chứng cứ `momoTransfer` và `chiVoiceDraft` từng được tham chiếu trong cây hội thoại nhưng KHÔNG có bước UI nào để thu thập chúng — luôn kiểm tra mọi `requiresEvidence` trong `case1.js` đều có nguồn thu thập tương ứng trong UI.
2. Duplicate React key: đừng thêm cùng một evidence id vào 2 mảng state khác nhau rồi ghép lại để render — chỉ dùng MỘT nguồn sự thật (`collectedIds` từ `App.jsx`) cho danh sách hiển thị.
3. Lỗ hổng logic cốt truyện (đã viết lại 09/2026): loại nghi phạm bằng "không rời máy" là sai vì người giúp thật (Đức) cũng không rời máy; mốc giờ trong lời thú nhận từng mâu thuẫn chat log; Chi từng tự mâu thuẫn về việc nhắn riêng; "ảnh chụp màn hình" không thể chứng minh hoạt động kéo dài; động cơ ở Thinking Board từng không có manh mối nào trước đó. Khi viết vụ mới: kiểm tra mọi mốc giờ khớp chat log, mọi chứng cứ loại trừ thực sự loại được *hành động* của giả thuyết, và mọi ô Thinking Board đều suy ra được từ chứng cứ có trước.
4. Lỗi code (đã sửa): người chơi từng loại được giả thuyết chỉ bằng cách bấm thu thập đủ chứng cứ; trình chứng cứ nào cũng mở được hội thoại; node cuối của Chi từng yêu cầu nhầm `chiVoiceDraft`; đối chất Đức từng không cần ảnh giả.

**Chưa làm** (việc còn lại cho MVP hoàn chỉnh):
- Tích hợp SDK rewarded-ads thật (CrazyGames/Poki).
- Responsive mobile kỹ hơn (hiện chỉ có breakpoint cơ bản ở 700px).
- Âm thanh/nhạc nền.
- Deploy thật lên CrazyGames/Poki/itch.io.
- Viết nội dung Phần 2.

## 6. Quy trình làm việc đã thống nhất với user

- Với các việc dev-loop thường xuyên trong project này (chạy/khởi động lại dev server, `curl` kiểm tra, `npm run build`, chạy playtest tự động bằng Playwright) — **không cần hỏi phép trước khi chạy**, cứ tự chạy và tự đánh giá kết quả. Vẫn cẩn trọng với các hành động thực sự rủi ro (xóa file, git push, reset phá hủy) theo quy tắc an toàn chung.
- Khi thêm/sửa nội dung vụ án: sửa `case1.js` → `npm run validate` → playtest bằng Playwright (cả golden path lẫn các nước đi sai).
- Khi kiểm tra "xong chưa", luôn xác minh bằng cách thực sự chạy ứng dụng (Playwright chơi qua golden path, đọc console error) — không chỉ dựa vào "build không báo lỗi".
- User giao tiếp bằng tiếng Việt cho các quyết định về cốt truyện/kinh doanh của dự án này.
