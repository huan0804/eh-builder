# Work Log — EH Builder

> Nhật ký từng phiên làm việc, mới nhất ở trên cùng. Mục đích: phiên Claude Code sau đọc nhanh được "vừa làm gì, tại sao, còn gì dở dang" mà không cần đọc lại toàn bộ lịch sử hội thoại. Đọc `CLAUDE.md` trước để có bối cảnh dự án, rồi đọc log gần nhất ở đây.

---

## 2026-09-26 — Tổng quát hoá engine, triển khai Phần 2-3, thêm hệ thống visual (title/portrait/background)

### Bối cảnh đầu phiên
Chỉ có Phần 1 (`case1.js`) chơi được thành game; Phần 2 và Phần 3 mới có kịch bản văn bản (`docs/phan-2-script.md`, `docs/phan-3-script.md`), chưa có code. Engine (`Investigation.jsx`, `gameState.js`) chỉ đúng cho khuôn cứng của Phần 1 (3 nghi phạm tên `khang/chi/duc`, quy ước ẩn "requiredToEliminate rỗng = đáp án đúng").

### Việc đã làm — theo thứ tự

**1. Refactor engine trước khi viết case mới** (theo đề xuất `docs/engine-lessons.md`):
- Tách toàn bộ lời thoại hardcode trong `Prologue.jsx`/`Chapter1.jsx`/`ColdOpen.jsx` ra data.
- Tổng quát hoá `Investigation.jsx`: đọc `suspectOrder`, `hypotheses` (thêm field `isCulprit: true` thay quy ước ẩn cũ), `confrontation`, `wrongEvidenceReply`, `investigationHints` — không còn hardcode tên/số lượng nghi phạm.
- `gameState.js`: `createInitialState(caseData)` khởi tạo động; autosave riêng theo từng case (`saveKeyFor(caseId)`).
- Cập nhật `validate-case.mjs` chạy được nhiều case cùng lúc.
- Verify: build + playtest Playwright Phần 1 vẫn pass 100% sau refactor.

**2. Viết `case2.js` (Phần 2 "Hộp Thư Ẩn Danh")**:
- 15 chứng cứ, 3 nghi phạm (Tuấn/Ngân/Phong), Phong là culprit.
- Mở rộng `Chapter1.jsx` hỗ trợ bước tuần tự 3 kiểu qua data: `search`/`codeInput` (mã tủ 1509)/`choice` (chọn người để hỏi).
- Verify: validate + build + playtest golden path (kể cả mã sai/lựa chọn sai bị chặn đúng) — pass, không lỗi console.

**3. Viết `case3.js` (Phần 3 "Bản Gốc", kết season)**:
- 9 chứng cứ, chỉ 2 nghi phạm (Kiên/chị Thư — khác Phần 1-2 có 3). Sửa validator: nguyên tắc "2-3 hướng song song" chỉ cần tổng ≥2 giả thuyết, không bắt buộc ≥2 giả thuyết *loại được*.
- Không có ColdOpen (`meta.hasColdOpen: false`).
- Verify: validate + build + playtest golden path pass.

**4. Deploy**: commit `88f034f`, push lên `github.com/huan0804/eh-builder` (nhánh `master`). Vercel project `han-58b5/eh-builder` có Git Integration bật sẵn → tự động deploy, xác nhận Ready/Production qua ảnh chụp dashboard user gửi. Domain: `eh-builder.vercel.app`.

**5. Fix layout ColdOpen** (user phát hiện qua ảnh chụp): `.cold-open` bị kẹt trong `.game-container` (`max-width: 900px`) thay vì full màn hình đen như kịch bản mô tả. Sửa: render `ColdOpen` ngoài `.game-container` trong `App.jsx`, CSS đổi `min-height` → `width/height: 100vw/100vh`.

