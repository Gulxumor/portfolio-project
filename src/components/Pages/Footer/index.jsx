import { social } from "../../../utils/socials.js";

const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-kulrang_text sm:text-center dark:text-gray-400">
          © 2023 Gulxumor. All Rights Reserved.
        </span>
        <ul className="justify-center gap-5 flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          {social.map(({ href, icon }, index) => (
            <li className={`w-[32px] h-[32px]`} key={index}>
              <a
                href={`https://${href}`}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="text-xl text-black hover:text-orange hover:text-2xl md:mr-6 mr-4"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
