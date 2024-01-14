import React, { useRef, useState } from "react";
import { Button } from "../../../../ui/Button";
import { toast } from "react-toastify";

const ForgotPasswordModalSecoundStep = ({ modalclose, setStep }) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (otp.some(({ length }) => length === 0)) {
      toast.info("Value is Missing");
    } else {
      console.log(otp);
    }
  };
  function handleChange(value, index) {
    if (isNaN(value) || value === " ") {
      toast.error("Only Number Allowed");
    } else {
      let newArr = [...otp];
      newArr[index] = value;
      setOtp(newArr);
    }
  }

  return (
    <div>
      <div className="">
        <p className="text-base">
          Please enter a 4-digit code that will sent you through email.
        </p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="rounded-md py-10">
          <div className="form-item grid grid-cols-4 items-center mb-10 gap-5 md:gap-8">
            {otp.map((value, index) => (
              <input
                type="text"
                className="border border-gray-400 h-[52px] rounded text-center text-2xl  focus:outline-none"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>
          <Button onClick={() => setStep(2)}>Verify OTP</Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordModalSecoundStep;
