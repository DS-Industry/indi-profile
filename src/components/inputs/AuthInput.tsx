import WildCard from "../../assets/star.svg";

interface AuthInput {
  type: string;
  placeholder: string;
  icon: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  name: string;
  value: string;
}

export default function AuthInput({
  type,
  placeholder,
  icon,
  handleChange,
  required,
  name,
  value,
}: AuthInput) {
  return (
    <div className=" w-full flex flex-row  items-start">
      <div className=" flex flex-row items-center gap-3 border border-white-900 p-3 w-full mt-2 rounded-lg">
        <img src={icon} className=" size-[15px] object-contain" />
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          name={name}
          value={value}
          className=" min-h-[32px] text-lg w-full h-full font-inter-light placeholder:font-inter-light placeholder:text-sm placeholder:text-white-400 focus:outline-none"
        />
      </div>
      <img
        src={WildCard}
        className={`size-[8px] ${required ? " visible" : " invisible"}`}
      />
    </div>
  );
}
