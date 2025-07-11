import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const userData = JSON.parse(localStorage.getItem("loggedUser"));

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
