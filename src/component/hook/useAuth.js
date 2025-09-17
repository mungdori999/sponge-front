import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [loginType, setLoginType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
      try {
        const decoded = jwtDecode(token);
        setLoginType(decoded.loginType);
        setNickname(decoded.nickname);
      } catch (error) {
        console.error("JWT decode 실패:", error);
        setAccessToken(null);
        setLoginType(null);
        setNickname(null);
      }
    }
  }, []);

  return { accessToken, loginType, nickname };
};

export default useAuth;
