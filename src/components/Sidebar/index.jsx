import { styles } from "../../utils/tailwind_variables";
// import "../Pages/Main/main.css";
import { nav_icons } from "../../utils/socials";

const Sidebar = () => {
  return (
    <aside
      aria-label="Sidebar"
      className="w-20 fixed  top-0 left-0  z-50 bg-white select-none"
    >
      <div
        className={`bg-[orange] text-white text-5xl h-20 ${styles.flex} border-r-[1px] border-orange font-semibold`}
      >
        G
      </div>

      <div className="wrapper border-[1px] border-[#e9e9ea] pb-44 pt-20 h-full">
        {nav_icons.map(({ icon, href, text }, index) => (
          <a
            key={index}
            href={href}
            className={`${styles.flex} border-b-[1px] border-[#e9e9ea] py-10 icon w-20 h-10`}
          >
            <div className={`${styles.sidebar_icons} ${text}`}>{icon}</div>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

{/* <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div> */}
