// Create a new axios instance
import axios from "axios";
import { getCookie } from "../utils/cookie";

const axiosInstance = axios.create();

// Add the authorization header to the instance
const token = getCookie("token").replace(/"/g, "");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosInstance;
