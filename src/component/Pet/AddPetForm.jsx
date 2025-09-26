import "../../css/Pet/AddPetForm.css";

const AddPetForm = ({ petData, onChange, onNext }) => {
  return (
    <div className="AddPetForm">
      <div className="name">
        <label htmlFor="pet-name">
          반려견 이름<span className="required">*</span>
        </label>
        <input
          id="pet-name"
          type="text"
          placeholder="예) 멍멍이"
          value={petData.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="age">
        <label htmlFor="pet-age">
          나이<span className="required">*</span>
        </label>
        <input
          id="pet-age"
          type="number"
          placeholder="예) 3"
          min={0}
          value={petData.age}
          onChange={(e) => onChange("age", e.target.value)}
        />
      </div>

      <div className="weight">
        <label htmlFor="pet-weight">
          몸무게<span className="required">*</span>
        </label>
        <input
          id="pet-weight"
          type="number"
          placeholder="예) 3"
          value={petData.weight}
          onChange={(e) => onChange("weight", e.target.value)}
        />
      </div>

      <div className="breed">
        <label htmlFor="pet-breed">
          견종<span className="required">*</span>
        </label>
        <input
          id="pet-breed"
          type="text"
          placeholder="예) 웰시코기"
          value={petData.breed}
          onChange={(e) => onChange("breed", e.target.value)}
        />
      </div>

      <div className="gender">
        <label>
          성별<span className="required">*</span>
        </label>
        <div className="gender-button">
          <button
            type="button"
            className={petData.gender === "MALE" ? "selected" : ""}
            onClick={() => onChange("gender", "MALE")}
          >
            남아
          </button>
          <button
            type="button"
            className={petData.gender === "FEMALE" ? "selected" : ""}
            onClick={() => onChange("gender", "FEMALE")}
          >
            여아
          </button>
        </div>
      </div>

      <button type="button" className="form-next-button" onClick={onNext}>
        다음
      </button>
    </div>
  );
};

export default AddPetForm;
