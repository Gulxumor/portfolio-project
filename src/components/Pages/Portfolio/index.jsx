import { Card } from "antd";
import { FaGithub, FaTv } from "react-icons/fa";
import { projects } from "../../../utils/skills";
import { styles } from "../../../utils/tailwind_variables";

const Portfolio = () => {
  const { Meta } = Card;
  return (
    <section className="w-[80%] m-auto mt-[100px] mb-28">
      <span class="relative flex h-8 mb-10">
        <span class="animate-pulse absolute w-8 inline-flex h-full rounded-full bg-orange opacity-75"></span>
        <p className="text-4xl ml-3 mt-1 w-full font-medium">Projects</p>
      </span>
      <div className={`flex-wrap ${styles.flex}`}>
        {projects.map(({ id, src, title, desc }) => (
          <Card
            key={id}
            style={{
              width: 300,
            }}
            hoverable
            cover={<img alt="example" src={src} className="h-[180px]" />}
            actions={[
              <FaGithub
                key="github"
                className={`ml-10 ${styles.hoverScale}`}
              />,
              <FaTv key="demo" className={`ml-20 ${styles.hoverScale}`} />,
            ]}
            className="m-5"
          >
            <Meta title={title} description={desc} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
