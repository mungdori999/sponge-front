import Modal from "react-modal";
import "../../css/Login/LoginModal.css";
import axios from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root"); // 접근성 설정

const LoginModal = ({ isOpen, onClose, loginType }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
        loginType,
      });

      console.log("✅ 로그인 성공:", response.data);

      // accessToken, refreshToken 저장
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      onClose();
      navigate("/");
    } catch (error) {
      console.error("❌ 로그인 실패:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="login-modal-input login-modal-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-modal-button" onClick={handleLogin}>
          로그인
        </button>
        <button onClick={onClose} className="login-modal-close">
          닫기
        </button>
      </Modal>
    </div>
  );
};

export default LoginModal;
