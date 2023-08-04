import { Card } from "antd";
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
    <div className="flex bg-kulrang p-[35px]  w-full">
      <Card className="bg-kulrang border-none w-[320px]">
        <h1 className="text-[20px] mt-1 font-medium ">{job}</h1>
        <p className="text-[14px] text-kulrang_text italic">{remote}</p>
        <h2 className="text-kulrang_text text-[15px] mt-1 mb-2">{period}</h2>
        <p
          className={`bg-orange py-[5px] px-[5px] rounded text-white ${styles.flex} font-medium`}
        >
          {time}
        </p>
      </Card>

      <Card className="bg-kulrang w-full border-l-1 border-l-kulrang_text rounded-none">
        <h1 className="text-[20px] mt-1 font-medium">{company}</h1>
        <h2 className="text-kulrang_text text-[15px] mt-1 mb-2">• {desc1}</h2>
        <h2 className="text-kulrang_text text-[15px] mb-2">• {desc2}</h2>
      </Card>
    </div>
  );
};

export default ExperiencesCard;
