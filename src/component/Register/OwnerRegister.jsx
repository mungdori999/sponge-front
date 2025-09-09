import { useState } from "react";
import Modal from "react-modal";
import "../../css/Register/OwnerRegister.css";
import { handleNextStep } from "./registerNext";

Modal.setAppElement("#root");

const OwnerRegisterModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 모달 단계 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setStep(1);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          width: "400px",
          height: "auto",
          margin: "auto",
          borderRadius: "16px",
          padding: "24px",
        },
      }}
    >
      <h2 className="owner-register-title">견주 회원가입</h2>

      {step === 1 && (
        <form className="owner-register-form">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@domain.com"
            required
          />

          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />

          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            required
          />

          {error && <p className="owner-register-error">{error}</p>}

          <button
            type="button"
            className="owner-register-submit"
            onClick={handleNextStep({
              email,
              password,
              confirmPassword,
              setError,
              setStep,
            })}
          >
            다음
          </button>
          <button
            type="button"
            className="owner-register-close"
            onClick={handleClose}
          >
            닫기
          </button>
        </form>
      )}

      {step === 2 && (
        <form className="owner-register-form" onSubmit={handleSubmit}>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
            required
          />

          <button type="submit" className="owner-register-submit">
            회원가입
          </button>
          <button
            type="button"
            className="owner-register-close"
            onClick={handleClose}
          >
            닫기
          </button>
        </form>
      )}
    </Modal>
  );
};

export default OwnerRegisterModal;
