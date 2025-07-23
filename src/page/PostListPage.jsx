import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";

import Bottom from "../component/Bottom/Bottom";
const PostListPage = () => {
  return (
    <div>
      <Header
        leftchild={<div className="post-list">진단사례</div>}
        rightchild={<LoginButton text={"로그인/가입"} />}
      />
      <Bottom />
    </div>
  );
};

export default PostListPage;
