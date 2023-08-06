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
    href: "twitter.com/",
    icon: <FaTwitter />,
  },
  {
    href: "pinterest.com/gulxumorerkinjonova/",
    icon: <FaPinterest />,
  },
];

export const nav_icons = [
  { href: "#home", icon: <AiFillHome />, text: "" },
  { href: "#about", icon: <AiOutlineUser />, text: "" },
  {
    href: "#portfolio",
    icon: <AiOutlineFileDone />,
    text: "text-3xl",
  },
  { href: "#works", icon: <BsPersonWorkspace />, text: "text-2xl" },
  { href: "#contact", icon: <BsTelephoneOutbound />, text: "text-2xl" },
];
