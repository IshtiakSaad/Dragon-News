import { useLoaderData } from "react-router-dom";
import { FaStar, FaRegEye } from "react-icons/fa"; // Import React Icons

const CategoryNews = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-xl font-bold text-center bg-red-600 text-white py-2 rounded-sm mb-8">
        Category News
      </h1>
      {data.data.map((newsItem) => (
        <div
          key={newsItem._id}
          className="bg-white shadow-md rounded-lg mb-6 overflow-hidden"
        >
          <div className="p-4 flex items-center">
            <img
              src={newsItem.author.img}
              alt={newsItem.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{newsItem.author.name}</h2>
              <p className="text-sm text-gray-600">
                {new Date(newsItem.author.published_date).toDateString()}
              </p>
            </div>
          </div>
          <img
            src={newsItem.image_url}
            alt={newsItem.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{newsItem.title}</h2>
            <p className="text-gray-700 mb-4">{newsItem.details.slice(0, 200)}...</p>
            <a
              href="#"
              className="text-blue-600 hover:underline font-semibold"
            >
              Read More
            </a>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                {Array(Math.round(newsItem.rating.number))
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 mr-1" />
                  ))}
                <span className="text-gray-600 ml-2">
                  {newsItem.rating.number} / 5
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaRegEye className="mr-2" />
                <span>{newsItem.total_view} views</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNews;
