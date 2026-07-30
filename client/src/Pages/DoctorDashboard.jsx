import React, { useState } from "react";
import './Dashboard.css';

const DoctorDashboard = () => {
  const [formData, setFormData] = useState({
    Id: "",
    Age: "",
    Gender: "",
    Cancer_Type: "",
    Laterality: "",
    Stage_at_Diagnosis: "",
    Treatment_Type: "",
    Surgery_Status: "",
    Radiation_Therapy: "",
    Chemotherapy: "",
    Genetic_Markers: "",
    Family_History: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // এখানে API কল করে prediction request পাঠাবে
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <div className="form-group">
          <label>Patient ID</label>
          <input type="number" name="Id" value={formData.Id} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="Age" value={formData.Age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="Gender" placeholder="Male / Female" value={formData.Gender} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Cancer Type</label>
          <input type="text" name="Cancer_Type" placeholder="Retinoblastoma" value={formData.Cancer_Type} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Laterality</label>
          <input type="text" name="Laterality" placeholder="Left / Right / Both" value={formData.Laterality} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Stage at Diagnosis</label>
          <input type="text" name="Stage_at_Diagnosis" placeholder="Stage II" value={formData.Stage_at_Diagnosis} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Treatment Type</label>
          <input type="text" name="Treatment_Type" placeholder="Surgery" value={formData.Treatment_Type} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Surgery Status</label>
          <input type="text" name="Surgery_Status" placeholder="Yes / No" value={formData.Surgery_Status} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Radiation Therapy</label>
          <input type="text" name="Radiation_Therapy" placeholder="True / False" value={formData.Radiation_Therapy} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Chemotherapy</label>
          <input type="text" name="Chemotherapy" placeholder="True / False" value={formData.Chemotherapy} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Genetic Markers</label>
          <input type="text" name="Genetic_Markers" placeholder="RB1 Mutation" value={formData.Genetic_Markers} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Family History</label>
          <input type="text" name="Family_History" placeholder="True / False" value={formData.Family_History} onChange={handleChange} required />
        </div>
      </div>

      <button type="submit">
        Predict Eye Cancer Outcome
      </button>
    </form>
  );
};

export default DoctorDashboard;