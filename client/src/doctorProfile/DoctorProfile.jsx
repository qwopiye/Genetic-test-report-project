import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import API from "./profileApi";

const Profile = () => {

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialization: "",
    hospital: "",
    bmdcRegNo: "",
    bio: "",
    address: "",
  });

  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const res = await API.get("/");

      setFormData({
        name: res.data.data.name || "",
        phone: res.data.data.phone || "",
        specialization: res.data.data.specialization || "",
        hospital: res.data.data.hospital || "",
        bmdcRegNo: res.data.data.bmdcRegNo || "",
        bio: res.data.data.bio || "",
        address: res.data.data.address || "",
      });

      setAvatar(res.data.data.avatar || "");

    } catch (err) {

      console.log(err);

      setError(
        err?.response?.data?.message ||
        "Profile load failed"
      );

    } finally {

      setLoading(false);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setSaving(true);

    setError("");

    try {
      const res = await API.put(
        "/",
        formData
      );

      alert("Profile Updated Successfully ✅");

      setFormData({
        name: res.data.data.name || "",
        phone: res.data.data.phone || "",
        specialization: res.data.data.specialization || "",
        hospital: res.data.data.hospital || "",
        bmdcRegNo: res.data.data.bmdcRegNo || "",
        bio: res.data.data.bio || "",
        address: res.data.data.address || "",
      });

    } catch (err) {

      console.log(err);

      setError(
        err?.response?.data?.message ||
        "Profile update failed"
      );

    } finally {

      setSaving(false);

    }
  };

  const handleAvatarClick = () => {

    fileInputRef.current?.click();

  };

  const handleAvatarChange = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {

      setError("Image must be under 2MB");

      return;
    }

    const uploadData = new FormData();

    uploadData.append("avatar", file);

    try {
      const res = await API.put(
        "/avatar",
        uploadData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setAvatar(res.data.data.avatar);

      alert("Profile Picture Updated ✅");

    } catch (err) {

      console.log(err);

      setError(
        err?.response?.data?.message ||
        "Avatar upload failed"
      );

    }
  };

  if (loading) {

    return (
      <div className="profile-container">
        <p className="loading-text">Loading profile...</p>
      </div>
    );
  }

  return (

    <div className="profile-container">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow bg1"></div>
      <div className="bg-glow bg2"></div>

      <div className="profile-card">

        {/* LEFT SIDE */}

        <div className="profile-left">

          <div
            className="avatar-wrap"
            onClick={handleAvatarClick}
          >

            {avatar ? (
              <img
                src={`http://localhost:3001${avatar}`}
                alt="avatar"
                className="avatar-img"
              />
            ) : (
              <div className="avatar-placeholder">
                🧬
              </div>
            )}

            <div className="avatar-overlay">
              Change Photo
            </div>

          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/jpeg,image/png,image/webp"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />

          <h1>{formData.name || "Doctor"}</h1>

          <p>{formData.specialization || "Genetic AI Portal"}</p>

          <div className="feature-box">

            <div className="feature-item">
              ✔ {formData.hospital || "Hospital not set"}
            </div>

            <div className="feature-item">
              ✔ BMDC: {formData.bmdcRegNo || "N/A"}
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="profile-right">

          <div className="top-badge">
            Doctor Profile
          </div>

          <h2>
            Edit Profile
          </h2>

          <p className="sub-text">
            Update your professional information
          </p>

          {error && (
            <div className="error-msg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="hospital"
                placeholder="Hospital / Clinic"
                value={formData.hospital}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="bmdcRegNo"
                placeholder="BMDC Registration No"
                value={formData.bmdcRegNo}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <textarea
                name="bio"
                placeholder="Short bio"
                rows={4}
                maxLength={500}
                value={formData.bio}
                onChange={handleChange}
              />

            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={saving}
            >

              {
                saving
                ? "Saving..."
                : "Save Changes"
              }

            </button>

          </form>

          <div className="login-footer">

            <a onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;
