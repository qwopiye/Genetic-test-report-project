import { BrowserRouter ,Routes,Route} from "react-router";
//import './App.css';
import { useEffect, useState } from "react";

import Homes from "./component/Home";
import TestForm from "./component/Paitent";
import Navber from "./component/Navber/Navber";
import Doctor from "./component/Doctor";

import PrivateLogin from "./component/Doctor/DoctorPortal/PrivateLogin";
import PrivateRoute from "./component/Doctor/DoctorPortal/PrivateRoute";


function App() {
  const[data ,setData]=useState(null);
 useEffect(() => {
    fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
 

  return (

    <div className="App-header">

     
      <BrowserRouter>
      <Navber/>
        <Routes>
          <Route path="/home" element={<Homes/>}/>
          <Route path="/login" element={<TestForm/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route
          path="/doctor-portal"
          element={
            <PrivateRoute>
              <PrivateLogin />
            </PrivateRoute>
          }
        />
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;

