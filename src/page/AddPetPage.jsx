import { useState } from "react";
import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";
import AddPetProg from "../component/Pet/AddPetProg";
import PetText from "../component/Pet/PetText";
import "../css/Pet/AddPetPage.css";
import AddPetForm from "../component/Pet/AddPetForm";
import AddPetImage from "../component/Pet/AddPetImage";

const AddPetPage = () => {
  const [step, setStep] = useState(0);
  const [petData, setPetData] = useState({
    name: "",
    age: 0,
    weight: 0,
    breed: "",
    gender: "MALE",
  });

  const handleChange = (field, value) => {
    setPetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 50);
  };

  const stepTexts = {
    0: {
      text1: "반려견 등록을 위해",
      text2: "기본 정보를 입력해주세요",
    },
    50: {
      text1: "반려견 대표사진을",
      text2: "등록해주세요!",
    },
  };
  return (
    <div className="AddPetPage">
      <Header
        leftchild={<BackButton />}
        title={<div className="title">프로필</div>}
      />
      <AddPetProg progress={step} />
      <PetText text1={stepTexts[step].text1} text2={stepTexts[step].text2} />
      {step === 0 && (
        <AddPetForm
          petData={petData}
          onChange={handleChange}
          onNext={handleNext}
        />
      )}

      {step === 50 && <AddPetImage />}
    </div>
  );
};

export default AddPetPage;
