import React, { useRef, useState } from "react";
import { Button } from "../../../../ui/Button";
import { toast } from "react-toastify";
import OTPInput, { ResendOTP } from "otp-input-react";



const SecoundStep = ({ step, setStep, isActiveStep }) => {
  const [OTP, setOTP] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (otp.some(({ length }) => length === 0)) {
  //     toast.info("Value is Missing");
  //   } else {
  //     console.log(otp);
  //   }
  // };
  // function handleChange(value, index) {
  //   if (isNaN(value) || value === " ") {
  //     toast.error("Only Number Allowed");
  //   } else {
  //     let newArr = [...otp];
  //     newArr[index] = value;
  //     setOtp(newArr);
  //   }
  // }

  return (
    <div className={`${isActiveStep ? "block" : "hidden"}`}>
      <div className="">
        <p className="text-base">
          Please enter a 4-digit code that will sent you through email.
        </p>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="rounded-md py-10">
        <div className="form-item flex flex-col gap-3 py-5 w-full">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            secure
          />
          <ResendOTP onResendClick={() => console.log("Resend clicked")} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button
            className="bg-transparent border border-black hover:bg-black/20"
            onClick={() => setStep(1)}
          >
            Back
          </Button>
          <Button variant={"blue"} className={"rounded-lg"} onClick={() => setStep(2)}>Verify OTP</Button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default SecoundStep;
