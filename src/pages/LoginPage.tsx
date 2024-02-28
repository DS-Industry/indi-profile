import AuthInput from "../components/inputs/AuthInput";
import AuthLayout from "../layouts/AuthLayout";
import Lock from "../assets/Lock_icon.svg";
import Mail from "../assets/Message_icon.svg";
import MainButton from "../components/Buttons/MainButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../context/UserProvider";
import api from "../api";

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
      try {
        console.log(userData);
        const response = await api.post("auth/login", {
          data: { ...userData },
        });

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loginAsync();
  };

  return (
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-5">
        <AuthInput
          type={"phone"}
          placeholder={"phone"}
          icon={Mail}
          handleChange={handleChange}
          required={false}
          name={"phone"}
          value={userData.phone}
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          handleChange={handleChange}
          required={false}
          name={"password"}
          value={userData.password}
        />
        <MainButton
          title={"LOGIN"}
          handleClick={handleClick}
          value={""}
          additionalStyles={
            " bg-primary-500 text-white-500 text-base w-2/3 mt-[20px]"
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
    </AuthLayout>
  );
}
