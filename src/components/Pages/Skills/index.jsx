import { skills, teaching } from "../../../utils/skills.js";

const Skills = () => {
  return (
    <section className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">
          Education & Skills
        </p>
      </span>
      <div className="flex justify-between flex-wrap">
        <div className="bg-kulrang w-[325px] p-8 skills_card">
          {teaching.map(({ id, year, major, center, mb }) => (
            <div key={id} style={{ marginBottom: `${mb}px` }}>
              <h2 className="text-kulrang_text text-[15px] font-medium">
                {year}
              </h2>
              <h1 className="font-semibold text-[17px] my-1">{center}</h1>
              <h2 className="text-kulrang_text text-[15px] font-medium">
                {major}
              </h2>
            </div>
          ))}
        </div>
        <div className="w-1/2 education_skills">
          {skills.map(({ id, degree, skill }) => (
            <div className="flex items-center mb-5" key={id}>
              <h1 className="font-semibold text-3xl mx-[15px]">{degree}</h1>
              <div className="w-full">
                <div className="mb-1 font-medium">{skill}</div>
                <div className="w-full bg-gray-200 h-3 mb-4">
                  <div
                    className={`bg-orange h-3`}
                    style={{ width: `${degree}` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
