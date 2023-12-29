import { FaReact } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experiences = () => {
  const { t } = useTranslation();
  return (
    <section className="overflow-x-hidden" id="experiences">
      <div className="w-[80%] m-auto pt-[10%]">
        <span className="relative flex h-8 mb-10">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
            {t("experiences.experiences")}.
          </p>
        </span>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 243, 72)" }}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 243, 72)", color: "#000" }}
            date={t("experiences.freelancer_time")}
            iconStyle={{ background: "rgb(33, 243, 72)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experiences.freelancer")}
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Tashkent, UZ</h4>
          <p>• Taught students HTML, CSS, JavaScript, React</p>
          <p>
            • Coded using HTML, CSS and JavaScript to develop features for both
            mobile and desktop platforms
          </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
            date={t("experiences.mentor_time")}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experiences.mentor")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experiences.mentor_loc")}
            </h4>
            <p>{t("experiences.mentor_desc1")}</p>
            <p>{t("experiences.mentor_desc2")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid  #ff9301" }}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ff9301", color: "#000000" }}
            date={t("experiences.intern_time")}
            iconStyle={{ background: "#ff9301", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experiences.intern")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("experiences.intern_loc")}
            </h4>
            <p>{t("experiences.intern_desc1")}</p>
            <p>{t("experiences.intern_desc2")}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaReact />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Experiences;
