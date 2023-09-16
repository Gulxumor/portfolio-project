import Hero from "./Hero";
import About from "./About";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import Main from "./Main";
import Footer from "./Footer";
import Contact from "./Contact";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import EducationSkills from "./Education_Skills";
import Skills from "./Skills";

const Pages = () => {
  return (
    <div className="ml-20 pages bg-kulrang flex gap-10 flex-col">
      <Main />
      <Hero />
      <About />
      <EducationSkills />
      <Skills />
      <Technology />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
      <a href="#main" className={`fixed bottom-6 right-10`}>
        {
          <BsFillArrowUpCircleFill className="text-slate-500 w-10 h-10 hover:text-orange" />
        }
      </a>
    </div>
  );
};

export default Pages;
