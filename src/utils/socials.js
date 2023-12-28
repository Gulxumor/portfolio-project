import { AiFillHome, AiOutlineFileDone, AiOutlineUser } from "react-icons/ai";
import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export const social = [
  {
    href: "github.com/Gulxumor",
    icon: <FaGithub />,
  },
  {
    href: "t.me/ErkinjonovaGulxumor",
    icon: <FaTelegram />,
  },
  {
    href: "facebook.com/",
    icon: <FaFacebook />,
  },
  {
    href: "twitter.com/Gulxumorr",
    icon: <FaTwitter />,
  },
  {
    href: "pinterest.com/gulxumorerkinjonova/",
    icon: <FaPinterest />,
  },
];

export const nav_icons = [
  { href: "#home", icon: <AiFillHome />, text: "Home", clas: "" },
  { href: "#about", icon: <AiOutlineUser />, text: "About", clas: "" },
  {
    href: "#skills",
    icon: <AiOutlineFileDone />,
    text: "Skills",
    clas: "text-3xl",
  },
  {
    href: "#portfolio",
    icon: <BsPersonWorkspace />,
    text: "Portfolio",
    clas: "text-2xl",
  },

  {
    href: "#contact",
    icon: <BsTelephoneOutbound />,
    text: "Contact",
    clas: "text-2xl",
  },
];
