import api from "../../api/axios";

export const handleNextStep =
  ({ email, password, confirmPassword, setError, setStep }) =>
  (e) => {
    e.preventDefault();

    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    if (!password) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    if (password.length < 8 || password.length >= 100) {
      setError("비밀번호는 8자 이상 100자 미만이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    setStep(2);
  };

export const registerOwner =
  ({ email, password, nickname, gender, phoneNumber, setError, onSuccess }) =>
  async (e) => {
    e.preventDefault();

    // --- 1. 입력값 검증 ---
    if (
      !nickname ||
      nickname.trim().length < 2 ||
      nickname.trim().length >= 10
    ) {
      setError("닉네임은 2자 이상 10자 미만이어야 합니다.");
      return;
    }

    if (!gender) {
      setError("성별을 선택해주세요.");
      return;
    }

    const phoneRegex = /^010\d{8}$/; // 010으로 시작하는 11자리 번호
    if (!phoneRegex.test(phoneNumber)) {
      setError("휴대폰 번호를 올바르게 입력해주세요. (예: 01012345678)");
      return;
    }

    setError("");

    try {
      const response = await api.post("/api/owner", {
        email,
        password,
        nickname,
        gender,
        phoneNumber,
      });

      console.log("회원가입 성공:", response.data);
      onSuccess();
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("서버 요청 중 오류가 발생했습니다.");
      }
    }
  };
