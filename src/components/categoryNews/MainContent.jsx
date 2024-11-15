import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainContent = () => {
  const { data: categoryNews } = useLoaderData();

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Dragon News Home</h3>
      <p className="text-sm text-gray-400">
        {categoryNews.length} news found on this category
      </p>
      <div className="flex flex-col gap-4">
        {categoryNews.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
