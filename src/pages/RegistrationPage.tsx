import { useEffect, useState } from "react";
import Lock from "../assets/Lock_icon.svg";
import Mail from "../assets/Message_icon.svg";
/* import LetterA from "../assets/A.svg"; */
import MainButton from "../components/Buttons/MainButton";
import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/inputs/AuthInput";
import { useUser } from "../context/UserProvider";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api";
import MainLoader from "../components/loaders/MainLoader";
import Toast from "../components/toast/Toast";

export default function RegistrationPage() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [userData, setUserData] = useState<{
    phone: string;
    password: string;
    checkPassword: string;
  }>({
    phone: "",
    password: "",
    checkPassword: "",
  });

  const handleClick = () => {
    const registerAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { client: any; tokens: any; type: string } }> =
          await api.post("auth/register", { ...userData });

        const user = {
          client: data.client,
          tokens: data.tokens,
          subscribe: null,
        };

        setUser(user);
        setIsLoading(false);
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(
            error.response?.data.code === 7
              ? "Wrong phone number or password"
              : "Something went wrong"
          );
        }
        setIsLoading(false);
      }
    };
    if (isValid) {
      registerAsync();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };

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
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-3">
        {/*         <AuthInput
          type={"text"}
          placeholder={"Name"}
          icon={LetterA}
          name={"name"}
          value={userData.mail}
          handleChange={handleChange}
          required={false}
        /> */}
        <AuthInput
          type={"phone"}
          placeholder={"write phone started with +91"}
          icon={Mail}
          name={"phone"}
          value={userData.phone}
          handleChange={handleChange}
          required={true}
          regexp={/^\+91(\d{10})$/}
          handleValidation={setIsValid}
          validationMessage="Phone must start on +91 and be no less than 13 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          name={"password"}
          value={userData.password}
          handleChange={handleChange}
          required={true}
          regexp={/.{6,}/}
          handleValidation={setIsValid}
          validationMessage="Password must be no less than 6 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"write password again"}
          icon={Lock}
          name={"checkPassword"}
          value={userData.checkPassword}
          handleChange={handleChange}
          required={true}
          regexp={new RegExp(`${userData.password}`)}
          handleValidation={setIsValid}
          validationMessage="This field should be the same as a password"
        />
        <MainButton
          title={
            !isLoading ? (
              "CREATE ACCOUNT"
            ) : (
              <div className=" w-full h-full flex justify-center items-center">
                <MainLoader
                  additionalStyles={" w-8 h-8 "}
                  insideStyles={"bg-primary-500 w-6 h-6"}
                />
              </div>
            )
          }
          handleClick={handleClick}
          value={""}
          additionalStyles={
            " bg-primary-500 text-white-500 text-base md:w-1/2 sm:w-1/2 xs:w-full mt-5"
          }
        />
      </div>
      {isError && (
        <div className=" absolute top-2 flex w-auto min-w-[600px] justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={isError} />
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
