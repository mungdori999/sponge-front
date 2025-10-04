import "../../css/Pet/AddPetImage.css";
import { FaPlus } from "react-icons/fa";
import petImg from "../../assets/basic_pet.png";
import { useState } from "react";
import api from "../../api/axios";
import requestUrl from "../../api/request-url";

const AddPetImage = ({ stepBack, pet }) => {
  const [image, setImage] = useState(null);

  // 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 미리보기용 URL 생성
      setImage(imageUrl);
    }
  };
  const saveImg = () => {};
  const savePet = () => {
    saveImg();

    api
      .post(requestUrl.pet, pet, {
        params: {
          ownerId: 1,
        },
      })
      .then((response) => {
        console.log("Pet saved successfully:", response.data);
        // 추가적인 성공 처리 로직
      })
      .catch((error) => {
        console.error("Error saving pet:", error);
        // 추가적인 오류 처리 로직
      });
  };

  return (
    <div className="AddPetImage">
      <div className="image-upload-container">
        <label htmlFor="pet-upload" className="image-label">
          <img
            src={image || petImg} // 업로드 전엔 기본 이미지
            alt="pet"
            className="add-img"
          />
          <div className="plus-icon">
            <FaPlus />
          </div>
        </label>

        <input
          id="pet-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="btn-container">
        <button className="back-btn" onClick={stepBack}>
          이전
        </button>
        <button className="finish-btn" onClick={savePet}>
          완료
        </button>
      </div>
    </div>
  );
};

export default AddPetImage;
