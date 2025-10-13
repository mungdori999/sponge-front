import "../../css/Post/PostSelectCategory.css";
import { postCategory } from "../../data/category";

const PostSelectCategory = () => {
  return (
    <div className="PostSelectCategory">
      {postCategory.slice(1).map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default PostSelectCategory;
