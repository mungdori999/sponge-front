import axios from "axios";
import routerUrl from "../data/router-url";
import requestUrl from "./request-url";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL || "http://localhost:8080",
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 처리
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 발생 && 재시도 한 번만 허용
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.warn("리프레시 토큰이 없습니다. 다시 로그인해야 합니다.");
        window.location.href = routerUrl.login;
        return Promise.reject(error);
      }

      try {
        // 새 토큰 요청
        const res = await axios.post(
          `${
            import.meta.env.VITE_BACKEND_API_BASE_URL || "http://localhost:8080"
          }${requestUrl.reissue}`,
          { refreshToken }
        );

        // 새 accessToken 저장
        const newAccessToken = res.data.accessToken;
        const newRefreshToken = res.data.refreshToken;

        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        // 실패한 요청 헤더를 새 토큰으로 갱신하고 재요청
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("토큰 재발급 실패:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = requestUrl.login; // 다시 로그인 유도
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
