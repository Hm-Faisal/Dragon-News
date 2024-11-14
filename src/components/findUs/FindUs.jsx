import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Find Us On</h3>
      <div className="*:w-full rounded *:text-start *:bg-white">
        <button className="block px-4 py-2 btn">
          <FaFacebookF className="inline-block" /> Facebook
        </button>
        <button className="block px-4 py-2 btn">
          <FaTwitter className="inline-block" /> Twitter
        </button>
        <button className="block px-4 py-2 btn">
          <FaInstagram className="inline-block" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
