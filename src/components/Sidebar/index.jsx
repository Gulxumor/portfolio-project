import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { AiFillHome, AiOutlineUser, AiOutlineFileDone } from "react-icons/ai";
import { styles } from "../../utils/tailwind_variables";
import "../Pages/Main/main.css";

const Sidebar = () => {
  return (
    <div className="w-20 fixed z-50 bg-white select-none">
      <div
        className={`bg-[orange] text-white text-5xl h-20 ${styles.flex} border-r-[1px] border-orange font-semibold`}
      >
        G
      </div>

      <div className="wrapper border-[1px] border-[#e9e9ea] pb-44 pt-20 h-full">
        <a
          href="#home"
          className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
        >
          <AiFillHome className={`${styles.sidebar_icons}`} />
        </a>

        <a
          href="#about"
          className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
        >
          <AiOutlineUser className={`${styles.sidebar_icons}`} />
        </a>
        <a
          href="#skills"
          className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
        >
          <AiOutlineFileDone className={`${styles.sidebar_icons}`} />
        </a>

        <a
          href="#portfolio"
          className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
        >
          <BsPersonWorkspace className={` ${styles.sidebar_icons} text-2x `} />
        </a>

        <a
          href="#contact"
          className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
        >
          <BsTelephoneOutbound
            className={` ${styles.sidebar_icons} text-2x `}
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
