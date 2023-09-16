import Form from "./Form.js";

const Contact = () => {
  return (
    <section className="pt-2" id="contact">
      <div className="w-[80%] m-auto">
        <span className="relative flex h-8 mb-10 mt-10">
          <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
          <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">
            Contact
          </p>
        </span>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
