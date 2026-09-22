# EH Builder — Game Trinh thám Suy luận (chưa đặt tên chính thức)

Game web giải trí tập trung vào **rèn luyện tư duy suy luận logic**, phong cách trinh thám fair-play (kiểu Thám tử lừng danh Conan + escape room), **không có yếu tố kinh dị** — khác biệt với dòng game escape-room-kinh-dị đang thống trị thị trường indie Việt Nam.

**IP gốc hoàn toàn** — không nhắc trực tiếp tên phim/manga hay bất kỳ nhân vật/thương hiệu nào có sẵn. Chỉ mô phỏng phong cách suy luận fair-play (Honkaku), tương tự cách Golden Idol, Obra Dinn, Murders on Budapest! đều là IP gốc.

## Trạng thái hiện tại

- **Phần 1 — "Buổi Livestream Cuối Cùng"**: đã có kịch bản đầy đủ và MVP chơi được end-to-end (Prologue → Chương 1 → Điều tra → Thinking Board → Epilogue), đã kiểm chứng bằng Playwright.
- Cơ chế lõi: 3 giả thuyết nghi phạm song song, cần chứng cứ độc lập để loại từng giả thuyết — không suy luận tuyến tính.
- Kiếm tiền: ads-first (rewarded video), chưa thu phí ngay. SDK rewarded-ads hiện đang **giả lập**, chưa tích hợp CrazyGames/Poki thật.
- Nền tảng mục tiêu: web/trình duyệt (CrazyGames/Poki/itch.io) trước.

## Cấu trúc repo

```
CLAUDE.md          # Bối cảnh & quy tắc thiết kế cho Claude Code — đọc trước tiên
docs/
  business-plan.md   # Nghiên cứu thị trường, đối thủ, TAM/SAM/SOM, GTM
  story-bible.md      # Tổng quan cốt truyện season
  phan-1-script.md    # Kịch bản chi tiết Phần 1 (lời thoại, chứng cứ)
game/               # Source code MVP (React + Vite, JavaScript thuần)
  src/data/case1.js    # Nguồn sự thật duy nhất cho dữ liệu vụ án Phần 1
  src/screens/         # 5 màn hình chính của game
```

## Chạy dự án

```bash
cd game
npm install
npm run dev     # http://localhost:5173/
npm run build   # build production vào game/dist/
```

## Đọc thêm

Xem [CLAUDE.md](CLAUDE.md) để biết đầy đủ quyết định kinh doanh, nguyên tắc thiết kế bắt buộc, và trạng thái kỹ thuật chi tiết (bug đã sửa, việc chưa làm).
