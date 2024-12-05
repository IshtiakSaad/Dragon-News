import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 justify-between items-center mb-8">
      <div className=""></div>
      <div className="nav space-x-5 flex justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-2 justify-end">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="bg-gray-800 px-8 py-1 text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
