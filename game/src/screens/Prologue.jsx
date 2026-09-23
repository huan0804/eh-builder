export default function Prologue({ onStart, onContinue }) {
  return (
    <div className="chapter prologue chapter-enter">
      <h1>Buổi Livestream Cuối Cùng</h1>
      <p className="briefing">Phần 1 — Một vụ án dành cho CLB Ống Kính</p>

      <div className="dialogue-box">
        <p className="dialogue-inner-thought">
          <em>
            Lam (nội tâm): "Quay phim thì dễ. Cái khó là biết cắt đoạn nào. Mà thôi — máy quay
            không nói dối, chỉ có người dựng là hay nói dối thôi."
          </em>
        </p>
        <p>
          <strong>Cô Hạnh:</strong> "Lam này, con biết tin Vy lớp 11A2 chưa đến lớp sáng nay chứ?
          Gia đình đang rất lo, nhưng công an nói chưa đủ 24 tiếng nên chưa thể vào cuộc chính
          thức. CLB Ống Kính có quay lại buổi học nhóm tối qua đúng không? Mình xác minh trước,
          đỡ làm gia đình hoảng thêm nếu chưa chắc chắn. Mẹ Vy cũng gửi cô laptop, điện thoại và
          tai nghe Vy để lại — điện thoại thì khóa, nhưng laptop con xem được."
        </p>
        <p>
          <strong>Lam:</strong> "Dạ, con sẽ xem lại bản ghi ạ. Cô cho con hỏi thêm vài bạn trong
          nhóm được không ạ?"
        </p>
        <p>
          <strong>Cô Hạnh:</strong> "Được, nhưng hỏi han thôi, đừng làm quá lên. Có gì nghiêm
          trọng, báo cô ngay."
        </p>
      </div>

      {onContinue && (
        <button className="btn-primary" onClick={onContinue}>
          ▶ Chơi tiếp từ lần trước
        </button>
      )}
      <button className={onContinue ? 'btn-secondary' : 'btn-primary'} onClick={onStart}>
        {onContinue ? 'Bắt đầu lại từ đầu' : 'Bắt đầu điều tra →'}
      </button>
    </div>
  );
}
