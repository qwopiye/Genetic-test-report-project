import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Paitentportal() {
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
      <p style={{fontSize:"2rem"}}>Only Doctor </p>
    </div>
  );
}

export default Paitentportal;