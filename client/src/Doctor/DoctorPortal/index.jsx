import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./docter1.css";

const DoctorRegistration =()=> {
  const [name, setName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorPass, setDoctorPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name && doctorId && doctorPass) {
      localStorage.setItem("doctorName", name);

      alert("Doctor Login Successful ✔");
      navigate("/doctor-portal");
    } else {
      alert("Please Fill All Information ❌");
    }
  };

  return (
    <div className="doctor-page">

      <div className="doctor-card">

        {/* LEFT SIDE BRAND */}
        <div className="doctor-left">
          <h1>🧑‍⚕️ Doctor Portal</h1>
          <p>AI Powered Genetic Test Report System</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="doctor-right">

          <h2>Doctor Login</h2>
          <p className="sub">Secure access for medical professionals</p>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Doctor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Doctor ID"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={doctorPass}
              onChange={(e) => setDoctorPassword(e.target.value)}
            />

            <button type="submit">Login as Doctor</button>

          </form>

        </div>

      </div>

    </div>
  );
}

 export default DoctorRegistration;