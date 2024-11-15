import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contextProvider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin, setUser } = useContext(AuthContext);
  const googleLoginHandler = () => {
    googleLogin()
      .then((user) => setUser(user.user))
      .catch((e) => console.log(e));
  };

  const githubLoginHandler = () => {
    githubLogin()
      .then((user) => setUser(user.user))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h3 className="text-xl font-bold">Login With</h3>
      <div className="flex gap-2 flex-col">
        <button
          className="btn border border-black"
          onClick={googleLoginHandler}
        >
          <FcGoogle /> Login with Google
        </button>
        <button
          className="btn border border-black"
          onClick={githubLoginHandler}
        >
          <FaGithub />
          Login with Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
