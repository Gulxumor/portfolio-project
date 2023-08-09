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
      <div className={`flex-wrap ${styles.flex} gap-1`}>
        {projects.map(({ id, src, title, desc }) => (
          <div
            key={id}
            className={`portfolio_wrapper max-w-sm bg-white border border-kulrang rounded-lg hover:shadow-2xl dark:bg-kulrang dark:border-gray-700`}
          >
            <img
              className="rounded-t-lg w-[382px] h-[195px] portfolio_img"
              src={src}
              alt="main_img"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-orange">
                {title}
              </h5>
              <p className="mb-3 font-normal text-kulrang_text dark:text-gray-400">
                {desc}
              </p>

              <div className="flex justify-between">
                <button className="portfolio_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-200 dark:bg-orange dark:hover:bg-orange dark:focus:ring-amber-500">
                  Source code
                  <FaGithub className="w-3.5 h-3.5 ml-2" />
                </button>
                <button className="portfolio_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-200 dark:bg-orange dark:hover:bg-orange dark:focus:ring-amber-500">
                  Live Demo
                  <FaTv className="w-3.5 h-3.5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
