import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default PrivateRouter;
