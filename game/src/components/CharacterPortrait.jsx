import { useState } from 'react';

// Ảnh minh hoạ nhân vật theo cảm xúc (kiểu Ace Attorney: sprite tĩnh đổi theo trạng thái
// hội thoại) — xem docs/portrait-prompts.md để tạo ảnh bằng AI. Character KHÔNG khai báo
// `portraits`, hoặc ảnh chưa tồn tại/tải lỗi (404, vì asset thật chưa được thêm vào
// src/assets/portraits/) → fallback về khung màu + icon cảm xúc, KHÔNG BAO GIỜ vỡ layout hay
// hiện ảnh hỏng. Đây là lý do đặt tên field là "cố gắng hiển thị ảnh, luôn có lưới an toàn".
const EMOTION_FALLBACK = {
  neutral: { icon: '🙂', bg: '#e8ddc9' },
  nervous: { icon: '😰', bg: '#fbe9c9' },
  defensive: { icon: '😤', bg: '#f5d9c9' },
  confession: { icon: '😔', bg: '#e0d4e8' },
};

// Vite: import.meta.glob nạp trước mọi ảnh có thật trong thư mục portraits (nếu có), để
// biết ảnh đã tồn tại hay chưa mà không cần thử tải rồi bắt lỗi 404 (tránh nhấp nháy layout).
const portraitModules = import.meta.glob('../assets/portraits/**/*.png', { eager: true, query: '?url', import: 'default' });

function resolvePortraitUrl(relativePath) {
  const key = `../assets/portraits/${relativePath}`;
  return portraitModules[key] ?? null;
}

export default function CharacterPortrait({ character, emotion = 'neutral', className = '' }) {
  const [imgError, setImgError] = useState(false);
  const portraitPath = character?.portraits?.[emotion];
  const url = portraitPath ? resolvePortraitUrl(portraitPath) : null;
  const fallback = EMOTION_FALLBACK[emotion] ?? EMOTION_FALLBACK.neutral;

  if (!url || imgError) {
    return (
      <div
        className={`character-portrait character-portrait-fallback ${className}`}
        style={{ background: fallback.bg }}
        aria-label={`${character?.name ?? 'Nhân vật'} (${emotion})`}
      >
        <span className="character-portrait-icon">{fallback.icon}</span>
      </div>
    );
  }

  return (
    <img
      className={`character-portrait ${className}`}
      src={url}
      alt={`${character?.name ?? 'Nhân vật'} — ${emotion}`}
      onError={() => setImgError(true)}
    />
  );
}
