import "../../css/Pet/AddPetProg.css";

const AddPetProg = ({ progress }) => {
  return (
    <div className="AddPetProg">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div
        className={`progress-text ${
          progress > 0 ? "progressing" : "not-progress"
        }`}
      >
        완성도 {progress}%
      </div>
    </div>
  );
};

export default AddPetProg;
