import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateLogins = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("patientToken");
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to Patient Dashboard</h2>
      <p>Here you can view your genetic test data.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default PrivateLogins;
