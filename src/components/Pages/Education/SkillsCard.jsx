import { Card } from "antd";
import { styles } from "../../../utils/tailwind_variables";
import "./style.css";

const SkillsCard = ({ icon, desc, name }) => {
  return (
    <div className={`shake moveRight mr-10`}>
      <Card className=" bg-kulrang w-[237px] h-[237px]">
        <div className={`text-[40px] ${styles.flex}`}>{icon}</div>
        <p className={`font-semibold ${styles.flex} text-[18px] text-orange`}>
          {name}
        </p>
        <p className={`text-kulrang_text`}>{desc}</p>
      </Card>
    </div>
  );
  // };

  // const SkillsCard2 = ({ icon, desc, name }) => {
  //   return (
  //     <div className={`shake moveLeft mr-10`}>
  //       <Card className=" bg-kulrang w-[237px] h-[237px]">
  //         <div className={`text-[40px] ${styles.flex}`}>{icon}</div>

  //         <p className={`font-semibold ${styles.flex} text-[18px] text-orange`}>
  //           {name}
  //         </p>

  //         <p className={`text-kulrang_text`}>{desc}</p>
  //       </Card>
  //     </div>
  //   );
};

export { SkillsCard };
