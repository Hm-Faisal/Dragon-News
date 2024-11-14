import FindUs from "../findUs/FindUs";
import SocialLogin from "../socialLogin/SocialLogin";

const RightNavbar = () => {
  return (
    <div className="space-y-4">
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightNavbar;
