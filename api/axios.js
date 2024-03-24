import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4b7fa30b485201dfb35cbef5ebb68127",
    language: "ko-KR",
  },
});

export default axiosInstance;
