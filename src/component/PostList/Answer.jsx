import "../../css/PostList/Answer.css";
import petImg from "../../assets/basic_pet.png";
import { FaThumbsUp } from "react-icons/fa";

const Answer = ({ trainer, answer }) => {
  return (
    <div className="Answer">
      <div className="answer-trainer">
        <div className="trainer-image">
          <img src={petImg} />
        </div>
        <div className="trainer-info">
          <div className="trainer-name">{trainer.name + " 훈련사님"}</div>
          <div className="trainer-etc">
            <div className="trainer-adopt-cnt">
              채택된 답변 {trainer.adoptCount}건
            </div>
            <div>|</div>
            <div className="trainer-chat-cnt">
              1:1 상담 {trainer.chatCount}회
            </div>
          </div>
        </div>
      </div>
      <div className="answer-body">
        <div className="answer-content">{answer.content}</div>
      </div>
      <div className="answer-bottom">
        <div className="answer-like">
          <FaThumbsUp className="icon" />
          추천 {answer.likeCount}
        </div>
        <div className="answer-created">30 분 전</div>
      </div>
    </div>
  );
};

export default Answer;
