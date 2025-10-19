// src/components/TestForm.jsx
import React, { useState } from 'react';
import './paitent.css'

const TestForm = () => {

   const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    geneticMarkers: "",
  });

  const [errors, setErrors] = useState({}); // for validation messages
  const [submitted, setSubmitted] = useState(false); // for success message

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form validation
  const validate = () => {
    let newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    } else if (formData.patientName.length < 3) {
      newErrors.patientName = "Name must be at least 3 characters";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age <= 0) {
      newErrors.age = "Age must be greater than 0";
    }

    if (!formData.geneticMarkers.trim()) {
      newErrors.geneticMarkers = "Genetic markers are required";
    }

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data Submitted ✅:", formData);

      // Clear form
      setFormData({
        patientName: "",
        age: "",
        geneticMarkers: "",
      });

      // Clear errors and show success
      setErrors({});
      setSubmitted(true);

      // Hide success message after 3s
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className='form-container'>
      <h2>Paitent Information</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label >Patient Name:</label>
          <input
            type="text"
            name="patientName"
            className='name'
            value={formData.patientName}
            onChange={handleChange}
            required
          />
          {errors.patientName && (
            <p style={{ color: "red" }}>{errors.patientName}</p>
          )}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            className='name'
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <div>
          <label>Genetic Markers:</label>
          <textarea
            name="geneticMarkers"
            className='genetic'
            value={formData.geneticMarkers}
            onChange={handleChange}
            required
          />
          {errors.geneticMarkers && (
            <p style={{ color: "red" }}>{errors.geneticMarkers}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>

      {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
    </div>
  );
};


export default TestForm;
