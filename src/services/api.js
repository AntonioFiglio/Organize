import axios from "axios";

const url_API = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: url_API,
});

export default api;
