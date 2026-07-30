import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivateLogin() {
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("doctorName");
    if (name) {
      setDoctorName(name);
    } else {
      navigate("/doctor"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("doctorName");
    navigate("/doctor");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, Dr. {doctorName}</h1>
      <button onClick={handleLogout} style={{ padding: "8px 20px", marginTop: "20px", background: "red", color: "white" }}>
        Logout
      </button>
      <p>✅ Only Doctor</p>
    </div>
  );
}

export default PrivateLogin;
