import "../../css/Post/PostText.css";

const PostText = ({ text1, text2 }) => {
  return (
    <div className="PostText">
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};

export default PostText;
