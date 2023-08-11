import "./style.css";
import { education } from "../../../utils/educations";
import { styles } from "../../../utils/tailwind_variables";

const Education = () => {
  return (
    <section className="w-[80%] m-auto h-screen mt-10" id="skills">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Skills</p>
      </span>
      {/* <div
        className={`flex w-full border-x-[5px] border-black flex-col overflow-x-hidden relative h-[600px] gap-64`}
      >
        <div>
          <hr className="h-3 w-full mt-[45px]" />
          <div className={`mt-[-30px] flex absolute moveRight`}>
            {education.map(({ id, icon, name, desc }) => (
              <SkillsCard key={id} icon={icon} name={name} desc={desc} />
            ))}
          </div>
        </div>
        <div>
          <hr className="h-3 w-full mt-[45px]" />
          <div className={`mt-[-30px] flex absolute moveLeft`}>
            {education.map(({ id, icon, name, desc }) => (
              <SkillsCard2 key={id} icon={icon} name={name} desc={desc} />
            ))}
          </div>
        </div>
      </div> */}
      <div className="flex gap-5 flex-wrap mt-20">
        {education.map(({ icon, name, color, width, url, link }, index) => (
          <div
            className={`w-40 p-2 border border-gray-200 rounded-lg shadow rotate-3`}
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
              className="mb-2 text-2xl font-semibold tracking-tight text-white text-center "
              style={{ fontSize: `${width ? width : ""}` }}
            >
              <h1>{name}</h1>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
