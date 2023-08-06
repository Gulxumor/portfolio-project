import { social } from "../../../utils/socials.js";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="p-5 px-10 flex justify-between">
        <div className="flex justify-center items-center gap-5">
          {social.map(({ href, icon }, index) => (
            <div className={`w-[32px] h-[32px]`}>
              <a
                href={`https://${href}`}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-black hover:text-orange hover:text-3xl"
              >
                {icon}
              </a>
            </div>
          ))}
        </div>
        <div className="flex">
          <p>&copy; Gulxumor. All rights are reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