**6. Quyết định lớn: "nhập tâm nhân vật" — vì sao không phải 3D/2D thế giới mở kiểu Black Myth: Wukong**:
- User hỏi thẳng tại sao không làm 3D. Giải thích: ràng buộc đội 1-2 người/ngân sách hạn chế (đã chốt ở CLAUDE.md mục 2) khiến 3D bất khả thi; thể loại suy luận fair-play "nhập tâm" qua giọng văn/nội tâm/đối chất (như Obra Dinn, Ace Attorney), không qua thế giới 3D.
- User chọn hướng: **chân dung nhân vật đổi theo cảm xúc kiểu Ace Attorney** (không phải 3D, không phải chỉ nâng visual design suông).
- Xây `CharacterPortrait.jsx`: character khai báo `portraits: {emotion: 'path.png'}`, node hội thoại có field `emotion`. Ảnh nạp qua `import.meta.glob`, fallback graceful (khung màu + icon) khi ảnh chưa tồn tại/lỗi tải — không bao giờ phá layout.
- Không có công cụ tạo ảnh trong phiên → viết `docs/portrait-prompts.md` (style guide + prompt AI image chi tiết) để user tự tạo ảnh bằng công cụ ngoài, rồi thả vào đúng path là engine tự nhận.
- Tích hợp vào `Investigation.jsx` (portrait suspect đang phỏng vấn). Verify: build + playtest pass với ảnh fallback.
- Commit `73a5012`, push.

**7. User phản hồi "vẫn y chang bản cũ"** — vì ảnh chụp user gửi là ở Chương 1 (chưa tới Investigation, nơi duy nhất có portrait lúc đó). Làm rõ ý user muốn: nhập tâm **xuyên suốt trải nghiệm**, không chỉ 1 màn hình. User chốt phạm vi: Title screen + Prologue/Chapter1 visual mạnh hơn + portrait xuyên suốt, ưu tiên theo thứ tự trải nghiệm.

**8. Thêm `TitleScreen.jsx`** (màn đầu tiên người chơi thấy, trước cả ColdOpen): tên tạm "CLB Ống Kính" (chưa chốt tên chính thức) + tagline + CTA, full viewport, fallback gradient cam-đen kịch tính (không phải chữ trơn) khi chưa có ảnh nền.

**9. Thêm ảnh nền cảnh dùng chung** (`lib/backgrounds.js`, cùng pattern `import.meta.glob` + fallback với portrait): field `background` trong data cho `TitleScreen`/`Prologue`/`Chapter1`.

**10. Mở rộng portrait sang `Prologue.jsx`** (không chỉ Investigation): mỗi dòng thoại giờ có `speakerId`/`emotion` riêng, hiện portrait nhỏ cạnh mỗi dòng — đúng yêu cầu "xuyên suốt, không chỉ 1 màn hình". Thêm 2 emotion mới (`thinking`, `worried`) vào fallback.

Verify: build + playtest Playwright Phần 1 pass 100% qua TitleScreen → ColdOpen → Prologue (có portrait) → Chapter1 → Investigation → Epilogue.

Commit `c6cb8ab`, push — Vercel tự deploy tiếp.

**11. User phản đối tiếp: gửi ảnh concept art chính thức của Black Myth: Wukong, nói "giao diện phải nhập vai như vậy, chứ không phải toàn đọc chữ"**:
- Phải nói thẳng khoảng cách thực tế: ảnh đó là sản phẩm của studio hàng trăm người/nhiều năm/Unreal Engine 5, không thể đạt được bằng cách "nâng cấp CSS" cho 1 web app content-as-data. Không hứa làm được điều không làm được.
- Hỏi lại user hướng đi (chấp nhận trần web/solo-dev và đẩy visual tối đa trong khả năng đó, vs. đổi hẳn hướng đầu tư ngân sách/nhân sự, vs. tạm dừng visual quay lại cốt truyện). User chọn: **chấp nhận giới hạn, đẩy visual tối đa trong khả năng web/solo-dev**.
- User yêu cầu tiếp: "bạn hãy tự tạo mà chỉnh đi, không cần tôi" — tức tự làm ảnh luôn, không chờ user tạo ảnh AI rồi gửi qua.
- **Xác nhận lại (2 lần, qua ToolSearch) là phiên này KHÔNG có công cụ tạo ảnh AI** (không DALL-E/Midjourney/Gemini Image nào khả dụng) — đây là giới hạn kỹ thuật thật, không phải từ chối làm việc.
- Giải pháp đã chọn và thực hiện: **tự vẽ 14 ảnh SVG vector bằng code** (không phải AI-art, là minh hoạ hình học đơn giản do tôi viết trực tiếp) để có ảnh THẬT ngay, thay vì để trống fallback:
  - 2 ảnh nền: `title.svg` (hành lang trường lúc hoàng hôn, phối cảnh cột + sàn), `clb-ong-kinh-room.svg` (phòng CLB — bàn dựng phim, laptop màn hình sáng, tai nghe, kệ thiết bị, cửa sổ ánh chiều)
  - 12 ảnh portrait: Khang (3 trạng thái), Chi (3), Đức (2), Lam (2), Cô Hạnh (2) — mỗi người có tóc/khuôn mặt/tông màu nền riêng để dễ phân biệt
  - Mở rộng `CharacterPortrait.jsx`/`lib/backgrounds.js` nhận thêm định dạng `.svg` (trước chỉ PNG/JPG)
  - Chỉnh CSS overlay (`chapter.has-scene-bg::before`, `.title-screen-overlay/-bg`) qua vài lần lặp — ban đầu overlay quá tối/đậm che gần hết ảnh, đã giảm để ảnh nền hiện rõ mà chữ vẫn đọc được (verify bằng screenshot Playwright trước/sau)
