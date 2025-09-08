const PetInfo = ({ pet }) => {
  return (
    <div className="pet-box slide">
      <img src={pet.img} className="pet-image" alt={pet.name} />
      <div className="pet-name-container">
        <div>반려견 이름</div>
        <div className="pet-name">{pet.name}</div>
      </div>
      <div className="pet-info-container">
        <div className="pet-info-item">
          <div>품종</div>
          <div className="pet-info">{pet.breed}</div>
        </div>
        <div className="pet-info-item">
          <div>성별</div>
          <div className="pet-info">{pet.gender}</div>
        </div>
        <div className="pet-info-item">
          <div>몸무게</div>
          <div className="pet-info">{pet.weight}</div>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
