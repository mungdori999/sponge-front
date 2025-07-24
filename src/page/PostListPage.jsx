import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";

import Bottom from "../component/Bottom/Bottom";
import PostListBanner from "../component/PostList/PostListBanner";
import PostCategory from "../component/Home/PostCategory";
import PostList from "../component/Home/PostList";
const PostListPage = () => {
  return (
    <div>
      <Header
        leftchild={<div className="post-list">진단사례</div>}
        rightchild={<LoginButton text={"로그인/가입"} />}
      />
      <PostListBanner />
      <PostCategory />
      <PostList />
      <Bottom />
    </div>
  );
};

export default PostListPage;
