import "../../css/Pet/AddPetImage.css";
import { FaPlus } from "react-icons/fa";
import petImg from "../../assets/basic_pet.png";

const AddPetImage = () => {
  return (
    <div className="AddPetImage">
      <img src={petImg} alt="pet" className="add-img" />
      <div className="plus-icon">
        <FaPlus />
      </div>
    </div>
  );
};
export default AddPetImage;
