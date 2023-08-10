import { styles } from "../../../../utils/tailwind_variables";

const ExperiencesCard = ({
  job,
  company,
  remote,
  time,
  period,
  desc1,
  desc2,
}) => {
  return (
    <div className="flex bg-kulrang p-[35px] w-full">
      <div className="bg-kulrang w-[260px]">
        <h1 className="text-[20px] mt-1 font-medium ">{job}</h1>
        <p className="text-[14px] text-kulrang_text italic">{remote}</p>
        <h2 className="text-kulrang_text text-[15px] mt-1 mb-2">{period}</h2>
        <p
          className={`bg-orange w-fit py-[5px] px-[50px] rounded text-white ${styles.flex} font-medium`}
        >
          {time}
        </p>
      </div>

      <div className="bg-kulrang w-full  border-l-2 pl-5 border-black rounded-none">
        <h1 className="text-[20px] mt-1 font-medium">{company}</h1>
        <h2 className="text-kulrang_text text-[15px] mt-1 mb-2">• {desc1}</h2>
        <h2 className="text-kulrang_text text-[15px] mb-2">• {desc2}</h2>
      </div>
    </div>
  );
};

export default ExperiencesCard;
