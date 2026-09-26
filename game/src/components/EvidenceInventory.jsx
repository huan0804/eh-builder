// Danh sách chứng cứ đã thu thập. Có thể chọn NHIỀU chứng cứ cùng lúc:
// chọn 1 để trình khi phỏng vấn, chọn một tổ hợp để loại giả thuyết / đối chất.
// `evidenceList` truyền qua props (case đang chơi) — không import cứng 1 case cụ thể.
export default function EvidenceInventory({ evidenceList, collectedIds, selectedIds, onToggle }) {
  return (
    <div className="evidence-inventory">
      <h3>📁 Chứng cứ đã thu thập</h3>
      <p className="hint">Bấm để chọn / bỏ chọn. Có thể chọn nhiều chứng cứ để ghép lập luận.</p>
      {collectedIds.length === 0 && <p className="hint">Chưa có chứng cứ nào.</p>}
      <ul>
        {collectedIds.map((id) => {
          const ev = evidenceList[id];
          const selected = selectedIds.includes(id);
          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={selected}
                className={selected ? 'evidence-item selected' : 'evidence-item'}
                onClick={() => onToggle(id)}
              >
                <strong>{ev.name}</strong>
                <p>{ev.description}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
