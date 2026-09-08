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
- **Phần 1 ("Buổi Livestream Cuối Cùng")**: Vy (nạn nhân) mất tích sau buổi livestream nhóm ôn thi. 3 nghi phạm: Khang (thủ quỹ, mâu thuẫn tiền bạc), Chi (thầm thích Vy), Đức (đáp án đúng — giúp Vy giấu đi). Vy tự ý rời đi vì sợ hãi sau khi phát hiện điều gì đó liên quan đến vụ trước đó — Phần 1 tự đóng trọn vẹn nhưng gieo hook rõ ràng sang Phần 2.
- **Việc CHƯA làm**: Nội dung Phần 2 trở đi, tên chính thức của dự án/game.

## 5. Trạng thái kỹ thuật (MVP)

**Vị trí code**: `game/` (React + Vite, JavaScript thuần, không TypeScript).

**Chạy dự án**:
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
- `game/src/App.jsx` — điều phối chuyển màn hình, quản lý state `collectedIds` (chứng cứ đã thu thập toàn cục).

**Đã hoàn thành và kiểm chứng** (qua Playwright, không chỉ build-pass):
- Toàn bộ golden path Phần 1 chạy đúng từ Prologue đến Epilogue, kết luận chính xác.
- Cơ chế 3 giả thuyết song song (Khang/Chi/Đức) hoạt động đúng — phải thu thập đủ chứng cứ độc lập mới loại được từng giả thuyết.
- Animation/transition cơ bản (chapter fade-in, chat log staggered, evidence reveal pop-in).
- Rewarded-ads giả lập: nút gợi ý tự xuất hiện sau khi người chơi "đứng yên" quá lâu (15s Chương 1, 25s Investigation), gợi ý theo đúng ngữ cảnh giả thuyết chưa loại.

**Bug đã gặp và đã sửa (đừng lặp lại)**:
1. Chứng cứ `momoTransfer` và `chiVoiceDraft` từng được tham chiếu trong cây hội thoại nhưng KHÔNG có bước UI nào để thu thập chúng — luôn kiểm tra mọi `requiresEvidence` trong `case1.js` đều có nguồn thu thập tương ứng trong UI.
2. Duplicate React key: đừng thêm cùng một evidence id vào 2 mảng state khác nhau rồi ghép lại để render — chỉ dùng MỘT nguồn sự thật (`collectedIds` từ `App.jsx`) cho danh sách hiển thị.

**Chưa làm** (việc còn lại cho MVP hoàn chỉnh):
- Tích hợp SDK rewarded-ads thật (CrazyGames/Poki).
- Responsive mobile kỹ hơn (hiện chỉ có breakpoint cơ bản ở 700px).
- Âm thanh/nhạc nền.
- Deploy thật lên CrazyGames/Poki/itch.io.
- Viết nội dung Phần 2.

## 6. Quy trình làm việc đã thống nhất với user

- Với các việc dev-loop thường xuyên trong project này (chạy/khởi động lại dev server, `curl` kiểm tra, `npm run build`, chạy playtest tự động bằng Playwright) — **không cần hỏi phép trước khi chạy**, cứ tự chạy và tự đánh giá kết quả. Vẫn cẩn trọng với các hành động thực sự rủi ro (xóa file, git push, reset phá hủy) theo quy tắc an toàn chung.
- Khi kiểm tra "xong chưa", luôn xác minh bằng cách thực sự chạy ứng dụng (Playwright chơi qua golden path, đọc console error) — không chỉ dựa vào "build không báo lỗi".
- User giao tiếp bằng tiếng Việt cho các quyết định về cốt truyện/kinh doanh của dự án này.
