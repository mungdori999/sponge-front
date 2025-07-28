import "./App.css";
import HomePage from "./page/HomePage.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import PostListPage from "./page/PostListPage.jsx";
import { useState, createContext } from "react";
import LoginPage from "./page/LoginPage.jsx";
import PostPage from "./page/PostPage.jsx";
import routerUrl from "./data/router-url.js";
export const TabContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState(0);

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
  return (
    <div>
      <TabContext.Provider value={{ activeTab, handleTabClick }}>
        <Routes>
          <Route path={routerUrl.home} element={<HomePage />} />
          <Route path={routerUrl.postList} element={<PostListPage />} />
          <Route path={routerUrl.post} element={<PostPage />} />
          <Route path={routerUrl.login} element={<LoginPage />} />
        </Routes>
      </TabContext.Provider>
    </div>
  );
}

export default App;
