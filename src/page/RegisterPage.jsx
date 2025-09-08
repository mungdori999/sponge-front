import Header from "../component/Header/Header";
import BackButton from "../component/common/BackButton";
import RegisterChoice from "../component/Register/RegisterChoice";
import "../css/Register/RegisterPage.css";
import loginImg1 from "../assets/login1.png";
import loginImg2 from "../assets/login2.png";
import { useState } from "react";

const RegisterPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    console.log(type);
    setSelectedType(type);
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
    </div>
  );
};

export default RegisterPage;
