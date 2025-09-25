import axios from "axios";

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

export default api;
