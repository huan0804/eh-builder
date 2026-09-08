import { useState, useEffect } from 'react';

// Mô phỏng luồng rewarded video ad (theo mô hình ads-first đã chốt trong kế hoạch kinh doanh).
// Đây là bản giả lập cho MVP — khi tích hợp thật sẽ thay bằng SDK của CrazyGames/Poki (window.CrazyGames.SDK.ad.requestAd('rewarded', ...)).
const FAKE_AD_DURATION_MS = 3000;

export default function RewardedAdModal({ hintText, onClose }) {
  const [phase, setPhase] = useState('confirm'); // confirm -> playing -> reward
  const [countdown, setCountdown] = useState(FAKE_AD_DURATION_MS / 1000);

  useEffect(() => {
    if (phase !== 'playing') return;
    if (countdown <= 0) {
      setPhase('reward');
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  function startAd() {
    setPhase('playing');
    setCountdown(FAKE_AD_DURATION_MS / 1000);
  }

  return (
    <div className="ad-modal-backdrop">
      <div className="ad-modal">
        {phase === 'confirm' && (
          <>
            <h3>💡 Bí ý tưởng à?</h3>
            <p>Xem một quảng cáo ngắn (~{FAKE_AD_DURATION_MS / 1000}s) để nhận gợi ý.</p>
            <div className="ad-modal-actions">
              <button className="btn-primary" onClick={startAd}>
                ▶️ Xem quảng cáo
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Để sau
              </button>
            </div>
          </>
        )}

        {phase === 'playing' && (
          <div className="ad-fake-player">
            <div className="ad-fake-bar">
              <div
                className="ad-fake-bar-fill"
                style={{
                  width: `${100 - (countdown / (FAKE_AD_DURATION_MS / 1000)) * 100}%`,
                }}
              />
            </div>
            <p>📺 Quảng cáo đang phát... {countdown}s</p>
          </div>
        )}

        {phase === 'reward' && (
          <>
            <h3>✅ Gợi ý của bạn</h3>
            <p className="ad-hint-text">{hintText}</p>
            <button className="btn-primary" onClick={onClose}>
              Đã hiểu, quay lại điều tra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
