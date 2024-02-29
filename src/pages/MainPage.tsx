import { useEffect, useState } from "react";
import SubscriptionCard from "../components/cards/SubscribtionCard";
import GeneralLayout from "../layouts/GeneralLayout";
import { useUser } from "../context/UserProvider";
import { AxiosResponse } from "axios";
import api from "../api";
import MainLoader from "../components/loaders/MainLoader";
import { useNavigate } from "react-router-dom";

interface Plan {
  id: string;
  name: string;
  amount: number;
}

export default function MainPage() {
  const { user, getUser } = useUser();
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate("/auth/signin");
    }
    const getPlanListAsync = async () => {
      try {
        const {
          data: { data: plans },
        }: AxiosResponse<{ data: Plan[] | [] }> = await api.get(
          "subscribe/plans",
          {
            headers: {
              Authorization: `Bearer ${user?.tokens.accessToken}`,
            },
          }
        );
        setIsLoading(false);
        setPlans(plans);
        console.log(plans);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    if (user) {
      getPlanListAsync();
    }
  }, []);

  return (
    <GeneralLayout>
      {isLoading ? (
        <div className=" flex flex-grow justify-center items-center">
          <MainLoader
            additionalStyles=" w-[100px] h-[100px]"
            insideStyles=" bg-white-500 w-[90px] h-[90px]"
          />
        </div>
      ) : (
        <div className=" my-[30px] min-w-full flex flex-grow justify-start items-start sm:flex-col xs:flex-col md:flex-row gap-5">
          {plans &&
            plans.map((item, index) => (
              <SubscriptionCard
                key={index}
                name={item.name}
                price={item.amount / 100}
                id={item.id}
                user={user}
              />
            ))}
        </div>
      )}
    </GeneralLayout>
  );
}
