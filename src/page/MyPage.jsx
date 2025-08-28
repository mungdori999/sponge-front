import Bottom from "../component/Bottom/Bottom";
import OwnerPage from "./OwnerPage";
import Header from "../component/Header/Header";
import { FaPen } from "react-icons/fa";
import "../css/MyPage/MyPage.css";

const MyPage = () => {
  return (
    <div className="MyPage">
      <Header
        rightchild={
          <div className="edit-profile">
            <FaPen />
            <p>프로필 수정</p>
          </div>
        }
      />
      <OwnerPage />
      <Bottom />
    </div>
  );
};

export default MyPage;
