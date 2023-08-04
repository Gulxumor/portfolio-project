import { styles } from "../../../utils/tailwind_variables";
import "./main.css";
import TextSpan from "./TextSpan.js";

const sentence = "Gulxumor ?".split("");

const Main = () => {
  return (
    <section
      className="w-full bg-kulrang h-[100vh] overflow-x-hidden"
      id="home"
    >
      <div className="m-auto w-fit mt-48">
        <h1 className={`${styles.mainLetter} m-auto w-fit`}>WHO'S</h1>
        <div className={`${styles.mainLetter} uppercase`}>
          {sentence.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}
        </div>
      </div>

      <a
        href="#hero"
        className={`flex justify-center border-4 border-orange rounded-full w-10 h-16  absolute bottom-1 right-[50%]`}
      >
        <div className="w-2 h-2 bg-orange rounded-full animate-bounce mt-2 " />
      </a>
    </section>
  );
};

export default Main;
