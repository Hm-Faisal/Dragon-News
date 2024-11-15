import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = ({ news }) => {
  const latestnews = news.data;

  return (
    <>
      <section id="latestNews">
        <div className="flex gap-2 w-11/12 mx-auto">
          <button className="btn btn-error">latest</button>
          <Marquee className="flex gap-4" pauseOnHover="true">
            {latestnews.map((newstitle) => (
              <Link
                to={`/news/${newstitle._id}`}
                className="mx-4"
                key={newstitle._id}
              >
                {newstitle.title}
              </Link>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
