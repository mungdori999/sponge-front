import "../../css/Home/Banner.css";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner-text">
        <h3>내 반려동물 문제행동에</h3>
        <h3>정확한 해결방법을</h3>
        <h3>모르겠다면?</h3>
      </div>
      <div className="Banner-button">
        <button>{"무료로 진단 받아보기 >"}</button>
      </div>
    </div>
  );
};

export default Banner;
