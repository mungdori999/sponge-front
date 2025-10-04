import "../../css/Post/PostSelectPet.css";
import { useNavigate } from "react-router-dom";
import petImg from "../../assets/basic_pet.png";

import routerUrl from "../../data/router-url";

const PostSelectPet = ({
  petList,
  selectedPetId,
  setSelectedPetId,
  setStep,
}) => {
  const nav = useNavigate();

  const togglePet = (id) => {
    setSelectedPetId((prev) => (prev === id ? null : id));
  };

  if (petList.length === 0) {
    return (
      <div className="PostEmptyPet" onClick={() => nav(routerUrl.addPet)}>
        <button className="plus-button">+</button>
        <div className="plus-text">강아지 추가하기</div>
        <div>등록된 강아지가 없어요</div>
      </div>
    );
  } else {
    return (
      <div className="PostSelectPet">
        {petList.map((pet) => (
          <div
            key={pet.petId}
            className={`pet-card ${
              selectedPetId === pet.petId ? "selected" : ""
            }`}
            onClick={() => togglePet(pet.petId)}
          >
            <div className="pet-details">
              <img src={pet.petImgUrl || petImg} className="pet-image" />
              <div className="pet-info">
                <div className="pet-name">{pet.name}</div>
                <div className="pet-breed">{pet.breed}</div>
                <div className="pet-etc">
                  {pet.gender === "MALE" ? "남아" : "여아"} · {pet.age}살 ·{" "}
                  {pet.weight}kg
                </div>
              </div>
            </div>
            <label className="pet-check">
              <input
                type="checkbox"
                checked={selectedPetId === pet.petId}
                onChange={() => togglePet(pet.petId)}
              />
              <span></span>
            </label>
          </div>
        ))}
        <button
          type="button"
          className={`next-button ${selectedPetId ? "active" : ""}`}
          onClick={() => setStep(2)}
          disabled={!selectedPetId}
        >
          다음
        </button>
      </div>
    );
  }
};

export default PostSelectPet;
