import { Routes, Route } from "react-router-dom";
import Navber from "../Navber/navber";
import Homes from "../Home/home";
import Doctor from "../Doctor/doctor";
import Info from "../Information/index";
import DoctorLogin from "../doctorLogin/doctorLogin";
 import Logout from "../DocLogout/error";


import DoctorDashboard from "../Pages/DoctorDashboard";
import PrivateRoute from "../Doctor/DoctorPortal/DoctorPortal";
import Profile from "../doctorProfile/DoctorProfile";



const Index = () => {
  return (
    <div className="App-header">

      <Navber />

      <Routes>
           {/* Public Routes */}
        <Route path="/" element={<Homes />} />
        <Route path="/home" element={<Homes />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<DoctorLogin />} /> 
        <Route path="/my-profile" element={<Profile />}/>  
          <Route path="/logout" element={<Logout />} />  

     

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DoctorDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
   

    </div>
  );
};

export default Index;