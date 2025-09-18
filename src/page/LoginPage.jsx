import { useState } from "react";
import Modal from "react-modal";
import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";
import "../css/Login/LoginPage.css";
import LoginBanner from "../component/Login/LoginBanner";
import LoginBox from "../component/Login/LoginBox";
import loginImg1 from "../assets/login1.png";
import loginImg2 from "../assets/login2.png";
import LoginModal from "../component/Login/LoginModal";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

Modal.setAppElement("#root"); // 접근성 설정

const LoginPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loginType, setLoginType] = useState(null);

  const openModal = (type) => {
    setLoginType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setLoginType(null);
  };

  return (
    <div className="LoginPage">
      <Header
        leftchild={<BackButton />}
        rightchild={
          <FaHome
            className="home-icon"
            onClick={(e) => {
              navigate("/");
            }}
          />
        }
      />
      <LoginBanner />
      <div className="LoginBox-wrapper">
        <LoginBox
          title={"견주로 로그인하기"}
          text1={"문제행동 작성하고 "}
          text2={"훈련사에게 상담받기"}
          img={loginImg1}
          onClick={() => openModal("OWNER")}
        />
        <LoginBox
          title={"훈련사로 로그인하기"}
          text1={"문제행동 진단하고 "}
          text2={"더 많은 사람에게 홍보하기"}
          img={loginImg2}
          onClick={() => openModal("TRAINER")}
        />
      </div>
      <LoginModal isOpen={isOpen} onClose={closeModal} loginType={loginType} />
      <div className="register-wrapper" onClick={() => navigate("/register")}>
        <p className="register-text">아직 회원이 아니신가요?</p>
        <p className="register-link">회원가입</p>
      </div>
    </div>
  );
};

export default LoginPage;
