import Modal from "react-modal";
import "../../css/Login/LoginModal.css";

Modal.setAppElement("#root"); // 접근성 설정

const LoginModal = ({ isOpen, onClose, loginType }) => {
  return (
    <div className="LoginModal">
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <h2 className="login-modal-title">
          {loginType === "OWNER" ? "견주 로그인" : "훈련사 로그인"}
        </h2>
        <div className="login-input-wrapper">
          <input
            type="email"
            placeholder="이메일"
            className="login-modal-input"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-modal-input login-modal-password"
          />
        </div>
        <button className="login-modal-button">로그인</button>
        <button onClick={onClose} className="login-modal-close">
          닫기
        </button>
      </Modal>
    </div>
  );
};

export default LoginModal;
