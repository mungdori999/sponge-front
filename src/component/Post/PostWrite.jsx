import "../../css/Post/PostWrite.css";
import Dropzone from "react-dropzone";

const PostWrite = () => {
  return (
    <div className="PostWrite">
      <div className="post-write-item">
        <div className="title">
          <label htmlFor="title">
            제목<span className="required">*</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="ex) 강아지 짖음이 너무 심해요"
          />
        </div>
        <div className="content">
          <label htmlFor="content">
            내용<span className="required">*</span>
          </label>
          <textarea
            id="content"
            placeholder="강아지가 주로 행동하는 상황과 문제 행동에 대해 자세히 작성해주세요."
            rows={10}
          ></textarea>
        </div>

        <div className="duration">
          <label htmlFor="duration">
            문제행동 지속기간 <span className="required">*</span>
          </label>
          <input id="duration" type="text" placeholder="ex) 1년 미만,모름" />
        </div>

        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <div className="file-upload" {...getRootProps()}>
              <label>
                파일 업로드 <span className="choice">(선택사항)</span>
              </label>
              <div class="file-input">
                {/* <FaCamera className="camera-icon" /> */}
                <span className="file-text">
                  문제행동시 사진이나 동영상을 첨부해주세요
                </span>
              </div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default PostWrite;
