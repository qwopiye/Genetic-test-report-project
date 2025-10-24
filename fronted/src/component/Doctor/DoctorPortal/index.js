import { useState } from "react";
import { useNavigate } from "react-router-dom";

 import './doctor1.css'


function DoctorLogin() {
  const [name, setName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorPass, setDoctorPassword] = useState("");                                          
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple Check (you can replace this with API authentication later)
    if (name !== "" && doctorId !== "" && doctorPass!=="") {
     localStorage.setItem("doctorName", name);
    
      navigate("/doctor-portal");
    } else {
      alert("Please Fill Information");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor:"#1D2A35" }}>
      <h2>Doctor Login</h2>
      <form onSubmit={handleLogin}>
       <div>
         <input
          type="text"
          placeholder="Enter Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
        //    style={{ padding: "12px", margin: "20px", width:"70%" }}
         
        />
       </div>
       <div>
           <input
          type="number"
          placeholder="Enter Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          className="name"
        
        //    style={{ padding: "12px", margin: "20px",width:"70%" }}
        />
       </div>
        <div>
            <input
          type="password"
          placeholder="Password"
          value={doctorPass}
          onChange={(e) => setDoctorPassword(e.target.value)}
          className="name"
        
        //    style={{ padding: "12px", margin: "20px",width:"70%" }}
        />
        </div>
        <button type="submit"className="bnt">
          Login
        </button>
      </form>
    </div>
  );
}

export default DoctorLogin;





