# Prompt tạo ảnh minh hoạ nhân vật (portrait sprite)

> Mục đích: tạo ảnh nhân vật kiểu Ace Attorney (chân dung bán thân tĩnh, đổi theo cảm xúc mỗi lượt hội thoại) để tăng cảm giác nhập vai — theo yêu cầu 09/2026, thay cho hướng 3D/thế giới mở (không khả thi với đội 1-2 người, xem `CLAUDE.md` mục 2).
>
> Engine đã sẵn sàng nhận ảnh (xem `game/src/components/CharacterPortrait.jsx`) — hiện đang fallback về khung màu + icon vì CHƯA có ảnh thật. Tạo ảnh theo hướng dẫn dưới đây bằng bất kỳ công cụ AI image nào (Midjourney, DALL-E, Gemini/Imagen, Stable Diffusion...), rồi lưu đúng đường dẫn ở mục "Nộp ảnh vào game".

---

## 1. Style guide chung (áp dụng cho MỌI nhân vật, mọi phần)

Để giữ nhất quán phong cách qua nhiều lượt tạo ảnh (vấn đề thường gặp của AI image gen), luôn giữ nguyên các yếu tố sau trong mọi prompt:

- **Phong cách**: minh hoạ 2D bán thực (semi-realistic anime/webtoon style Việt Nam hiện đại), KHÔNG phải ảnh chụp thật, KHÔNG phải 3D render, KHÔNG phải chibi/cartoon quá trẻ con.
- **Khung hình**: chân dung bán thân (đầu + vai, đôi khi tới ngực), nhìn thẳng hoặc hơi nghiêng 3/4 về phía người xem — kiểu "visual novel character portrait".
- **Nền**: nền trơn một màu hoặc gradient nhẹ, KHÔNG có chi tiết bối cảnh (nền sẽ trong suốt/đơn giản để không xung đột với UI game) — chỉ định `plain solid color background, no scene details`.
- **Trang phục**: đồng phục học sinh THPT Việt Nam (áo sơ mi trắng, có thể có logo trường hư cấu nhỏ) — tuyệt đối KHÔNG có logo/thương hiệu thật.
- **Độ tuổi**: học sinh cấp 3 Việt Nam (16-18 tuổi), khuôn mặt châu Á.
- **Tông màu**: ấm áp, gần với bảng màu be/cam nhạt của UI game hiện tại (`#fdf6ec` nền, `#d97757` accent cam đất) — tránh tông lạnh/u ám (game không kinh dị).
- **Tỷ lệ ảnh**: vuông hoặc gần vuông (1:1 hoặc 4:5), độ phân giải tối thiểu 512×512px.
- **Cấm tuyệt đối**: không có yếu tố kinh dị/máu me/jumpscare-style (đúng nguyên tắc "không kinh dị" của game); không có bất kỳ logo/nhân vật/IP có sẵn nào (đây là IP gốc).

**Prompt khung mẫu** (điền phần `[...]` theo từng nhân vật/cảm xúc bên dưới):

```
Semi-realistic anime/webtoon style portrait illustration of a Vietnamese high school
student, [MÔ TẢ NGOẠI HÌNH NHÂN VẬT], [MÔ TẢ CẢM XÚC/BIỂU CẢM], upper body / bust shot,
looking at viewer, wearing plain white school uniform shirt, plain solid warm-toned
background (no scene details), soft warm lighting, clean line art, visual novel
character portrait style, square aspect ratio, no text, no logos
```

---

## 2. Phần 1 — Khang, Chi, Đức (ưu tiên làm trước, 9 ảnh)

Mỗi nhân vật cần đúng 3 trạng thái cảm xúc theo diễn biến hội thoại trong `game/src/data/case1.js` (field `emotion` của mỗi node). Không cần thêm trạng thái nào khác — 3 là đủ để khớp toàn bộ cây hội thoại.

### Khang — thủ quỹ nhóm, nam, mâu thuẫn tiền bạc với Vy
Ngoại hình gợi ý: nam sinh, tóc ngắn gọn gàng, có vẻ chỉn chu/có trách nhiệm (vì là thủ quỹ) nhưng hơi cả nghĩ.

| Trạng thái | Khi nào dùng | Mô tả cảm xúc cho prompt |
|---|---|---|
| `neutral` | Node `intro` — trả lời bình thường | `calm neutral expression, slightly formal, relaxed shoulders` |
| `nervous` | Node `afterMomo` — bị nhắc chuyện quỹ tiền, hơi giật mình | `slightly nervous expression, avoiding eye contact, one eyebrow raised, subtle sweat drop` |
| `defensive` | Node `confrontGap` — bị hỏi gắt về khoảng trống thời gian | `defensive expression, arms crossed, slightly frowning, trying to justify himself` |

### Chi — thành viên nhóm, nữ, thầm thích Vy
Ngoại hình gợi ý: nữ sinh, tóc dài buộc gọn hoặc xoã nhẹ, biểu cảm dễ đỏ mặt/ngại ngùng.

