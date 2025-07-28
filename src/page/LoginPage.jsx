import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";
import "../css/Login/LoginPage.css";
import LoginBanner from "../component/Login/LoginBanner";
import LoginBox from "../component/Login/LoginBox";
import loginImg1 from "../assets/login1.png";
import loginImg2 from "../assets/login2.png";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Header leftchild={<BackButton />} />
      <LoginBanner />
      <div className="LoginBox-wrapper">
        <LoginBox
          title={"견주로 로그인하기"}
          text1={"문제행동 작성하고 "}
          text2={"훈련사에게 상담받기"}
          img={loginImg1}
          onClick={() => {}}
        />
        <LoginBox
          title={"훈련사로 로그인하기"}
          text1={"문제행동 진단하고 "}
          text2={"더 많은 사람에게 홍보하기"}
          img={loginImg2}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default LoginPage;
