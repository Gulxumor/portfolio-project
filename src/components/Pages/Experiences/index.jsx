import Stripe from "../../generics/Stripe";
import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
  return (
    <section className="w-[80%] m-auto pt-[100px]">
      <span class="relative flex h-8 mb-10">
        <span class="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Experience.</p>
      </span>
      <div className="flex-wrap flex">
        <ExperiencesCard
          job={"Front-end Mentor"}
          company="Webbrain Academy"
          remote="Remote"
          time="Full Time"
          period={"March 2023 - Present"}
          desc1={`Taught students HTML, CSS, JavaScript, React`}
          desc2={`Coded using HTML, CSS and JavaScript to develop
        features for both mobile and desktop platforms`}
        />
        <ExperiencesCard
          job={"Front-end Developer"}
          company="AEMA Team"
          remote="Remote"
          time="Full Time"
          period={"April 2023 - June 2023"}
          desc1={`Produced websites compatible with multiple browsers`}
          desc2={`Liaised between marketing and IT on web
        development projects integrating front-end assets to
        back-end systems`}
        />
      </div>
      <Stripe />
    </section>
  );
};

export default Experiences;
