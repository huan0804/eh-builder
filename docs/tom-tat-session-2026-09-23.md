# Tóm tắt session làm việc — 23/09/2026 (Claude.ai)

> Đọc file này trước khi làm tiếp. Nó tóm tắt mọi quyết định, thay đổi và việc còn dang dở của session trên Claude.ai, để Claude Desktop / Claude Code hiểu bối cảnh. Chi tiết nằm trong các file được dẫn link.

## 1. Về người dùng & cách làm việc
- Giao tiếp bằng **tiếng Việt**. Người dùng thích: Claude **đề xuất vài phương án, người dùng chọn**; rồi Claude thực hiện đầy đủ.
- Dùng skill **PersonaTwin** (`/momtest`, https://github.com/datht-work/PersonaTwin-skill) để phản biện ý tưởng — phải theo đúng luật của skill (persona không khen, nói về hành vi đã có, ≤150 chữ, kết luận Accept/Pivot/Reject + tín hiệu cam kết).
- Ưu tiên hiện tại: **xây dựng cốt truyện trước**, code sau.
- Session này người dùng không có laptop nên chưa push; mọi thay đổi nằm trong gói zip đi kèm.

## 2. Quyết định đã chốt
| Quyết định | Nội dung | File |
|---|---|---|
| Logic Phần 1 viết lại | Đức gõ "buồn ngủ" lúc 21:46 từ Redmi Note 12 bằng tài khoản Vy; nghi phạm bị loại theo *khả năng thực hiện hành động che giấu* (Khang iPhone + đang viết bảng trắng; Chi Samsung + đang ở trước webcam) | `docs/phan-1-script.md` |
| Cơ chế suy luận | Giả thuyết không tự loại khi thu thập; người chơi phải chọn đúng tổ hợp chứng cứ; trình sai chứng cứ thì nghi phạm né | `game/src/data/case1.js` |
| Phần 2 "Hộp Thư Ẩn Danh" | Phong dùng tài khoản giả anh Minh (trích câu "Em không sợ, chỉ sợ im lặng") dụ Bảo về Bến Tre để xóa Hộp thư ẩn danh từ máy số 3 thư viện; hook TL.admin2024 | `docs/phan-2-script.md` |
| Thị trường chính | **Việt Nam** — giữ bối cảnh văn hóa số VN; cần xem lại kênh phát hành & kiếm tiền (CrazyGames/Poki là cổng quốc tế) | `docs/business-plan.md` mục 0 |
| Nhân vật Lam | Quay dựng CLB Ống Kính, giới tính **trung tính**, niềm tin "máy quay không nói dối", điểm yếu né đối đầu; bí mật: từng cắt đoạn phim có anh Minh (Hội trại 26/3 năm ngoái) theo lời "một người phụ trách CLB", thẻ nhớ gốc ở nhà | `docs/story-bible.md` mục 2 |
| Chủ đề season | *Im lặng thì an toàn — hay im lặng là tiếp tay?* Mỗi nhân vật là một câu trả lời | `docs/story-bible.md` mục 2b |
| Cảnh mở đầu season | Mỗi phần mở bằng ~20-25s người gửi bí ẩn gõ tin "… thì an toàn" (Phần 1: Thứ Hai 22:17, do dự; Phần 2: Thứ Tư 19:40, không do dự), trả thưởng ở cuối phần; không lộ danh tính người gửi | mục 1b của `phan-1-script.md`, `phan-2-script.md` |

## 3. Đã làm trong code (đã build + chạy thử Playwright, không lỗi)
- State tập trung + **autosave có version** và migration: `game/src/state/gameState.js`; nút "Chơi tiếp" ở Prologue.
- **Nhật ký hội thoại** giữ mọi lời khai.
- **Validator dữ liệu vụ án**: `npm run validate` (tự chạy trước `npm run build`) — `game/scripts/validate-case.mjs`.
- Nguồn thu thập chứng cứ chuyển vào dữ liệu (`chapter1Evidence`, `investigationSteps`).

## 4. Nghiên cứu đã làm
- **Monogatari & SugarCube 2** → bài học kiến trúc: `docs/engine-lessons.md`.
- **~3.300 bình luận Reddit về Black Myth: Wukong** → 6 insight người chơi + 7 bài học kể chuyện: `docs/insights-black-myth-wukong.md` (bài học kể chuyện cũng nằm trong skill, mục "Story craft").
- **Phản biện PersonaTwin Phần 2** (Minh Anh 17, Thu Trang 20, Khoa 24) → đã vá 4 điểm: `docs/phan-2-script.md` mục 8.

## 5. ĐANG CHỜ NGƯỜI DÙNG QUYẾT ĐỊNH
**Kẻ đứng sau season** (cần chốt trước khi viết Phần 3) — 3 phương án trong `docs/phan-3-de-xuat.md`:
- **A** Cô Hạnh là "người bảo vệ sai cách" (gửi tin để cảnh báo), kẻ cầm đầu là cán bộ khác.
- **B** Chị Thư (lớp 12, trưởng ban dựng CLB Ống Kính) là một người duy nhất đứng sau tất cả.
- **C** Thầy Quang và lớp học thêm "ôn trúng tủ".
- Claude đề xuất **B + vùng xám từ A** (Cô Hạnh từng nghi ngờ nhưng chọn im lặng). Người dùng CHƯA chọn.

## 6. Việc còn lại (theo thứ tự)
1. Người dùng chọn phương án kẻ đứng sau → ghi vào story bible → gài chi tiết vào Phần 1-2 → viết `docs/phan-3-script.md` (dùng skill `deduction-game-builder`, chạy PersonaTwin phản biện).
2. Đưa vào code Phần 1: lời thoại mới của Lam, cảnh mở đầu (màn hình `ColdOpen` + cờ đã xem trong save).
3. Chứng cứ dễ đọc trên điện thoại (tóm tắt ≤ 90 ký tự, chi tiết khi bấm) + dòng "Câu hỏi hiện tại" (viết bằng giọng Lam).
4. Triển khai Phần 2 thành `case2.js` (**cần tách nội dung Prologue/Chương 1 khỏi JSX trước**).
5. Xem lại kênh phát hành & kiếm tiền cho thị trường VN.

## 7. Skill đi kèm
`.claude/skills/deduction-game-builder/` — tư duy thiết kế vụ án fair-play, checklist kiểm tra lỗ hổng logic (kèm ví dụ thật từ Phần 1-2), mẫu kiến trúc (state, autosave, validator), bài học kể chuyện. Claude Code tự dùng khi làm việc trong repo.
