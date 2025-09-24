import { FaPen } from "react-icons/fa";
import "../../css/common/WritePostButton.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import routerUrl from "../../data/router-url";

const WritePostButton = () => {
  const nav = useNavigate();
  const { accessToken } = useAuth();
  const writeButtonClick = () => {
    if (accessToken) {
      nav(routerUrl.postWrite);
    } else {
      Swal.fire({
        icon: "warning",
        title: "로그인이 필요한 서비스입니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#ffbb30",
      }).then(() => {
        nav(routerUrl.login);
      });
    }
  };

  return (
    <div className="WritePostButton">
      <button className="write-button" onClick={writeButtonClick}>
        <FaPen size={18} />
      </button>
    </div>
  );
};

export default WritePostButton;
