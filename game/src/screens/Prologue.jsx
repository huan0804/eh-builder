// Màn Prologue dùng chung cho mọi phần — nội dung (tiêu đề, lời thoại) lấy từ `data.meta`
// và `data.prologue` của case đang chơi, screen chỉ render (xem docs/engine-lessons.md).
export default function Prologue({ data, onStart, onContinue, onOpenRecovery }) {
  const { meta, prologue } = data;
  return (
    <div className="chapter prologue chapter-enter">
      <h1>{meta.title}</h1>
      <p className="briefing">{prologue.briefing}</p>

      <div className="dialogue-box">
        <p className="dialogue-inner-thought">
          <em>{prologue.innerThought}</em>
        </p>
        {prologue.lines.map((line, i) => (
          <p key={i}>
            <strong>{line.speaker}:</strong> {line.text}
          </p>
        ))}
      </div>

      {onContinue && (
        <button className="btn-primary" onClick={onContinue}>
          ▶ Chơi tiếp từ lần trước
        </button>
      )}
      <button className={onContinue ? 'btn-secondary' : 'btn-primary'} onClick={onStart}>
        {onContinue ? 'Bắt đầu lại từ đầu' : 'Bắt đầu điều tra →'}
      </button>

      {!onContinue && (
        <p className="hint" style={{ marginTop: '1.5em' }}>
          Đã chơi trên máy khác rồi?{' '}
          <button className="btn-link" onClick={onOpenRecovery}>
            Nhập mã khôi phục
          </button>
        </p>
      )}
    </div>
  );
}
