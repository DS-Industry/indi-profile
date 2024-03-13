import ErrorCard from "../../assets/error_confirmation.svg";
import MainButton from "../components/Buttons/MainButton";

export default function ErrorPage() {
  const handleClick = () => {};
  return (
    <>
      <div className=" flex flex-col min-h-screen min-w-screen items-center justify-between pt-[100px] pb-[20px] px-[20px]">
        <div>
          <img
            src={ErrorCard}
            alt="error payment"
            className=" size-[150px] object-contain ml-[20px]"
          />
          <p className=" font-inter-bold text-center">Payment Error!</p>
          <p className=" font-inter-light text-center">
            You can try again later.
          </p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center">
          <p className=" font-inter-light text-center">
            Something went wrong...
          </p>
          <MainButton
            title={"TRY AGAIN"}
            handleClick={handleClick}
            value={""}
            additionalStyles={" bg-primary-500 text-white-500 w-full"}
          />
        </div>
      </div>
    </>
  );
}
