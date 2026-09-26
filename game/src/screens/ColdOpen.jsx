import { useEffect, useState } from 'react';

// Cảnh mở đầu của cả season — dùng chung khuôn hình cho mọi phần, nội dung lấy từ
// `data.coldOpen` của case đang chơi (xem docs/phan-1-script.md mục 1b, phan-2-script.md mục 1b).
// Người chơi KHÔNG điều khiển gì trong cảnh này; chỉ có thể bỏ qua toàn bộ.
// Không video — dựng bằng CSS/hoạt ảnh chữ để nhẹ cho điện thoại tầm trung.
// Fair-play: người nhận bị che, nội dung chính bị mờ — chỉ dòng cuối được lấy nét.
// Không gài chi tiết nào về danh tính người gửi.

const FRAME_DURATION_MS = [3000, 4000, 6000, 5000, 3000, 2000, 2000]; // ~25s tổng, khớp kịch bản

export default function ColdOpen({ data, onDone, alreadySeen }) {
  const { coldOpen } = data;
  const [frame, setFrame] = useState(0);
  const chatListEntries = coldOpen.chatListEntries ?? (coldOpen.chatListEntry ? [coldOpen.chatListEntry] : []);

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
        {frame === 0 && <p className="cold-open-timestamp">{coldOpen.timestamp}</p>}

        {frame >= 1 && frame <= 4 && (
          <div className="phone-frame">
            <div className="phone-chat-header">
              <span className="phone-chat-name-blur">■■■■■■■</span>
            </div>
            <div className="phone-chat-body">
              {frame >= 2 && coldOpen.hesitant && (
                <p className={frame === 2 ? 'phone-bubble typing-blur' : 'phone-bubble typing-blur fading'}>
                  ■■■ ■■■■■ ■■ ■■■■ ■■■■■■ ■■ ■■■■■ ■■■■■■...
                </p>
              )}
              {frame >= 3 && <p className="phone-bubble phone-bubble-final">"{coldOpen.finalLine}"</p>}
            </div>
          </div>
        )}

        {frame === 4 && chatListEntries.length > 0 && (
          <div className="cold-open-chat-list">
            {chatListEntries.map((entry, i) => (
              <div className="cold-open-chat-list-item" key={i}>
                <span className="chat-list-name">{entry.name}</span>
                <span className="chat-list-date">{entry.date}</span>
                <span className="chat-list-preview">{entry.preview}</span>
              </div>
            ))}
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
