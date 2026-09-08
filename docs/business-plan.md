# Kế hoạch Kinh doanh: Game Suy luận Phong cách "Trinh thám" (Không Kinh dị)

**Vị trí dự án**: `D:\1. Personal Working\4. EH Builder` (thư mục hiện đang trống, sẽ khởi tạo dự án mới tại đây)

## Bối cảnh (Context)

Người dùng muốn xây dựng một game giải trí tập trung vào **rèn luyện tư duy suy luận logic**, lấy cảm hứng từ phong cách trinh thám kiểu Thám tử lừng danh Conan và thể loại escape room, nhưng **loại bỏ hoàn toàn yếu tố kinh dị** — khác với dòng game escape-room-kinh-dị đang thống trị thị trường indie Việt Nam (Thần Trùng, Tai Ương, Cỏ Máu).

**Ràng buộc bản quyền quan trọng (do người dùng nhấn mạnh)**: Game **tuyệt đối không được nhắc trực tiếp tên phim/manga, tên nhân vật, hay bất kỳ yếu tố nhận diện thương hiệu nào** của Thám tử lừng danh Conan hoặc bất kỳ IP nào khác. Đây phải là một **IP gốc hoàn toàn**, chỉ **mô phỏng phong cách suy luận** (fair-play whodunit / Honkaku) — tương tự cách The Case of the Golden Idol, Return of the Obra Dinn, hay Murders on Budapest! đều là IP gốc vay mượn *quy ước thể loại* trinh thám cổ điển (kiểu Agatha Christie) chứ không dùng license nào. Đây là điều kiện bắt buộc, không phải tùy chọn.

Ràng buộc đã xác nhận với người dùng:
- **Nền tảng**: Web/trình duyệt trước (link chơi được ngay, ví dụ itch.io hoặc portal như CrazyGames/Poki) — ít rào cản nhất để kiểm chứng sớm.
- **Kiếm tiền** *(đã cập nhật sau phản biện Mom Test — xem mục 6)*: **Ads-first** — doanh thu chính đến từ quảng cáo (rewarded video ưu tiên), **chưa cần thu phí ngay từ đầu**. Cốt truyện được chia thành **nhiều phần**, **Phần 1 hoàn toàn miễn phí** để thu hút và giữ chân người chơi trước; IAP theo phần chỉ là nguồn thu bổ sung về sau, sau khi đã có lượng người chơi ổn định.
- **Đội ngũ**: Một người hoặc nhóm rất nhỏ (1-2 người), ngân sách hạn chế → kế hoạch phải ưu tiên MVP thu gọn, không phải sản phẩm 3D quy mô lớn.

Đây là **bản kế hoạch kinh doanh** (theo khung market-research trong CLAUDE.md). Quyết định về công nghệ/engine được để lại cho buổi thảo luận tiếp theo, như người dùng yêu cầu.

---

## 1. Vấn đề & Khách hàng

**Vấn đề**: Người chơi Việt Nam yêu thích thể loại trinh thám suy luận (độc giả trung thành của các manga trinh thám kiểu Conan/Kindaichi) hiện không có game nội địa nào cho phép họ **thực sự đóng vai thám tử** — thu thập chứng cứ, chất vấn nghi phạm, đưa ra kết luận sòng phẳng (fair-play) — mà không rơi vào một trong ba lối mòn: (a) khung cảnh kinh dị/hù dọa, (b) bối cảnh lịch sử phương Tây xa lạ (Golden Idol: thế kỷ 19; Obra Dinn: thế kỷ 18), hoặc (c) visual novel thoại tuyến tính không có cơ chế suy luận thực sự.

**Ai gặp vấn đề này**: Độc giả manga trinh thám tại Việt Nam (học sinh, sinh viên, dân văn phòng). Ngoài ra còn tệp khách hàng rộng hơn: người chơi "cozy game" toàn cầu (từ khóa "cozy" tăng 675% trong nhóm game ăn khách 2022→2025) và người chơi game logic/rèn não (lượt tải game logic puzzle tăng 19% YoY năm 2026).

