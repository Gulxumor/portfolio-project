import { PiGameControllerFill } from "react-icons/pi";
import {
  FaBookReader,
  FaChartArea,
  FaGifts,
  FaMailBulk,
  FaPassport,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Bio = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <ul>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaGifts color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Birthday:</label> 06.04.2005
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaPassport color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Age:</label> 18 years
          </span>
        </li>

        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaSearchLocation color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Address:</label>
            Fergana
          </span>
        </li>

        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <PiGameControllerFill color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Interests:</label> Coding, Reading
          </span>
        </li>
      </ul>
      <ul className="mr-5">
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaBookReader color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Study:</label>
            53-school, Fergana
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaChartArea color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Degree:</label> Junior
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaMailBulk color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Mail:</label>
            <a href="mailto:erkinjonovagulxumor@gmail.com">
              erkinjonovagulxumor&#64;gmail.com
            </a>
          </span>
        </li>
        <li className={`flex py-[8px] items-center text-kulrang_text`}>
          <FaPhoneAlt color="orange" className="mr-3" />
          <span>
            <label className="mr-3">Phone:</label>
            <a href="tel:+998908345600">+998 (90) 834 - 56 - 00</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Bio;