- Cập nhật `docs/portrait-prompts.md`: làm rõ ảnh hiện tại là SVG tạm, không phải AI-art theo đúng prompt — nếu có công cụ AI sau này, chỉ cần ghi đè đúng path là thay được, không cần sửa code.
- Verify: build + playtest Playwright Phần 1 pass 100% với ảnh thật (không còn fallback icon/gradient).
- Commit `d2655ff`, push.

### Trạng thái cuối phiên
- **Đã xong, verify bằng Playwright**: cả 3 phần chơi được end-to-end. Engine tổng quát hoá đầy đủ. TitleScreen + portrait + scene background hoạt động với **ảnh SVG thật** (không còn fallback) cho toàn bộ Phần 1: 2 ảnh nền + 12 portrait (Khang/Chi/Đức/Lam/Cô Hạnh).
- **Bài học quan trọng nhất phiên này — về kỳ vọng, không phải kỹ thuật**: user ban đầu kỳ vọng mức độ visual ngang AAA 3D (Black Myth: Wukong). Phải làm rõ ràng, thẳng thắn khoảng cách giữa kỳ vọng đó và ràng buộc dự án đã tự chốt (solo dev, web, ads-first) TRƯỚC KHI tiếp tục code — nói dối hoặc lảng tránh giới hạn chỉ khiến làm sai hướng nhiều lần rồi mới vỡ lẽ. Khi không có công cụ cần thiết (ở đây là tạo ảnh AI), tự tìm giải pháp thay thế khả thi (vẽ SVG) thay vì chỉ trả lại yêu cầu cho user hoặc dừng lại.
- **Dở dang / việc tiếp theo rõ ràng nhất**:
  1. **Ưu tiên cao nhất**: thay 14 ảnh SVG tạm bằng ảnh AI thật theo đúng prompt ở `docs/portrait-prompts.md` mục 1-3, khi có công cụ tạo ảnh AI khả dụng (phiên sau hoặc qua công cụ khác) — chỉ cần ghi đè đúng path, xem mục 4 của file đó. Chất lượng SVG hiện tại là giải pháp tạm, không phải đích đến.
  2. Portrait + scene background hiện CHỈ làm cho Phần 1 (case1.js). Phần 2/3 (case2.js/case3.js) chưa có `portraits`/`background`/`emotion` — cần làm tương tự khi Phần 1 ổn (kể cả khi vẫn dùng SVG tạm).
  3. Chưa chốt tên chính thức của game (TitleScreen đang dùng tạm "CLB Ống Kính").
  4. Các việc "Chưa làm" khác không đổi: SDK ads thật, responsive mobile kỹ hơn, âm thanh, evidence summary ngắn cho điện thoại — xem CLAUDE.md mục 5.
- **Quy ước mới cần nhớ**: mọi ảnh (portrait lẫn background) dùng chung nguyên tắc "khai báo path trong data, engine tự dò bằng `import.meta.glob` (nhận cả PNG/JPG/SVG), fallback graceful khi chưa có ảnh" — đừng phá nguyên tắc này khi thêm loại ảnh mới. Đổi định dạng ảnh (SVG → PNG chẳng hạn) thì phải sửa lại đường dẫn trong data (`case1.js`/`TitleScreen.jsx`), không tự động.
- **Playtest scripts tạm thời** (`playtest-case1/2/3.mjs`) không commit vào repo — đang lưu trong scratchpad phiên này (`C:\Users\Huan\AppData\Local\Temp\claude\...\scratchpad\`), sẽ mất khi phiên kết thúc. Phiên sau cần viết lại nếu muốn playtest tự động (không tốn nhiều công — pattern đã ổn định, xem cấu trúc trong log này hoặc trong lịch sử hội thoại).
