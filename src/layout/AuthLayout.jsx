import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-Poppins bg-[#f3f3f3]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
