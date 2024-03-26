import { useEffect, useState } from "react";
import { BiMessageAltError } from "react-icons/bi";

interface AuthInput {
    type: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (value: boolean) => void;
    validationMessage?: string;
    required: boolean;
    name: string;
    value: string;
    regexp?: RegExp;
}

export default function OtpInput({
                                      type,
                                      placeholder,
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
        <div>
            <div className=" w-full flex flex-row items-center">
                <div
                    className={`transition-all duration-300 flex flex-row items-center gap-3 border p-3 w-full mt-2 rounded-lg ${
                        isValid ? "border-white-900" : " border-red-500"
                    } `}
                >
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