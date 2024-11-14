import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <>
      <h3 className="text-xl font-bold">Login With</h3>
      <div className="flex gap-2 flex-col">
        <button className="btn border border-black">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn border border-black">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