**Giải pháp hiện tại họ đang dùng**: Ace Attorney/Danganronpa (nhập khẩu, không gắn văn hóa VN), Golden Idol/Obra Dinn (lịch sử phương Tây, rào cản ngôn ngữ/bối cảnh), Murders on Budapest! (gần nhất về mặt định dạng — mobile, phổ biến ở VN — nhưng bối cảnh hư cấu/phóng đại, không nghiêm ngặt về suy luận), game kinh dị escape-room VN (sai thể loại hoàn toàn), board game hồ sơ vụ án/Jubensha (chi phí cao, chơi lại bằng 0).

## 2. Đối thủ Cạnh tranh Trực tiếp (nghiên cứu mới, bổ sung)

Đây là phần được đào sâu thêm theo yêu cầu — các đối thủ **đang trực tiếp xây dựng game tương tự** (không chỉ game trinh thám nói chung):

| Đối thủ | Mô tả | Mức độ đe dọa | Khác biệt so với dự án của bạn |
|---|---|---|---|
| **Detective Sherlock: Shadow Stalker** (Gamercury AI) | Studio công nghệ (có nguồn tin ban đầu nhầm là VN, thực tế trụ sở Madrid, Tây Ban Nha), đã gọi vốn 2 vòng (vòng 2 do LinkSure dẫn dắt). Game 3D dùng AI đa phương thức tạo nhân vật/hội thoại động, bối cảnh London thời Victoria, dùng nhân vật Sherlock Holmes (đã hết hạn bản quyền/public domain). Ra mắt Gamescom 2025 với hàng dài người xếp hàng chờ demo, phát hành đa nền tảng 2026. | **Cao về công nghệ, thấp về định vị thị trường** | Đây là sản phẩm 3D có vốn đầu tư lớn, bối cảnh lịch sử phương Tây — **không cạnh tranh trực tiếp về mặt định vị "văn hóa số đương đại + web/F2P + VN"**, nhưng cho thấy hướng "AI-powered detective game" đang được nhà đầu tư chú ý. Cần theo dõi vì nếu họ mở rộng sang bối cảnh hiện đại/thị trường Á, sẽ va chạm trực tiếp. |
| **The Roottrees are Dead** | Game indie 1 người làm (Jeremy Johnston), phát hành **miễn phí trên web/itch.io** năm 2023 sau Global Game Jam, có link donate. Sau 1 năm, remaster thành bản Steam trả phí $19.99, thu về **hơn 1 triệu USD**. Phong cách: ghép cây gia phả từ báo cũ, ảnh, hồ sơ — "jigsaw suy luận thuần túy". Được gọi là "game trinh thám đột phá của năm 2025". | **Rất cao — đây là case study chiến lược trực tiếp áp dụng được** | Chứng minh **chính xác chiến lược bạn đang chọn**: web free trước → xây cộng đồng → remaster trả phí sau. Đây là bằng chứng thực tế mạnh nhất cho lộ trình GTM của dự án này. |
| **Golden Idol / Rise of the Golden Idol** (Color Gray Games) | Đã phân tích kỹ trong nghiên cứu trước — premium, PC/Steam, ~2.56 triệu USD doanh thu gộp. | Trung bình | Không cùng nền tảng (PC premium vs. web F2P), nhưng là chuẩn mực thiết kế cơ chế "Thinking Board" cần tham khảo. |
| **Duck Detective, Kathy Rain 2, Strange Antiquities, Séance of Blake Manor** (2025) | Các game adventure/deduction quy mô nhỏ, phát hành 2025 trên Steam. | Thấp | Cùng thị trường ngách deduction nhưng khác nền tảng (PC premium) và không nhắm VN. |
| Game trinh thám trên CrazyGames/Poki hiện có (Detective Loupe Puzzle, Detective Dan...) | Chủ yếu là hidden-object/point-and-click đơn giản, không có cơ chế suy luận fair-play sâu. | Thấp | Xác nhận: **chưa có đối thủ nào trên chính các portal bạn định dùng (CrazyGames/Poki) có cơ chế suy luận nghiêm túc kiểu Conan/Golden Idol** — đây là khoảng trống thị trường cụ thể, không chỉ lý thuyết. |

