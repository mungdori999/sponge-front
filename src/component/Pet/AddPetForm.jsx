import "../../css/Pet/AddPetForm.css";

const AddPetForm = () => {
  return (
    <div className="AddPetForm">
      <div className="name">
        <label>
          반려견 이름<span className="required">*</span>
        </label>
        <input type="text" placeholder="예)멍멍이" />
      </div>
      <div className="age"></div>
      <div className="weight"></div>
      <div className="breed">
        <label>
          견종
          <span className="required">*</span>
        </label>
        <input type="text" placeholder="예)웰시코기" />
      </div>
      <div className="gender"></div>
    </div>
  );
};

export default AddPetForm;
