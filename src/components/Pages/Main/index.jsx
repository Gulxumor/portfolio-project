import { styles } from "../../../utils/tailwind_variables";
import TextSpan from "./TextSpan.js";
import ParticlesBg from "./particlesBg.js";
import { useTranslation } from "react-i18next";
const sentence = "Gulxumor ?".split("");

const Main = () => {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white">
      <ParticlesBg />
      <div className="w-full h-[100vh] overflow-x-hidden bg-fixed" id="main">
        <div className="m-auto w-fit mt-48">
          <h1 className={`${styles.mainLetter} m-auto w-fit main_text`}>
            {t("main.who")}
          </h1>
          <div className={`${styles.mainLetter} uppercase main_text`}>
            {sentence.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </div>
        </div>

        <a
          href="#home"
          className={`flex justify-center border-4 border-orange rounded-full w-10 h-16  absolute bottom-2 right-[50%]`}
        >
          <div className="w-2 h-2 bg-orange rounded-full animate-bounce mt-2 " />
        </a>
      </div>
    </section>
  );
};

export default Main;
