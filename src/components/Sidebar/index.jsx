import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { AiFillHome, AiOutlineUser, AiOutlineFileDone } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className=" w-20 h-full">
      <div className="bg-[orange] text-5xl h-20 flex justify-center items-center flex-col cursor-pointer border-r-[1px] border-orange ">
        <a href="#" className="text-white">
          G
        </a>
      </div>
      <div className="wrapper border-[1px] pb-44 pt-20 h-full">
        <div className="flex justify-center items-center border-b-[1px] pb-10 ">
          <AiFillHome className="text-3xl active:text-orange cursor-pointer" />
        </div>
        <div className="flex justify-center items-center border-b-[1px] h-20">
          <a href="#about">
            <AiOutlineUser className="text-3xl active:text-orange cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center items-center border-b-[1px] h-20">
          <a href="#skills">
            <AiOutlineFileDone className="text-3xl active:text-orange cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center items-center border-b-[1px] h-20">
          <a href="#portfolio">
            <BsPersonWorkspace className="text-2xl active:text-orange cursor-pointer" />
          </a>
        </div>

        <div className="flex justify-center items-center  pt-10">
          <a href="#contact">
            <BsTelephoneOutbound className="text-2xl active:text-orange cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
