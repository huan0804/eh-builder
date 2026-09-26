# CLAUDE.md — Dự án Game Trinh thám Suy luận (chưa đặt tên chính thức)

> File này giúp Claude Code (hoặc bất kỳ session mới nào) hiểu ngay bối cảnh dự án mà không cần đọc lại lịch sử hội thoại. Đọc file này trước, sau đó đọc `docs/` nếu cần chi tiết sâu hơn. Đọc thêm [`WORK_LOG.md`](WORK_LOG.md) (nhật ký từng phiên, mới nhất ở trên) để biết phiên gần nhất vừa làm gì và còn gì dở dang trước khi bắt tay vào việc.

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
- **Bí ẩn xuyên suốt season**: Chuỗi vụ mất tích bí ẩn tại trường THPT Trúc Lâm, có một mạng lưới lớn hơn đứng sau ("vụ của anh Minh năm ngoái").
- **Nhân vật chính**: Lam — thành viên CLB Ống Kính (báo trường/truyền thông), được Cô Hạnh (GVCN) nhờ xác minh trước khi báo cấp trên.
- **Phần 1 ("Buổi Livestream Cuối Cùng", `case1.js`, ĐÃ triển khai)**: Vy (người mất tích) tự rời nhà lúc 21:36 sau khi gõ "tao đi lấy nước xíu". Đức (đáp án đúng) dùng tài khoản Vy trên điện thoại Redmi Note 12 của mình để gõ "buồn ngủ" lúc 21:46 (khiến Vy "rời phòng" 21:47) và sáng hôm sau đăng ảnh check-in giả chỉnh AI. Nghi phạm bị loại theo *khả năng thực hiện hành động che giấu* (thiết bị Redmi + đang làm gì lúc 21:46), KHÔNG theo "có rời máy không". Khang (iPhone, đang viết bảng trắng) và Chi (Samsung, đang đọc lời giải trước webcam) là hai hướng gây nhiễu có lời giải. Động cơ: Vy sợ hãi sau một tin nhắn ẩn danh — hook sang Phần 2.
- **Phần 2 ("Hộp Thư Ẩn Danh", `case2.js`, ĐÃ triển khai 09/2026)**: Bảo (admin trang confession) bị Phong dùng tài khoản giả mạo anh Minh dụ về Bến Tre, để Phong dùng máy thư viện số 3 xóa Hộp thư ẩn danh (có tên Phong trong danh sách mua đề năm ngoái). Kịch bản đã qua phản biện PersonaTwin (3 persona, xem mục 8 của `phan-2-script.md`). Mạch season: nhóm bán đề thi + tài khoản "TL.admin2024" + các tin nhắn "... thì an toàn". Chương 1 giới thiệu 2 cơ chế mới (mã tủ khóa, chọn người để hỏi) — xem mục 5.
- **Nhân vật Lam & chủ đề season** (chốt 09/2026, `docs/story-bible.md` mục 2 và 2b): Lam phụ trách quay dựng, giới tính để trung tính (không dùng anh ấy/cô ấy), niềm tin "máy quay không nói dối", điểm yếu né đối đầu; bí mật cá nhân: từng cắt một đoạn có anh Minh trong video Hội trại 26/3 năm ngoái theo lời một người phụ trách CLB. Chủ đề season: *Im lặng thì an toàn — hay im lặng là tiếp tay?* Lời thoại của Lam đã cập nhật vào `case1.js`/`case2.js`/`case3.js`.
- **Cảnh mở đầu season**: mỗi phần (trừ Phần 3, xem dưới) mở bằng cảnh ~20-25 giây người gửi bí ẩn gõ tin "… thì an toàn" (Phần 1: Thứ Hai 22:17 gửi Vy; Phần 2: Thứ Tư 19:40 gửi Phong), trả thưởng ở cuối phần. Kịch bản: mục 1b của `phan-1-script.md` và `phan-2-script.md`. Đã triển khai: màn hình `ColdOpen.jsx` (tổng quát theo `data.coldOpen` của case, screen chỉ render) trước Prologue + cờ đã xem trong `localStorage`.
- **Thị trường chính: Việt Nam** (chốt 09/2026, xem `docs/business-plan.md` mục 0 và `docs/insights-black-myth-wukong.md`). Kênh phát hành và mô hình kiếm tiền cần xem lại cho phù hợp.
- **Phần 3 ("Bản Gốc", `case3.js`, ĐÃ triển khai 09/2026 — kết season)**: chị Thư (lớp 12, trưởng ban dựng CLB Ống Kính) = chủ tài khoản TL.admin2024, bán đề kiểm tra lấy từ phòng giáo viên tổ Tự nhiên vì áp lực trả nợ vay chữa bệnh cho bố; năm ngoái bảo Lam cắt đoạn phim Hội trại 26/3 có anh Minh để tránh bị lần ra. Khung vụ án: thẻ nhớ gốc "HT 26-3 — gốc" của Lam bị chị Thư tráo mất. Chỉ 2 nghi phạm (Kiên/chị Thư, không 3 như Phần 1-2) — đúng nguyên tắc tối thiểu 2 hướng song song, không ép thêm nghi phạm giả (xem mục 8 của `phan-3-script.md`). Không có ColdOpen (`meta.hasColdOpen: false` — season đã tiết lộ người gửi). Cô Hạnh là vùng xám (từng nghi ngờ chị Thư tiêu tiền bất thường, chọn im lặng). Kết season: Lam chủ động lên tiếng, Cô Hạnh lên tiếng theo — viết bằng text thường trong Epilogue (chưa làm hiệu ứng hình ảnh riêng cho "cảnh khép season" mà kịch bản đề xuất — xem mục 5 "Chưa làm").
- **Việc CHƯA làm**: thêm dòng "Câu hỏi hiện tại" ở màn điều tra, lời giới thiệu game trung thực, làm chứng cứ dễ đọc trên điện thoại cho cả 3 phần (xem `docs/engine-lessons.md` mục 0 — tóm tắt `summary` ≤90 ký tự chưa có trong data, hiện toàn bộ `description` hiện luôn), tên chính thức của dự án/game, quyết định có Phần 4 hay không (season Phần 3 kết mở).

