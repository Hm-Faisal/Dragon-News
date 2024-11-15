import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <nav className="flex justify-between w-11/12 items-center mx-auto py-4">
        <div className="start-nav">{user && user.email}</div>
        <div className="center-nav">
          <nav className="space-x-4 text-lg text-gray-600 bg-white">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
          </nav>
        </div>
        <div className="end-nav flex justify-center gap-2">
          {user ? (
            <>
              <div>
                <img src={user.photoURL} className="w-10 rounded-full" />
                <span>{user.displayName}</span>
              </div>
              <button onClick={logoutUser} className="btn btn-neutral">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/auth/login"} className="btn btn-neutral">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
