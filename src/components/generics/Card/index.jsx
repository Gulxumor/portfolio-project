import { Card } from "antd";

const Cart = ({ icon, title, desc }) => {
  return (
    <Card
      hoverable
      className="p-5 w-[294px] min-h-[360px] mt-[35px] hover:bg-orange hover:text-white before:"
    >
      <div className={`text-[50px]`}>{icon}</div>
      <h1 className="text-[20px] mt-[45px] mb-[15px] font-semibold">{title}</h1>
      <p className="text-[15px] hover:text-white">{desc}</p>
    </Card>
  );
};

export default Cart;
