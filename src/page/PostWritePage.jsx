import { useEffect, useState } from "react";
import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";
import PostStep from "../component/Post/PostStep";
import PostText from "../component/Post/PostText";
import PostSelectPet from "../component/Post/PostSelectPet";
import api from "../api/axios";
import requestUrl from "../api/request-url";

const PostWritePage = () => {
  const [step, setStep] = useState(1);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get(requestUrl.pet).then((res) => {
      setPets(res.data);
    });
  }, []);

  const stepTexts = {
    1: {
      text1: "문제행동 교정이 필요한",
      text2: "강아지를 선택해주세요",
    },
    2: {
      text1: "증상 및 소견 작성",
      text2: "환자의 상태를 자세히 입력해주세요.",
    },
    3: {
      text1: "최종 확인",
      text2: "입력한 내용을 확인해주세요.",
    },
  };

  return (
    <div className="PostWritePage">
      <Header leftchild={<BackButton />} />
      <PostStep step={step} />
      <PostText text1={stepTexts[step].text1} text2={stepTexts[step].text2} />
      {step === 1 && <PostSelectPet petList={pets} />}
      {step === 2 && <div>2</div>}
      {step === 3 && <div>3</div>}
    </div>
  );
};

export default PostWritePage;
