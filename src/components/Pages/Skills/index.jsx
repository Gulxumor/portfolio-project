import "./style.css";
import Marquee from "react-fast-marquee";
import { education } from "../../../utils/educations";
import { styles } from "../../../utils/tailwind_variables";

const Skills = () => {
  return (
    <section className="w-[80%] m-auto my-20" id="skills">
      <span className="relative flex h-8 mb-20">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          Skills
        </p>
      </span>

      <div className="border-x-4 border-orange py-5">
        <Marquee autoFill={true} pauseOnHover direction="right">
          {education.map(({ icon, name, color, width, url, link }, index) => (
            <a
              href={link}
              rel="noreferrer"
              target={"_blank"}
              className="mb-2 text-2xl font-semibold tracking-tight text-white text-center "
              style={{ fontSize: `${width ? width : ""}` }}
              key={index}
            >
              {" "}
              <div
                className={`w-40 p-2 rounded-lg mr-5 move my-1.5`}
                style={{ background: `${color}` }}
              >
                <div
                  className={`text-4xl text-white mb-3 m-auto pt-2 ${styles.flex}`}
                >
                  {icon ? (
                    icon
                  ) : (
                    <img src={url} alt="logo" className="w-[36px] h-[36px]" />
                  )}
                </div>
                <h1>{name}</h1>{" "}
              </div>
            </a>
          ))}
        </Marquee>
        <Marquee
          className="mt-20"
          autoFill={true}
          pauseOnHover
          direction="left"
        >
          {education.map(({ icon, name, color, width, url, link }, index) => (
            <div
              className={`w-40 p-2 rounded-lg mr-5 my-1.5 move`}
              style={{ background: `${color}` }}
              key={index}
            >
              <div
                className={`text-4xl text-white mb-3 m-auto pt-2 ${styles.flex}`}
              >
                {icon ? (
                  icon
                ) : (
                  <img src={url} alt="logo" className="w-[36px] h-[36px]" />
                )}
              </div>

              <a
                href={link}
                rel="noreferrer"
                target={"_blank"}
                className="mb-2 text-2xl font-semibold tracking-tight text-white text-center"
                style={{ fontSize: `${width ? width : ""}` }}
              >
                <h1>{name}</h1>
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
