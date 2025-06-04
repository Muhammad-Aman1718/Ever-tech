import axios from "axios";
// process.env.NEXTAUTH_URL

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // API Base URL
  timeout: 50000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
