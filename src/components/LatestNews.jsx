import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex bg-base-200 p-3 gap-2 items-center mb-8">
      <p className="bg-red-600 text-white py-3 px-5 font-bold">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-bold text-gray-700">
          Match Highlights: Germany vs Spain — As it Happened Germany and Spain
          faced off in a thrilling match that had fans on the edge of their
          seats. Both teams displayed incredible skill and determination, with
          each side creating numerous chances. The match saw a dynamic display
          of attacking football, with standout performances from key players.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
