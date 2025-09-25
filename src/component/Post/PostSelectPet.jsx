import "../../css/Post/PostSelectPet.css";
import { useNavigate } from "react-router-dom";

const PostSelectPet = ({ petList }) => {
  const nav = useNavigate();

  if (petList.length === 0) {
    return (
      <div className="PostSelectPet" onClick={() => nav("/add_pet")}>
        <button className="plus-button">+</button>
        <div className="plus-text">강아지 추가하기</div>
        <div>등록된 강아지가 없어요</div>
      </div>
    );
  }
};

export default PostSelectPet;
