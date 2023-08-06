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

const Pages = () => {
  return (
    <div className="ml-20">
      <Main />
      <Hero />
      <div className="bg-kulrang">
        <About />
        <Technology />
      </div>
      <Experiences />
      <Skills />
      <Portfolio />
      <Education />
      <div className="bg-kulrang">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Pages;
