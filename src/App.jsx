import "./App.css";
import HomePage from "./page/HomePage.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import PostListPage from "./page/PostListPage.jsx";
import { useState, createContext } from "react";
export const TabContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
    // 탭 인덱스에 따라 경로 이동
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/post");
        break;
      case 2:
        navigate("/my_post");
        break;
      case 3:
        navigate("/chat");
        break;
      case 4:
        navigate("/my_page");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <div>
      <TabContext.Provider value={{ activeTab, handleTabClick }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostListPage />} />
        </Routes>
      </TabContext.Provider>
    </div>
  );
}

export default App;
