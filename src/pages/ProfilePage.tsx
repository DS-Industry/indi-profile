import { useNavigate } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";
import GeneralLayout from "../layouts/GeneralLayout";

export default function ProfilePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleStopSubscription = () => {
    navigate("/");
  };

  const handleLogout = () => {
    navigate("/auth/signin");
  };

  return (
    <GeneralLayout>
      <div className=" mt-5 flex flex-row gap-5">
        <div className=" w-2/5 bg-white-700 p-3 rounded-lg">
          <p className=" inline-block w-full text-left font-inter-semibold text-sm">
            Plan:
          </p>
          <p className=" w-full inline-block text-right text-3xl text-primary-500 font-inter-bold">
            S
          </p>
        </div>
        <div className=" w-3/5 bg-white-700 p-3 rounded-lg">
          <p className=" inline-block w-full text-left font-inter-semibold text-sm">
            Points:
          </p>
          <p className=" w-full inline-block text-right text-3xl text-primary-500 font-inter-bold">
            3000
          </p>
        </div>
      </div>
      <div className=" font-inter-semibold flex flex-col justify-evenly min-h-[90px] rounded-xl mt-5 p-3 bg-white-700">
        <div className=" w-full flex flex-row justify-between">
          <p>Billing</p>
          <p className=" text-primary-500 ">3000 ₹</p>
        </div>
        <div className=" w-full flex flex-row justify-between">
          <p>Date</p>
          <p className=" text-primary-500 bg-">29.09.24</p>
        </div>
      </div>
      <div className=" font-inter-semibold flex flex-col justify-evenly min-h-[90px] rounded-xl mt-5 p-3 bg-white-700">
        <div className=" w-full flex flex-row justify-between">
          <p>Name</p>
          <p className=" text-primary-500 ">Ohm Prokash</p>
        </div>
        <div className=" w-full flex flex-row justify-between">
          <p>Email</p>
          <p className=" text-primary-500 bg-">prockash@moy-ka.com</p>
        </div>
      </div>
      <MainButton
        title={"Upgrade plan"}
        handleClick={handleClick}
        value={""}
        additionalStyles={
          "bg-green-500  text-white-500 mt-5 hover:bg-green-600 transition-all duration-300"
        }
      />
      <MainButton
        title={"Stop subscribtion"}
        handleClick={handleStopSubscription}
        value={""}
        additionalStyles={
          "bg-red-300  text-white-500 mt-5 hover:bg-red-400 transition-all duration-300"
        }
      />
      <MainButton
        title={"Log out"}
        handleClick={handleLogout}
        value={""}
        additionalStyles={
          "bg-white-700 hover:bg-white-400 hover:text-white-500 text-white-900 mt-5 transition-all duration-300 mb-5"
        }
      />
    </GeneralLayout>
  );
}
