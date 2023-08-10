import { FaGithub, FaTv } from "react-icons/fa";
import { projects } from "../../../utils/skills";
import { styles } from "../../../utils/tailwind_variables";
const Portfolio = () => {
  return (
    <section className="w-[80%] m-auto mt-[100px] mb-28" id="portfolio">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Projects</p>
      </span>
      <div className={`flex-wrap ${styles.flex} gap-7`}>
        {projects.map(({ id, src, title, desc, github_link, demo }) => (
          <div
            key={id}
            className={`portfolio_wrapper max-w-[300px] bg-white rounded-lg hover:shadow-2xl border-2 border-[#f0f0f0]`}
          >
            <img
              className="rounded-t-lg w-[300px] h-[195px] portfolio_img"
              src={src}
              alt="main_img"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {title}
              </h5>
              <p className="mb-3 font-normal text-kulrang_text dark:text-gray-400">
                {desc}
              </p>

              <div className="flex justify-between">
                <a
                  rel="noreferrer"
                  href={github_link}
                  target="_blank"
                  className="portfolio_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-amber-500 focus:outline-none active:scale-110"
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
      </div>
    </section>
  );
};

export default Portfolio;
