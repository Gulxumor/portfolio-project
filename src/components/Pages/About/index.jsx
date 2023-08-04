import { styles } from "../../../utils/tailwind_variables";
import img from "../../../assets/images/portfolio-img/photography/main_img.jpg";

import Stripe from "../../generics/Stripe";
import Bio from "./Bio";
import Socials from "./Bio/social";

const About = () => {
  return (
    <section
      className={`${styles.flex} flex-col w-full overflow-hidden relative`}
      id="about"
    >
      <div className={`${styles.flex} mb-[100px] flex-wrap`}>
        <div className={`mr-20 ml-5 mt-10`}>
          <img
            src={img}
            alt="main_img"
            className={`rounded-full w-[350px] h-[350px] border-4 border-orange`}
          />

          <Socials />

          <span className={`${styles.flex} flex-col mt-5`}>
            <p className="text-xl mt-[5px] font-normal">Front-end Developer</p>
            <p className="text-3xl font-normal mb-8">Gulxumor Erkinjonova</p>
          </span>
        </div>

        <div>
          <span className="relative flex h-8 w-8 mb-10">
            <span className="animate-pulse absolute  inline-flex h-full w-full rounded-full bg-orange opacity-75 "></span>
            <p className="text-4xl ml-3 mt-2 font-medium">Biography</p>
          </span>

          <p className="w-[660px] mb-5 text-kulrang_text">
            Hi! My name is
            <span className="text-orange "> Gulxumor Erkinjonova</span>. I am a
            Frontend Developer, and I'm very passionate and dedicated to my
            work. I have been involved in many real projects. I have acquired
            the skills and knowledge necessary to make projects a success.
          </p>

          <Bio />

          <button
            className={`bg-orange text-white rounded-sm py-1 px-2 active:scale-95 mt-3 hover:opacity-70`}
          >
            <a href="img/Gulxumor_Erkinjonova_CV.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <Stripe />
    </section>
  );
};

export default About;
