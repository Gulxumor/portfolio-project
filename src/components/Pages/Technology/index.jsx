import { FaLaptop, FaMobile } from "react-icons/fa";
import Card from "../../generics/Card";
import { styles } from "../../../utils/tailwind_variables";
import Stripe from "../../generics/Stripe";

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officiis vero aliquid fuga esse minima sit, adipisci ad nesciunt nobis.";

const Technology = () => {
  return (
    <section className="w-[80%] m-auto">
      <span className="relative flex h-8 mb-10">
        <span className="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium font-gagalin">What I Do ?</p>
      </span>
      <div className={`${styles.flex} justify-around flex-wrap`}>
        <Card
          icon={
            <div
              className={`bg-white w-24 h-24 flex items-center justify-center rounded-[60%_30%_70%_40%_/_60%_40%_30%_70%] animate-[morph_2s_ease-in-out_infinite_both_alternate]`}
            >
              <FaMobile className="text-slate-400" />
            </div>
          }
          title="Web Design"
          desc={desc}
        />
        <Card
          icon={
            <div
              className={`bg-white w-24 h-24 flex items-center justify-center rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-[morph_2s_ease-in-out_infinite_both_alternate]`}
            >
              <FaLaptop className="text-slate-400" />
            </div>
          }
          title="Web Development"
          desc={desc}
        />
      </div>
      <Stripe />
    </section>
  );
};

export default Technology;
