export default function Epilogue({ data, onRestart, onOpenRecovery }) {
  const { meta, epilogue } = data;
  return (
    <div className="chapter epilogue chapter-enter">
      <h2>Kết thúc {meta.partLabel}</h2>
      <div className="dialogue-box">
        <p style={{ whiteSpace: 'pre-line' }}>{epilogue.text}</p>
      </div>
      {epilogue.nextPartHint && <p className="hint">{epilogue.nextPartHint}</p>}
      <div className="ad-modal-actions">
        <button className="btn-secondary" onClick={onRestart}>
          ↺ Chơi lại {meta.partLabel}
        </button>
        <button className="btn-secondary" onClick={onOpenRecovery}>
          ☁️ Lấy mã khôi phục
        </button>
      </div>
    </div>
  );
}
