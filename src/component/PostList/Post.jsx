import "../../css/PostList/Post.css";
import petImg from "../../assets/basic_pet.png";
import { FaBookmark, FaThumbsUp } from "react-icons/fa";

const Post = ({ post, pet }) => {
  return (
    <div className="Post">
      <div className="post-header">
        <div className="category-container">
          {post.postCategoryList.map((item, index) => (
            <div key={index} className="post-category">
              # {item}
            </div>
          ))}
        </div>
        <div className="title">{post.title}</div>
        <div className="pet-container">
          <div className="pet-info">
            <div className="pet-image">
              <img src={petImg} />
            </div>
            <div className="pet-details">
              <div className="pet-name">{pet.name}</div>
              <div className="pet-description">
                {pet.breed} {pet.gender} {pet.weight}kg, {pet.age}
              </div>
            </div>
          </div>
          <div className="post-created">6시간전</div>
        </div>
      </div>
      <div className="post-body">
        <div className="post-content">{post.content}</div>
      </div>

      <div className="post-bottom">
        <div className="tag-container">
          {post.tagList.map((item, index) => (
            <div key={index} className="post-tag">
              # {item}
            </div>
          ))}
        </div>
        <div className="post-actions">
          <button className="like-button action-button">
            <FaThumbsUp className="icon" />
            12
          </button>
          <button className="bookmark-button action-button">
            <FaBookmark className="icon" />
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
