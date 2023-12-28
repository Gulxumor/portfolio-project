import { styles } from "../../../utils/tailwind_variables";
import logo from "../../../assets/images/logo.png";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <section id="home" className={`w-4/5 mx-auto`}>
      <div className={`p-10 overflow-x-hidden ${styles.flex}`}>
        <div className="mt-10 flex-1">
          <h1 className="text-xl text-kulrang_text">Hello there...</h1>
          <h1 className="text-6xl my-5 font-gagalin hero__mainText--font-smaller">
            Erkinjonova <span className="text-orange">Gulxumor</span>
          </h1>
          <ReactTyped
            loop
            cursorChar="|"
            backSpeed={30}
            typeSpeed={100}
            showCursor={true}
            className={`text-3xl text-orange font-medium`}
            strings={["Developer", "Photographer", "Copywriter"]}
          />
          <p className="text-kulrang_text pt-5">
            I build the front-end portion of websites and web applications - the
            part users see and interact with. I create websites and applications
            using web languages such as HTML, CSS, and JavaScript that allow
            users to access and interact with the site or app all the time,
            people think that you're busy.
          </p>
        </div>
        <div className="hero__img--display-none flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-[350px] rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;