# Bài học từ Monogatari & SugarCube

> Nghiên cứu 09/2026 từ mã nguồn [Monogatari](https://github.com/Monogatari/Monogatari) (engine visual novel web, TypeScript) và [SugarCube 2](https://github.com/tmedwards/sugarcube-2) (story format của Twine). Mục đích: lấy những quyết định kiến trúc đã được kiểm chứng qua nhiều năm, áp vào game của mình — KHÔNG dùng hai engine này trực tiếp.

## Hai engine giải quyết cùng một bài toán thế nào

| Vấn đề | Monogatari | SugarCube | Mình áp dụng |
|---|---|---|---|
| Nội dung vs code | `script` = object các *label*, mỗi label là mảng câu lệnh; engine chỉ chạy lệnh | *Passage* (đoạn văn có tên + tag) viết bằng markup + macro | `data/case1.js` là "kịch bản", màn hình React chỉ hiển thị |
| Biến của câu chuyện | `storage` — một object JSON, khai báo giá trị mặc định ở một chỗ | `State.variables` (`$var`, được lưu) tách khỏi `State.temporary` (`_var`, không lưu) | `state/gameState.js`: state cần lưu ở một chỗ; state giao diện để riêng trong component |
| Thay đổi state | Mỗi *Action* có `apply()` và `revert()` → rollback được | Mỗi lượt qua passage tạo một *moment* (bản chụp biến) trong history; giới hạn `maxStates` | Reducer với sự kiện có tên (`COLLECT`, `ADVANCE_NODE`, `ELIMINATE`...) |
| Lưu game | Save slot + autosave; `gameObject = { state, history, storage }` | Autosave + slot + xuất file; `Config.saves.version` + `Save.onLoad` để nâng cấp save cũ | Autosave có `version`, migration, kiểm tra hình dạng save, try/catch |
| Save cũ khi game cập nhật | Thư mục `migrations/` đặt tên theo ngày | Handler `onLoad` đọc `save.version` | `MIGRATIONS` trong `gameState.js` |
| Đọc lại lời thoại | *Dialog log* có sẵn | Nút back/forward trong UI bar | Nhật ký hội thoại theo từng nghi phạm |
| Lỗi kịch bản | `FancyError` báo rõ câu lệnh lỗi ở đâu | Cảnh báo khi passage/macro sai | `npm run validate` chạy trước mỗi lần build |
| Đã xem/đã làm chưa | `history('choice')`... | `visited()`, `hasPlayed()`, `tags()` | `interviewHistory`, `collectedIds` |

## Đã áp dụng (09/2026)

1. **State tập trung + reducer** (`game/src/state/gameState.js`) — mọi thứ cần lưu là JSON thuần.
2. **Autosave có version** — nút "Chơi tiếp" ở Prologue; save hỏng hoặc từ phiên bản lạ bị bỏ qua, không làm crash game. Quan trọng với CrazyGames/Poki vì người chơi hay đóng tab giữa chừng.
3. **Nhật ký hội thoại** — trước đây mỗi lần trình chứng cứ thì câu trả lời cũ biến mất, người chơi không đối chiếu lại lời khai được. Với game suy luận, đây là lỗi thiết kế, không chỉ là tiện ích.
4. **Nguồn thu thập chứng cứ nằm trong dữ liệu** (`chapter1Evidence`, `investigationSteps`) thay vì viết cứng trong JSX.
5. **Validator dữ liệu vụ án** (`game/scripts/validate-case.mjs`) — bắt đúng loại bug từng gặp: chứng cứ không có nguồn thu thập, tham chiếu id sai, node hội thoại không tới được, bước bị khóa không ai mở, đáp án board không nằm trong lựa chọn, chat log sai thứ tự giờ.

## Nên làm tiếp (xếp theo giá trị)

0. **Dễ đọc trên điện thoại (phát hiện từ phản biện PersonaTwin với persona học sinh 17 tuổi)** — áp dụng cho CẢ Phần 1: mỗi chứng cứ thêm trường `summary` ≤ 90 ký tự hiện mặc định, `description` dài chỉ mở khi bấm; thay đoạn giải thích bằng hình ảnh khi có thể; điểm lưu theo chương (đã có autosave) để chơi từng đợt ~15 phút. Validator nên kiểm tra độ dài `summary`.
1. **Tách lời thoại/văn bản còn viết cứng trong JSX** (Prologue, đoạn phát hiện ở Chương 1) sang file dữ liệu — để Phần 2 chỉ cần thêm `case2.js`, không sửa màn hình. Đây là bước đầu để có "engine" dùng chung cho nhiều vụ án.
2. **Cấu hình chung kiểu `Config`/`settings`**: tốc độ chữ, cỡ chữ, tắt hiệu ứng — lưu riêng khỏi save game (SugarCube tách `Setting` khỏi `Save`).
3. **Hook sự kiện `onSave`/`onLoad`** để SDK cổng game (CrazyGames có cloud save) cắm vào mà không sửa logic game.
4. **i18n** (Monogatari có sẵn): tách chuỗi giao diện ra file ngôn ngữ nếu muốn phát hành tiếng Anh trên CrazyGames/Poki.
5. **Preload asset** khi thêm ảnh/âm thanh: tải trước theo chương, như action `Preload` của Monogatari.
6. **Chế độ debug** (SugarCube có debug bar): phím tắt nhảy tới chương bất kỳ với bộ chứng cứ cho sẵn → playtest nhanh hơn.

## Không nên học theo

- **Rollback/undo tự do** (điểm mạnh của cả hai engine): trong game suy luận, cho quay lại tự do sẽ biến việc chọn chứng cứ thành thử-sai. Nếu thêm, chỉ nên cho xem lại (nhật ký), không cho hoàn tác lựa chọn.
- **Ngôn ngữ kịch bản riêng** (markup/macro): quá sức với đội 1-2 người; object JS + validator là đủ.
