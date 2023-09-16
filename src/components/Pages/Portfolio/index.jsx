import Marquee from "react-fast-marquee";
import { FaGithub, FaTv } from "react-icons/fa";
import { projects } from "../../../utils/skills";

const Portfolio = () => {
  return (
    <section className="w-[80%] m-auto my-20" id="portfolio">
      <span className="relative flex h-8 mb-20">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          Projects
        </p>
      </span>
      <Marquee autoFill={true} pauseOnHover direction="right">
        {projects.map(({ id, src, title, desc, github_link, demo }) => (
          <div
            key={id}
            className={`portfolio_wrapper max-w-[300px] bg-white rounded-lg hover:shadow-2xl border-2 border-[#f0f0f0] ml-7`}
          >
            <img
              className="rounded-t-lg w-[300px] h-[195px] portfolio_img hover:skew-x-1"
              src={src}
              alt="main_img"
            />
            <div className="p-5 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {title}
              </h5>
              <div className="flex justify-between">
                <a
                  rel="noreferrer"
                  href={github_link}
                  target="_blank"
                  className="portfolio_btn mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-amber-500 focus:outline-none active:scale-110"
                >
                  Source code
                  <FaGithub className="w-3.5 h-3.5 ml-2" />
                </a>
                <a
                  rel="noreferrer"
                  href={demo}
                  target="_blank"
                  className="portfolio_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:outline-none active:scale-110"
                >
                  Live Demo
                  <FaTv className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Portfolio;
