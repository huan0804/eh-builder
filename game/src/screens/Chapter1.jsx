import { useState, useEffect } from 'react';
import RewardedAdModal from '../components/RewardedAdModal';
import { resolveBackgroundUrl } from '../lib/backgrounds';

// Màn Chương 1 dùng chung cho mọi phần — nội dung lấy từ `data.chapter1`, screen chỉ render
// (xem docs/engine-lessons.md). `data.chapter1.steps` là một danh sách bước TUẦN TỰ, mỗi bước
// một trong 3 kiểu:
//   - 'search'    : một nút bấm trao chứng cứ (kiểu Phần 1 — kiểm tra laptop + tai nghe).
//   - 'codeInput' : người chơi nhập mã (ví dụ mã tủ khóa) — đúng mã mới trao chứng cứ.
//   - 'choice'    : người chơi chọn 1 trong N lựa chọn — chỉ lựa chọn đúng mới qua bước.
// Mỗi bước xong mới hiện bước kế tiếp; bước cuối luôn có nút "Tiếp tục sang Chương kế".
// Case chỉ có 1 bước 'search' (như case1) vẫn hoạt động y như bản gốc.
export default function Chapter1({ data, onCollectEvidence, onComplete }) {
  const { chapter1, chatLog } = data;
  const steps = chapter1.steps;
  const [stepIndex, setStepIndex] = useState(0);
  const [bgError, setBgError] = useState(false);

  const isLastStep = stepIndex === steps.length - 1;
  const bgUrl = resolveBackgroundUrl(chapter1.background);
  const hasBg = bgUrl && !bgError;

  function goNextStep() {
    if (isLastStep) {
      onComplete();
      return;
    }
    setStepIndex((i) => i + 1);
  }

  return (
    <div className={hasBg ? 'chapter chapter-enter has-scene-bg' : 'chapter chapter-enter'}>
      {hasBg && (
        <img className="scene-bg" src={bgUrl} alt="" aria-hidden="true" onError={() => setBgError(true)} />
      )}
      <div className="scene-content">
        <h2>{chapter1.title}</h2>
        {stepIndex === 0 && <p className="briefing">{chapter1.briefing}</p>}

        {chatLog && stepIndex === 0 && (
          <div className="chat-log">
            {chatLog.map((line, i) => (
              <div
                key={i}
                className={line.who === 'system' ? 'chat-line system' : 'chat-line'}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="chat-time">{line.time}</span>
                {line.who !== 'system' && <strong> {line.who}: </strong>}
                <span>{line.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* key={stepIndex}: mỗi bước tự có state riêng (mã đang gõ, lỗi...) — đổi bước là
            re-mount sạch, không cần effect reset state thủ công. */}
        <Chapter1Step
          key={stepIndex}
          step={steps[stepIndex]}
          isLastStep={isLastStep}
          nextChapterLabel={chapter1.nextChapterLabel}
          onCollectEvidence={onCollectEvidence}
          onStepDone={goNextStep}
        />
      </div>
    </div>
  );
}

function Chapter1Step({ step, isLastStep, nextChapterLabel, onCollectEvidence, onStepDone }) {
  const [stepDone, setStepDone] = useState(false);
  const [showHintButton, setShowHintButton] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [revealAnim, setRevealAnim] = useState(false);
  const [codeValue, setCodeValue] = useState('');
  const [codeError, setCodeError] = useState('');
  const [choiceError, setChoiceError] = useState('');

  useEffect(() => {
    if (stepDone || !step.stuckThresholdMs) return;
    const t = setTimeout(() => setShowHintButton(true), step.stuckThresholdMs);
    return () => clearTimeout(t);
  }, [stepDone, step]);

  function finishStep(evidenceIds) {
    setStepDone(true);
    setRevealAnim(true);
    (evidenceIds ?? []).forEach(onCollectEvidence);
  }

  function handleSearch() {
    finishStep(step.evidenceIds);
  }

  function handleCodeSubmit() {
    if (codeValue.trim() === step.correctCode) {
      setCodeError('');
      finishStep(step.evidenceIds);
    } else {
      setCodeError(step.wrongCodeText ?? 'Mã không đúng, thử lại.');
    }
  }

  function handleChoice(option) {
    if (option.correct) {
      setChoiceError('');
      finishStep(option.evidenceIds);
    } else {
      setChoiceError(option.wrongText ?? 'Có gì đó không ổn với lựa chọn này.');
    }
  }

  return (
    <>
      {step.innerThoughtBefore && !stepDone && (
        <p className="dialogue-inner-thought">
          <em>{step.innerThoughtBefore}</em>
        </p>
      )}

      {!stepDone && step.type === 'search' && (
        <>
          <button className="btn-primary" onClick={handleSearch}>
            {step.actionLabel}
          </button>
          {showHintButton && (
            <button className="btn-hint" onClick={() => setShowAdModal(true)}>
              💡 Bí quá? Xem gợi ý
            </button>
          )}
        </>
      )}

      {!stepDone && step.type === 'codeInput' && (
        <div className="code-input-step">
          <p>{step.prompt}</p>
          <input
            type="text"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
            maxLength={step.maxLength ?? 8}
            placeholder={step.placeholder ?? 'Nhập mã'}
            style={{ fontSize: '1.2em', letterSpacing: '0.1em', textAlign: 'center', width: '100%' }}
          />
          {codeError && <p className="error-text">{codeError}</p>}
          <button className="btn-primary" onClick={handleCodeSubmit} disabled={!codeValue.trim()}>
            {step.actionLabel ?? 'Xác nhận'}
          </button>
          {showHintButton && (
            <button className="btn-hint" onClick={() => setShowAdModal(true)}>
              💡 Bí quá? Xem gợi ý
            </button>
          )}
        </div>
      )}

      {!stepDone && step.type === 'choice' && (
        <div className="choice-step">
          <p>{step.prompt}</p>
          <div className="choice-options">
            {step.options.map((option) => (
              <button key={option.id} className="btn-secondary" onClick={() => handleChoice(option)}>
                {option.label}
              </button>
            ))}
          </div>
          {choiceError && <p className="error-text">{choiceError}</p>}
          {showHintButton && (
            <button className="btn-hint" onClick={() => setShowAdModal(true)}>
              💡 Bí quá? Xem gợi ý
            </button>
          )}
        </div>
      )}

      {stepDone && step.reveal && (
        <div className={revealAnim ? 'evidence-reveal reveal-anim' : 'evidence-reveal'}>
          {step.reveal.heading && <h4>{step.reveal.heading}</h4>}
          {step.reveal.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {step.reveal.deductionHint && <p className="deduction-hint">{step.reveal.deductionHint}</p>}
          <button className="btn-primary" onClick={onStepDone}>
            {isLastStep ? nextChapterLabel ?? 'Tiếp tục →' : step.reveal.nextLabel ?? 'Tiếp tục →'}
          </button>
        </div>
      )}

      {showAdModal && <RewardedAdModal hintText={step.hintText ?? ''} onClose={() => setShowAdModal(false)} />}
    </>
  );
}
