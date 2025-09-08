import "../../css/Register/RegisterChoice.css";

const RegsiterChoice = ({ title, img, selected, onClick }) => {
  return (
    <div
      className={`RegisterChoice ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="register-text">
        <div className="register-title">{title}</div>
        <img src={img} className="register-img"></img>
      </div>
    </div>
  );
};

export default RegsiterChoice;
