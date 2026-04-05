import { useState } from "react";
import axios from "axios";
import "./UploadReport.css";

const UploadReport = () => {
  const [file, setFile] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!patientName || !file) {
      alert("Please enter patient name and select a report");
      return;
    }

    const formData = new FormData();
    formData.append("patientName", patientName);
    formData.append("report", file);

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/report/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Report uploaded successfully!");
      setPatientName("");
      setFile(null);
    } catch (error) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>🧬 Genetic Test Report Upload</h2>

        {/* Patient Name */}
        <input
          type="text"
          className="input-field"
          placeholder="Patient Full Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        {/* File Upload */}
        <label className="file-box">
          <input
            type="file"
            accept=".pdf,.jpg,.png,.csv"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <span>{file ? file.name : "Choose Genetic Report File"}</span>
        </label>

        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Report"}
        </button>
      </div>
    </div>
  );
};

export default UploadReport;
