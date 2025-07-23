import "../../css/Home/PostPrev.css";
import { FaCommentDots, FaThumbsUp } from "react-icons/fa";

const PostPrev = () => {
  const tags = ["기본교육", "분리불안", "짖음"];
  const title = "반려견의 짖음 문제 해결하기";
  const content =
    "반려견이 지나치게 짖는 문제를 해결하기 위한 방법과 팁을 제공합니다. 이 글에서는 짖음의 원인과 해결책에 대해 다룹니다.";
  return (
    <div className="PostPrev">
      <div className="tag_container">
        {tags.map((item, index) => (
          <div key={index} className="tag">
            # {item}
          </div>
        ))}
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="post_info">
        <div className="info">
          <div className="answer">
            <FaCommentDots className="icon" />
            훈련사 답변 3
          </div>
          <div className="like">
            <FaThumbsUp className="icon" />
            추천 12
          </div>
        </div>
        <div className="date">52분전</div>
      </div>
    </div>
  );
};

export default PostPrev;
