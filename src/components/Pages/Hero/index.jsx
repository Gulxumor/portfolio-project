import { styles } from "../../../utils/tailwind_variables";
import logo from "../../../assets/images/logo.png";
import ReactTyped from "react-typed";
const Hero = () => {
  return (
    <section
      className={`h-screen ${styles.flex} justify-between px-16`}
      id="home"
    >
      <div className="hero_top w-1/2 text-center">
        <h1 className="text-xl text-kulrang_text">Hello there...</h1>
        <h1 className="text-7xl py-5 font-semibold">
          Erkinjonova <span className="text-orange">Gulxumor</span>
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
        <p className="text-kulrang_text pt-5">
          I build the front-end portion of websites and web applications - the
          part users see and interact with. I create websites and applications
          using web languages such as HTML, CSS, and JavaScript that allow users
          to access and interact with the site or app all the time, people think
          that you're busy.
        </p>
      </div>
      <div className="w-1/2 ">
        <img src={logo} alt="logo" className="w-1/2 m-auto rounded-full hero_img" />
      </div>
    </section>
  );
};

export default Hero;