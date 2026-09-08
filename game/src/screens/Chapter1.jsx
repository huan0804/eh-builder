import { useState, useEffect } from 'react';
import RewardedAdModal from '../components/RewardedAdModal';

const CHAT_LOG = [
  { time: '21:02', who: 'Khang', text: 'mọi người load đề chưa, tao gửi link rồi đó' },
  { time: '21:05', who: 'Vy', text: 'đợi tao xíu, đang tắt đèn phòng cho đỡ chói màn hình' },
  { time: '21:10', who: 'Chi', text: 'câu 7 tao ra đáp án B, ai ra giống không' },
  { time: '21:11', who: 'Đức', text: 'tao ra C, để check lại đề' },
  { time: '21:34', who: 'Vy', text: 'thôi tao buồn ngủ quá, để mai tính tiếp câu này nha' },
  { time: '21:40', who: 'Khang', text: 'okay ngủ ngon, mai gặp' },
  { time: '21:47', who: 'system', text: '[Vy đã rời khỏi phòng học nhóm]' },
  { time: '21:47', who: 'Đức', text: 'ơ Vy thoát lẹ vậy' },
  { time: '21:48', who: 'Chi', text: 'chắc buồn ngủ thật á' },
];

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
    onCollectEvidence('chatLog');
    onCollectEvidence('earbudsBluetoothLog');
    // Vy lưu ảnh chuyển khoản MoMo trong thư mục chung của nhóm, trên máy tính phòng CLB
    onCollectEvidence('momoTransfer');
    // Tin nhắn thoại nháp của Chi tự đồng bộ lên máy tính chung của CLB
    onCollectEvidence('chiVoiceDraft');
  }

  return (
    <div className="chapter chapter-enter">
      <h2>Chương 1 — Buổi tối cuối cùng</h2>
      <p className="briefing">
        Cô Hạnh nhờ Lam xem lại bản ghi buổi livestream nhóm ôn thi tối thứ Năm, nơi Vy mất tích
        ngay sau đó.
      </p>

      <div className="chat-log">
        {CHAT_LOG.map((line, i) => (
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

      {!foundEarbuds ? (
        <>
          <button className="btn-primary" onClick={handleFindEarbuds}>
            🎧 Kiểm tra phòng CLB — có vật gì để quên không?
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
            Kết nối tai nghe với máy tính CLB để nghe lại file âm thanh gốc... phát hiện một đoạn
            tiếng ồn nền lúc 21:35 (tiếng cửa mở, tiếng bước chân) mà bản ghi hình không rõ.
          </p>
          <p>
            <strong>Log Bluetooth</strong> cho thấy tai nghe <strong>ngắt kết nối lúc 21:36</strong>
            {' '}— sớm hơn 11 phút so với giờ Vy "rời phòng chat" (21:47).
          </p>
          <p>
            Trong lúc đó, Lam cũng thấy trên máy tính chung của CLB một{' '}
            <strong>ảnh chụp màn hình chuyển khoản MoMo</strong> mà Vy từng lưu lại vào thư mục
            nhóm — có vẻ liên quan đến chuyện quỹ nhóm ôn thi. Cùng thư mục đó còn có một{' '}
            <strong>tin nhắn thoại nháp chưa gửi</strong> tự động đồng bộ từ điện thoại của Chi.
          </p>
          <p className="deduction-hint">
            🤔 Ai đó có thể đã ở lại máy để gõ dòng "buồn ngủ" thay Vy — hoặc Vy đã rời bàn nhưng để
            chat chạy tiếp. Cần điều tra thêm.
          </p>
          <button className="btn-primary" onClick={onComplete}>
            Tiếp tục sang Chương 2 →
          </button>
        </div>
      )}

      {showAdModal && (
        <RewardedAdModal
          hintText='Thử ghé qua phòng sinh hoạt CLB xem có ai để quên vật gì không — đôi khi vật nhỏ lại tiết lộ nhiều điều nhất.'
          onClose={() => setShowAdModal(false)}
        />
      )}
    </div>
  );
}
