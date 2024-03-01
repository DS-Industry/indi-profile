import { useEffect, useState } from "react";
import SubscriptionCard from "../components/cards/SubscribtionCard";
import GeneralLayout from "../layouts/GeneralLayout";
import { useUser } from "../context/UserProvider";
import { AxiosResponse } from "axios";
import api from "../api";
import MainLoader from "../components/loaders/MainLoader";
import { useNavigate } from "react-router-dom";
import Toast from "../components/toast/Toast";

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
  const [isError, setIsError] = useState<boolean>(false);

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

  useEffect(() => {
    if (isError) {
      const timeOutId = setTimeout(() => {
        setIsError(false);
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isError]);

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
      {isError && (
        <div className=" absolute top-2 flex w-auto justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={"Something went wrong."} />
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}
