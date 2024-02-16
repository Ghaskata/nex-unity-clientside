import React from "react";
import { cn } from "../../lib/utils";

const Input = ({
  lable = "",
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
  ref,
  ...props
}) => {
  return (
    <div className={cn("input_wrappe w-full", className)} {...props}>
      <label htmlFor={name} className="text-base">
        {lable}
      </label>
      <input
        type={type}
        className="w-full bg-[#F5F5F5] text-black p-3 rounded-lg my-2 outline-none"
        placeholder={placeholder ? placeholder : ""}
        value={value}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
};

export default Input;
