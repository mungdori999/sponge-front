import Brand from "../component/Header/Brand";
import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";

import Bottom from "../component/Bottom/Bottom";
const PostListPage = () => {
  return (
    <div>
      <Header
        leftchild={<Brand />}
        rightchild={<LoginButton text={"로그인/가입"} />}
      />
      <Bottom />
    </div>
  );
};

export default PostListPage;
