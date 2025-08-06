import "../../css/PostList/AnswerHeader.css";

import { useState } from "react";

const AnswerHeader = () => {
  const [sortType, setSortType] = useState(0);

  return (
    <div className="AnswerHeader">
      <div className="answer-count">답변 3개</div>
      <div className="answer-button">
        <div
          className={`${sortType === 0 ? "active" : ""} recommend-sort`}
          onClick={() => setSortType(0)}
        >
          추천순
        </div>
        <div
          className={`${sortType === 1 ? "active" : ""} new-sort`}
          onClick={() => setSortType(1)}
        >
          최신순
        </div>
      </div>
    </div>
  );
};

export default AnswerHeader;
