import "../../css/Post/PostSelectCategory.css";
import { postCategory } from "../../data/category";

const PostSelectCategory = ({
  selectedCategory,
  setSelectedCategory,
  setStep,
}) => {
  const onCategoryClick = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  return (
    <div className="PostSelectCategory">
      <div className="category-list">
        {postCategory.slice(1).map((category, index) => (
          <div
            key={index}
            className={`category-item ${
              selectedCategory.includes(index + 1) ? "selected" : ""
            }`}
            onClick={() => onCategoryClick(index + 1)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="button-group">
        <button
          type="button"
          className={`next-button `}
          onClick={() => setStep(1)}
        >
          이전
        </button>

        <button
          type="button"
          className={`next-button ${
            selectedCategory.length != 0 ? "active" : ""
          }`}
          onClick={() => setStep(3)}
          disabled={!selectedCategory.length}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default PostSelectCategory;