**Kết luận đối thủ**: Không có đối thủ nào hiện đang kết hợp chính xác 3 yếu tố: (1) web/browser F2P, (2) cơ chế suy luận fair-play nghiêm túc, (3) bối cảnh văn hóa số đương đại phi kinh dị. Gamercury AI gần nhất về công nghệ nhưng khác thị trường/nền tảng; Roottrees are Dead gần nhất về chiến lược GTM.

## 3. Quy mô Thị trường (ước tính bottom-up — chưa có dữ liệu sơ cấp)

- **TAM**: Thị trường game puzzle toàn cầu = 11.2 tỷ USD (2025) → 22.6 tỷ USD vào 2034 (CAGR 8.1%). Riêng phân khúc murder-mystery/deduction = 2.02 tỷ USD (2025) → 2.27 tỷ USD (2026), CAGR ~12%, đạt 3.58 tỷ USD vào 2030.
- **SAM**: Thị trường game mobile+web Việt Nam = 825 triệu USD doanh thu (2025), ~54 triệu người chơi mobile, nhưng chỉ 7-10% người chơi VN chi tiền (2-3% là "high spender"), ARPU ≈ 15.27 USD/năm. Các thể loại puzzle (Screw, Match-Pair, Sort, Block) chiếm 38% doanh thu IAP, tăng 83% YoY — tín hiệu người chơi VN **có** chi tiền cho cơ chế puzzle, dù chưa rõ có chi cho khung "trinh thám suy luận" hay không.
- **SOM (thực tế, 3 năm, đội nhỏ, web-first)**: Đây là dự án ngách trong ngách. SOM thực tế cho một game web tự phát hành với 1-2 gói vụ án trả phí là **khoảng vài chục nghìn đến thấp nhất là 6 chữ số USD** — game HTML5/web indie thường thu 200-2,000 USD/tháng qua quảng cáo portal; ngay cả studio Poki hàng đầu cũng chỉ đạt ~1 triệu EUR/năm sau nhiều năm xây dựng danh mục. **Nên coi đây là dự án kiểm chứng/xây dựng portfolio trước, mở rộng doanh thu sau** — trừ khi nó tạo được hiệu ứng lan tỏa giống Roottrees are Dead.

**Lưu ý minh bạch**: Các số liệu TAM (2 tỷ USD+) là số liệu tổng hợp từ báo cáo thị trường trả phí, mang tính tham khảo định hướng, không phải mục tiêu thực tế cho một đội 1-2 người. Con số SOM ở trên mới là con số nên dùng để lập kế hoạch.

## 4. Khác biệt hóa & Lợi thế Cạnh tranh (Moat)

**Insight cốt lõi**: Không ai hiện đang kết hợp đồng thời hai trục: (1) cơ chế suy luận fair-play đáng tin cậy (kiểu "Thinking Board" của Golden Idol, không phải thoại thụ động), và (2) **tông màu cozy, phi kinh dị** — đang là xu hướng đo lường được (tỷ lệ game gắn từ khóa "cozy" trong nhóm game doanh thu >100K USD tăng từ 0.4%→3.1%, 2022→2025).

**Ứng viên lợi thế cạnh tranh** (cần xây dựng, chưa có sẵn):
- Người đi đầu tại VN với định vị "trinh thám suy luận cozy" — chưa thấy đối thủ nội địa trực tiếp nào.
- Cấu trúc web/browser + gói vụ án theo tập cho phép ra mắt nhỏ, lặp lại nhanh dựa trên dữ liệu người chơi thật, chi phí biên mỗi vụ án thấp hơn game 3D premium.
- Châm biếm văn hóa số đương đại (nội dung AI rác, drama livestream, "bằng chứng" deepfake) như **cơ chế giải đố**, không chỉ là gia vị — đây thực sự chưa ai trong bảng đối thủ trên khai thác.

