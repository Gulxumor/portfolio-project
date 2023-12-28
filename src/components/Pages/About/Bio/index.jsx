import { PiGameControllerFill } from "react-icons/pi";
import { styles } from "../../../../utils/tailwind_variables";
import {
  FaBookReader,
  FaGifts,
  FaMailBulk,
  FaPassport,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Bio = () => {
  return (
    <div className="flex justify-between flex-wrap about__bio--text-smaller">
      <ul>
        <li className={`${styles.socials__Ul}`}>
          <FaGifts color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Birthday:</label> 06. 04. 2005
          </span>
        </li>
        <li className={`${styles.socials__Ul}`}>
          <FaPassport color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Age:</label>
            {new Date().getFullYear() - 2005} years
          </span>
        </li>

        <li className={`${styles.socials__Ul}`}>
          <FaSearchLocation color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Address:</label>
            Fergana, Uzbekistan
          </span>
        </li>

        <li className={`${styles.socials__Ul}`}>
          <PiGameControllerFill color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Interests:</label> Coding, Learning new
            things
          </span>
        </li>
      </ul>
      <ul className="mr-5">
        <li className={`${styles.socials__Ul}`}>
          <FaBookReader color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Study:</label>
            Webbrain Academy
          </span>
        </li>
        <li className={`${styles.socials__Ul} flex items-center`}>
          <FaMailBulk color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Mail:</label>
            <button className="bg-none border-none">
              <a
                href="mailto:erkinjonovagulxumor@gmail.com"
                className="socials__btn"
              >
                erkinjonovagulxumor@gmail.com
              </a>
            </button>
          </span>
        </li>
        <li className={`${styles.socials__Ul}`}>
          <FaPhoneAlt color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Phone:</label>
            <button className="bg-none border-none">
              <a href="tel:+998908345600" className="socials__btn">
                +998 (90) 834 - 56 - 00
              </a>
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Bio;
