import "../../css/Bottom/Bottom.css";
import { FaHome, FaPen, FaComments, FaUser, FaFileAlt } from "react-icons/fa";
import { useState } from "react";

const Bottom = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="Bottom">
      <div
        className={`home ${activeTab === 0 ? "active" : ""}`}
        onClick={() => setActiveTab(0)}
      >
        <FaHome className="icon" />
        <div>홈</div>
      </div>
      <div
        className={`post ${activeTab === 1 ? "active" : ""}`}
        onClick={() => setActiveTab(1)}
      >
        <FaPen className="icon" />
        <div>진단사례</div>
      </div>
      <div
        className={`my_post ${activeTab === 2 ? "active" : ""}`}
        onClick={() => setActiveTab(2)}
      >
        <FaFileAlt className="icon" />
        <div>내 진단</div>
      </div>
      <div
        className={`chat ${activeTab === 3 ? "active" : ""}`}
        onClick={() => setActiveTab(3)}
      >
        <FaComments className="icon" />
        <div>채팅</div>
      </div>
      <div
        className={`my_page ${activeTab === 4 ? "active" : ""}`}
        onClick={() => setActiveTab(4)}
      >
        <FaUser className="icon" />
        <div>MY</div>
      </div>
    </div>
  );
};

export default Bottom;
