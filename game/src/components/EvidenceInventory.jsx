import { evidenceList } from '../data/case1';

// Hiển thị danh sách chứng cứ đã thu thập, cho phép chọn để "trình" trong hội thoại
export default function EvidenceInventory({ collectedIds, selectedId, onSelect }) {
  return (
    <div className="evidence-inventory">
      <h3>📁 Chứng cứ đã thu thập</h3>
      {collectedIds.length === 0 && <p className="hint">Chưa có chứng cứ nào.</p>}
      <ul>
        {collectedIds.map((id) => {
          const ev = evidenceList[id];
          return (
            <li
              key={id}
              className={selectedId === id ? 'evidence-item selected' : 'evidence-item'}
              onClick={() => onSelect(id)}
            >
              <strong>{ev.name}</strong>
              <p>{ev.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
