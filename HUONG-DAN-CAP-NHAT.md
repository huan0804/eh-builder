# Hướng dẫn cập nhật (09/2026)

Giải nén file zip này vào thư mục gốc repo `eh-builder`, chọn **Replace/Ghi đè** khi được hỏi. Sau đó:

```bash
git add -A
git commit -m "Vá logic Phần 1, autosave, validator, kịch bản Phần 2, nhân vật Lam, cảnh mở đầu season"
git push
```

Dùng với **Claude Desktop (tab Code / Claude Code)**: mở thư mục repo — Claude sẽ tự đọc `CLAUDE.md` và dùng skill trong `.claude/skills/deduction-game-builder/`. Muốn làm tiếp, chỉ cần nói: *"đọc CLAUDE.md rồi làm tiếp EH Builder"*.

## Các file trong gói

**Code game (đã chạy thử bằng Playwright, không lỗi)**
- `game/src/data/case1.js` — cốt truyện Phần 1 mới, tổ hợp chứng cứ để loại giả thuyết, nguồn thu thập chứng cứ
- `game/src/state/gameState.js` (mới) — state tập trung + autosave có version
- `game/src/App.jsx`, `game/src/screens/*.jsx`, `game/src/components/EvidenceInventory.jsx`, `game/src/App.css` — chọn nhiều chứng cứ, nhật ký hội thoại, nút "Chơi tiếp"
- `game/scripts/validate-case.mjs` (mới), `game/package.json` — `npm run validate`, tự chạy trước `npm run build`

**Tài liệu cốt truyện & kế hoạch**
- `docs/phan-1-script.md` — Phần 1 viết lại + giọng Lam + cảnh mở đầu season
- `docs/phan-2-script.md` (mới) — Phần 2 "Hộp Thư Ẩn Danh", đã qua phản biện PersonaTwin
- `docs/phan-3-de-xuat.md` (mới) — 3 phương án kẻ đứng sau season, **chờ bạn chọn**
- `docs/story-bible.md` — hồ sơ Lam, chủ đề season, khuôn cảnh mở đầu
- `docs/business-plan.md` — quyết định thị trường Việt Nam trước
- `docs/insights-black-myth-wukong.md` (mới) — insight từ ~3.300 bình luận Reddit
- `docs/engine-lessons.md` (mới) — bài học từ Monogatari & SugarCube
- `CLAUDE.md` — cập nhật trạng thái, quyết định, việc chưa làm

**Skill**
- `.claude/skills/deduction-game-builder/` (mới) — Claude Code tự dùng trong repo này. Bản cho Claude.ai: file `deduction-game-builder.skill` (tải lên ở Settings → Skills).

## Việc còn lại (xem chi tiết trong CLAUDE.md)
1. Chọn kẻ đứng sau season (`docs/phan-3-de-xuat.md`) → viết Phần 3.
2. Đưa lời thoại mới của Lam + cảnh mở đầu vào code game Phần 1.
3. Chứng cứ dễ đọc trên điện thoại; dòng "Câu hỏi hiện tại".
4. Xem lại kênh phát hành & kiếm tiền cho thị trường Việt Nam.
