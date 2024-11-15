import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Login = () => {
  const { setUser, loginUser } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then((user) => setUser(user.user))
      .catch((e) => console.log(e.code));
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className="text-2xl font-bold text-center pt-8">
            Login your account
          </h3>
          <form className="card-body" onSubmit={handleLoginForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold pt-4 pb-8">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-700">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
