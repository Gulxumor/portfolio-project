import { Card } from "antd";
import { FaGithub, FaTv } from "react-icons/fa";
import { projects } from "../../../utils/skills";
import { styles } from "../../../utils/tailwind_variables";

const Portfolio = () => {
  const { Meta } = Card;
  return (
    <section className="w-[80%] m-auto mt-[100px] mb-28" id="portfolio">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Projects</p>
      </span>
      <div className={`flex-wrap ${styles.flex}`}>
        {projects.map(({ id, src, title, desc }) => (
          <Card
            key={id}
            style={{
              width: 300,
            }}
            hoverable
            cover={<img alt="example" src={src} className="h-[180px]" />}
            actions={[
              <FaGithub
                key="github"
                className={`ml-10 ${styles.hoverScale}`}
              />,
              <FaTv key="demo" className={`ml-20 ${styles.hoverScale}`} />,
            ]}
            className="m-5"
          >
            <Meta title={title} description={desc} />
          </Card>
        ))}

        {/* <>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#ddd">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#dd">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#dddd"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </> */}
      </div>
    </section>
  );
};

export default Portfolio;
