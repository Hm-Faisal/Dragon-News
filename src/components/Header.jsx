import moment from "moment";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="my-8 flex justify-center items-center flex-col gap-4">
        <img src={logo} alt="Logo" className="" />
        <p className="text-base text-gray-500 font-semibold">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </header>
    </>
  );
};

export default Header;
