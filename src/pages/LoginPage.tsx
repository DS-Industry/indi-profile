import AuthInput from "../components/inputs/AuthInput";
import AuthLayout from "../layouts/AuthLayout";
import Lock from "../assets/Lock_icon.svg";
import Mail from "../assets/Message_icon.svg";
import MainButton from "../components/Buttons/MainButton";

export default function LoginPage() {
  const handleChange = () => {};
  const handleClick = () => {};
  const handleSignUpClick = () => {};

  return (
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-5">
        <AuthInput
          type={"mail"}
          placeholder={"email"}
          icon={Mail}
          handleChange={handleChange}
          required={false}
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          handleChange={handleChange}
          required={false}
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
        <span onClick={handleSignUpClick} className=" text-primary-500">
          Sign Up!
        </span>
      </p>
    </AuthLayout>
  );
}
