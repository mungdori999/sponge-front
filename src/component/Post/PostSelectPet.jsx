import "../../css/Post/PostSelectPet.css";
import { useNavigate } from "react-router-dom";
import petImg from "../../assets/basic_pet.png";

const PostSelectPet = ({ petList }) => {
  const nav = useNavigate();

  if (petList.length === 0) {
    return (
      <div className="PostEmptyPet" onClick={() => nav("/add_pet")}>
        <button className="plus-button">+</button>
        <div className="plus-text">강아지 추가하기</div>
        <div>등록된 강아지가 없어요</div>
      </div>
    );
  } else {
    return (
      <div className="PostSelectPet">
        {petList.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.petImgUrl || petImg} className="pet-image" />
            <div className="pet-info">
              <div className="pet-name">{pet.name}</div>
              <div className="pet-breed">{pet.breed}</div>
              <div className="pet-etc">{pet.gender}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default PostSelectPet;
