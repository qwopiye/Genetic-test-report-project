import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/genetic/doctor/auth",
  withCredentials: true,
});

export default API;