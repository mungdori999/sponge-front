import petImg from "../../assets/basic_pet.png";
import "../../css/Owner/OwnerCard.css";

const OwnerCard = () => {
  return (
    <div className="OwnerCard">
      <div className="owner-info">
        <p>
          <span className="name">김지용</span> 견주님
        </p>
        <p>안녕하세요</p>
      </div>
      <div class="pet-box">
        <img src={petImg} class="pet-image" />
        <div className="pet-name-container">
          <div>반려견 이름</div>
          <div className="pet-name">뭉도리</div>
        </div>
        <div className="pet-info-container">
          <div className="pet-info-item">
            <div>품종</div>
            <div className="pet-info">푸들</div>
          </div>
          <div className="pet-info-item">
            <div>성별</div>
            <div className="pet-info">수컷</div>
          </div>
          <div className="pet-info-item">
            <div>몸무게</div>
            <div className="pet-info">3kg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
