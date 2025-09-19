import "../../css/Header/Profile.css";
import petImg from "../../assets/basic_pet.png";
import { LOGIN_TYPES } from "../../data/loginType";

const Profile = ({ nickname, loginType }) => {
  return (
    <div className="Profile">
      <div>
        <span className="nickname">{nickname}</span>
        <span className="greeting">
          {" "}
          {loginType === LOGIN_TYPES.OWNER && " 님"}
          {loginType === LOGIN_TYPES.TRAINER && " 훈련사님"}
        </span>
      </div>
      <img src={petImg} alt="profile" className="profile-img" />
    </div>
  );
};

export default Profile;
