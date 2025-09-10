import { useState } from "react";
import Modal from "react-modal";
import "../../css/Register/OwnerRegister.css";
import { useNavigate } from "react-router-dom";
import { handleNextStep, registerOwner } from "./register";

Modal.setAppElement("#root");

const OwnerRegisterModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 모달 단계 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNickname("");
    setPhoneNumber("");
    setGender("");
    setError("");
    setStep(1);
    onClose();
  };
  const navigate = useNavigate();
  const onSuccess = () => {
    onClose();
    navigate("/register/complete");
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
        <form className="owner-register-form" onSubmit={registerOwner}>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
            required
          />
          <label>성별</label>
          <div className="gender-select">
            <button
              type="button"
              className={gender === "MALE" ? "active" : ""}
              onClick={() => setGender("MALE")}
            >
              남성
            </button>
            <button
              type="button"
              className={gender === "FEMALE" ? "active" : ""}
              onClick={() => setGender("FEMALE")}
            >
              여성
            </button>
          </div>
          <label htmlFor="phone-number">전화번호</label>
          <input
            id="phone-number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="전화번호를 입력하세요 (예: 01012345678)"
            required
          />
          {error && <p className="owner-register-error">{error}</p>}
          <button
            type="submit"
            className="owner-register-submit"
            onClick={registerOwner({
              email,
              password,
              nickname,
              gender,
              phoneNumber,
              setError,
              onSuccess,
            })}
          >
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
