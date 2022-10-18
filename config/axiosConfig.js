import axios from "axios";
import { BASE_URL } from "./baseUrl";

const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  (config) => {
    config.headers["x-api-key"] = "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9";
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
