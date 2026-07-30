import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const doctorName = localStorage.getItem("doctorName");


  if (!doctorName) {
    return <Navigate to="/doctor" />;
  }

  return children;
};

export default PrivateRoute;
