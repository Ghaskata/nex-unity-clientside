import React from "react";
import Input from "../../../../ui/Input";
import { Button } from "../../../../ui/Button";

const FirstStep = ({ step, setStep, isActiveStep }) => {
  return (
    <div className={`${isActiveStep ? "block" : "hidden"}`}>
      <div className="">
        <p className="text-base">
          Please enter your Email Address. You will receive a 4-digit code.
        </p>
      </div>
      <div className="rounded-md py-10">
        <div className="form-item mb-10">
          <Input
            placeholder="Enter Your Email Address"
            lable="Email"
            lableClass="dark:text-dark-300 text-dark-300 font-600 text-[14px]"
            className="bg-dark-600 text-[14px] !text-dark-300 placeholder-dark-300"
          />
        </div>
        <Button variant={"blue"} className={"rounded-lg"} onClick={() => setStep(2)}>Send Reset Mail</Button>
      </div>
    </div>
  );
};

export default FirstStep;
