import Brand from "../component/Header/Brand";
import Header from "../component/Header/Header";
import LoginButton from "../component/Header/LoginButton";
import Banner from "../component/Home/Banner";
import PostCategory from "../component/common/PostCategory";
import Search from "../component/Home/Search";
import PostList from "../component/common/PostList";
import PostBanner from "../component/Home/PostBanner";
import Bottom from "../component/Bottom/Bottom";
import ReadMore from "../component/common/ReadMore";
import { TabContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routerUrl from "../data/router-url";
import { useCategorySelect } from "../component/hook/categorySelect";

const HomePage = () => {
  const { handleTabClick } = useContext(TabContext);
  const nav = useNavigate();

  const { selectedIndex, handleCategorySelect } = useCategorySelect();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  return (
    <div>
      <Header
        leftchild={<Brand />}
        rightchild={
          <LoginButton
            text={"로그인/가입"}
            onClick={() => nav(routerUrl.login)}
          />
        }
      />
      <Search />
      <Banner />
      <PostBanner />
      <PostCategory
        selectedIndex={selectedIndex}
        onSelect={handleCategorySelect}
      />
      <PostList />
      <ReadMore
        text={"진단사례 더보기"}
        onClick={() => {
          handleTabClick(1);
        }}
      />
      <Bottom />
    </div>
  );
};

export default HomePage;
