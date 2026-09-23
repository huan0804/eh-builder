import { useEffect, useState } from 'react';

// Cảnh mở đầu của cả season (không riêng Phần 1) — xem docs/phan-1-script.md mục 1b.
// Người chơi KHÔNG điều khiển gì trong cảnh này; chỉ có thể bỏ qua toàn bộ.
// Không video — dựng bằng CSS/hoạt ảnh chữ để nhẹ cho điện thoại tầm trung.
// Fair-play: người nhận bị che, nội dung chính bị mờ — chỉ dòng cuối "Im lặng thì an toàn"
// được lấy nét. Không gài chi tiết nào về danh tính người gửi.

const FRAME_DURATION_MS = [3000, 4000, 6000, 5000, 3000, 2000, 2000]; // ~25s tổng, khớp kịch bản

export default function ColdOpen({ onDone, alreadySeen }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (frame >= FRAME_DURATION_MS.length) {
      onDone();
      return;
    }
    const t = setTimeout(() => setFrame((f) => f + 1), FRAME_DURATION_MS[frame]);
    return () => clearTimeout(t);
  }, [frame, onDone]);

  return (
    <div className="cold-open">
      <div className={`cold-open-screen cold-open-frame-${Math.min(frame, 6)}`}>
        {frame === 0 && <p className="cold-open-timestamp">Thứ Hai, 22:17</p>}

        {frame >= 1 && frame <= 4 && (
          <div className="phone-frame">
            <div className="phone-chat-header">
              <span className="phone-chat-name-blur">■■■■■■■</span>
            </div>
            <div className="phone-chat-body">
              {frame >= 2 && (
                <p className={frame === 2 ? 'phone-bubble typing-blur' : 'phone-bubble typing-blur fading'}>
                  ■■■ ■■■■■ ■■ ■■■■ ■■■■■■ ■■ ■■■■■ ■■■■■■...
                </p>
              )}
              {frame >= 3 && (
                <p className="phone-bubble phone-bubble-final">"Im lặng thì an toàn."</p>
              )}
            </div>
          </div>
        )}

        {frame === 4 && (
          <div className="cold-open-chat-list">
            <div className="cold-open-chat-list-item">
              <span className="chat-list-name">M.</span>
              <span className="chat-list-date">thg 4, năm ngoái</span>
              <span className="chat-list-preview">Im lặng thì an toàn.</span>
            </div>
          </div>
        )}

        {frame === 5 && <div className="cold-open-silhouette" />}

        {frame === 6 && (
          <div className="cold-open-rec">
            <span className="rec-dot" /> REC
          </div>
        )}
      </div>

      {alreadySeen && (
        <button className="btn-secondary cold-open-skip" onClick={onDone}>
          Bỏ qua »
        </button>
      )}
    </div>
  );
}
