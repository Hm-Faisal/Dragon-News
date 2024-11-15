import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

const News = () => {
  const { data: newsArray } = useLoaderData();
  const news = newsArray[0];

  return (
    <div className="font-Poppins">
      <Header />
      <main className="grid grid-cols-12 w-11/12 mx-auto mt-3 gap-8">
        <section className="col-span-9">
          <h2 className="text-2xl font-semibold ">Dragon News</h2>
          <div className="p-8">
            <div className="flex flex-col gap-4">
              <img src={news.image_url} alt="" />
              <h3 className="text-2xl font-bold">{news.title}</h3>
              <p className="text-base ">{news.details}</p>
            </div>
            <Link
              to={`/category/${news.category_id}`}
              className="btn btn-success mt-8"
            >
              All news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default News;
