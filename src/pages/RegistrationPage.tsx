import { useState } from "react";
import Lock from "../assets/Lock_icon.svg";
import Mail from "../assets/Message_icon.svg";
/* import LetterA from "../assets/A.svg"; */
import MainButton from "../components/Buttons/MainButton";
import AuthLayout from "../layouts/AuthLayout";
import AuthInput from "../components/inputs/AuthInput";
import { useUser } from "../context/UserProvider";

export default function RegistrationPage() {
  const { setUser } = useUser();
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
    console.log("user data -> ", userData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-5">
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
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          name={"password"}
          value={userData.password}
          handleChange={handleChange}
          required={true}
        />
        <AuthInput
          type={"password"}
          placeholder={"write password again"}
          icon={Lock}
          name={"checkPassword"}
          value={userData.checkPassword}
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
