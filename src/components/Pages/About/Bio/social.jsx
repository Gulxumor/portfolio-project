import { styles } from "../../../../utils/tailwind_variables";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className={`${styles.flex} w-full`}>
      <div
        className={`${styles.flex} rounded-full bg-black border-white border-2 w-9 h-9 mx-[5px] absolute mb-8 mr-[130px]`}
      >
        <a
          href="https://www.pinterest.com/gulxumorerkinjonova/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaPinterestP color="white" />
        </a>
      </div>
      <div
        className={`${styles.flex} rounded-full bg-black border-white border-2 w-9 h-9 mx-[5px] absolute mb-24 mr-60 `}
      >
        <a
          href="https://facebook.com/Gulxumor"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaFacebookF color="white" />
        </a>
      </div>

      <div
        className={`${styles.flex} rounded-full bg-black border-white border-2 w-9 h-9 mx-[5px] mb-3 absolute`}
      >
        <a href="https://linkedin.com/" target={"_blank"} rel="noreferrer">
          <FaLinkedinIn color="white" />
        </a>
      </div>

      <div
        className={`${styles.flex} rounded-full bg-black border-white border-2 w-9 h-9 mx-[5px] absolute mb-8 ml-[130px]`}
      >
        <a
          href="https://twitter.com/Gulxumorr"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaTwitter color="white" />
        </a>
      </div>
      <div
        className={`${styles.flex} rounded-full bg-black border-white border-2 w-9 h-9 mx-[5px] absolute mb-24 ml-60`}
      >
        <a
          href="https://github.com/Gulxumor"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub color="white" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
