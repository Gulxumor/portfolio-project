import pdf from "../../../utils/resume.pdf";
import { styles } from "../../../utils/tailwind_variables";
import img from "../../../assets/images/main_img.jpg";
import Stripe from "../../generics/Stripe";
import Bio from "./Bio";
import Socials from "./Bio/social";

const About = () => {
  const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let link = document.createElement("a");
        link.href = fileURL;
        link.download = "Gulxumor_Erkinjonova_resume.pdf";
        link.click();
      });
    });
  };

  return (
    <section
      className={`${styles.flex} flex-col w-full overflow-hidden relative`}
      id="about"
    >
      <div className={`${styles.flex} mb-[100px] flex-wrap`}>
        <div className={`mr-20 ml-5 mt-10`}>
          <div className="w-[350px] h-[350px] relative">
            <div className="spin-container">
              <div className="w-full h-full transition-[border-radius] duration-[1s] ease-[ease-out] animate-[morph_5s_ease-in-out_infinite_both_alternate] absolute overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]">
                <div
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                  className={`bg-cover w-[120%] h-[120%] absolute left-[-15%] top-[-10%] `}
                ></div>
              </div>
            </div>
          </div>

          <Socials />

          <span className={`${styles.flex} flex-col`}>
            <p className="text-xl my-[10px] font-normal">Front-end Developer</p>
            <p className="text-3xl font-normal mb-8 font-gagalin">
              Gulxumor Erkinjonova
            </p>
          </span>
        </div>

        <div>
          <span className="relative flex h-8 w-8 mb-10">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
            <p className="text-4xl ml-3 mt-2 font-medium font-gagalin">
              Biography
            </p>
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
            onClick={onButtonClick}
            className={`bg-orange text-white rounded-sm py-1 px-2 active:scale-95 mt-3 hover:opacity-70`}
          >
            Download CV
          </button>
        </div>
      </div>
      <Stripe />
    </section>
  );
};

export default About;
