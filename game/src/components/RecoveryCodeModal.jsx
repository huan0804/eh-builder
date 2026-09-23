import { useState, useEffect } from 'react';
import { pushSaveToCloud, pullSaveFromCloud } from '../lib/cloudSave';

// Modal 2 chiều: lấy mã khôi phục (để chơi tiếp trên thiết bị khác) hoặc nhập
// mã để tải tiến độ về. Dùng chung style .ad-modal-backdrop/.ad-modal với
// RewardedAdModal.jsx để giao diện nhất quán.
export default function RecoveryCodeModal({ mode, state, onLoadState, onClose }) {
  const [phase, setPhase] = useState(mode === 'get' ? 'loading' : 'input'); // loading -> code | input -> confirm -> done
  const [code, setCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [pendingState, setPendingState] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (mode !== 'get') return;
    let cancelled = false;
    pushSaveToCloud(state).then((result) => {
      if (cancelled) return;
      if (result) {
        setCode(result);
      } else {
        setError('Không kết nối được máy chủ lúc này. Thử lại sau nhé.');
      }
      setPhase('code');
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  async function handleLookup() {
    setError('');
    const trimmed = inputCode.trim().toUpperCase();
    if (trimmed.length !== 7) {
      setError('Mã khôi phục gồm đúng 7 ký tự.');
      return;
    }
    setPhase('loading');
    const loaded = await pullSaveFromCloud(trimmed);
    if (!loaded) {
      setError('Không tìm thấy mã này, hoặc không kết nối được máy chủ.');
      setPhase('input');
      return;
    }
    setPendingState(loaded);
    setPhase('confirm');
  }

  function confirmOverwrite() {
    onLoadState(pendingState);
    setPhase('done');
  }

  return (
    <div className="ad-modal-backdrop">
      <div className="ad-modal">
        {mode === 'get' && phase === 'loading' && (
          <>
            <h3>☁️ Đang lấy mã...</h3>
            <p>Đợi Lam một chút nhé.</p>
          </>
        )}

        {mode === 'get' && phase === 'code' && (
          <>
            <h3>{code ? '🔑 Mã khôi phục của bạn' : '⚠️ Chưa lấy được mã'}</h3>
            {code ? (
              <>
                <p className="ad-hint-text" style={{ fontSize: '1.5em', letterSpacing: '0.15em' }}>
                  {code}
                </p>
                <p className="hint">
                  Ghi lại mã này. Nhập vào ở thiết bị khác để tải tiến độ về. Đây <strong>không phải
                  mật khẩu</strong> — ai có mã này đều xem/sửa được tiến độ, đừng chia sẻ công khai.
                </p>
                <p className="hint">Từ giờ mỗi lần chơi tiếp, tiến độ sẽ tự động cập nhật theo mã này.</p>
              </>
            ) : (
              <p>{error}</p>
            )}
            <button className="btn-primary" onClick={onClose}>
              Đã hiểu, quay lại
            </button>
          </>
        )}

        {mode === 'load' && phase === 'input' && (
          <>
            <h3>📥 Chơi trên thiết bị khác</h3>
            <p className="hint">Nhập mã khôi phục 7 ký tự đã lưu từ thiết bị trước.</p>
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              maxLength={7}
              placeholder="VD: AB12CDE"
              style={{ fontSize: '1.2em', letterSpacing: '0.1em', textAlign: 'center', width: '100%' }}
            />
            {error && <p className="error-text">{error}</p>}
            <div className="ad-modal-actions">
              <button className="btn-primary" onClick={handleLookup}>
                Tải tiến độ
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Để sau
              </button>
            </div>
          </>
        )}

        {mode === 'load' && phase === 'loading' && (
          <>
            <h3>🔍 Đang tìm...</h3>
            <p>Đợi một chút nhé.</p>
          </>
        )}

        {mode === 'load' && phase === 'confirm' && (
          <>
            <h3>⚠️ Ghi đè tiến độ hiện tại?</h3>
            <p>
              Máy này sẽ chuyển sang tiến độ đã lưu ở mã <strong>{inputCode.trim().toUpperCase()}</strong>.
              Tiến độ hiện tại trên máy này sẽ mất nếu chưa có mã riêng.
            </p>
            <div className="ad-modal-actions">
              <button className="btn-primary" onClick={confirmOverwrite}>
                Đồng ý, tải về
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Huỷ
              </button>
            </div>
          </>
        )}

        {mode === 'load' && phase === 'done' && (
          <>
            <h3>✅ Đã tải tiến độ</h3>
            <button className="btn-primary" onClick={onClose}>
              Tiếp tục điều tra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
