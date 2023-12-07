import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experiences = () => {
  return (
    <div className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
          Experiences.
        </p>
      </span>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 243, 72)" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 243, 72)", color: "#000" }}
          date="September 2023 - Present"
          iconStyle={{ background: "rgb(33, 243, 72)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
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
          date="March 2023 - September 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Mentor</h3>
          <h4 className="vertical-timeline-element-subtitle">Tashkent, UZ</h4>
          <p>• Taught students HTML, CSS, JavaScript, React</p>
          <p>
            • Coded using HTML, CSS and JavaScript to develop features for both
            mobile and desktop platforms
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  #ff9301" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ff9301", color: "#000000" }}
          date="April 2023 - June 2023"
          iconStyle={{ background: "#ff9301", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Namangan, UZ</h4>
          <p>• Produced websites compatible with multiple browsers</p>
          <p>
            • Liaised between marketing and IT on web development projects
            integrating front-end assets to back-end systems
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
        />
      </VerticalTimeline>
    </div>
  );
};
export default Experiences;
