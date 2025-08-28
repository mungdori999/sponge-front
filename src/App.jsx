import "./App.css";
import HomePage from "./page/HomePage.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PostListPage from "./page/PostListPage.jsx";
import { useState, createContext } from "react";
import LoginPage from "./page/LoginPage.jsx";
import PostPage from "./page/PostPage.jsx";
import routerUrl from "./data/router-url.js";
import MyPage from "./page/MyPage.jsx";
import { useEffect } from "react";
export const TabContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const location = useLocation();

  const navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
    // 탭 인덱스에 따라 경로 이동
    switch (index) {
      case 0:
        navigate(routerUrl.home);
        break;
      case 1:
        navigate(routerUrl.postList);
        break;
      case 2:
        navigate(routerUrl.myPost);
        break;
      case 3:
        navigate(routerUrl.chat);
        break;
      case 4:
        navigate(routerUrl.myPage);
        break;
      default:
        navigate(routerUrl.home);
    }
  };
  // 뒤로가기를 클릭했을 시
  useEffect(() => {
    switch (location.pathname) {
      case routerUrl.home:
        setActiveTab(0);
        break;
      case routerUrl.postList:
        setActiveTab(1);
        break;
      case routerUrl.myPost:
        setActiveTab(2);
        break;
      case routerUrl.chat:
        setActiveTab(3);
        break;
      case routerUrl.myPage:
        setActiveTab(4);
        break;
      default:
        break;
    }
  }, [location.pathname]);
  return (
    <div>
      <TabContext.Provider value={{ activeTab, handleTabClick }}>
        <Routes>
          <Route path={routerUrl.home} element={<HomePage />} />
          <Route path={routerUrl.postList} element={<PostListPage />} />
          <Route path={routerUrl.post} element={<PostPage />} />
          <Route path={routerUrl.login} element={<LoginPage />} />
          <Route path={routerUrl.myPage} element={<MyPage />} />
        </Routes>
      </TabContext.Provider>
    </div>
  );
}

export default App;
