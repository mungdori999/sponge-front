import petImg from "../../assets/basic_pet.png";
import "../../css/Owner/OwnerCard.css";
import { useState } from "react";
import PetInfo from "./PetInfo";

const pets = [
  {
    name: "뭉도리",
    breed: "푸들",
    gender: "수컷",
    weight: "3kg",
    img: petImg,
  },
  {
    name: "초코",
    breed: "시바견",
    gender: "암컷",
    weight: "6kg",
    img: petImg,
  },
  {
    name: "보리",
    breed: "말티즈",
    gender: "수컷",
    weight: "4kg",
    img: petImg,
  },
];

const OwnerCard = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + pets.length) % pets.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % pets.length);
  };
  const pet = pets[index];

  return (
    <div className="OwnerCard">
      <div className="owner-info">
        <p>
          <span className="name">김지용</span> 견주님
        </p>
        <p>안녕하세요</p>
      </div>
      <div className="pet-container">
        <button className="btn" onClick={handlePrev}>
          {"<"}
        </button>

        <PetInfo pet={pet} />

        <button className="btn" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <div className="page-dot">
        {pets.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default OwnerCard;
