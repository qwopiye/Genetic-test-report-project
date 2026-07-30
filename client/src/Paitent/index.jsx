import React, { useState } from "react";
import "./paitent.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LEFT SIDE (Branding) */}
        <div className="auth-left">
          <h1>🧬 Genetic AI System</h1>
          <p>
            Smart medical prediction system for DNA analysis,
            disease detection & patient management.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="auth-right">

          <h2>Create Account</h2>
          <p className="sub">Patient Registration Portal</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
              required
            />

            <button type="submit">Create Account</button>

            <p className="login-text">
              Already have an account? <span>Login</span>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default UserForm;