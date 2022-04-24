import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

const axiosInstance = axios.create({
  baseURL: "https://rest.bandsintown.com",
  headers
});

export default axiosInstance;
