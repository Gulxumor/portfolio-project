import Pages from "../components/Pages";

const Root = () => {
  let token = JSON.stringify(localStorage.getItem("token"));

  //! language ni localstorage ga set qilish
  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "en");
      // window.location.reload();
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
