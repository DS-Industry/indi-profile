import { useNavigate } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";
import GeneralLayout from "../layouts/GeneralLayout";
import { useUser } from "../context/UserProvider";
import { useEffect, useState } from "react";
import MainLoader from "../components/loaders/MainLoader";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, getUser, clearUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleClick = () => {
    navigate("/");
  };
  const handleStopSubscription = () => {
    navigate("/");
  };

  const handleLogout = () => {
    clearUser();
    navigate("/auth/signin");
  };

  useEffect(() => {
    setIsLoading(true);
    const user = getUser();
    if (!user) {
      navigate("/auth/signin");
    }
    setIsLoading(false);
  }, []);

  console.log(user);

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
        <>
          <div className=" mt-5 flex md:flex-row sm:flex-row xs:flex-col gap-[20px] w-full justify-center">
            <div className=" w-full md:max-w-[140px] sm:max-w-[140px] xs:max-w-full bg-white-700 p-3 rounded-lg">
              <p className=" inline-block w-full text-left font-inter-semibold text-sm">
                Plan:
              </p>
              <p className=" w-full inline-block text-right text-3xl text-primary-500 font-inter-bold">
                S
              </p>
              <div className=" w-full flex flex-row  justify-between mt-3 xs:text-sm sm:text-base">
                <p className="  text-white-800 ">Billing</p>
                <p className=" text-primary-500 ">3000 ₹</p>
              </div>
              <div className=" w-full flex flex-row justify-between xs:text-sm sm:text-base">
                <p className=" text-white-800 ">Date</p>
                <p className=" text-primary-500 bg-">29.09.24</p>
              </div>
            </div>
            <div className=" w-full md:max-w-[340px] sm:max-w-[340px] xs:max-w-full bg-white-700 p-3 rounded-lg">
              <p className=" inline-block w-full text-left font-inter-semibold text-sm">
                Balance:
              </p>
              <p className=" w-full inline-block text-right text-3xl text-primary-500 font-inter-bold">
                {user?.client.cards.balance}
              </p>
              <div className=" w-full flex flex-row  justify-between mt-3 xs:text-sm sm:text-base">
                <p className=" text-white-800 ">card number</p>
                <p className=" text-primary-500">{user?.client.cards.number}</p>
              </div>
              <div className=" w-full flex flex-row justify-between xs:text-sm sm:text-base">
                <p className=" text-white-800">Created At</p>
                <p className=" text-primary-500">
                  {user?.client.cards.dateBegin
                    ? `${user.client.cards.dateBegin}`
                    : "-"}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex md:justify-center items-center flex-col min-w-full">
            <div className=" font-inter-semibold flex flex-col justify-evenly min-h-[90px] flex-wrap rounded-xl min-w-[200px] max-w-[500px] w-full mt-5 p-3 bg-white-700">
              <div className=" w-full flex flex-row justify-between">
                <div className=" w-full flex flex-col justify-start mb-3">
                  <p className=" text-primary-500 md:text-2xl text-2xl">
                    {user?.client.name}
                  </p>
                  <p className=" text-white-400 text-xs">name</p>
                </div>
              </div>
              <div className=" w-full flex sm:flex-row justify-between">
                <p>Phone</p>
                <p className=" text-primary-500 bg-">{user?.client.phone}</p>
              </div>
              <div className=" w-full flex flex-row justify-between">
                <p>Email</p>
                <p className=" text-primary-500 bg-">
                  {user?.client.email ? user?.client.email : "-"}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-grow flex-col items-center">
            <MainButton
              title={"Upgrade plan"}
              handleClick={handleClick}
              value={""}
              additionalStyles={
                "bg-green-500  text-white-500 mt-5 hover:bg-green-600 transition-all duration-300 max-w-[500px]"
              }
            />
            <MainButton
              title={"Stop subscribtion"}
              handleClick={handleStopSubscription}
              value={""}
              additionalStyles={
                "bg-red-300  text-white-500 mt-5 hover:bg-red-400 transition-all duration-300 max-w-[500px]"
              }
            />
            <MainButton
              title={"Log out"}
              handleClick={handleLogout}
              value={""}
              additionalStyles={
                "bg-white-700 hover:bg-white-400 hover:text-white-500 text-white-900 mt-5 transition-all duration-300 mb-5 max-w-[500px]"
              }
            />
          </div>
        </>
      )}
    </GeneralLayout>
  );
}
