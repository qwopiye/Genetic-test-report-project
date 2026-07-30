import axios from "axios";

const DOCTOR_API = axios.create({
  baseURL: "http://localhost:3001/genetic/doctor",
  headers: {
    "Content-Type": "application/json",
  },
});

export default DOCTOR_API;