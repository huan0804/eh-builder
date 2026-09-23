import { useState, useEffect } from 'react';
import RewardedAdModal from '../components/RewardedAdModal';
import { chatLog, chapter1Evidence } from '../data/case1';

const STUCK_THRESHOLD_MS = 15000;

export default function Chapter1({ onCollectEvidence, onComplete }) {
  const [foundEarbuds, setFoundEarbuds] = useState(false);
  const [showHintButton, setShowHintButton] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [revealAnim, setRevealAnim] = useState(false);

  useEffect(() => {
    if (foundEarbuds) return;
    const t = setTimeout(() => setShowHintButton(true), STUCK_THRESHOLD_MS);
    return () => clearTimeout(t);
  }, [foundEarbuds]);

  function handleFindEarbuds() {
    setFoundEarbuds(true);
    setRevealAnim(true);
    // Laptop, tai nghe (của Vy) + ảnh MoMo (thư mục nhóm) + ghi âm nháp của Chi (máy CLB)
    chapter1Evidence.forEach(onCollectEvidence);
  }

  return (
    <div className="chapter chapter-enter">
      <h2>Chương 1 — Buổi tối cuối cùng</h2>
      <p className="briefing">
        Tại phòng CLB, Lam xem lại bản ghi buổi học nhóm tối thứ Năm. Trên bàn là laptop và tai
        nghe mẹ Vy gửi cô Hạnh — những thứ Vy để lại ở nhà.
      </p>

      <div className="chat-log">
        {chatLog.map((line, i) => (
          <div
            key={i}
            className={line.who === 'system' ? 'chat-line system' : 'chat-line'}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="chat-time">{line.time}</span>
            {line.who !== 'system' && <strong> {line.who}: </strong>}
            <span>{line.text}</span>
          </div>
        ))}
      </div>

      <p className="dialogue-inner-thought">
        <em>
          Lam (nội tâm): "Cả buổi, khung hình của Vy chỉ là một màu đen. Không ai thấy Vy rời đi —
          vì chẳng có gì để thấy."
        </em>
      </p>

      {!foundEarbuds ? (
        <>
          <button className="btn-primary" onClick={handleFindEarbuds}>
            🎧 Kiểm tra laptop và tai nghe của Vy
          </button>
          {showHintButton && (
            <button className="btn-hint" onClick={() => setShowAdModal(true)}>
              💡 Bí quá? Xem gợi ý
            </button>
          )}
        </>
      ) : (
        <div className={revealAnim ? 'evidence-reveal reveal-anim' : 'evidence-reveal'}>
          <h4>🎧 Tai nghe không dây của Vy</h4>
          <p>
            Cắm tai nghe vào laptop, Lam nghe riêng kênh mic của Vy trong bản ghi: lúc 21:35 có
            tiếng cửa mở, tiếng bước chân... rồi chỉ còn tiếng quạt. Căn phòng trống.
          </p>
          <p>
            <strong>Log Bluetooth</strong> trên laptop cho thấy tai nghe{' '}
            <strong>ngắt kết nối lúc 21:36</strong> — tức 10 phút <em>trước</em> dòng "thôi tao
            buồn ngủ quá" lúc 21:46.
          </p>
          <p>
            Trong thư mục chung của nhóm trên laptop Vy có một{' '}
            <strong>ảnh chụp màn hình chuyển khoản MoMo</strong> liên quan đến quỹ nhóm. Còn trên
            máy tính chung của CLB, Lam thấy một <strong>tin nhắn thoại nháp chưa gửi</strong> tự
            đồng bộ từ điện thoại của Chi.
          </p>
          <p className="deduction-hint">
            🤔 Nếu Vy đã rời phòng từ 21:36 và không quay lại... thì ai đã gõ dòng "buồn ngủ" lúc
            21:46?
          </p>
          <button className="btn-primary" onClick={onComplete}>
            Tiếp tục sang Chương 2 →
          </button>
        </div>
      )}

      {showAdModal && (
        <RewardedAdModal
          hintText="Những thứ Vy để lại ở nhà có thể cho biết cô ấy rời bàn học lúc nào. Thử xem kỹ laptop và tai nghe."
          onClose={() => setShowAdModal(false)}
        />
      )}
    </div>
  );
}
