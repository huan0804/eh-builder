import { useState } from 'react';
import CharacterPortrait from '../components/CharacterPortrait';
import { resolveBackgroundUrl } from '../lib/backgrounds';

// Màn Prologue dùng chung cho mọi phần — nội dung (tiêu đề, lời thoại, ảnh nền, người nói)
// lấy từ `data.meta`/`data.prologue`/`data.characters` của case đang chơi, screen chỉ render
// (xem docs/engine-lessons.md). Portrait người đang nói hiện cạnh ô thoại, đổi theo từng dòng
// (giống visual novel) — tăng cảm giác nhập vai so với bản chỉ có chữ trước đây.
export default function Prologue({ data, onStart, onContinue, onOpenRecovery }) {
  const { meta, prologue, characters } = data;
  const [bgError, setBgError] = useState(false);
  const bgUrl = resolveBackgroundUrl(prologue.background);
  const hasBg = bgUrl && !bgError;

  return (
    <div className={hasBg ? 'chapter prologue chapter-enter has-scene-bg' : 'chapter prologue chapter-enter'}>
      {hasBg && (
        <img className="scene-bg" src={bgUrl} alt="" aria-hidden="true" onError={() => setBgError(true)} />
      )}
      <div className="scene-content">
        <h1>{meta.title}</h1>
        <p className="briefing">{prologue.briefing}</p>

        <div className="dialogue-box">
          <p className="dialogue-inner-thought">
            <em>{prologue.innerThought}</em>
          </p>
          {prologue.lines.map((line, i) => (
            <div key={i} className="dialogue-line-with-portrait">
              {line.speakerId && characters[line.speakerId] && (
                <CharacterPortrait
                  character={characters[line.speakerId]}
                  emotion={line.emotion}
                  className="portrait-small"
                />
              )}
              <p className="dialogue-line-text">
                <strong>{line.speaker}:</strong> {line.text}
              </p>
            </div>
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
    </div>
  );
}
