import MainButton from "../Buttons/MainButton";

interface ISubscriptionCard {
  name: string;
  price: string;
}

export default function SubscriptionCard({ name, price }: ISubscriptionCard) {
  const handleUpgradePlan = () => {};
  return (
    <div
      className={`transition-all duration-700 font-inter-semibold flex flex-col justify-evenly rounded-xl mt-5 p-3 bg-white-700 shadow-[0px_5px_5px_5px_rgba(0,0,0,0.3)]`}
    >
      <div className={`transition-all duration-700`}>
        <div className=" w-full flex flex-row justify-between">
          <p>Plan</p>
          <p className=" text-primary-500 text-5xl ">{name}</p>
        </div>
        <div className=" w-full flex flex-row justify-between">
          <p>Price</p>
          <p className=" text-primary-500 bg-">{price} ₹</p>
        </div>
        <div className=" w-full flex flex-row justify-between">
          <p>Points</p>
          <p className=" text-primary-500">{price}</p>
        </div>
        <MainButton
          title={"Upgrade plan"}
          handleClick={handleUpgradePlan}
          value={""}
          additionalStyles={` bg-primary-500 text-white-500 mt-5`}
        />
      </div>
    </div>
  );
}
