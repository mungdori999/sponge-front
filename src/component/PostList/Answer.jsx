import "../../css/PostList/Answer.css";
import petImg from "../../assets/basic_pet.png";

const Answer = () => {
  return (
    <div className="Answer">
      <div className="answer-trainer">
        <div className="trainer-image">
          <img src={petImg} />
        </div>
        <div className="trainer-info"></div>
      </div>
    </div>
  );
};

export default Answer;
