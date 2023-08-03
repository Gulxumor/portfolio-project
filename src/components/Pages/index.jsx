import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
// import Education from "./Education";
// import Footer from "./Footer";

const Pages = () => {
  return (
    <div className="ml-20">
      <Hero />
      <div className="bg-kulrang">
        <About />
        <Technology />
      </div>
      <Experiences />
      <Skills />
      <Portfolio />
      {/* 
      <Education />
      <Footer /> */}
    </div>
  );
};

export default Pages;
