import OwnerCard from "../component/Owner/OwnerCard";
import "../css/MyPage/OwnerPage.css";
const OwnerPage = () => {
  return (
    <div className="OwnerPage">
      <OwnerCard />
      <div className="post-list-title">활동 내역</div>
    </div>
  );
};

export default OwnerPage;
