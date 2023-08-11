const Cart = ({ icon, title, desc }) => {
  return (
    <div className="text-center p-5 w-[294px] min-h-[360px] mt-[35px] bg-orange text-white hover:bg-slate-400 rounded-lg shadow-lg ">
      <div className={`text-[50px] flex justify-center my-10`}>{icon}</div>
      <h1 className="text-[20px] mt-[45px] mb-[15px] font-semibold">{title}</h1>

      <p className="text-[15px] hover:text-white">{desc}</p>
    </div>
  );
};

export default Cart;
