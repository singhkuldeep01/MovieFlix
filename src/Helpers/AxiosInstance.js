import axios from "axios";
import { OMDB_API } from "./Constants";

const axiosInstance = axios.create({
  baseURL: OMDB_API,
  params: { apikey: import.meta.env.VITE_OMDB_API_KEY }, // Load from .env
});

export default axiosInstance;
    