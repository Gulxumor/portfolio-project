import Main from "./Main";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
// import Technology from "./Technology";
import Experiences from "./Experiences";
// import EducationSkills from "./Education_Skills";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

// * navbar= mediasi to'liq emas, dropdown qo'shish kerak
// * BsFillArrowUpCircleFill main sectionda chiqmasligi kerak. i could not do it. Ask google tog'a

const Pages = () => {
  return (
    <div className="">
      <Sidebar />

      <div className="bg-kulrang ml-20 pages">
        <Main />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Portfolio />
        <Contact />
        <Footer />
        <a href="#main" className={`fixed bottom-6 right-6`}>
          {
            <BsFillArrowUpCircleFill className="text-slate-500 w-10 h-10 hover:text-orange" />
          }
        </a>
        {/* <Technology />
        <EducationSkills /> */}
      </div>
    </div>
  );
};

export default Pages;
