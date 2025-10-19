import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorPortal() {
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("doctorName");
    if (name) {
      setDoctorName(name);
    } else {
      navigate("/doctor"); // redirect if no login
    }
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, Dr. {doctorName}</h1>
      <p>✅ This is your Doctor Portal</p>
    </div>
  );
}

export default DoctorPortal;
