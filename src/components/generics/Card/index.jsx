const Cart = ({ icon, title, desc }) => {
  return (
    <div className="p-5 w-[294px] min-h-[360px] mt-[35px] hover:bg-orange hover:text-white rounded-lg shadow-lg">
      <div className={`text-[50px]`}>{icon}</div>
      <h1 className="text-[20px] mt-[45px] mb-[15px] font-semibold">{title}</h1>

      <p className="text-[15px] hover:text-white">{desc}</p>
    </div>
  );
};

export default Cart;
