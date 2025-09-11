import successImg from "../assets/success_img.png";
import "../css/Register/RegisterCompletePage.css";
import { useNavigate } from "react-router-dom";

const RegisterCompletePage = () => {
  const navigate = useNavigate();
  return (
    <div className="RegisterCompletePage">
      <div className="success-text">
        <div>회원가입을 마쳤어요!</div>
        <div>활동을 시작해 보세요!</div>
      </div>
      <img src={successImg} alt="Success" className="success-image" />
      <button className="login-button" onClick={(e) => navigate("/login")}>
        로그인 하러가기
      </button>
    </div>
  );
};

export default RegisterCompletePage;
