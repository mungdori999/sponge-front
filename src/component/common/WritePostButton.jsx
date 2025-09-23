import { FaPen } from "react-icons/fa";
import "../../css/common/WritePostButton.css";

const WritePostButton = () => {
  return (
    <div className="WritePostButton">
      <button className="write-button">
        <FaPen size={18} />
      </button>
    </div>
  );
};

export default WritePostButton;
