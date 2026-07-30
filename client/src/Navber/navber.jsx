import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import "./nanlink.css";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">🧬 Genetic AI</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/doctor">Doctor</NavLink>
        <NavLink to="/info">Information</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
         <NavLink to="/login">login</NavLink>
         {/* <NavLink to="/my-profile"> My Profil</NavLink>  
        <NavLink to="/logout">logout</NavLink>   */}
      </nav>

      <div className="profile">
        <FaUserCircle
          className="profile-icon"
          onClick={() => setProfileOpen(!profileOpen)}
        />

        {profileOpen && (
          <div className="dropdown">
            <p onClick={() => navigate("/dashboard")}>My Dashboard</p>
            <p onClick={() => navigate("/my-profile")}>My Profile</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navber;