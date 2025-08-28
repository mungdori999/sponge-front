import "../../css/Home/PostCategory.css";
import { postCategory } from "../../data/category";
const PostCategory = ({ selectedIndex, onSelect }) => {
  const items = postCategory;
  return (
    <div className="PostCategory">
      <div className="post-category">
        <div className="scroll-container">
          {items.map((item, i) => (
            <div
              key={i}
              className={`scroll-item ${selectedIndex === i ? "selected" : ""}`}
              onClick={() => onSelect(i)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCategory;
