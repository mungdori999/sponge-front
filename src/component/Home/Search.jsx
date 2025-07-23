import { FaSearch } from "react-icons/fa";
import "../../css/Home/Search.css";

const Search = () => {
  return (
    <div className="Search">
      <input
        type="text"
        className="search-bar"
        placeholder="반려견의 문제 행동이 궁금해요"
      ></input>
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