## 5. Trạng thái kỹ thuật (MVP)

**Vị trí code**: `game/` (React 19 + Vite 8, JavaScript thuần, không TypeScript). Lint: oxlint.

**Lưu ý nếu đang làm việc trong thư mục `eh-builder-cap-nhat` này**: đây là gói cập nhật nội dung (xem `HUONG-DAN-CAP-NHAT.md`), KHÔNG phải repo đầy đủ — thiếu `vite.config.js`, `index.html`, `public/`, `node_modules`, và một số file screen nằm ở repo gốc chứ không nằm trong gói này. KHÔNG chạy được `npm install`/`npm run dev`/`npm run build` trực tiếp ở đây. Việc thường làm là: sửa nội dung/code trong gói này, sau đó người dùng tự giải nén đè lên repo gốc rồi mới `npm run validate`/`npm run dev`/`npm run build` ở đó. Nếu cần chạy thử (Playwright, dev server) trong phiên làm việc này, hỏi người dùng đường dẫn repo gốc đầy đủ trước.

**Lệnh thường dùng** (chạy trong `game/`):
```
npm install        # cài dependency (chỉ cần lần đầu / khi package.json đổi)
npm run dev         # dev server tại http://localhost:5173/ — thêm ?case=case2 hoặc ?case=case3 để chọn phần khi test
npm run validate    # kiểm tra tính nhất quán dữ liệu vụ án cho CẢ 3 case (scripts/validate-case.mjs)
npm run build       # chạy validate rồi build production vào game/dist/ — validate fail thì build fail theo
npm run preview     # xem thử bản build production
npm run lint        # oxlint
```
Không có bộ test riêng trong repo (không có `npm test`) — "kiểm tra đúng" trong project này nghĩa là `npm run validate` (dữ liệu vụ án) + chạy thử thật bằng Playwright (xem mục 6). `playwright` đã có trong `devDependencies` (thêm 09/2026 — trước đó môi trường chỉ có CLI qua npx cache, không import được); viết script playtest `.mjs` tạm (import `chromium` từ `'playwright'`), chạy bằng `node`, rồi XÓA khỏi `game/` sau khi xong — không commit script playtest tạm vào repo.

