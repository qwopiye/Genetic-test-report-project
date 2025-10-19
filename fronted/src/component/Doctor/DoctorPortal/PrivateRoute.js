import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const doctorName = localStorage.getItem("doctorName");

  // If doctor is not logged in, redirect to login page
  if (!doctorName) {
    return <Navigate to="/doctor" />;
  }

  // If logged in, show the requested page
  return children;
};

export default PrivateRoute;
