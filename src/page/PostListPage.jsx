import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";
import { useNavigate } from "react-router-dom";
import Bottom from "../component/Bottom/Bottom";
import PostListBanner from "../component/PostList/PostListBanner";
import PostCategory from "../component/common/PostCategory";
import PostList from "../component/common/PostList";
import routerUrl from "../data/router-url";
import { useCategorySelect } from "../component/hook/useCategorySelect";
import useAuth from "../component/hook/useAuth";
import Profile from "../component/Header/Profile";

const PostListPage = () => {
  const nav = useNavigate();

  const { selectedIndex, handleCategorySelect } = useCategorySelect();
  const { accessToken, loginType, nickname } = useAuth();
  return (
    <div>
      <Header
        leftchild={<div className="post-list">진단사례</div>}
        rightchild={
          accessToken ? (
            <Profile nickname={nickname} loginType={loginType} />
          ) : (
            <LoginButton
              text={"로그인/가입"}
              onClick={() => nav(routerUrl.login)}
            />
          )
        }
      />
      <PostListBanner />
      <PostCategory
        selectedIndex={selectedIndex}
        onSelect={handleCategorySelect}
      />
      <PostList />
      <Bottom />
    </div>
  );
};

export default PostListPage;
