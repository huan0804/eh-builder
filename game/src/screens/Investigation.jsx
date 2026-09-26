import { useState, useEffect } from 'react';
import EvidenceInventory from '../components/EvidenceInventory';
import RewardedAdModal from '../components/RewardedAdModal';

// Gộp Chương 2-3 (mọi phần): phỏng vấn nhiều nghi phạm + thu thập chứng cứ bổ sung +
// 2-3 giả thuyết song song. Giả thuyết chỉ bị loại khi người chơi tự CHỌN đúng tổ hợp
// chứng cứ — không tự loại khi thu thập. Tổng quát hoá đầy đủ theo case data (không hardcode
// tên nghi phạm/số lượng giả thuyết) — xem docs/engine-lessons.md.
//
// Quy ước data mỗi case phải theo (xem case1.js):
// - `suspectOrder`: thứ tự tab nghi phạm hiển thị.
// - `hypotheses`: mỗi giả thuyết có `suspect` + (`isCulprit: true` HOẶC `requiredToEliminate`).
//   Đúng 1 giả thuyết có `isCulprit: true` — suspect đó là người bị đối chất cuối cùng.
// - `confrontation`: { required, allowedExtra } — tổ hợp chứng cứ mở node isFinalConfession
//   của suspect culprit, chỉ khi mọi giả thuyết khác đã bị loại.
// - `wrongEvidenceReply`: câu phản hồi mặc định theo suspectId khi trình sai chứng cứ.
// - `investigationHints`: { stuckThresholdMs, rules: [{ when(ctx), text }] } — rule đầu tiên
//   thoả `when` được dùng làm gợi ý rewarded-ad.

