import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import API from "./docApi";

const DoctorLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const res = await API.post(
      "/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.accessToken || res.data.token
      );

      alert("Login Successful ✅");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      setError(
        err?.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-container">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow bg1"></div>
      <div className="bg-glow bg2"></div>

      <div className="login-card">

        {/* LEFT SIDE */}

        <div className="login-left">

          <div className="portal-content">

            <div className="portal-icon">
              🧬
            </div>

            <h1>
              Genetic AI
            </h1>

            <p>
              AI Powered Genetic Disease
              Detection & Doctor Portal
            </p>

            <div className="feature-box">

              <div className="feature-item">
                ✔ AI Disease Prediction
              </div>

              <div className="feature-item">
                ✔ Genetic Report Analysis
              </div>

              <div className="feature-item">
                ✔ Secure Doctor Access
              </div>

              <div className="feature-item">
                ✔ Real-time Monitoring
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="login-right">

          <div className="top-badge">
            Doctor Access
          </div>

          <h2>
            Doctor Login
          </h2>

          <p className="sub-text">
            Login to access AI medical dashboard
          </p>

          {error && (
            <div className="error-msg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              {/* <label>
                Doctor ID
              </label> */}

              <input
                type="text"
                name="id"
                placeholder="Enter Doctor ID"
                value={formData.id}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">
{/* 
              <label>
                Password
              </label> */}

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >

              {
                loading
                ? "Logging in..."
                : "Login "
              }

            </button>

          </form>

          <div className="login-footer">

            Don't have an account?

            <a href="/doctor">
              Register
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DoctorLogin;