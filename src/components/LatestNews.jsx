import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <>
      <section id="latestNews">
        <p className="flex gap-2 w-11/12 mx-auto">
          <button className="btn btn-error">latest</button>
          <Marquee className="flex gap-4" pauseOnHover="true">
            <Link to="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </Marquee>
        </p>
      </section>
    </>
  );
};

export default LatestNews;
