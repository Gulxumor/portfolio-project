import { useTranslation } from "react-i18next";
import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { AiFillHome, AiOutlineFileDone, AiOutlineUser } from "react-icons/ai";
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
    href: "https://www.facebook.com/profile.php?id=100092847492429",
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

export const useNavbar = () => {
  const { t } = useTranslation();
  const nav_icons = () => [
    {
      href: "#home",
      icon: <AiFillHome />,
      text: t("navbar.home"),
    },
    {
      href: "#about",
      icon: <AiOutlineUser />,
      text: t("navbar.about"),
    },
    {
      href: "#skills",
      icon: <AiOutlineFileDone />,
      text: t("navbar.skills"),
    },
    {
      href: "#portfolio",
      icon: <BsPersonWorkspace />,
      text: t("navbar.portfolio"),
    },

    {
      href: "#contact",
      icon: <BsTelephoneOutbound />,
      text: t("navbar.contact"),
    },
  ];
  return { nav_icons };
};
