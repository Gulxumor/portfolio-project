import { styles } from "../../utils/tailwind_variables";
import { nav_icons } from "../../utils/socials";

const Sidebar = () => {
  return (
    <aside
      aria-label="Sidebar"
      className="w-20 fixed top-0 left-0 z-50 bg-transparent select-none aside"
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
