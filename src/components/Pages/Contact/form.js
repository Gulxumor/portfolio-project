import ReactTyped from "react-typed";

const Forms = () => {
  return (
    <section>
      <div className="max-h-screen py-6 flex flex-col justify-center sm:py-12 wrap">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-lightOrange to-orange shadow-lg transform -skew-y-6 hover:-skew-y-0 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl bg-red-300 hover:rotate-0 "></div>
          <div className="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 transform hover:origin-center">
            <form className="max-w-md mx-auto">
              <div className="w-[300px]">
                <ReactTyped
                  strings={["Let's get in touch!"]}
                  typeSpeed={100}
                  loop
                  backSpeed={30}
                  cursorChar="|"
                  showCursor={true}
                  className={`text-3xl text-orange font-medium`}
                />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 text-[14px] focus:outline-none focus:border-orange"
                      placeholder="Enter your Full Name"
                      required
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 text-[14px] focus:outline-none focus:border-orange"
                      placeholder="Enter your Email address"
                      required
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 text-[14px] focus:outline-none focus:border-orange"
                    ></textarea>
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Message
                    </label>
                  </div>

                  <div className="relative">
                    <button
                      htmltype="submit"
                      className="border-2 border-orange text-orange rounded-md px-4 py-1 hover:bg-orange hover:text-white active:scale-50"
                      onClick={() => alert("sent")}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
