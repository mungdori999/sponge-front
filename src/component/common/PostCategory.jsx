import "../../css/Home/PostCategory.css";
import { useState } from "react";
import { postCategory } from "../../data/category";
const PostCategory = () => {
  const items = postCategory;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="PostCategory">
      <div className="post_category">
        <div className="scroll-container">
          {items.map((item, i) => (
            <div
              key={i}
              className={`scroll-item ${selectedIndex === i ? "selected" : ""}`}
              onClick={() => setSelectedIndex(i)}
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
