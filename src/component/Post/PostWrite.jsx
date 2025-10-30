import "../../css/Post/PostWrite.css";

const PostWrite = () => {
  return (
    <div className="PostWrite">
      <div className="post-write-item">
        <div className="title">
          <label htmlFor="title">
            제목<span className="required">*</span>
          </label>
          <input id="title" type="text" placeholder="예) 멍멍이" />
        </div>
        <div className="content">
          <textarea
            id="content"
            placeholder="내용을 작성해주세요."
            rows={10}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PostWrite;