| Trạng thái | Khi nào dùng | Mô tả cảm xúc cho prompt |
|---|---|---|
| `neutral` | Node `intro` — trả lời cụt lủn, hơi né tránh | `neutral but slightly guarded expression, arms close to body` |
| `nervous` | Node `afterVoiceDraft` — bị hỏi về tin nhắn thoại nháp tỏ tình | `blushing, embarrassed expression, looking away, hands near face` |
| `defensive` | Node `confrontPhone` — bị hỏi về việc cầm điện thoại | `flustered defensive expression, slightly wide eyes, explaining quickly` |

### Đức — thành viên nhóm, nam, người thật sự giúp Vy (thủ phạm che giấu)
Ngoại hình gợi ý: nam sinh, có vẻ điềm tĩnh/ít nói hơn hai người kia, đáng tin cậy bề ngoài (để không bị đoán ngay là "thủ phạm" chỉ qua tạo hình).

| Trạng thái | Khi nào dùng | Mô tả cảm xúc cho prompt |
|---|---|---|
| `neutral` | Node `intro` — trả lời bình thường, không có gì khả nghi | `calm relaxed neutral expression, easygoing` |
| `confession` | Node `confronted` — thú nhận sau khi bị đối chất | `solemn quiet expression, looking down slightly, a mix of guilt and relief, calm but heavy` |

Lưu ý: Đức chỉ cần 2 trạng thái (không có `nervous`/`defensive`) vì cây hội thoại của Đức chỉ có 2 node (`intro` → `confronted`, xem `case1.js`) — không tạo thừa ảnh không dùng tới.

### Ví dụ prompt đầy đủ (Khang, trạng thái `nervous`)

```
Semi-realistic anime/webtoon style portrait illustration of a Vietnamese high school
student, a teenage boy with short neat black hair, slightly nervous expression, avoiding
eye contact, one eyebrow raised, subtle sweat drop, upper body / bust shot, looking at
viewer, wearing plain white school uniform shirt, plain solid warm-toned background
(no scene details), soft warm lighting, clean line art, visual novel character portrait
style, square aspect ratio, no text, no logos
```

---

## 3. Nộp ảnh vào game

1. Lưu ảnh (PNG, nền trong suốt nếu công cụ hỗ trợ, hoặc nền trơn nếu không) đúng tên file:
   ```
   game/src/assets/portraits/khang/neutral.png
   game/src/assets/portraits/khang/nervous.png
   game/src/assets/portraits/khang/defensive.png
   game/src/assets/portraits/chi/neutral.png
   game/src/assets/portraits/chi/nervous.png
   game/src/assets/portraits/chi/defensive.png
   game/src/assets/portraits/duc/neutral.png
   game/src/assets/portraits/duc/confession.png
   ```
   (`duc/defensive.png` và `duc/nervous.png` KHÔNG cần vì Đức không có 2 node đó — đã khai báo đúng trong `case1.js`.)
2. Không cần sửa code gì thêm — `CharacterPortrait.jsx` tự động dò thấy ảnh mới qua `import.meta.glob` và hiển thị thay cho khung fallback.
3. Chạy `npm run dev`, mở Investigation, phỏng vấn từng nghi phạm để kiểm tra ảnh hiện đúng theo từng câu hỏi.
4. Nếu ảnh bị méo/cắt sai trong khung 64×64px hiện tại, có thể chỉnh CSS `.character-portrait` trong `game/src/App.css` (kích thước khung ảnh) — không cần sửa ảnh gốc.

## 4. Mở rộng cho Phần 2, Phần 3 (sau khi Phần 1 ổn)

Áp dụng đúng style guide ở mục 1, thêm `portraits` vào `characters` trong `case2.js`/`case3.js` theo mẫu `case1.js`, và thêm `emotion` vào từng node hội thoại tương ứng. Nhân vật cần ảnh:

- **Phần 2**: Tuấn, Ngân, Phong (3 nhân vật × 2-3 trạng thái tuỳ số node hội thoại mỗi người)
- **Phần 3**: Kiên, chị Thư (2 nhân vật — chị Thư cần thêm trạng thái `confession` cho lời thú nhận cuối)

Gợi ý ngoại hình để phân biệt rõ với nhân vật Phần 1 (tránh người chơi nhầm lẫn nếu chơi liền mạch): Tuấn (nam, nóng tính, tóc hơi rối), Ngân (nữ, lớp 10, ít nói, dáng vẻ dè dặt/bảo vệ), Phong (nam, chỉn chu kiểu "học sinh gương mẫu", đeo kính), Kiên (nam, lớp 12, dáng vẻ năng động vì chơi bóng rổ), chị Thư (nữ, lớp 12, trông chững chạc/đáng tin cậy — để tương phản với sự thật ở lời thú nhận).
