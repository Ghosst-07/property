import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputComponent({
  placeholder,
  type,
  value,
  onChange,
  id,
  showButton = false,
  Icon,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative w-full flex items-center`}>
      {Icon && <Icon className=" mb-3 absolute left-3" />}
      <label
        className={`absolute transition-all duration-200 ${
          isFocused
            ? "top-[-20px] text-sm text-gray-500 left-8"
            : "top-0 text-base text-gray-800 left-8"
        }`}
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input
        className="border-b-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink-500 pl-8"
        id={id}
        type={showPassword ? "text" : type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
      {showButton && type === "password" && (
        <div
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
}
