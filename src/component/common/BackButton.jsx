import { useNavigate } from "react-router-dom";
import "../../css/common/BackButton.css";
const BackButton = () => {
  const nav = useNavigate();
  return (
    <button
      className="BackButton"
      onClick={() => {
        nav(-1);
      }}
    >
      {"<"}
    </button>
  );
};

export default BackButton;
