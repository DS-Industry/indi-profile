import { useNavigate } from "react-router-dom";
import SuccessCard from "../../assets/success_cofirmation.svg";
import MainButton from "../components/Buttons/MainButton";

export default function SuccessPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col min-h-screen min-w-screen items-center justify-between pt-[100px] pb-[20px] px-[20px]">
        <div>
          <img
            src={SuccessCard}
            alt="error payment"
            className=" size-[150px] object-contain ml-[40px]"
          />
          <p className=" font-inter-bold text-center">Payment Successful!</p>
          <p className=" font-inter-light">Your payment is confirmed.</p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center">
          <MainButton
            title={"NICE!"}
            handleClick={() => navigate("/")}
            value={""}
            additionalStyles={" bg-primary-500 text-white-500 w-full"}
          />
        </div>
      </div>
    </>
  );
}
