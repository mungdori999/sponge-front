import "../../css/Home/ReadMore.css";
const ReadMore = ({ text, onClick }) => {
  return (
    <div className="ReadMore">
      <button className="ReadMore-btn" onClick={onClick}>
        {text} <span className="plus">+</span>
      </button>
    </div>
  );
};

export default ReadMore;
