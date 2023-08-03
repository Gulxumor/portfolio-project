import ReactTyped from "react-typed";
import img from "../../../assets/images/logo.png";
import { styles } from "../../../utils/tailwind_variables";
import { DownOutlined } from "@ant-design/icons";
const Hero = () => {
  return (
    <div
      className={`${styles.flex} flex-col w-[80%] m-auto flex-wrap`}
      id="hero"
    >
      <div className={`w-full ${styles.flex} flex items-center justify-center`}>
        <div className="mt-[50px]">
          <p className="text-xl font-normal">Hello there...</p>
          <h1 className={`text-[65px] font-semibold`}>
            Erkinjonova
            <span className="text-orange"> Gulxumor</span>
          </h1>
          <ReactTyped
            strings={["Developer", "Photographer"]}
            typeSpeed={100}
            loop
            backSpeed={30}
            cursorChar="|"
            showCursor={true}
            className={`text-3xl text-orange font-medium`}
          />
          <p className="w-[660px] my-5 text-kulrang_text">
            I build the front-end portion of websites and web applications - the
            part users see and interact with. I create websites and applications
            using web languages such as HTML, CSS, and JavaScript that allow
            users to access and interact with the site or app all the time,
            people think that you're busy.
          </p>

          <button
            className={`bg-orange text-white rounded px-5 py-1 active:scale-95`}
          >
            <a href="#works">My Works</a>
          </button>
          <button
            className={`text-orange rounded border border-orange ml-5 px-5 py-1 active:text-red active:scale-95`}
          >
            <a href="#contact">Hire Me</a>
          </button>
        </div>

        <div className={`w-[400px] h-[600px] ml-20 ${styles.flex}`}>
          <img
            src={img}
            alt="main_img"
            className="rounded-full h-[380px] w-full mt-20"
          />
        </div>
      </div>

      <a
        href="#about"
        className={`${styles.flex} border-4 mt-16 animate-bounce bg-orange rounded-full w-10 h-10 mb-10`}
      >
        <DownOutlined className="text-white" />
      </a>
    </div>
  );
};

export default Hero;
