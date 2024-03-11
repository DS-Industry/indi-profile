import { useEffect, useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import { useUser } from "../context/UserProvider";
import axios, { AxiosResponse } from "axios";
import api from "../api";
import MainLoader from "../components/loaders/MainLoader";
import { useNavigate } from "react-router-dom";
import Toast from "../components/toast/Toast";
import SubscriptionSailCard from "../components/cards/SubscribtionSailCard.tsx";

interface Plan {
  id: string;
  name: string;
  amount: number;
  fullPrice: number;
}

export default function MainPage() {
  const { user, getUser } = useUser();
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");

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
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          setIsError("Something went wrong");
        }
        navigate("/auth/login");
      }
    };
    if (user) {
      getPlanListAsync();
    }
  }, []);

  useEffect(() => {
    if (isError) {
      const timeOutId = setTimeout(() => {
        setIsError("");
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
        <div className=" my-[30px] min-w-full flex flex-grow justify-center items-center sm:flex-col xs:flex-col md:flex-row gap-5">
          {plans &&
            plans
              .filter((item) => item.name !== user?.subscribe?.name)
              .map((item, index) => (
                <SubscriptionSailCard
                  key={index}
                  name={item.name}
                  fullPrice={item.fullPrice}
                  price={item.amount / 100}
                  id={item.id}
                  user={user}
                  count={12}
                />
              ))}
        </div>
      )}
      {isError && (
        <div className=" absolute top-2 flex w-auto justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={isError} />
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}
