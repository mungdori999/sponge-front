import { useState } from "react";
import Modal from "react-modal";
import "../../css/Register/OwnerRegister.css";
import { useNavigate } from "react-router-dom";
import { handleNextStep, registerOwner } from "./register";
import routerUrl from "../../data/router-url";

Modal.setAppElement("#root");

const OwnerRegisterModal = ({ isOpen, onClose }) => {
  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phoneNumber: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderSelect = (gender) => {
    setFormData((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setError("");
    setStep(1);
    onClose();
  };

  const onSuccess = () => {
    onClose();
    navigate(routerUrl.registerComplete);
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@domain.com"
            required
          />

          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            required
          />

          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            required
          />

          {error && <p className="owner-register-error">{error}</p>}

          <button
            type="button"
            className="owner-register-submit"
            onClick={handleNextStep({
              email: formData.email,
              password: formData.password,
              confirmPassword: formData.confirmPassword,
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
            name="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
            required
          />

          <label>성별</label>
          <div className="gender-select">
            <button
              type="button"
              className={formData.gender === "MALE" ? "active" : ""}
              onClick={() => handleGenderSelect("MALE")}
            >
              남성
            </button>
            <button
              type="button"
              className={formData.gender === "FEMALE" ? "active" : ""}
              onClick={() => handleGenderSelect("FEMALE")}
            >
              여성
            </button>
          </div>

          <label htmlFor="phoneNumber">전화번호</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="전화번호를 입력하세요 (예: 01012345678)"
            required
          />

          {error && <p className="owner-register-error">{error}</p>}

          <button
            type="submit"
            className="owner-register-submit"
            onClick={registerOwner({
              ...formData,
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
