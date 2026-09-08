import { useState } from 'react';
import { thinkingBoardSolution } from '../data/case1';

const LABELS = {
  vy: 'Vy',
  khang: 'Khang',
  chi: 'Chi',
  duc: 'Đức',
  tuYRoiDi: 'Tự ý rời đi',
  bịBắtCóc: 'Bị bắt cóc',
  gặpTaiNạn: 'Gặp tai nạn',
  sợHãiVìPhátHiệnĐiềuGì: 'Sợ hãi vì phát hiện điều gì đó',
  ápLựcHọcTập: 'Áp lực học tập',
  mâuThuẫnBạnBè: 'Mâu thuẫn bạn bè',
};

export default function ThinkingBoard({ onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  function handleSelect(slotId, value) {
    setAnswers((prev) => ({ ...prev, [slotId]: value }));
  }

  function handleSubmit() {
    const allCorrect = thinkingBoardSolution.slots.every(
      (slot) => answers[slot.id] === slot.correctAnswer
    );
    setResult(allCorrect);
    setSubmitted(true);
  }

  return (
    <div className="chapter thinking-board chapter-enter">
      <h2>Chương 4 — Kết luận Phần 1</h2>
      <p className="briefing">
        Ghép các mảnh suy luận lại thành kết luận cuối cùng. Chọn đúng cho mỗi ô — sai một ô là kết
        luận không đứng vững.
      </p>

      <div className="board-slots">
        {thinkingBoardSolution.slots.map((slot) => (
          <div key={slot.id} className="board-slot">
            <label>{slot.label}:</label>
            <select
              value={answers[slot.id] || ''}
              onChange={(e) => handleSelect(slot.id, e.target.value)}
            >
              <option value="">-- chọn --</option>
              {slot.options.map((opt) => (
                <option key={opt} value={opt}>
                  {LABELS[opt]}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {!submitted && (
        <button
          className="btn-primary"
          disabled={thinkingBoardSolution.slots.some((s) => !answers[s.id])}
          onClick={handleSubmit}
        >
          ✅ Đưa ra kết luận
        </button>
      )}

      {submitted && result && (
        <div className="conclusion-reveal success">
          <h3>🎉 Kết luận chính xác!</h3>
          <p>{thinkingBoardSolution.conclusionText}</p>
          <button className="btn-primary" onClick={onComplete}>
            Xem đoạn kết →
          </button>
        </div>
      )}

      {submitted && !result && (
        <div className="conclusion-reveal fail">
          <h3>❌ Kết luận chưa đúng</h3>
          <p>Có gì đó chưa khớp trong lập luận. Xem lại chứng cứ và thử ghép lại.</p>
          <button className="btn-secondary" onClick={() => setSubmitted(false)}>
            Thử lại
          </button>
        </div>
      )}
    </div>
  );
}
