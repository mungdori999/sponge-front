import Brand from "../component/Header/Brand";
import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";
import Banner from "../component/Home/Banner";
import PostCategory from "../component/Home/PostCategory";
import Search from "../component/Home/Search";
import PostList from "../component/Home/PostList";
import PostBanner from "../component/Home/PostBanner";
import Bottom from "../component/Bottom/Bottom";

const HomePage = () => {
  return (
    <div>
      <Header
        leftchild={<Brand />}
        rightchild={<LoginButton text={"로그인/가입"} />}
      />
      <Search />
      <Banner />
      <PostBanner />
      <PostCategory />
      <PostList />
      <Bottom />
    </div>
  );
};

export default HomePage;