**Đánh giá moat**: **Yếu → Trung bình**, chỉ khi chất lượng thực thi (thiết kế câu đố, tính nghiêm ngặt fair-play) đủ cao và ra mắt đủ nhanh để đi trước. Cơ chế thể loại không phải là IP có thể bảo vệ; moat nằm ở thực thi + thương hiệu + cộng đồng. Cần thành thật: Gamercury AI hoặc Buff Studio (đã làm Murders on Budapest!) có thể sao chép định vị này nhanh nếu chứng minh được giá trị.

## 5. Tín hiệu Product-Market Fit (trước khi ra mắt)

- **Tín hiệu gián tiếp**: Phim Conan tại VN thu 3.9 triệu USD phòng vé (Black Iron Submarine) — chứng minh nhu cầu liên quan đến thể loại tồn tại, nhưng đây là fandom cho **IP gốc**, không phải bằng chứng nhu cầu cho **ý tưởng game cụ thể này**. Không nên nhầm lẫn hai điều này.
- **Chưa có dữ liệu tìm kiếm/cộng đồng trực tiếp** cho các cụm từ như "muốn chơi game trinh thám không kinh dị" — đây là khoảng trống cần validate đầu tiên (xem phần Thí nghiệm Tiếp theo).
- **Bằng chứng thị trường liền kề mạnh nhất**: The Roottrees are Dead — miễn phí trên web → cộng đồng tự nhiên → remaster trả phí → hơn 1 triệu USD. Đây là bằng chứng thực tế, đã xảy ra, gần nhất với chiến lược bạn chọn (web-first, sau đó tính thu phí).

## 6. Giả thuyết Go-to-Market

### 6.1. Phản biện Mom Test (PersonaTwin) — đã chạy, kết quả định hình lại mô hình

Đã mô phỏng phản hồi từ 2 persona VN qua skill `personatwin` (Cohort Simulation) để kiểm tra giả thuyết ban đầu (F2P + IAP theo gói vụ án ngay từ đầu):

- **Minh Anh, 17 tuổi, học sinh THPT** (đúng nhân vật chính trong cốt truyện dự kiến): Có pain thật (chán các game giải đố hiện có trên CH Play/Zalo Mini App) nhưng **không có phương tiện thanh toán độc lập** (không thẻ Visa, phải xin phụ huynh/mua thẻ cào) → Verdict: **Pivot Recommended** cho mô hình thu phí trực tiếp ở nhóm tuổi này.
- **Thu Trang, 20 tuổi, sinh viên** (có ví MoMo/thẻ ATM riêng): Có pain thật (đã chủ động gỡ Coin Master vì chán) và có phương tiện thanh toán, nhưng từ chối "trả tiền mù" — đòi hỏi vụ án đầu phải đủ dài/chỉn chu để chứng minh giá trị trước khi mua tiếp → Verdict: **Accept có điều kiện**.
- **Kết luận rút ra**: Rào cản thanh toán ở tuổi teen (đúng nhân vật chính câu chuyện) là có thật — đây chính là lý do người dùng quyết định chuyển sang **mô hình ads-first**: doanh thu không phụ thuộc vào việc học sinh/người chơi trẻ tuổi phải có thẻ thanh toán, mọi lứa tuổi đều "trả" bằng cách xem quảng cáo thay vì bằng tiền mặt.

### 6.2. Mô hình kiếm tiền: Ads-first + Free Phần 1

