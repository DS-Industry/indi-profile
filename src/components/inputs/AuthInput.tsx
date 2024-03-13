import { useEffect, useState } from "react";
import WildCard from "../../../assets/star.svg";
import { BiMessageAltError } from "react-icons/bi";

interface AuthInput {
  type: string;
  placeholder: string;
  icon: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleValidation?: (value: boolean) => void;
  validationMessage?: string;
  required: boolean;
  name: string;
  value: string;
  regexp?: RegExp;
}

export default function AuthInput({
  type,
  placeholder,
  icon,
  handleChange,
  handleValidation,
  validationMessage,
  required,
  name,
  value,
  regexp,
}: AuthInput) {
  useEffect(() => {
    if (handleValidation) {
      if (regexp && regexp.test(value)) {
        handleValidation(true);
      } else {
        handleValidation(false);
      }
    }
    if (value.length > 0) {
      if (regexp && regexp.test(value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
    }
  }, [value]);
  const [isValid, setIsValid] = useState<boolean>(true);
  return (
    <div className=" w-full md:w-1/2 sm:w-1/2 xs:w-full">
      <div className=" w-full flex flex-row items-start">
        <div
          className={`transition-all duration-300 flex flex-row items-center gap-3 border p-3 w-full mt-2 rounded-lg ${
            isValid ? "border-white-900" : " border-red-500"
          } `}
        >
          <img src={icon} className=" size-[15px] object-contain" />
          <input
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            name={name}
            value={value}
            className=" min-h-[32px] text-lg w-full h-full font-inter-light placeholder:font-inter-light placeholder:text-sm placeholder:text-white-400 focus:outline-none"
            onBlur={() =>
              regexp && regexp.test(value)
                ? setIsValid(true)
                : setIsValid(false)
            }
          />
        </div>
        <img
          src={WildCard}
          className={`size-[8px] ${required ? " visible" : " invisible"}`}
        />
      </div>
      {validationMessage && (
        <p
          className={` transition-all duration-300 font-inter-light text-xs px-4 mt-2 text-red-400 ${
            isValid ? "invisible" : "visible"
          }`}
        >
          <BiMessageAltError className=" inline mr-3 text-lg" />
          {validationMessage}
        </p>
      )}
    </div>
  );
}
