import axios from "axios";
// process.env.NEXTAUTH_URL

const axiosInstance = axios.create({
  baseURL: process.env.NEXTAUTH_URL, // API Base URL
  timeout: 50000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