- **Nguồn thu chính: Quảng cáo, ưu tiên Rewarded Video.** Nghiên cứu ngành xác nhận rewarded video là lựa chọn đúng cho thể loại puzzle/suy luận: người chơi thích rewarded hơn interstitial theo tỷ lệ **4:1**; eCPM rewarded ($16-28 USD ở Mỹ, $8-15 ở EU) cao hơn interstitial (~$14 USD); tỷ lệ hoàn thành xem quảng cáo rewarded thường >90% vì người chơi chủ động chọn xem (đổi lấy gợi ý/hint khi bí câu đố) thay vì bị ép xem.
- **Cảnh báo quan trọng đã xác nhận qua nghiên cứu**: Interstitial (quảng cáo tự động chèn) nếu lạm dụng — đặc biệt hiện mỗi màn/mỗi câu đố — có thể gây **15-25% người chơi bỏ cuộc**, phá vỡ mạch cảm xúc căng thẳng đang suy luận. Do đó nên **né interstitial dày đặc**, chỉ đặt ở điểm ngắt tự nhiên (hết một vụ án/một phần), không chèn giữa các câu đố.
- **Cấu trúc nội dung**: Cốt truyện chia thành **nhiều phần** (số lượng phần cụ thể phụ thuộc vào cốt truyện sẽ xây ở bước tiếp theo). **Phần 1 miễn phí hoàn toàn** — đóng vai trò "mồi câu" người chơi và nguồn traffic chính để kiếm tiền qua ads; các phần sau có thể áp dụng IAP dần dần một khi đã có lượng người chơi ổn định (không phải ưu tiên ngay từ ngày ra mắt).
- **Vì sao mô hình này khớp với cả hai persona đã test**: Minh Anh (17 tuổi) không cần trả tiền gì để chơi Phần 1 và vẫn tạo giá trị (lượt xem quảng cáo); Thu Trang (20 tuổi) không còn phải "trả tiền mù" vì Phần 1 đủ đầy đủ để tự chứng minh giá trị trước khi cân nhắc các phần sau.

### 6.3. Kênh phân phối & Tiếp cận

- **Kênh chính**: Portal game web (CrazyGames, Poki) — cả hai đều **ưu tiên rewarded/mid-game video trong chính SDK của họ**, khớp trực tiếp với mô hình ads-first. Chia sẻ doanh thu quảng cáo: CrazyGames 60% cho nhà phát triển (70% nếu có IAP), thanh toán hàng tháng qua Tipalti (tối thiểu 100 EUR). Một nhà phát triển từng ghi nhận ~1.2 EUR/1,000 lượt chơi trên CrazyGames với danh mục game đơn giản — đây là mức tham khảo thô, thực tế phụ thuộc nhiều vào chất lượng/thời lượng giữ chân người chơi.
- Kênh phụ: itch.io để lấy phản hồi cộng đồng sớm (giống chính xác cách Roottrees are Dead khởi đầu — miễn phí, có link donate, không ép mua), nhóm Facebook người hâm mộ trinh thám VN, cộng đồng indie game VN.
- **Vì sao phù hợp**: Portal web không cần cài đặt, khớp hành vi "chơi nhanh" của người chơi puzzle casual, cho phép kiểm chứng với chi phí marketing gần bằng 0 trước khi đầu tư vào mobile app store.
- **CAC/LTV (ước tính thô, chưa kiểm chứng)**: CAC gần 0 qua portal (portal tự đưa traffic khám phá). Doanh thu mỗi người chơi phụ thuộc vào **thời lượng chơi × tần suất xem rewarded ads tự nguyện** — game càng giữ chân người chơi lâu (nhiều câu đố cần gợi ý), càng nhiều lượt xem rewarded. Đây là lý do thiết kế độ khó câu đố (đủ thử thách để người chơi *muốn* xem quảng cáo đổi gợi ý, nhưng không quá khó gây nản) trở thành một đòn bẩy kinh doanh trực tiếp, không chỉ là vấn đề trải nghiệm.
- **10 người chơi đầu tiên**: Mạng lưới cá nhân + nhóm Facebook fan trinh thám VN + cộng đồng indie game Việt Nam — đăng link bản demo Phần 1 chơi được trực tiếp, hỏi cụ thể về độ khó suy luận (không chỉ "có thích không").

## 7. Đánh giá Tính khả thi

