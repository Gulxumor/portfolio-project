import Sidebar from "../components/Sidebar";
import Pages from "../components/Pages";

const Root = () => {
  return (
    <div className={`flex overflow-y-hidden`}>
      <Sidebar />
      <Pages />
    </div>
  );
};

export default Root;
