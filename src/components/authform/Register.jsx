import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Login = () => {
  const { createNewUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();

    // Get form Data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be 5 character or long" });
      return;
    }

    const profile = form.get("profile");
    const email = form.get("email");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUser(name, profile)
          .then(() => navigate("/"))
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        const code = e.code;
        const msg = e.message;
        console.log(code, msg);
      });

    console.log({ name, profile, email, password });
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className="text-2xl font-bold text-center pt-8">
            Register your account
          </h3>
          <form className="card-body" onSubmit={handleRegisterForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
              {error.name && (
                <label className="label text-red-600 text-sm">
                  {error.name}
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="profile"
                type="text"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <input type="checkbox" required className="mr-2" />
              Accept Term & Conditions
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold pt-4 pb-8">
            Already Have An Account ?
            <Link to={"/auth/login"} className="text-red-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
