import "./style.css";
import { SkillsCard, SkillsCard2 } from "./SkillsCard";
import { education } from "../../../utils/educations";

const Education = () => {
  return (
    <section className="w-[80%] m-auto" id="skills">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Skills</p>
      </span>
      <div
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
      </div>
    </section>
  );
};

export default Education;
