import "../../css/Pet/PetText.css";

const PetText = ({ text1, text2 }) => {
  return (
    <div className="PetText">
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};

export default PetText;
