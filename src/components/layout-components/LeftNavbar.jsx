import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
      );
      const data = await res.json();
      setCategories(data.data.news_category);
    })();
  }, []);

  console.log(categories);

  return (
    <div>
      <h3 className="font-bold text-xl">
        All Categories ({categories.length})
      </h3>
      <div className="categories mt-4 flex flex-col gap-2 items-start">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            key={category.category_id}
            className="px-4 py-2 rounded w-full"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
