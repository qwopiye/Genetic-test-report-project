import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

   
    navigate("/login");
  }, [navigate]);

  return <h2 style={{ textAlign: "center" ,tabSize:"10px"}}>Logging out...</h2>;
};

export default Logout;