import { NavLink } from "react-router-dom";
import user from "../assets/images/user.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-11/12 items-center mx-auto">
        <div className="start-nav"></div>
        <div className="center-nav">
          <nav className="space-x-4 text-lg text-gray-600 bg-white">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
          </nav>
        </div>
        <div className="end-nav flex justify-center gap-2">
          <img src={user} alt="user-icon" />
          <button className="btn btn-neutral">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
