import { useState } from "react";
import Lock from "../assets/Lock_icon.svg";
import Mail from "../assets/Message_icon.svg";
import LetterA from "../assets/A.svg";
import MainButton from "../components/Buttons/MainButton";
import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/inputs/AuthInput";

export default function RegistrationPage() {
  const [userData, setUserData] = useState<{
    name?: string;
    mail: string;
    password: string;
  }>({
    name: "",
    mail: "",
    password: "",
  });

  const handleClick = () => {};

  const handleChange = () => {};

  return (
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-5">
        <AuthInput
          type={"text"}
          placeholder={"Name"}
          icon={LetterA}
          handleChange={handleChange}
          required={false}
        />
        <AuthInput
          type={"mail"}
          placeholder={"email"}
          icon={Mail}
          handleChange={handleChange}
          required={true}
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          handleChange={handleChange}
          required={true}
        />
        <MainButton
          title={"CREATE ACCOUNT"}
          handleClick={handleClick}
          value={""}
          additionalStyles={" bg-primary-500 text-white-500 text-base w-2/3"}
        />
      </div>
    </AuthLayout>
  );
}
