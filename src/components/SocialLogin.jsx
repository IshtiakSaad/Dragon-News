import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold text-gray-600 mb-2">Login With</h1>
      <button className="btn w-full bg-transparent mb-1 border-zinc-500"><FaGoogle />Login with Google</button>
      <button className="btn w-full bg-transparent border-blue-400"><FaFacebook />Login with Facebook</button>
    </div>
  );
};

export default SocialLogin;
