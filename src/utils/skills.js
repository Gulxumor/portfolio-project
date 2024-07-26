import { useTranslation } from "react-i18next";
import rymo from "../assets/images/projects_img/rymo.jpg";
import food from "../assets/images/projects_img/food.jpg";
import todo from "../assets/images/projects_img/todo.jpg";
import furni from "../assets/images/projects_img/furni.png";
import nihol from "../assets/images/projects_img/nihol.jpg";
import movie from "../assets/images/projects_img/movie.jpg";
import weather from "../assets/images/projects_img/weather.jpg";
import portfolio from "../assets/images/projects_img/portfolio.jpg";
import countries from "../assets/images/projects_img/countries.jpg";
import new_portfolio from "../assets/images/projects_img/new_portfolio.png";

export function useEducation() {
  const { t } = useTranslation();
  const teaching = () => [
    {
      id: 0,
      year: t("experiences.intern_time"),
      major: t("edu.frontend_dev"),
      center: "AEMA Team",
    },
    {
      id: 1,
      year: t("edu.wba"),
      major: t("edu.frontend_dev"),
      center: "Webbrain Academy",
    },

    {
      id: 2,
      year: t("edu.school"),
      major: t("edu.secondary"),
      center: t("edu.school_place"),
    },
  ];
  return { teaching };
}

export const projects = [
  {
    id: 0,
    src: nihol,
    title: "Nihol App",
    github_link: "https://github.com/Gulxumor/intern-G2",
    demo: "https://nihol.netlify.app/",
  },
  {
    id: 1,
    src: food,
    title: "Ordering food",
    github_link: "https://github.com/Gulxumor/ordering-food",
    demo: "https://order-food-project.netlify.app",
  },
  {
    id: 2,
    src: countries,
    title: "Find Countries",
    github_link: "https://github.com/Gulxumor/my-react-project/tree/7-dars",
    demo: "https://countries-task7.netlify.app",
  },
  {
    id: 3,
    src: rymo,
    title: "Rymo - shop",
    github_link: "https://github.com/Gulxumor/rymo",
    demo: "https://rymo-website.netlify.app",
  },
  {
    id: 4,
    src: portfolio,
    title: "Portfolio",
    github_link: "https://github.com/Gulxumor/portfolio",
    demo: "https://gulxumorerkinjonova.netlify.app",
  },
  {
    id: 5,
    src: movie,
    title: "Movie App",
    github_link: "https://github.com/Gulxumor/figma-projects/tree/movie-app",
    demo: "https://moviee-app-task.netlify.app",
  },
  {
    id: 6,
    src: todo,
    title: "Todo App",
    github_link: "https://github.com/Gulxumor/figma-projects/tree/to-do-list",
    demo: "https://additional-todo-task.netlify.app",
  },
  {
    id: 7,
    src: weather,
    title: "Weather App",
    github_link: "https://github.com/Gulxumor/figma-projects/tree/weather",
    demo: "https://project-weather-ap.netlify.app",
  },
  {
    id: 9,
    src: furni,
    title: "Furni.",
    github_link: "https://github.com/Gulxumor/my-react-project/tree/9-dars/src",
    demo: "https://furniture-figma.netlify.app/",
  },
  {
    id: 8,
    src: new_portfolio,
    title: "Portfolio App",
    github_link: "https://github.com/Gulxumor/portfolio-project",
    demo: "https://yoqubova.netlify.app",
  },
];

export const skills = [
  {
    id: 0,
    degree: "92%",
    skill: "HTML",
  },
  {
    id: 1,
    degree: "90%",
    skill: "CSS",
  },
  {
    id: 2,
    degree: "80%",
    skill: "JavaScript",
  },
  {
    id: 3,
    degree: "55%",
    skill: "TypeScript",
  },
  {
    id: 4,
    degree: "72%",
    skill: "React JS",
  },
];