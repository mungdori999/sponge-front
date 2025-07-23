import "../../css/Header/LoginButton.css";
const LoginButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={`login-button`}>
      {text}
    </button>
  );
};

export default LoginButton;
