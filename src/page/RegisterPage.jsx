import Header from "../component/Header/Header";
import BackButton from "../component/common/BackButton";
import RegisterChoice from "../component/Register/RegisterChoice";
import "../css/Register/RegisterPage.css";
import loginImg1 from "../assets/login1.png";
import loginImg2 from "../assets/login2.png";
import { useState } from "react";
import OwnerRegister from "../component/Register/OwnerRegister";

const RegisterPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  const handleClose = () => {
    setSelectedType(null); // 모달 닫기 → 선택 해제
  };

  return (
    <div className="RegisterPage">
      <Header leftchild={<BackButton />} />

      <div className="register-choice-wrapper">
        <RegisterChoice
          title={"견주로 회원가입"}
          img={loginImg1}
          onClick={() => handleSelect("OWNER")}
          selected={selectedType === "OWNER"}
        />
        <RegisterChoice
          title={"훈련사로 회원가입"}
          img={loginImg2}
          onClick={() => handleSelect("TRAINER")}
          selected={selectedType === "TRAINER"}
        />
      </div>

      <OwnerRegister isOpen={selectedType === "OWNER"} onClose={handleClose} />
    </div>
  );
};

export default RegisterPage;