export default function Investigation({ data, state, dispatch, onComplete }) {
  const {
    meta,
    interviews,
    characters,
    evidenceList,
    hypotheses,
    confrontation,
    isValidEvidenceSet,
    investigationSteps,
    suspectOrder,
    wrongEvidenceReply,
    investigationHints,
  } = data;

  // State cần lưu (chứng cứ, lịch sử hội thoại, giả thuyết đã loại) nằm ở App → được autosave.
  // State dưới đây chỉ là trạng thái tạm của giao diện.
  const { collectedIds, interviewHistory, unlockedSteps, eliminated } = state;
  const [activeSuspect, setActiveSuspect] = useState(suspectOrder[0]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [wrongReply, setWrongReply] = useState(null);
  const [showHintButton, setShowHintButton] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  const hypList = Object.values(hypotheses);
  const eliminableHyps = hypList.filter((h) => !h.isCulprit);
  const culpritHyp = hypList.find((h) => h.isCulprit);
  const culpritSuspect = culpritHyp.suspect;
  const canConfront = eliminableHyps.every((h) => eliminated[h.id]);

  const nodeById = (suspectId, nodeId) => interviews[suspectId].nodes.find((n) => n.id === nodeId);
  const currentNodeOf = (suspectId) => {
    const history = interviewHistory[suspectId];
    return nodeById(suspectId, history[history.length - 1]);
  };
  // Đã hỏi hết các câu mở khóa được với nghi phạm này chưa (node hiện tại không dẫn tiếp)
  const lastNodeReached = (suspectId) => !currentNodeOf(suspectId).unlocksNext;

  useEffect(() => {
    if (canConfront) {
      setShowHintButton(false);
      return;
    }
    setShowHintButton(false);
    const t = setTimeout(() => setShowHintButton(true), investigationHints.stuckThresholdMs);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canConfront, collectedIds.length, eliminated]);

  function currentHintText() {
    const ctx = { collectedIds, eliminated, state };
    const rule = investigationHints.rules.find((r) => r.when(ctx));
    return rule?.text ?? '';
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
      setWrongReply({ suspectId, text: wrongEvidenceReply[suspectId] });
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

  function confront() {
    if (!isValidEvidenceSet(selectedIds, confrontation.required, confrontation.allowedExtra)) {
      setFeedback({
        ok: false,
        text: 'Chưa đủ căn cứ để đối chất — cần chứng cứ nối rõ nghi phạm này với hành động thật.',
      });
      return;
    }
    setFeedback(null);
    setSelectedIds([]);
    const culpritNodes = interviews[culpritSuspect].nodes;
    const confessionNode = culpritNodes.find((n) => n.isFinalConfession);
    dispatch({ type: 'ADVANCE_NODE', suspectId: culpritSuspect, nodeId: confessionNode.id });
  }

  const currentNode = currentNodeOf(activeSuspect);
  const seenNodes = interviewHistory[activeSuspect].map((id) => nodeById(activeSuspect, id));
  const isFinalConfessionShown = currentNode.isFinalConfession;
  const isActiveSuspectCulprit = activeSuspect === culpritSuspect;
  const selectionLabel =
    selectedIds.length === 1
      ? `"${evidenceList[selectedIds[0]].name}"`
      : `${selectedIds.length} chứng cứ đang chọn`;

  return (
    <div className="chapter investigation chapter-enter">
      <h2>{meta.investigationChapterTitle}</h2>

      <div className="hypothesis-board">
        <h3>🧩 Giả thuyết đang mở</h3>
        <ul>
          {eliminableHyps.map((hyp) => (
            <li key={hyp.id} className={eliminated[hyp.id] ? 'hypothesis eliminated' : 'hypothesis'}>
              <span>
                {hyp.id}: {hyp.label} {eliminated[hyp.id] && '— ĐÃ LOẠI'}
              </span>
              {!eliminated[hyp.id] && (
                <button
                  className="btn-eliminate"
                  disabled={selectedIds.length === 0}
                  onClick={() => tryEliminate(hyp.id)}
                >
                  Loại bằng {selectedIds.length} chứng cứ đang chọn
                </button>
              )}
            </li>
          ))}
          <li className={canConfront ? 'hypothesis active' : 'hypothesis'}>
            {culpritHyp.id}: {culpritHyp.label} {canConfront && '— DUY NHẤT CÒN LẠI'}
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
          evidenceList={evidenceList}
          collectedIds={collectedIds}
          selectedIds={selectedIds}
          onToggle={toggleEvidence}
        />

        <div className="interview-panel">
          <h3>🗣️ Phỏng vấn</h3>
          <div className="suspect-tabs">
            {suspectOrder.map((id) => (
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

          {/* Còn node hội thoại thường để mở tiếp (kể cả với culprit — vd Phong ở Phần 2
              vẫn được phỏng vấn bình thường trước khi đủ điều kiện đối chất) */}
          {!isFinalConfessionShown && currentNode.unlocksNext && (
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

          {/* Đã hỏi hết node hội thoại thường của culprit (unlocksNext rỗng) nhưng chưa thú
              nhận — đây là lúc hiện nút đối chất (vd Đức ở Phần 1: intro đã unlocksNext: null
              ngay từ đầu; Phong ở Phần 2: sau khi hỏi hết các node thường) */}
          {isActiveSuspectCulprit && !isFinalConfessionShown && !currentNode.unlocksNext && (
            <button
              className="btn-primary"
              disabled={!canConfront || selectedIds.length === 0}
              onClick={confront}
            >
              {canConfront
                ? `Đối chất ${characters[culpritSuspect].name} bằng ${selectedIds.length} chứng cứ đang chọn →`
                : `Cần loại ${eliminableHyps.length > 1 ? 'các giả thuyết còn lại' : 'giả thuyết còn lại'} trước`}
            </button>
          )}

          {isFinalConfessionShown && (
            <button className="btn-primary" onClick={onComplete}>
              Ghi nhận lời thú nhận — sang chương kết →
            </button>
          )}
        </div>
      </div>

      {showAdModal && <RewardedAdModal hintText={currentHintText()} onClose={() => setShowAdModal(false)} />}
    </div>
  );
}
