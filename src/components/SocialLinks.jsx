import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-600 mb-2">Find Us On</h2>
      <button className="btn rounded-none w-full bg-transparent border-zinc-300">
        <FaFacebook />
        Facebook
      </button>
      <button className="btn rounded-none w-full bg-transparent border-zinc-300">
        <FaTwitter />
        Twitter
      </button>
      <button className="btn rounded-none w-full bg-transparent border-zinc-300">
        <FaInstagram />
        Instagram
      </button>
    </div>
  );
};

export default SocialLinks;
