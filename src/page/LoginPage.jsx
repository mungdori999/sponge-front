import BackButton from "../component/common/BackButton";
import Header from "../component/Header/Header";

import LoginBanner from "../component/Login/LoginBanner";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Header leftchild={<BackButton />} />
      <LoginBanner />
    </div>
  );
};

export default LoginPage;
