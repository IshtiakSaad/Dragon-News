import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => {
        const categoryList = data.data.news_category.map(
          (item) => item.category_name
        );
        setCategories(categoryList);
      })
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-600 mb-4">All Categories</h2>
      <ul className="flex flex-col">
        {categories.map((category, index) => (
          <NavLink
            className="pl-12 py-1 text-lg font-bold bg-zinc-50 my-1 hover:scale-105 hover:cursor-pointer"
            key={index}
            to={`/category/${index}`}
          >
            {category}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default LeftNavBar;
