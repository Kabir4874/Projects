import axios from "axios";

const api = axios.create({
  // backend url
  baseURL: "http://localhost:5000/api",
});

export default api;
