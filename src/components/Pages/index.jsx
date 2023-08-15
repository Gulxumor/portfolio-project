import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import Education from "./Education";
import Main from "./Main";
import Footer from "./Footer";
import Contact from "./Contact";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Pages = () => {
  return (
    <div className="ml-20 pages">
      <Main />
      <Hero />
      <div className="bg-kulrang">
        <About />
        <Skills />
        <Education />
        <Technology />
      </div>
      <Experiences />
      <Portfolio />
      <div className="bg-kulrang">
        <Contact />
        <Footer />
      </div>
      <a href="#main" className={`fixed bottom-6 right-10`}>
        {
          <BsFillArrowUpCircleFill className="text-slate-500 w-10 h-10 hover:text-orange" />
        }
      </a>
    </div>
  );
};

export default Pages;
