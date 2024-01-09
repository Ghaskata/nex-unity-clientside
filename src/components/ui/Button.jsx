import React from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const Buttonvariants = cva(
    "w-full flex items-center justify-center", 
{
  variants: {
    variant: {
      theme: "bg-[#81D8D0] w-full hover:bg-[#81D88181] text-black rounded-lg",
      black: "bg-black w-full text-white hover:bg-black/60 rounded-full border-[1px] border-gray-500",
      blue: "bg-blue-800 w-full text-white hover:bg-blue-500/60 rounded-full",
      white: "bg-white text-black hover:bg-black rounded-full",
    },
    size: {
      sm: "text-sm py-1 px-2",
      md: "text-lg py-3 px-4",
      lg: "text-2xl py-4 px-6",
    },
  },
  defaultVariants: {
    variant: "theme",
    size: "md",
  },
});

const Button = ({ variant, size, className, onClick, children,...props }) => {
  return (
    <button
      className={cn(Buttonvariants({ variant, size}),className)}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export {Button,Buttonvariants};
