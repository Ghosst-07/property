import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputComponent({
  placeholder,
  type,
  value,
  onChange,
  id,
  showButton = false,
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
    <div className={`relative w-full`}>
      <label
        className={`absolute transition-all duration-200 ${
          isFocused
            ? "top-[-20px] text-sm text-gray-500"
            : "top-0 text-base text-gray-800"
        }`}
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input
        className="border-b-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-pink-500"
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
