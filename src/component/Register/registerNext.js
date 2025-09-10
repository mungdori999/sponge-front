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

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    setStep(2);
  };

export const registerOwner =
  ({ nickname, gender, phoneNumber, setError, onSuccess }) =>
  async (e) => {
    e.preventDefault();

    // --- 1. 입력값 검증 ---
    if (!nickname || nickname.trim().length < 2) {
      setError("닉네임은 최소 2글자 이상이어야 합니다.");
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

    setError(""); // 에러 초기화
  };
