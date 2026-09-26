// Màn hình tền — trước cả ColdOpen, hiện MỖI LẦN mở game (không có cờ "đã xem" như
// ColdOpen, vì đây là màn tền game bình thường, không phải cảnh cắt cảnh một lần).
// Ảnh nền lấy từ src/assets/backgrounds/title.svg nếu có (xem docs/portrait-prompts.md
// mục "Ảnh nền cảnh"), chưa có ảnh → fallback gradient cam-be khớp bảng màu UI.
import { useState } from 'react';
import { resolveBackgroundUrl } from '../lib/backgrounds';

export default function TitleScreen({ onStart }) {
  const [imgError, setImgError] = useState(false);
  const bgUrl = resolveBackgroundUrl('title.svg');
  const hasBg = bgUrl && !imgError;

  return (
    <div className={hasBg ? 'title-screen has-bg' : 'title-screen'}>
      {hasBg && (
        <img
          className="title-screen-bg"
          src={bgUrl}
          alt=""
          aria-hidden="true"
          onError={() => setImgError(true)}
        />
      )}
      <div className="title-screen-overlay" />
      <div className="title-screen-content">
        <p className="title-screen-eyebrow">📹 CLB ỐNG KÍNH TRÌNH BÀY</p>
        <h1 className="title-screen-title">CLB Ống Kính</h1>
        <p className="title-screen-tagline">
          Máy quay không nói dối. Nhưng người đứng sau ống kính thì phải tự tìm ra sự thật.
        </p>
        <button className="btn-primary title-screen-cta" onClick={onStart}>
          ▶ Bắt đầu điều tra
        </button>
      </div>
    </div>
  );
}
