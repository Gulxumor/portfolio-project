import ReactTyped from "react-typed";
import Form from "./form";

const Contact = () => {
  return (
    <section className="bg-kulrang">
      <div className="w-[80%] m-auto mb-10">
        <span className="relative flex h-8 mb-10 mt-10">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium">Contact</p>
        </span>

        <ReactTyped
          strings={["Let's get in touch!"]}
          typeSpeed={100}
          loop
          backSpeed={30}
          cursorChar="|"
          showCursor={true}
          className={`text-3xl text-orange font-medium`}
        />

        <Form />
      </div>
    </section>
  );
};

export default Contact;
