import { useState } from "react";
import { BsMenuButton } from "react-icons/bs";
import { useNavbar } from "../../utils/socials";
import logo from "../../assets/images/logo.png";
import { styles } from "../../utils/tailwind_variables";
// import i18next from "i18next";

const Navbar = () => {
  const { nav_icons } = useNavbar();

  const [openLinks, setOpenLinks] = useState();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // ! language Selection
  // const SelectLanguage = () => {
  //   return (
  //     <select
  //       className={`${openLinks === true ? "hidden" : "visible"}`}
  //       defaultValue={localStorage.getItem("locale")}
  //       onChange={(e) => {
  //         i18next.changeLanguage(e.target.value);
  //         localStorage.setItem("locale", e.target.value);
  //         window.location.reload();
  //       }}
  //     >
  //       <option value="uz">O'zbek</option>
  //       <option value="en">English</option>
  //       <option value="ru">Русскый</option>
  //       <option value="ar">العربية</option>
  //       <option value="tr">Türkçe</option>
  //       <option value="kr">한국어</option>
  //     </select>
  //   );
  // };

  // ! HiddenLinks
  const HiddenLinks = () => {
    return (
      <ul
        className={` h-[60px] gap-2 md:gap-7 ${styles.flex} ${
          openLinks !== true ? "hidden" : "visible"
        }`}
      >
        {nav_icons().map(({ href, text }, index) => (
          <ul className="" key={index}>
            <li>
              <a
                href={href}
                className={`${styles.nav_icons_media} md:text-2xl `}
              >
                {text}
              </a>
            </li>
          </ul>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={`shadow-md h-20 sticky bg-white top-0 z-50 nav__wrapper hidden`}
    >
      <div
        className={`max-w-screen-x my-0 mx-auto px-20 ${styles.flex} justify-between navbar__innerWrapper--px`}
      >
        {/*//!  Logo and hiddenLinks is wrapped here */}
        <div className="flex items-center justify-between" id={openLinks}>
          <a
            href="#home"
            className={`${openLinks === true ? "hidden" : "visible"}`}
          >
            <img
              src={logo}
              alt="nav__logo"
              className="w-20 h-[75px] my-auto rounded-full navbar__logo"
            />
          </a>

          {/*//! it will work when button clicks */}
          <HiddenLinks />
        </div>

        {/* <SelectLanguage /> */}

        <div className="flex gap-8 text-sm items-center nav__items__wrapper">
          {/* {nav_icons.map(({ href, text }, index) => (
            <ul className="nav__items" key={index}>
              <li className="">
                <a
                  href={href}
                  className={`${styles.navbar_icons} nav__items--font--smaller`}
                >
                  {text}
                </a>
              </li>
            </ul>
          ))} */}

          <button
            className="navbar__hamburger cursor-pointer active:scale-95 hidden"
            onClick={toggleNavbar}
          >
            {<BsMenuButton className="w-8 h-8" color="orange" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
