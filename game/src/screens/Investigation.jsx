import { useState, useEffect } from 'react';
import {
  interviews,
  characters,
  evidenceList,
  hypotheses,
  ducConfrontation,
  isValidEvidenceSet,
  investigationSteps,
} from '../data/case1';
import EvidenceInventory from '../components/EvidenceInventory';
import RewardedAdModal from '../components/RewardedAdModal';

const STUCK_THRESHOLD_MS = 25000;

// Gộp Chương 2-3: phỏng vấn 3 nghi phạm + thu thập chứng cứ bổ sung + 3 giả thuyết song song.
// Giả thuyết chỉ bị loại khi người chơi tự CHỌN đúng tổ hợp chứng cứ — không tự loại khi thu thập.


const WRONG_EVIDENCE_REPLY = {
  khang: 'Cái đó thì liên quan gì đến tao? Mày hỏi gì cụ thể đi.',
  chi: 'Tao không hiểu cậu đang muốn nói gì...',
};

export default function Investigation({ state, dispatch, onComplete }) {
  // State cần lưu (chứng cứ, lịch sử hội thoại, giả thuyết đã loại) nằm ở App → được autosave.
  // State dưới đây chỉ là trạng thái tạm của giao diện.
  const { collectedIds, interviewHistory, unlockedSteps, eliminated } = state;
  const [activeSuspect, setActiveSuspect] = useState('khang');
  const [selectedIds, setSelectedIds] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [wrongReply, setWrongReply] = useState(null);
  const [showHintButton, setShowHintButton] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  const canConfrontDuc = eliminated.A && eliminated.B;
  const nodeById = (suspectId, nodeId) => interviews[suspectId].nodes.find((n) => n.id === nodeId);
  const currentNodeOf = (suspectId) => {
    const history = interviewHistory[suspectId];
    return nodeById(suspectId, history[history.length - 1]);
  };
  // Đã hỏi hết các câu mở khóa được với nghi phạm này chưa (node hiện tại không dẫn tiếp)
  const lastNodeReached = (suspectId) => !currentNodeOf(suspectId).unlocksNext;

  useEffect(() => {
    if (canConfrontDuc) {
      setShowHintButton(false);
      return;
    }
    setShowHintButton(false);
    const t = setTimeout(() => setShowHintButton(true), STUCK_THRESHOLD_MS);
    return () => clearTimeout(t);
  }, [canConfrontDuc, collectedIds.length, eliminated.A, eliminated.B]);

  function currentHintText() {
    if (!collectedIds.includes('roomAccessLog')) {
      return 'Vy rời phòng lúc 21:36, nhưng dòng "buồn ngủ" xuất hiện lúc 21:46. Nền tảng học nhóm có ghi lại tài khoản nào đăng nhập từ thiết bị nào không?';
    }
    if (!eliminated.A) {
      return 'Người gửi dòng "buồn ngủ" dùng thiết bị gì? Khang dùng điện thoại gì, và lúc 21:46 Khang đang làm gì? Hỏi kỹ Khang về khoảng trống trong log trường.';
    }
    if (!eliminated.B) {
      return 'Chi cầm điện thoại lúc 21:43–21:44 để làm gì, trên thiết bị nào? Lúc 21:46 bản ghi hình thấy Chi đang làm gì?';
    }
    return 'Cùng một thiết bị đã làm cả hai việc che giấu. Hãy đối chất Đức bằng những chứng cứ cho thấy điều đó.';
  }

  function toggleEvidence(id) {
    setFeedback(null);
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function collectAdditional(id) {
    dispatch({ type: 'COLLECT', id }); // collectedIds ở App là nguồn sự thật duy nhất
  }

  function presentEvidenceTo(suspectId) {
    const currentNode = currentNodeOf(suspectId);
    const nextNode = nodeById(suspectId, currentNode.unlocksNext);
    const presented = selectedIds[0];

    if (!nextNode || nextNode.requiresEvidence !== presented) {
      setWrongReply({ suspectId, text: WRONG_EVIDENCE_REPLY[suspectId] });
      return;
    }
    setWrongReply(null);
    dispatch({ type: 'ADVANCE_NODE', suspectId, nodeId: nextNode.id });
    if (nextNode.unlocksEvidenceStep) {
      dispatch({ type: 'UNLOCK_STEP', id: nextNode.unlocksEvidenceStep });
    }
    setSelectedIds([]);
  }

  function tryEliminate(hypId) {
    const hyp = hypotheses[hypId];
    if (!lastNodeReached(hyp.suspect)) {
      setFeedback({
        ok: false,
        text: `Chưa nên kết luận vội — hãy phỏng vấn ${characters[hyp.suspect].name} kỹ hơn trước đã.`,
      });
      return;
    }
    if (isValidEvidenceSet(selectedIds, hyp.requiredToEliminate, hyp.allowedExtra)) {
      dispatch({ type: 'ELIMINATE', hypId });
      setFeedback({ ok: true, text: hyp.eliminationText });
      setSelectedIds([]);
    } else {
      setFeedback({
        ok: false,
        text: 'Lập luận này vẫn còn kẽ hở — các chứng cứ đã chọn chưa đủ (hoặc chưa đúng) để loại giả thuyết.',
      });
    }
  }

  function confrontDuc() {
    if (!isValidEvidenceSet(selectedIds, ducConfrontation.required, ducConfrontation.allowedExtra)) {
      setFeedback({
        ok: false,
        text: 'Đức nhún vai: "Mấy cái đó thì chứng minh được gì?" — cần chứng cứ nối Đức với cả hai việc che giấu.',
      });
      return;
    }
    setFeedback(null);
    setSelectedIds([]);
    dispatch({ type: 'ADVANCE_NODE', suspectId: 'duc', nodeId: 'confronted' });
  }

  const currentNode = currentNodeOf(activeSuspect);
  const seenNodes = interviewHistory[activeSuspect].map((id) => nodeById(activeSuspect, id));
  const isDucFinalConfession = currentNode.isFinalConfession;
  const selectionLabel =
    selectedIds.length === 1
      ? `"${evidenceList[selectedIds[0]].name}"`
      : `${selectedIds.length} chứng cứ đang chọn`;

  return (
    <div className="chapter investigation chapter-enter">
      <h2>Chương 2-3 — Ba người bạn cùng nhóm &amp; Dữ liệu không biết nói dối</h2>

      <div className="hypothesis-board">
        <h3>🧩 Giả thuyết đang mở</h3>
        <ul>
          {['A', 'B'].map((hypId) => (
            <li key={hypId} className={eliminated[hypId] ? 'hypothesis eliminated' : 'hypothesis'}>
              <span>
                {hypId}: {hypotheses[hypId].label} {eliminated[hypId] && '— ĐÃ LOẠI'}
              </span>
              {!eliminated[hypId] && (
                <button
                  className="btn-eliminate"
                  disabled={selectedIds.length === 0}
                  onClick={() => tryEliminate(hypId)}
                >
                  Loại bằng {selectedIds.length} chứng cứ đang chọn
                </button>
              )}
            </li>
          ))}
          <li className={canConfrontDuc ? 'hypothesis active' : 'hypothesis'}>
            C: {hypotheses.C.label} {canConfrontDuc && '— DUY NHẤT CÒN LẠI'}
          </li>
        </ul>
        {feedback && (
          <p className={feedback.ok ? 'board-feedback ok' : 'board-feedback'} role="status">
            {feedback.text}
          </p>
        )}
      </div>

      <div className="additional-evidence-actions">
        <h3>🔎 Thu thập thêm chứng cứ</h3>
        {investigationSteps.map((step) => {
          const locked = step.lockedLabel && !unlockedSteps.includes(step.id);
          const done = collectedIds.includes(step.id);
          return (
            <button
              key={step.id}
              className="btn-secondary"
              disabled={locked || done}
              onClick={() => collectAdditional(step.id)}
            >
              {done ? '✅ ' : ''}
              {locked ? step.lockedLabel : step.label}
            </button>
          );
        })}
        {showHintButton && (
          <button className="btn-hint" onClick={() => setShowAdModal(true)}>
            💡 Bí quá? Xem gợi ý
          </button>
        )}
      </div>

      <div className="investigation-body">
        <EvidenceInventory
          collectedIds={collectedIds}
          selectedIds={selectedIds}
          onToggle={toggleEvidence}
        />

        <div className="interview-panel">
          <h3>🗣️ Phỏng vấn</h3>
          <div className="suspect-tabs">
            {['khang', 'chi', 'duc'].map((id) => (
              <button
                key={id}
                className={activeSuspect === id ? 'tab active' : 'tab'}
                onClick={() => {
                  setActiveSuspect(id);
                  setWrongReply(null);
                }}
              >
                {characters[id].name}
              </button>
            ))}
          </div>

          {/* Nhật ký hội thoại (như dialog log của Monogatari): giữ lại mọi câu đã hỏi,
              để người chơi đọc lại lời khai khi đối chiếu chứng cứ */}
          <div className="dialogue-box" aria-live="polite">
            {seenNodes.map((node) => (
              <div
                key={node.id}
                className={node === currentNode ? 'dialogue-turn current' : 'dialogue-turn'}
              >
                <p className="dialogue-prompt">
                  <strong>Lam:</strong> {node.prompt}
                </p>
                <p className="dialogue-reply">
                  <strong>{characters[activeSuspect].name}:</strong> {node.reply}
                </p>
              </div>
            ))}
            {wrongReply?.suspectId === activeSuspect && (
              <p className="dialogue-reply wrong">
                <strong>{characters[activeSuspect].name}:</strong> {wrongReply.text}
              </p>
            )}
          </div>

          {activeSuspect === 'duc' && !isDucFinalConfession && (
            <button
              className="btn-primary"
              disabled={!canConfrontDuc || selectedIds.length === 0}
              onClick={confrontDuc}
            >
              {canConfrontDuc
                ? `Đối chất Đức bằng ${selectedIds.length} chứng cứ đang chọn →`
                : 'Cần loại giả thuyết A và B trước'}
            </button>
          )}

          {activeSuspect !== 'duc' && currentNode.unlocksNext && (
            <button
              className="btn-primary"
              disabled={selectedIds.length !== 1}
              onClick={() => presentEvidenceTo(activeSuspect)}
            >
              {selectedIds.length === 1
                ? `📤 Trình chứng cứ ${selectionLabel}`
                : '📤 Chọn đúng 1 chứng cứ để trình'}
            </button>
          )}

          {isDucFinalConfession && (
            <button className="btn-primary" onClick={onComplete}>
              Ghi nhận lời thú nhận — sang Chương 4 →
            </button>
          )}
        </div>
      </div>

      {showAdModal && (
        <RewardedAdModal hintText={currentHintText()} onClose={() => setShowAdModal(false)} />
      )}
    </div>
  );
}
