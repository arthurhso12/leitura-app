import axios from "axios";

const api = axios.create({
  baseURL: "https://leitura-backend.onrender.com"
});

export default api;