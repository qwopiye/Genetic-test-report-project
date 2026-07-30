import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/genetic/doctor/profile",
  withCredentials: true,
});

export default API;
