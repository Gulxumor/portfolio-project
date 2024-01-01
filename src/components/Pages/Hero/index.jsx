import { useTranslation } from "react-i18next";
import ReactTyped from "react-typed";
import logo from "../../../assets/images/logo.png";
import { styles } from "../../../utils/tailwind_variables";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className={`w-4/5 mx-auto`}>
      <div className={`p-10 overflow-x-hidden ${styles.flex}`}>
        <div className="mt-10 flex-1">
          <h1 className="text-xl text-kulrang_text">{t("hero.hello")}</h1>
          <h1 className="text-6xl my-5 font-gagalin hero__mainText--font-smaller">
            {t("erkinjonova")}{" "}
            <span className="text-orange"> {t("gulxumor")}</span>
          </h1>
          <div className="h-[40px] text-3xl text-orange font-medium">
            <ReactTyped
              loop
              cursorChar=" "
              backSpeed={30}
              typeSpeed={100}
              showCursor={true}
              className={``}
              strings={[
                t("hero.developer"),
                t("hero.photographer"),
                t("hero.copywriter"),
                t("hero.translator"),
              ]}
            />
          </div>
          <p className="text-kulrang_text pt-5">{t("hero.job_desc")}</p>
        </div>
        <div className="hero__img--display-none flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-[350px] rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