- **Phạm vi MVP**: Một vụ án độc lập, tối đa 1-2 phòng (theo đúng đề xuất MVP từ nghiên cứu Gemini trước đó). Cụ thể: **1 nạn nhân, 3-4 nghi phạm, một cơ chế kết luận kiểu "Thinking Board"**. Không rẽ nhánh, không multiplayer.
- **Rủi ro thiết kế cốt lõi** (để lại cho buổi thảo luận công nghệ): Dung hòa câu đố cơ học escape-room (quy nạp: tìm chìa khóa, mở khóa) với suy luận kiểu trinh thám (diễn dịch: tái hiện nhân quả) mà không khiến vỏ bọc escape-room bị tách rời khỏi vụ án. Giải pháp đề xuất trước đó (vật thể hai tầng ý nghĩa: mỗi món đồ vừa là công cụ vừa là chứng cứ) là ý tưởng thiết kế, chưa được kiểm chứng thực tế — cần làm prototype sớm.
- **Rủi ro pháp lý/nội dung** (bắt buộc, không thương lượng): Game **không được dùng tên nhân vật, tên phim, hay bất kỳ yếu tố nhận diện nào** của Conan hoặc bất kỳ manga/anime nào khác. Fan game tồn tại trong vùng xám pháp lý và có thể bị gỡ khi chủ sở hữu bản quyền khiếu nại (tiền lệ: Pokémon Uranium bị gỡ sau DMCA từ Nintendo). Game phải là **IP gốc lấy cảm hứng từ quy ước thể loại**, giống cách Golden Idol/Obra Dinn/Murders on Budapest!/Roottrees are Dead đều là IP gốc.
- **Đội ngũ/kỹ năng cần thiết**: Với MVP web solo/nhóm nhỏ — 1 người thiết kế/viết kịch bản (vụ án + logic câu đố), 1 lập trình viên (có thể là cùng một người với engine phù hợp — quyết định ở buổi sau), mỹ thuật 2D tối giản (phong cách cozy/stylized rẻ hơn 3D thực tế và khớp với định vị "cozy").
- **Giả thuyết then chốt nếu sai sẽ giết chết ý tưởng** *(đã cập nhật theo mô hình ads-first)*: Không còn là "người chơi có chịu trả tiền không" (đã giảm rủi ro nhờ chuyển sang ads-first), mà là: **liệu game có đủ sức giữ chân người chơi đủ lâu và đủ đông để doanh thu quảng cáo có ý nghĩa?** Vì ARPU quảng cáo trên mỗi người chơi rất thấp (xem CAC/LTV ở mục 6.3), mô hình này về bản chất là **trò chơi số lượng lớn (volume game)** — cần lượng người chơi đáng kể mới tạo doanh thu đáng kể, khác hẳn mô hình premium (Golden Idol) chỉ cần vài trăm nghìn người mua một lần. Đây là đánh đổi cần ý thức rõ: rào cản gia nhập thấp hơn (ai cũng chơi được, không cần thẻ) nhưng cần quy mô lớn hơn để thành công về tài chính.

## 8. Kết luận

**Tiến hành cùng Kiểm chứng (Proceed with Validation).**

Insight cốt lõi (suy luận fair-play phong cách cozy + châm biếm văn hóa số VN đương đại, không dùng license) có tính khác biệt thực sự và đi theo hai xu hướng đo lường được (tăng trưởng game logic, tăng trưởng game cozy) — nhưng gần như mọi thứ về GTM và mô hình kiếm tiền hiện mới chỉ là ước tính, chưa kiểm chứng, và đội ngũ là solo/ngân sách hạn chế.

**Top 3 điểm mạnh**:
1. Khoảng trống thị trường rõ ràng, có bằng chứng: chưa đối thủ nào (kể cả trên chính CrazyGames/Poki) kết hợp suy luận fair-play + phi kinh dị + văn hóa số đương đại.
2. Đi theo 2 xu hướng tăng trưởng đo lường được đồng thời (game logic +19% YoY lượt tải; game cozy +675% tăng trưởng từ khóa trong nhóm ăn khách).
3. Có case study thành công thực tế theo đúng chiến lược đề xuất: **The Roottrees are Dead** (web free → cộng đồng → remaster trả phí → hơn 1 triệu USD).