**Kiến trúc tổng quan** (tổng quát hoá đầy đủ theo case data 09/2026 — trước đó chỉ đúng cho Phần 1, xem "Bug đã gặp" #5-6):
- **Content-as-data**: mỗi vụ án là 1 file trong `game/src/data/` (`case1.js`, `case2.js`, `case3.js`) chứa toàn bộ nhân vật, prologue, chapter1 (steps), chứng cứ, cây hội thoại phỏng vấn, giả thuyết, Thinking Board, epilogue, coldOpen. Đây là nguồn sự thật duy nhất cho nội dung — MỌI screen chỉ render theo `data` prop, không còn lời thoại hardcode. Sửa cốt truyện → sửa ở data file trước, đồng bộ ngược lại `docs/phan-N-script.md` sau.
- **Schema chung mỗi case phải theo** (xem `case1.js` làm ví dụ tham chiếu đầy đủ nhất, so sánh `case2.js`/`case3.js` để thấy biến thể):
  - `meta`: `{ id, partLabel, title, investigationChapterTitle, thinkingBoardChapterTitle, hasColdOpen? }`. `hasColdOpen: false` (case3) → `App.jsx` bỏ qua màn `ColdOpen`, vào thẳng Prologue.
  - `chapter1.steps`: mảng bước TUẦN TỰ, mỗi bước 1 trong 3 kiểu — `search` (1 nút, như Phần 1), `codeInput` (nhập mã, vd mã tủ khóa Phần 2), `choice` (chọn 1 trong N, chỉ lựa chọn đúng mới qua bước, vd "chọn người để hỏi" Phần 2). `Chapter1.jsx` render theo danh sách này, mỗi bước tự có state riêng (component con `Chapter1Step` với `key={stepIndex}` để tự reset khi đổi bước).
  - `hypotheses`: mỗi giả thuyết có `suspect` + hoặc `isCulprit: true` (đúng 1 giả thuyết duy nhất — suspect này bị đối chất cuối) hoặc `requiredToEliminate`/`allowedExtra` (loại được). KHÔNG còn quy ước ẩn cũ "requiredToEliminate rỗng nghĩa là đúng" — phải khai báo `isCulprit` rõ ràng.
  - `confrontation`: `{ required, allowedExtra }` — tổ hợp chứng cứ mở node `isFinalConfession` của suspect culprit, chỉ sau khi mọi giả thuyết khác đã bị loại (`Investigation.jsx` tự suy ra điều kiện này, không hardcode tên/số lượng nghi phạm).
  - `suspectOrder`, `wrongEvidenceReply`, `investigationHints` (`{ stuckThresholdMs, rules: [{ when(ctx), text }] }`, rule đầu tiên thoả `when` được dùng làm gợi ý rewarded-ad).
  - Nguyên tắc "2-3 hướng song song" ở validator nghĩa là **tổng số giả thuyết** (culprit + eliminable) ≥ 2, KHÔNG bắt buộc ≥2 giả thuyết loại được — case3 chỉ có 1 eliminable (Kiên) + 1 culprit (chị Thư), vẫn hợp lệ vì bối cảnh tự nhiên thu hẹp về 2 người (không ép thêm nghi phạm giả).
- **State tập trung** (`game/src/state/gameState.js`): một reducer (`gameReducer`) giữ toàn bộ tiến trình chơi (`stage`, `collectedIds`, `interviewHistory`, `unlockedSteps`, `eliminated`) như một object JSON thuần (không hàm/Set/Map/class). `createInitialState(caseData)` khởi tạo động theo `suspectOrder`/`hypotheses` của case đang chơi (không hardcode tên suspect). `App.jsx` giữ `useReducer`, chọn case từ mảng `CASES` (mặc định Phần 1, chọn qua query `?case=case2`/`?case=case3` cho dev/test — season chưa có UI chọn phần trong game, chơi tuần tự).
- **Autosave có version + migration, RIÊNG THEO TỪNG CASE**: `saveKeyFor(caseId)` tạo key `localStorage` khác nhau cho mỗi phần (`eh-builder:case1:autosave`, `case2`, `case3`) — người chơi giữ tiến độ độc lập từng phần. Đổi cấu trúc state (thêm/bớt field) → PHẢI tăng `SAVE_VERSION` và thêm hàm nâng cấp vào `MIGRATIONS` trong `gameState.js`, nếu không save cũ sẽ bị `isValidState` từ chối và mất tiến trình.
- **Đồng bộ cloud qua mã khôi phục** (`game/src/lib/cloudSave.js` + `supabaseClient.js`, bảng/RPC ở `game/supabase/schema.sql`): người chơi lấy 1 mã khôi phục ngắn (7 ký tự) qua `RecoveryCodeModal`, sau đó mỗi thay đổi state được đẩy lên Supabase (`save_game_progress` RPC) nếu đã có mã lưu cục bộ. Toàn bộ đọc/ghi nhạy cảm đi qua RPC security-definer, không query bảng trực tiếp từ client. Thiếu biến môi trường `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` (xem `.env.example`) → `supabase` export `null` và mọi hàm cloud tự no-op, game vẫn chơi được ở chế độ local-only.
- **Analytics ẩn danh** (`game/src/lib/analytics.js`): ghi nhận lượt vào mỗi stage qua RPC Supabase riêng, tách khỏi autosave để lỗi mạng analytics không bao giờ ảnh hưởng tới lưu game cục bộ. `logAdEvent` đã viết sẵn cho SDK ads thật nhưng CHƯA được gọi từ `RewardedAdModal.jsx`.
- **Cold Open** (`game/src/screens/ColdOpen.jsx`): tổng quát theo `data.coldOpen` (`timestamp`, `hesitant`, `finalLine`, `chatListEntries`) — screen chỉ render, khác biệt giữa các phần (Phần 1 do dự/1 dòng chat cũ, Phần 2 không do dự/2 dòng chat) đều đến từ data. Cờ "đã xem" trong `localStorage` (độc lập với autosave, giữ nguyên qua `RESTART`). Chiếm TOÀN BỘ viewport (`width/height: 100vw/100vh`, render ngoài `.game-container` trong `App.jsx`) — không bị giới hạn `max-width: 900px` của các màn chơi thường, đúng không khí "màn hình đen" của kịch bản.
- **Chân dung nhân vật theo cảm xúc** (`game/src/components/CharacterPortrait.jsx`, thêm 09/2026, lấy cảm hứng Ace Attorney — quyết định thay cho hướng 3D/thế giới mở kiểu Black Myth: Wukong, không khả thi với đội 1-2 người): mỗi character trong `characters` có thể khai báo `portraits: { emotion: 'path/to.png' }`; mỗi node hội thoại (Investigation) và mỗi dòng `prologue.lines` (`speakerId` + `emotion`) chỉ định cảm xúc hiển thị (`neutral`/`nervous`/`defensive`/`confession`/`thinking`/`worried`...). `Investigation.jsx` hiện portrait suspect đang phỏng vấn cạnh tên; `Prologue.jsx` hiện portrait nhỏ (`.portrait-small`) cạnh MỖI dòng thoại, đổi theo người đang nói — không chỉ Investigation mới có portrait. Ảnh nạp qua `import.meta.glob('../assets/portraits/**/*.png')` — CHƯA có ảnh thật nào (chỉ mới xong ở mức data + engine cho case1), tự fallback về khung màu + icon cảm xúc khi ảnh chưa tồn tại hoặc tải lỗi, không bao giờ phá layout. **Tạo ảnh theo `docs/portrait-prompts.md`** (style guide + prompt chi tiết cho từng nhân vật/cảm xúc, người dùng tự chạy qua công cụ AI image bên ngoài rồi lưu vào `game/src/assets/portraits/<suspectId>/<emotion>.png` — không cần sửa code gì thêm sau khi thêm ảnh).
- **Màn hình tền** (`game/src/screens/TitleScreen.jsx`, thêm 09/2026): điểm đầu tiên người chơi thấy, đứng trước cả ColdOpen. Hiện MỖI LẦN mở game (không có cờ "đã xem" như ColdOpen). Tên tạm "CLB Ống Kính" (chưa chốt tên chính thức) + tagline + nút "Bắt đầu điều tra". Full viewport, fallback gradient cam-đen kịch tính khi chưa có ảnh nền `title.jpg`.
- **Ảnh nền cảnh** (`game/src/lib/backgrounds.js`, dùng chung bởi `TitleScreen`/`Prologue`/`Chapter1`): field `background` (tên file, vd `'clb-ong-kinh-room.jpg'`) trong data mỗi case → `.chapter` thêm class `has-scene-bg`, ảnh phủ nền mờ phía sau overlay gradient để chữ vẫn đọc rõ (không dùng `max-width` cứng như trước, `.scene-content` nổi lên trên qua z-index). Cùng cơ chế `import.meta.glob` + fallback graceful như portrait — chưa có ảnh nền → giữ nguyên nền trơn cũ, không phá layout. Prompt tạo ảnh ở `docs/portrait-prompts.md` mục 3.
- **Investigation** (`game/src/screens/Investigation.jsx`, gộp Chương 2-3 mọi phần): tổng quát hoàn toàn — đọc `suspectOrder` cho tab, số giả thuyết/suspect culprit từ `hypotheses`, không còn code cứng `['khang','chi','duc']` hay "loại A,B rồi đối chất nghi phạm thứ 3". Node hội thoại thường của culprit (nếu có, vd Phong ở Phần 2) vẫn hiện nút "Trình chứng cứ" bình thường; chỉ khi hết node thường (`!currentNode.unlocksNext`) mới chuyển sang nút "Đối chất".
- **Validator** (`game/scripts/validate-case.mjs`, chạy tự động trước `vite build`, kiểm tra CẢ 3 case trong 1 lần chạy): mọi chứng cứ có đúng 1 nguồn thu thập, mọi node hội thoại đều tới được, mọi tổ hợp chứng cứ loại giả thuyết hợp lệ và không chồng chéo, đúng 1 `isCulprit`, culprit có node `isFinalConfession`, Thinking Board có đáp án hợp lệ, chat log đúng thứ tự thời gian (case không có chat log → `chatLog: null`, validator bỏ qua kiểm tra này). Thêm vụ án mới → import và thêm vào mảng `cases` đầu file.
- `game/src/components/EvidenceInventory.jsx` — nhận `evidenceList` qua props (không import cứng case nào).
- `game/src/components/RewardedAdModal.jsx` — **mô phỏng rewarded-ads giả lập** (3 phase: confirm → playing → reward). Đây CHƯA phải SDK thật — khi tích hợp production cần thay bằng SDK CrazyGames/Poki thật (`window.CrazyGames.SDK.ad.requestAd('rewarded', ...)`).
- `game/src/screens/` — màn hình dùng chung cho mọi phần: `TitleScreen`, `ColdOpen`, `Prologue`, `Chapter1`, `Investigation`, `ThinkingBoard`, `Epilogue`.
- `docs/engine-lessons.md` — bài học kiến trúc từ Monogatari & SugarCube, kèm danh sách việc nên làm tiếp.
- `.claude/skills/deduction-game-builder/` — skill project-level: quy trình viết/audit vụ án fair-play, pattern kiến trúc, checklist audit lỗ hổng logic. Tự kích hoạt khi làm việc với nội dung vụ án hoặc code narrative game.

**Đã hoàn thành và kiểm chứng** (qua Playwright, không chỉ build-pass — cả 3 phần đều đã playtest golden path đầy đủ, không lỗi console):
- Phần 1, 2, 3 đều chạy đúng end-to-end từ Prologue/ColdOpen đến Epilogue, kết luận chính xác.
- Cơ chế giả thuyết song song (3 nghi phạm ở Phần 1-2, 2 nghi phạm ở Phần 3): giả thuyết KHÔNG tự loại khi thu thập chứng cứ. Người chơi phải phỏng vấn đến hết node hội thoại thường của nghi phạm, rồi tự CHỌN đúng tổ hợp chứng cứ (`requiredToEliminate`/`allowedExtra`, kiểm tra bằng `isValidEvidenceSet`) mới loại được. Đối chất suspect culprit cũng phải chọn đúng tổ hợp (`confrontation`).
- Khi phỏng vấn, chứng cứ trình ra phải ĐÚNG `requiresEvidence` của node kế tiếp — trình sai thì nghi phạm phản hồi lệch (`wrongEvidenceReply`).
- Chapter1 3 kiểu bước (search/codeInput/choice, Phần 2) đều chặn đúng input sai (mã sai, lựa chọn sai) trước khi cho qua bước.
- Animation/transition cơ bản (chapter fade-in, chat log staggered, evidence reveal pop-in).
- Rewarded-ads giả lập: nút gợi ý tự xuất hiện sau khi người chơi "đứng yên" quá lâu, gợi ý theo đúng ngữ cảnh giả thuyết chưa loại (`investigationHints.rules`).

**Bug đã gặp và đã sửa (đừng lặp lại)**:
1. Chứng cứ từng được tham chiếu trong cây hội thoại nhưng KHÔNG có bước UI nào để thu thập — luôn kiểm tra mọi `requiresEvidence` đều có nguồn thu thập tương ứng (validator tự bắt lỗi này).
2. Duplicate React key: đừng thêm cùng một evidence id vào 2 mảng state khác nhau rồi ghép lại để render — chỉ dùng MỘT nguồn sự thật (`collectedIds` từ `App.jsx`).
3. Lỗ hổng logic cốt truyện (Phần 1, đã viết lại 09/2026): loại nghi phạm bằng "không rời máy" là sai vì người giúp thật cũng không rời máy; mốc giờ trong lời thú nhận từng mâu thuẫn chat log; động cơ ở Thinking Board từng không có manh mối nào trước đó. Khi viết vụ mới: kiểm tra mọi mốc giờ khớp timeline, mọi chứng cứ loại trừ thực sự loại được *hành động* của giả thuyết (không phải một proxy mà thủ phạm thật cũng thoả), mọi ô Thinking Board đều suy ra được từ chứng cứ có trước.
4. Lỗi code (đã sửa): người chơi từng loại được giả thuyết chỉ bằng cách bấm thu thập đủ chứng cứ (không cần chọn đúng tổ hợp); trình chứng cứ nào cũng mở được hội thoại.
5. **Engine từng chỉ đúng cho khuôn Phần 1** (đã tổng quát hoá 09/2026 trước khi viết Phần 2/3): `Investigation.jsx` từng hardcode `['khang','chi','duc']` và quy ước ẩn "requiredToEliminate rỗng = đáp án đúng"; `gameState.js` từng hardcode tên suspect trong `initialState`/`isValidState`; `Prologue.jsx`/`Chapter1.jsx`/`ColdOpen.jsx` từng có lời thoại viết cứng trong JSX thay vì đọc từ data. Viết case mới mà thấy phải sửa lại screen dùng chung → dấu hiệu schema chưa đủ tổng quát, đừng viết component riêng cho từng phần.
6. Phần 2 (Phong là culprit) khác Phần 1 (Đức là culprit) ở chỗ Phong VẪN có node hội thoại thường trước khi đối chất được (Đức thì `intro` đã `unlocksNext: null` ngay) — `Investigation.jsx` phải xử lý cả 2 trường hợp bằng cùng 1 điều kiện (`!currentNode.unlocksNext`), không phân biệt "culprit vs không culprit" khi quyết định hiện nút nào.

**Chưa làm** (việc còn lại cho MVP hoàn chỉnh):
- Tạo ảnh thật cho chân dung nhân vật (Khang/Chi/Đức/Lam/Cô Hạnh Phần 1) và ảnh nền cảnh (title, phòng CLB) theo `docs/portrait-prompts.md` — hiện engine đã sẵn sàng nhưng đang hiện fallback khung màu/icon/gradient vì chưa có ảnh thật. Sau đó mở rộng `portraits`/`emotion`/`background` cho case2.js/case3.js (Investigation + Prologue/Chapter1 của 2 phần đó chưa có portrait/scene bg, chỉ mới làm Phần 1).
- Chốt tên chính thức của game — TitleScreen đang dùng tạm "CLB Ống Kính".
- Tích hợp SDK rewarded-ads thật (CrazyGames/Poki) — bao gồm gọi `logAdEvent` thật từ `RewardedAdModal.jsx`.
- Responsive mobile kỹ hơn (hiện chỉ có breakpoint cơ bản ở 700px).
- Âm thanh/nhạc nền.
- Deploy thật lên CrazyGames/Poki/itch.io (đã có `vercel.json` để deploy web thường qua Vercel, cấu hình rewrite SPA).
- Chứng cứ dễ đọc trên điện thoại: trường `summary` ngắn hiện mặc định, `description` dài chỉ mở khi bấm (đề xuất từ phản biện PersonaTwin, `docs/engine-lessons.md` mục 0) — CHƯA áp dụng cho cả 3 case, hiện toàn bộ `description` luôn hiện.
- Hiệu ứng hình ảnh riêng cho "cảnh khép season" cuối Phần 3 (hiện chỉ là text thường trong Epilogue — xem mục 4).
- Quyết định có Phần 4 hay không (Phần 3 kết mở, không hook cứng sang phần tiếp theo).

## 6. Quy trình làm việc đã thống nhất với user

- Với các việc dev-loop thường xuyên trong project này (chạy/khởi động lại dev server, `curl` kiểm tra, `npm run build`, chạy playtest tự động bằng Playwright) — **không cần hỏi phép trước khi chạy**, cứ tự chạy và tự đánh giá kết quả. Vẫn cẩn trọng với các hành động thực sự rủi ro (xóa file, git push, reset phá hủy) theo quy tắc an toàn chung.
- Khi thêm/sửa nội dung vụ án: sửa `case1.js` → `npm run validate` → playtest bằng Playwright (cả golden path lẫn các nước đi sai).
- Khi kiểm tra "xong chưa", luôn xác minh bằng cách thực sự chạy ứng dụng (Playwright chơi qua golden path, đọc console error) — không chỉ dựa vào "build không báo lỗi".
- User giao tiếp bằng tiếng Việt cho các quyết định về cốt truyện/kinh doanh của dự án này.
