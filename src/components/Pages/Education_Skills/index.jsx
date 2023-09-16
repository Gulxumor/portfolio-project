import { skills, teaching } from "../../../utils/skills.js";

const Education_Skills = () => {
  return (
    <section className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-20">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          Education & Skills
        </p>
      </span>
      <div className="flex justify-between flex-wrap">
        <div className="bg-orange w-[325px] p-8 skills_card rounded-lg">
          {teaching.map(({ id, year, major, center }) => (
            <div key={id} className={`flex flex-col gap-2`}>
              <h2 className="text-white text-[15px] font-medium">{year}</h2>
              <h1 className="font-semibold text-[17px] my-1 text-slate-200">
                {center}
              </h1>
              <h2 className="text-white text-[15px] font-medium">{major}</h2>
              <div className="border-slate-200 rounded-full border-[1px] my-1" />
            </div>
          ))}
        </div>
        <div className="w-1/2 education_skills">
          {skills.map(({ id, degree, skill }) => (
            <div className="flex items-center mb-5" key={id}>
              <h1 className="font-semibold text-3xl mx-[15px] rounded-md">
                {degree}
              </h1>
              <div className="w-full">
                <div className="mb-1 font-medium">{skill}</div>
                <div className="w-full bg-gray-200 h-3 mb-4 rounded-md">
                  <div
                    className={`bg-orange h-3 rounded-md`}
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

export default Education_Skills;
