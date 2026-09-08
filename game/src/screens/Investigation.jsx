import { useState, useEffect } from 'react';
import { interviews, characters, evidenceList } from '../data/case1';
import EvidenceInventory from '../components/EvidenceInventory';
import RewardedAdModal from '../components/RewardedAdModal';

const STUCK_THRESHOLD_MS = 25000;

// Gộp Chương 2-3: phỏng vấn 3 nghi phạm + thu thập chứng cứ bổ sung + theo dõi 3 giả thuyết song song

const ADDITIONAL_EVIDENCE_STEPS = [
  {
    id: 'schoolSystemLog',
    label: '📋 Xin Cô Hạnh cấp quyền xem log hệ thống học tập trường',
  },
  {
    id: 'khangCursorScreenshot',
    label: '🖱️ Hỏi Chi xem có chụp màn hình cuộc gọi lúc tìm nút tắt mic không',
  },
  {
    id: 'chiCallHistory',
    label: '📞 Xin phụ huynh Chi cho xem lịch sử cuộc gọi tối hôm đó',
  },
  {
    id: 'fakeCheckinPhoto',
    label: '🔍 Soi ảnh check-in ẩn danh "Vy ở quán trà sữa"',
  },
];

export default function Investigation({ collectedIds, onCollectEvidence, onComplete }) {
  const [activeSuspect, setActiveSuspect] = useState('khang');
  const [nodeIndex, setNodeIndex] = useState({ khang: 0, chi: 0, duc: 0 });
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [collectedAdditional, setCollectedAdditional] = useState([]);
  const [showHintButton, setShowHintButton] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  const hypothesisAEliminated =
    collectedIds.includes('khangCursorScreenshot') && collectedIds.includes('schoolSystemLog');
  const hypothesisBEliminated =
    collectedIds.includes('chiCallHistory') && collectedIds.includes('chiVoiceDraft');
  const canConfrontDuc = hypothesisAEliminated && hypothesisBEliminated;

  useEffect(() => {
    if (canConfrontDuc) {
      setShowHintButton(false);
      return;
    }
    const t = setTimeout(() => setShowHintButton(true), STUCK_THRESHOLD_MS);
    return () => clearTimeout(t);
  }, [canConfrontDuc, collectedAdditional.length]);

  function currentHintText() {
    if (!hypothesisAEliminated) {
      return 'Khang nói mình không rời máy — nhưng log hệ thống trường có khoảng trống không ghi nhận hoạt động. Hãy xin xem log hệ thống VÀ tìm ảnh chụp màn hình có con trỏ chuột của Khang để xác nhận độc lập.';
    }
    if (!hypothesisBEliminated) {
      return 'Chi nói webcam vẫn bật, nhưng điều đó không loại trừ việc dùng điện thoại khác. Hãy xin xem lịch sử cuộc gọi/tin nhắn của Chi để xác nhận không có liên lạc riêng nào khác.';
    }
    return 'Bạn đã loại được Khang và Chi — giờ hãy đối chất trực tiếp với Đức bằng toàn bộ chứng cứ đã có.';
  }

  function collectAdditional(id) {
    if (!collectedAdditional.includes(id)) {
      setCollectedAdditional((prev) => [...prev, id]);
      onCollectEvidence(id); // cập nhật collectedIds dùng chung ở App — đây mới là nguồn hiển thị
    }
  }

  function presentEvidenceTo(suspectId) {
    const interview = interviews[suspectId];
    const currentIdx = nodeIndex[suspectId];
    const currentNode = interview.nodes[currentIdx];
    const nextNodeId = currentNode.unlocksNext;

    if (!nextNodeId) return; // hết hội thoại thường
    const requires = currentNode
      ? interview.nodes[currentIdx + 1]?.requiresEvidence
      : null;

    // Kiểm tra chứng cứ yêu cầu (hỗ trợ 1 hoặc nhiều chứng cứ)
    const requiredList = Array.isArray(requires) ? requires : [requires];
    const hasAll = requiredList.every((r) => !r || collectedIds.includes(r) || collectedAdditional.includes(r));

    if (!hasAll) return; // chưa đủ chứng cứ, không mở khóa

    const nextIdx = interview.nodes.findIndex((n) => n.id === nextNodeId);
    if (nextIdx >= 0) {
      setNodeIndex((prev) => ({ ...prev, [suspectId]: nextIdx }));
    }
    setSelectedEvidence(null);
  }

  function confrontDuc() {
    const nextIdx = interviews.duc.nodes.findIndex((n) => n.id === 'confronted');
    setNodeIndex((prev) => ({ ...prev, duc: nextIdx }));
  }

  const currentInterview = interviews[activeSuspect];
  const currentNode = currentInterview.nodes[nodeIndex[activeSuspect]];
  const isDucFinalConfession = currentNode.isFinalConfession;

  return (
    <div className="chapter investigation chapter-enter">
      <h2>Chương 2-3 — Ba người bạn cùng nhóm &amp; Dữ liệu không biết nói dối</h2>

      <div className="hypothesis-board">
        <h3>🧩 Giả thuyết đang mở</h3>
        <ul>
          <li className={hypothesisAEliminated ? 'hypothesis eliminated' : 'hypothesis'}>
            A: Khang giúp Vy vì hối lỗi chuyện quỹ tiền {hypothesisAEliminated && '— ĐÃ LOẠI'}
          </li>
          <li className={hypothesisBEliminated ? 'hypothesis eliminated' : 'hypothesis'}>
            B: Chi giúp Vy vì biết bí mật riêng {hypothesisBEliminated && '— ĐÃ LOẠI'}
          </li>
          <li className={canConfrontDuc ? 'hypothesis active' : 'hypothesis'}>
            C: Đức giúp Vy giấu đi {canConfrontDuc && '— DUY NHẤT CÒN LẠI'}
          </li>
        </ul>
      </div>

      <div className="additional-evidence-actions">
        <h3>🔎 Thu thập thêm chứng cứ</h3>
        {ADDITIONAL_EVIDENCE_STEPS.map((step) => (
          <button
            key={step.id}
            className="btn-secondary"
            disabled={collectedAdditional.includes(step.id)}
            onClick={() => collectAdditional(step.id)}
          >
            {collectedAdditional.includes(step.id) ? '✅ ' : ''}
            {step.label}
          </button>
        ))}
        {showHintButton && (
          <button className="btn-hint" onClick={() => setShowAdModal(true)}>
            💡 Bí quá? Xem gợi ý
          </button>
        )}
      </div>

      <div className="investigation-body">
        <EvidenceInventory
          collectedIds={collectedIds}
          selectedId={selectedEvidence}
          onSelect={setSelectedEvidence}
        />

        <div className="interview-panel">
          <h3>🗣️ Phỏng vấn</h3>
          <div className="suspect-tabs">
            {['khang', 'chi', 'duc'].map((id) => (
              <button
                key={id}
                className={activeSuspect === id ? 'tab active' : 'tab'}
                onClick={() => setActiveSuspect(id)}
              >
                {characters[id].name}
              </button>
            ))}
          </div>

          <div className="dialogue-box">
            <p className="dialogue-prompt">
              <strong>Lam:</strong> {currentNode.prompt}
            </p>
            <p className="dialogue-reply">
              <strong>{characters[activeSuspect].name}:</strong> {currentNode.reply}
            </p>
          </div>

          {activeSuspect === 'duc' && !isDucFinalConfession && (
            <button className="btn-primary" disabled={!canConfrontDuc} onClick={confrontDuc}>
              {canConfrontDuc
                ? 'Đối chất với Đức bằng toàn bộ chứng cứ →'
                : 'Cần loại giả thuyết A và B trước'}
            </button>
          )}

          {activeSuspect !== 'duc' && selectedEvidence && (
            <button className="btn-primary" onClick={() => presentEvidenceTo(activeSuspect)}>
              📤 Trình chứng cứ "{evidenceList[selectedEvidence]?.name}"
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
