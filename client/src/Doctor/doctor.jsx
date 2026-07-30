import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DOCTOR_API from "./doctorApi";
import "./docter1.css";

const DoctorRegistration = () => {

  const [formData, setFormData] = useState({
    name: "",
    doctorId: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, doctorId, password } = formData;

    if (!name || !doctorId || !password) {
      return alert("Please Fill All Information ❌");
    }

    try {
  setLoading(true);

  const res = await DOCTOR_API.post(
    "/register",
    {
      name: name,
      id: Number(doctorId),
      password: password,
    }
  );

  console.log("Doctor Registered:", res.data);

  alert(
    res.data.message ||
    "Registration Successful ✔"
  );

  // SAVE PROFILE
  localStorage.setItem(
    "doctorProfile",
    JSON.stringify({
      name: name,
      id: doctorId,
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    })
  );

  // GO TO DASHBOARD
  navigate("/dashboard");

} catch (error) {

  console.error(error);

  alert(
    error?.response?.data?.message ||
    "Registration Failed ❌"
  );

} finally {
  setLoading(false);
}
  };

  return (
    <div className="doctor-page">

      <div className="doctor-card">

        {/* LEFT SIDE */}
        <div className="doctor-left">

          <h1>🧑‍⚕️ Doctor Portal</h1>
          <p>AI Powered Genetic Test Report System</p>

        </div>

        {/* RIGHT SIDE */}
        <div className="doctor-right">

          <h2>Doctor Registration</h2>

          <p className="sub">
            Create secure doctor account
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Doctor Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="number"
              name="doctorId"
              placeholder="Doctor ID"
              value={formData.doctorId}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register Doctor"}
            </button>
            <div className="login-footer">
          
          <a href="/dashboard"></a>
        </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default DoctorRegistration;