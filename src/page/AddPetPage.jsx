import { useState } from "react";
import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";
import AddPetProg from "../component/Pet/AddPetProg";
import PetText from "../component/Pet/PetText";
import "../css/Pet/AddPetPage.css";
import AddPetForm from "../component/Pet/AddPetForm";

const AddPetPage = () => {
  const [step, setStep] = useState(1);
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
    console.log("저장할 데이터:", petData);
    // axios 요청 or 다음 step 이동
  };

  const stepTexts = {
    1: {
      text1: "반려견 등록을 위해",
      text2: "기본 정보를 입력해주세요",
    },
    2: {
      text1: "증상 및 소견 작성",
      text2: "환자의 상태를 자세히 입력해주세요.",
    },
  };
  return (
    <div className="AddPetPage">
      <Header
        leftchild={<BackButton />}
        title={<div className="title">프로필</div>}
      />
      <AddPetProg progress={0} />
      <PetText text1={stepTexts[step].text1} text2={stepTexts[step].text2} />
      <AddPetForm
        petData={petData}
        onChange={handleChange}
        onNext={handleNext}
      />
    </div>
  );
};

export default AddPetPage;
