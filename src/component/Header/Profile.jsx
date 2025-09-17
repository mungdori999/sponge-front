import "../../css/Header/Profile.css";
import petImg from "../../assets/basic_pet.png";

const Profile = ({ nickname, loginType }) => {
  return (
    <div className="Profile">
      <div>
        <span className="nickname">{nickname}</span>
        <span className="greeting">
          {" "}
          {loginType === "OWNER" && " 님"}
          {loginType === "TRAINER" && " 훈련사님"}
        </span>
      </div>
      <img src={petImg} alt="profile" className="profile-img" />
    </div>
  );
};

export default Profile;
