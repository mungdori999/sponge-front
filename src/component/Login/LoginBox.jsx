import "../../css/Login/LoginBox.css";

const LoginBox = ({ title, text1, text2, img, onClick }) => {
  return (
    <div className="LoginBox" onClick={onClick}>
      <div className="login-text">
        <div className="login-title">{title}</div>
        <div className="login-description">
          <div className="login-text1">{text1}</div>
          <div className="login-text2">{text2}</div>
        </div>
      </div>
      <img className="login-img" src={img} />
    </div>
  );
};

export default LoginBox;
