import i18next from "i18next";
import { useEffect } from "react";
import Pages from "../components/Pages";
import { initReactI18next } from "react-i18next";
import { uz } from "../utils/locale/uz/translation.js";
import { en } from "../utils/locale/en/translation.js";
import { ru } from "../utils/locale/ru/translation.js";
import { ar } from "../utils/locale/ar/translation.js";
import { tr } from "../utils/locale/tr/translation.js";
import { kr } from "../utils/locale/kr/translation.js";

const Root = () => {
  // let token = JSON.stringify(localStorage.getItem("token"));

  //! language ni localstorage ga set qilish
  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "en");
      window.location.reload();
    }
  }, []);

  //! translation
  i18next.use(initReactI18next).init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      ar: { translation: ar },
      tr: { translation: tr },
      kr: { translation: kr },
      en: { translation: en },
    },
    lng: localStorage.getItem("locale") || "en",
    fallback: localStorage.getItem("locale") || "en",
  });

  return (
    <div>
      <Pages />
    </div>
  );
};

export default Root;
