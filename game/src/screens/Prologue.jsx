export default function Prologue({ onStart }) {
  return (
    <div className="chapter prologue chapter-enter">
      <h1>Buổi Livestream Cuối Cùng</h1>
      <p className="briefing">Phần 1 — Một vụ án dành cho CLB Ống Kính</p>

      <div className="dialogue-box">
        <p>
          <strong>Cô Hạnh:</strong> "Lam này, con biết tin Vy lớp 11A2 chưa đến lớp sáng nay chứ?
          Gia đình đang rất lo, nhưng công an nói chưa đủ 24 tiếng nên chưa thể vào cuộc chính
          thức. CLB Ống Kính có quay lại vài buổi sinh hoạt nhóm ôn thi tối qua đúng không? Cô
          muốn con xem giúp cô, xem có manh mối gì không — mình xác minh trước, đỡ làm gia đình
          hoảng thêm nếu chưa chắc chắn."
        </p>
        <p>
          <strong>Lam:</strong> "Dạ, con sẽ xem lại bản ghi ạ. Nhưng cô cho con xin phép hỏi thêm
          vài bạn trong nhóm được không ạ?"
        </p>
        <p>
          <strong>Cô Hạnh:</strong> "Được, nhưng nhớ là hỏi han thôi, đừng làm quá lên. Nếu có gì
          nghiêm trọng, báo cô ngay để cô báo công an."
        </p>
      </div>

      <button className="btn-primary" onClick={onStart}>
        Bắt đầu điều tra →
      </button>
    </div>
  );
}
