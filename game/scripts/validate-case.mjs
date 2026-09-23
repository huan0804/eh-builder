// Kiểm tra tính nhất quán của dữ liệu vụ án — chạy: npm run validate
// Học từ Monogatari (FancyError: báo lỗi kịch bản rõ ràng trước khi người chơi gặp)
// và từ chính các bug đã gặp trong dự án (xem CLAUDE.md mục "Bug đã gặp").
// Thêm vụ án mới: import file dữ liệu của vụ đó và chạy cùng các kiểm tra.
import * as c from '../src/data/case1.js';

const errors = [];
const err = (msg) => errors.push(msg);
const evidenceIds = Object.keys(c.evidenceList);
const known = (id, where) => {
  if (!c.evidenceList[id]) err(`${where}: chứng cứ "${id}" không có trong evidenceList`);
};

// 1. Mỗi chứng cứ có đúng MỘT nguồn thu thập
const sources = [...c.chapter1Evidence, ...c.investigationSteps.map((s) => s.id)];
sources.forEach((id) => known(id, 'Nguồn thu thập'));
for (const id of evidenceIds) {
  const n = sources.filter((s) => s === id).length;
  if (n === 0) err(`Chứng cứ "${id}" KHÔNG có nguồn thu thập nào — người chơi không bao giờ có được nó`);
  if (n > 1) err(`Chứng cứ "${id}" có ${n} nguồn thu thập`);
}

// 2. Hội thoại: mọi tham chiếu tồn tại, mọi node đều tới được
const lockedSteps = c.investigationSteps.filter((s) => s.lockedLabel).map((s) => s.id);
const unlockedByDialogue = [];
for (const [suspect, { nodes }] of Object.entries(c.interviews)) {
  const ids = nodes.map((n) => n.id);
  if (ids[0] !== 'intro') err(`${suspect}: node đầu tiên phải là "intro"`);
  const reachable = new Set(['intro']);
  for (const node of nodes) {
    const where = `${suspect}.${node.id}`;
    if (node.unlocksNext) {
      if (!ids.includes(node.unlocksNext)) err(`${where}: unlocksNext "${node.unlocksNext}" không tồn tại`);
      reachable.add(node.unlocksNext);
    }
    if (node.requiresEvidence) known(node.requiresEvidence, where);
    if (node.unlocksEvidenceStep) {
      known(node.unlocksEvidenceStep, where);
      unlockedByDialogue.push(node.unlocksEvidenceStep);
    }
    if (node.isFinalConfession) reachable.add(node.id); // mở bằng đối chất, không qua unlocksNext
  }
  ids.filter((id) => !reachable.has(id)).forEach((id) => err(`${suspect}.${id}: không có đường nào tới node này`));
}
lockedSteps
  .filter((id) => !unlockedByDialogue.includes(id))
  .forEach((id) => err(`Bước "${id}" bị khóa nhưng không node hội thoại nào mở khóa nó`));

// 3. Giả thuyết & đối chất: tổ hợp chứng cứ hợp lệ, không chồng chéo
const checkSet = (where, required, extra) => {
  [...required, ...extra].forEach((id) => known(id, where));
  required.filter((id) => extra.includes(id)).forEach((id) => err(`${where}: "${id}" vừa bắt buộc vừa là tùy chọn`));
};
for (const h of Object.values(c.hypotheses)) {
  checkSet(`Giả thuyết ${h.id}`, h.requiredToEliminate, h.allowedExtra ?? []);
  if (!c.interviews[h.suspect]) err(`Giả thuyết ${h.id}: nghi phạm "${h.suspect}" không có hội thoại`);
}
checkSet('Đối chất Đức', c.ducConfrontation.required, c.ducConfrontation.allowedExtra);
const eliminable = Object.values(c.hypotheses).filter((h) => h.requiredToEliminate.length > 0);
if (eliminable.length < 2) err('Cần ít nhất 2 giả thuyết có thể loại (nguyên tắc 2-3 hướng song song)');

// 4. Thinking Board: đáp án nằm trong lựa chọn, mọi lựa chọn có nhãn
for (const slot of c.thinkingBoardSolution.slots) {
  if (!slot.options.includes(slot.correctAnswer)) err(`Board "${slot.id}": đáp án không nằm trong lựa chọn`);
  slot.options
    .filter((o) => !c.thinkingBoardSolution.labels[o])
    .forEach((o) => err(`Board "${slot.id}": lựa chọn "${o}" thiếu nhãn hiển thị`));
}

// 5. Chat log theo đúng thứ tự thời gian
c.chatLog.forEach((line, i) => {
  if (i > 0 && line.time < c.chatLog[i - 1].time) err(`Chat log dòng ${i + 1} (${line.time}) sai thứ tự thời gian`);
});

if (errors.length) {
  console.error(`❌ ${errors.length} lỗi dữ liệu vụ án:\n - ` + errors.join('\n - '));
  process.exit(1);
}
console.log(`✅ Dữ liệu vụ án hợp lệ: ${evidenceIds.length} chứng cứ, ${Object.keys(c.interviews).length} nghi phạm, ${c.thinkingBoardSolution.slots.length} ô kết luận.`);
