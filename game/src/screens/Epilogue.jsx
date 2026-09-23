import { epilogue } from '../data/case1';

export default function Epilogue({ onRestart, onOpenRecovery }) {
  return (
    <div className="chapter epilogue chapter-enter">
      <h2>Kết thúc Phần 1</h2>
      <div className="dialogue-box">
        <p style={{ whiteSpace: 'pre-line' }}>{epilogue.text}</p>
      </div>
      <p className="hint">Phần 2 sẽ hé lộ "vụ của anh Minh năm ngoái" là gì...</p>
      <div className="ad-modal-actions">
        <button className="btn-secondary" onClick={onRestart}>
          ↺ Chơi lại Phần 1
        </button>
        <button className="btn-secondary" onClick={onOpenRecovery}>
          ☁️ Lấy mã khôi phục
        </button>
      </div>
    </div>
  );
}
