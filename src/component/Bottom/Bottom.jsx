import "../../css/Bottom/Bottom.css";
import { FaHome, FaPen, FaComments, FaUser, FaFileAlt } from "react-icons/fa";
import { useContext } from "react";
import { TabContext } from "../../App";

const Bottom = () => {
  const { activeTab, handleTabClick } = useContext(TabContext);
  return (
    <div className="Bottom">
      <div
        className={`home ${activeTab === 0 ? "active" : ""}`}
        onClick={() => handleTabClick(0)}
      >
        <FaHome className="icon" />
        <div>홈</div>
      </div>
      <div
        className={`post ${activeTab === 1 ? "active" : ""}`}
        onClick={() => handleTabClick(1)}
      >
        <FaPen className="icon" />
        <div>진단사례</div>
      </div>
      <div
        className={`my_post ${activeTab === 2 ? "active" : ""}`}
        onClick={() => handleTabClick(2)}
      >
        <FaFileAlt className="icon" />
        <div>내 진단</div>
      </div>
      <div
        className={`chat ${activeTab === 3 ? "active" : ""}`}
        onClick={() => handleTabClick(3)}
      >
        <FaComments className="icon" />
        <div>채팅</div>
      </div>
      <div
        className={`my_page ${activeTab === 4 ? "active" : ""}`}
        onClick={() => handleTabClick(4)}
      >
        <FaUser className="icon" />
        <div>MY</div>
      </div>
    </div>
  );
};

export default Bottom;
