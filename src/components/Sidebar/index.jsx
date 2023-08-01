import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { AiFillHome, AiOutlineUser, AiOutlineFileDone } from "react-icons/ai";
import { styles } from "../../utils/tailwind_variables";

const Sidebar = () => {
  return (
    <div className="w-20  overflow-y-hidden">
      <div
        className={`bg-[orange] text-5xl h-20 ${styles.flex} flex-col cursor-pointer border-r-[1px] border-orange `}
      >
        <a href="#" className="text-white font-normal">
          G
        </a>
      </div>
      <div className="wrapper border-[1px] border-[#e9e9ea] pb-44 pt-20 h-full">
        <div className={`${styles.flex} border-b-[1px] border-[#e9e9ea] pb-10`}>
          <a href="#hero">
            <AiFillHome className={`${styles.sidebar_icons}`} />
          </a>
        </div>
        <div className="flex justify-center items-center border-b-[1px] border-[#e9e9ea] h-20">
          <a href="#about">
            <AiOutlineUser className={`${styles.sidebar_icons}`} />
          </a>
        </div>
        <div className="flex justify-center items-center border-b-[1px] border-[#e9e9ea] h-20">
          <a href="#skills">
            <AiOutlineFileDone className={`${styles.sidebar_icons}`} />
          </a>
        </div>
        <div className="flex justify-center items-center border-b-[1px] border-[#e9e9ea] h-20">
          <a href="#portfolio">
            <BsPersonWorkspace
              className={` ${styles.sidebar_icons} text-2x `}
            />
          </a>
        </div>

        <div className="flex justify-center items-center pt-10">
          <a href="#contact">
            <BsTelephoneOutbound
              className={` ${styles.sidebar_icons} text-2x `}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
