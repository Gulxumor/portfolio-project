import Bio from "./Bio";
import Socials from "./Bio/social";
import pdf from "../../../utils/resume.pdf";
// import Stripe from "../../generics/Stripe";
import img from "../../../assets/images/main_img.jpg";
import { styles } from "../../../utils/tailwind_variables";

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
    <section id="about" className="pt-[10%] w-[80%] mx-auto">
      <div className={``}>
        <div className={`flex flex-wrap`}>
          <div className={`mr-20 ml-5 mt-10 about__imageWrapper flex-1`}>
            <div className="w-[350px] h-[350px] relative about__image mx-auto">
              <div className="spin-container">
                <div className={`${styles.imageStyles}`}>
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
              <p className="text-xl my-[10px] font-normal">
                Front-end Developer
              </p>
              <p className="text-3xl font-normal mb-8 font-gagalin about__text--smaller">
                Gulxumor Erkinjonova
              </p>
            </span>
          </div>

          <div className="about__biography mt-32 flex-1">
            <span className="relative flex h-8 w-8 mb-10">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
              <p className="text-4xl ml-3 mt-2 font-medium font-gagalin">
                Biography
              </p>
            </span>

            <p className="w-[660px] mb-5 text-kulrang_text about__biography--width">
              Assalamu alaykum! My name is
              <span className="text-orange"> Gulxumor Erkinjonova</span>. My job
              is a Frontend Developer, and I'm very passionate and dedicated to
              my work. I have been involved in many real projects. I have
              acquired the skills and knowledge necessary to make projects a
              success.
            </p>

            <Bio />

            <button
              onClick={onButtonClick}
              className={`bg-orange text-white rounded-sm py-2 px-3 active:scale-95 mt-3 hover:opacity-70`}
            >
              Download CV
            </button>
          </div>
        </div>
        {/* <Stripe /> */}
      </div>
    </section>
  );
};

export default About;
