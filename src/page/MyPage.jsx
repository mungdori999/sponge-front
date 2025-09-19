import Bottom from "../component/Bottom/Bottom";
import OwnerPage from "./OwnerPage";
import Header from "../component/Header/Header";
import { FaPen } from "react-icons/fa";
import "../css/MyPage/MyPage.css";
import useAuth from "../component/hook/useAuth";
import { LOGIN_TYPES } from "../data/loginType";

const MyPage = () => {
  const { accessToken, loginType, nickname } = useAuth();

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
      {loginType === LOGIN_TYPES.OWNER && <OwnerPage />}
      {loginType === LOGIN_TYPES.TRAINER && <TrainerPage />}
      <Bottom />
    </div>
  );
};

export default MyPage;
