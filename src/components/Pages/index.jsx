import Hero from "../Hero";
import About from "../About";
import Experiences from "../Experiences";
import Education from "../Education";
import Portfolio from "../Portfolio";
import Footer from "../Footer";
import { styles } from "../../utils/tailwind_variables";

const Pages = () => {
  return (
    <div className={`justify-evenly mx-[120px]`}>
      <Hero />
      <About />
      {/*  <Education />
      <Experiences />
      <Portfolio />
      <Footer /> */}
    </div>
  );
};

export default Pages;
