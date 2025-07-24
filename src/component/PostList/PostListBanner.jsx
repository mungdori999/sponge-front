import "../../css/postList/PostListBanner.css";
const PostListBanner = () => {
  return (
    <div className="PostListBanner">
      <div className="PostListBanner_text">내 반려동물 문제행동에 대해</div>
      <div className="PostListBanner_text">전문가가 직접 알려드려요.</div>
      <div className="PostListBanner_btn">{`문제 행동 상담받기 >`}</div>
    </div>
  );
};

export default PostListBanner;
