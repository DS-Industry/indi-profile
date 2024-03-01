import { useNavigate } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";
import GeneralLayout from "../layouts/GeneralLayout";
import { useUser } from "../context/UserProvider";
import { useEffect, useState } from "react";
import MainLoader from "../components/loaders/MainLoader";
import api from "../api";
import Toast from "../components/toast/Toast";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, getUser, clearUser, setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPayLoading, setIsPayLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
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

  const payCurrentSubscribe = () => {
    setIsPayLoading(true);
    const linkElem = document.createElement("a");
    linkElem.href = user?.subscribe?.payUrl || "";
    linkElem.target = "_blank";
    linkElem.click();
    setIsPayLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const user = getUser();
    if (!user) {
      navigate("/auth/signin");
    } else {
      const getSubscribeAsync = async () => {
        try {
          const resp = await api.get("subscribe/subInfo", {
            headers: {
              Authorization: `Bearer ${user.tokens.accessToken}`,
            },
          });
          console.log(resp.data);
          const updatedUser = {
            ...user,
            subscribe: resp.data.data,
          };

          setUser(updatedUser);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          //navigate('/auth/singin');
          setIsLoading(false);
        }
      };
      getSubscribeAsync();
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
        <>
          <div className=" mt-5 flex md:flex-row sm:flex-row xs:flex-col gap-[20px] w-full justify-center">
            {user?.subscribe && (
              <div className=" w-full md:max-w-[180px] sm:max-w-[140px] xs:max-w-full bg-white-700 p-3 rounded-lg">
                <p className=" inline-block w-full text-left font-inter-semibold text-sm">
                  Plan:
                </p>
                <p className=" w-full inline-block text-right text-base text-primary-500 font-inter-bold">
                  {user?.subscribe?.name}
                </p>
                <div className=" w-full flex flex-row  justify-between mt-3 xs:text-sm sm:text-base">
                  <p className="  text-white-800 ">Billing</p>
                  <p className=" text-primary-500 ">
                    {user && user.subscribe && user?.subscribe?.amount / 100} ₹
                  </p>
                </div>
                <div className=" w-full flex flex-row justify-between xs:text-sm sm:text-base">
                  <p className=" text-white-800 ">Date</p>
                  <p className=" text-primary-500 bg-">
                    {user?.subscribe?.dateDebiting
                      ? `${user.subscribe.dateDebiting}`
                      : "-"}
                  </p>
                </div>
                <div className=" w-full flex flex-row justify-between items-center gap-1 xs:text-sm sm:text-base">
                  <p className=" text-white-800 ">Status</p>
                  <div className=" flex flex-row items-center gap-2">
                    <p
                      className={`${
                        user?.subscribe?.status === "created"
                          ? " text-white-800"
                          : user?.subscribe?.status === "active"
                          ? "text-primary-500"
                          : user?.subscribe?.status === "close"
                          ? " text-red-300"
                          : " text-white-400"
                      }`}
                    >
                      {user?.subscribe?.status}
                    </p>
                    <div
                      className={` animate-pulse w-3 h-3 rounded-full ${
                        user?.subscribe?.status === "created"
                          ? " bg-white-900"
                          : user?.subscribe?.status === "active"
                          ? "bg-primary-500"
                          : user?.subscribe?.status === "close"
                          ? " bg-red-300"
                          : " bg-white-400"
                      }`}
                    ></div>
                  </div>
                </div>
                {(user?.subscribe?.status === "created" ||
                  user?.subscribe?.status === "close") && (
                  <MainButton
                    title={
                      !isPayLoading ? (
                        "Pay"
                      ) : (
                        <div className=" min-w-full min-h-full flex justify-center items-center">
                          <MainLoader
                            additionalStyles={" w-7 h-7"}
                            insideStyles={" w-5 h-5 bg-primary-500 "}
                          />
                        </div>
                      )
                    }
                    handleClick={payCurrentSubscribe}
                    value={user.subscribe.subscribeId}
                    additionalStyles={
                      " bg-primary-500 text-white-500  py-1 mt-3"
                    }
                  />
                )}
              </div>
            )}
            <div
              className={` w-full ${
                user?.subscribe ? "md:max-w-[300px]" : "md:max-w-[500px]"
              }  sm:max-w-[340px] xs:max-w-full bg-white-700 p-3 rounded-lg`}
            >
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
            {user?.subscribe?.status === "active" && (
              <MainButton
                title={"Stop subscribtion"}
                handleClick={handleStopSubscription}
                value={""}
                additionalStyles={
                  "bg-red-300  text-white-500 mt-5 hover:bg-red-400 transition-all duration-300 max-w-[500px]"
                }
              />
            )}

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
      {/*       {isError && (
        <div className=" absolute top-2 flex w-auto min-w-[600px] justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={"Something went wrong."} />
          </div>
        </div>
      )} */}
    </GeneralLayout>
  );
}