**Top 3 rủi ro** *(đã cập nhật theo mô hình ads-first)*:
1. Mô hình ads-first cần **quy mô người chơi lớn** mới tạo doanh thu đáng kể (ARPU quảng cáo/người rất thấp) — rủi ro không phải "có ai trả tiền không" nữa mà là "có đủ người chơi và đủ thời lượng chơi không". Cần thiết kế câu đố đủ hấp dẫn để người chơi tự nguyện xem rewarded ads (đổi gợi ý) nhiều lần, không chỉ chơi một lượt rồi rời đi.
2. Moat yếu — cơ chế có thể sao chép, và Gamercury AI (có vốn đầu tư, đang làm game trinh thám AI) hoặc Buff Studio có thể sao chép định vị nhanh nếu chứng minh hiệu quả.
3. Rủi ro thiết kế dung hòa escape-room và suy luận fair-play nghiêm ngặt mà không cảm thấy gượng ép (rủi ro đã biết trước, chưa có giải pháp đã kiểm chứng).

**Thí nghiệm tiếp theo quan trọng nhất** *(đã cập nhật)*: Xây một prototype clickable đơn giản (Figma hoặc web mockup) của MỘT chuỗi câu đố suy luận thuộc Phần 1 (vật thể hai tầng → kết luận kiểu Thinking Board) và test với 5-10 người từ cộng đồng fan trinh thám VN (cả nhóm tuổi teen lẫn sinh viên, theo đúng 2 persona đã mô phỏng), hỏi cụ thể: (a) họ có thích trải nghiệm suy luận không, (b) họ chơi hết một câu đố mất bao lâu (đo thời lượng thực tế để ước tính tiềm năng rewarded-ads), (c) họ có sẵn sàng xem quảng cáo để đổi lấy gợi ý khi bí không, hay sẽ bỏ cuộc luôn.

---

## Trạng thái sau khi kế hoạch này được duyệt (cập nhật)

Kế hoạch kinh doanh đã được duyệt. Các bước sau đó đã hoàn thành:

1. **Vai trò nhân vật chính đã chốt**: Lam — thành viên CLB Ống Kính (báo trường/truyền thông), được Cô Hạnh (GVCN) nhờ xác minh trước khi báo cấp trên. Không phải "điều tra viên chuyên nghiệp" — giữ đúng tinh thần gần gũi kiểu học đường.
2. **Cấu trúc nhiều phần đã chốt**: Một bí ẩn lớn xuyên suốt season (chuỗi vụ mất tích liên quan đến nhau), Phần 1 = 3-4 chương đầu, tự đóng trọn vẹn nhưng có hook rõ ràng sang Phần 2.
3. **Cốt truyện Phần 1 đã viết đầy đủ**: xem `docs/story-bible.md` (tổng quan) và `docs/phan-1-script.md` (kịch bản chi tiết, lời thoại, chứng cứ).
4. **Nguyên tắc "2-3 hướng suy luận song song"** được bổ sung sau phản biện Mom Test (persona so sánh với Golden Idol) — xem chi tiết trong `phan-1-script.md` và tóm tắt trong `CLAUDE.md` ở root project.
5. **MVP đã được code và kiểm chứng chạy được** — xem `game/` (React + Vite). Đã test bằng Playwright, golden path hoàn chỉnh từ Prologue đến Epilogue, có animation cơ bản và rewarded-ads giả lập.

**Việc còn lại** (xem chi tiết đầy đủ trong `CLAUDE.md` ở root project, mục "Chưa làm"):
- Tích hợp SDK rewarded-ads thật, deploy lên portal, nội dung Phần 2, polish thêm (âm thanh, responsive mobile), tên chính thức cho dự án/game.
