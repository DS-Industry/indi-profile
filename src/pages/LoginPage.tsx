import AuthInput from "../components/inputs/AuthInput";
import AuthLayout from "../layouts/AuthLayout";
import Lock from "../../assets/Lock_icon.svg";
import Mail from "../../assets/Message_icon.svg";
import MainButton from "../components/Buttons/MainButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserProvider";
import api from "../api";
import axios, { AxiosResponse } from "axios";
import MainLoader from "../components/loaders/MainLoader";
import { Subscribe, User } from "../types";
import Toast from "../components/toast/Toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [userData, setUserData] = useState<{
    phone: string;
    password: string;
  }>({
    phone: "",
    password: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleClick = () => {
    const loginAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { client, tokens },
          },
        }: AxiosResponse<{ data: { client: any; tokens: any; type: string } }> =
          await api.post("auth/login", { ...userData });

        const {
          data: { data: subscribe },
        }: AxiosResponse<{ data: Subscribe }> = await api.get(
          "subscribe/subInfo",
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );

        const user: User = {
          client: client,
          tokens: tokens,
          subscribe: subscribe,
        };
        setUser(user);
        setIsLoading(false);
        if (!subscribe) {
          navigate("/");
        } else {
          navigate("/profile");
        }
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
      loginAsync();
    }
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
      <div className={` flex flex-col items-center w-full gap-5`}>
        <AuthInput
          type={"phone"}
          placeholder={"phone"}
          icon={Mail}
          handleChange={handleChange}
          required={false}
          name={"phone"}
          value={userData.phone}
          regexp={/^\+91(\d{10})$/}
          handleValidation={setIsValid}
          validationMessage="Phone must start on +91 and be no less than 13 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          handleChange={handleChange}
          required={false}
          name={"password"}
          value={userData.password}
          regexp={/.{6,}/}
          handleValidation={setIsValid}
          validationMessage="Password must be no less than 6 digits"
        />
        <MainButton
          title={
            !isLoading ? (
              "LOGIN"
            ) : (
              <MainLoader
                additionalStyles={" w-8 h-8 "}
                insideStyles={"bg-primary-500 w-6 h-6"}
              />
            )
          }
          handleClick={handleClick}
          value={""}
          additionalStyles={
            " bg-primary-500 text-white-500 text-base md:w-1/2 sm:w-1/2 xs:w-full mt-[20px] flex items-center justify-center"
          }
        />
      </div>
      <p className=" font-inter-light text-white-900 text-sm text-center mt-2">
        Don’t have an account?
        <span
          onClick={() => navigate("/auth/signup")}
          className=" text-primary-500 hover:cursor-pointer"
        >
          Sign Up!
        </span>
      </p>
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
