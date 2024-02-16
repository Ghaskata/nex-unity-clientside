import React from "react";
import { Button } from "../../../ui/Button";

const Step3 = ({ step, setstep, isActive }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      family tree
      <div className="py-5">
        <Button
          variant={"blue"}
          className={"rounded"}
          onClick={() => setstep(1)}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Step3;
