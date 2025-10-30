import { useNavigate } from "react-router-dom";

const XButton = () => {
  const nav = useNavigate();
  return (
    <button
      className="BackButton"
      onClick={() => {
        nav(-1);
      }}
    >
      {"X"}
    </button>
  );
};

export default XButton;
