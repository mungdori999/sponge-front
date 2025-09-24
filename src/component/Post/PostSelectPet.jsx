import "../../css/Post/PostSelectPet.css";

const PostSelectPet = () => {
  return (
    <div className="PostSelectPet">
      <button className="plus-button">+</button>
      <div className="plus-text">강아지 추가하기</div>
      <div>등록된 강아지가 없어요</div>
    </div>
  );
};

export default PostSelectPet;
