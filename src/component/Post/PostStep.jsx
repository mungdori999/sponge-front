import "../../css/Post/PostStep.css";

const PostStep = ({ step }) => {
  return (
    <div className="PostStep">
      <div className={` ${step >= 1 ? "step" : ""}`}>1</div>
      <div className={` ${step >= 2 ? "step" : ""}`}>2</div>
      <div className={` ${step >= 3 ? "step" : ""}`}>3</div>
    </div>
  );
};

export default PostStep;
