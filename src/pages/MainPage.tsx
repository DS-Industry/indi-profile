import SubscriptionCard from "../components/cards/SubscribtionCard";
import GeneralLayout from "../layouts/GeneralLayout";

export default function MainPage() {
  const items = [
    { name: "S", price: "150" },
    { name: "S", price: "150" },
    { name: "S", price: "150" },
    { name: "S", price: "150" },
  ];
  return (
    <GeneralLayout>
      <div className=" mb-[30px] min-h-fit">
        {items.map((item) => (
          <SubscriptionCard name={item.name} price={item.price} />
        ))}
      </div>
    </GeneralLayout>
  );
}
