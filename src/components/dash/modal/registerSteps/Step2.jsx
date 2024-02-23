import React from "react";
import { Button } from "../../../ui/Button";

const Step2 = ({ step, setstep, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "block" : "hidden"
      } h-full w-full flex flex-col justify-between`}
    >
      <div className="personal_detail_body">
        <h3>personal detail</h3>
      </div>
      <div className="">
        <Button
          variant={"blueV1"}
          className={"rounded-lg"}
          onClick={() => setstep(3)}
        >
          Add Details
        </Button>
      </div>
    </div>
  );
};

export default Step2;
