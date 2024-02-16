import React from "react";
import { Button } from "../../../ui/Button";

const Step2 = ({ step, setstep, isActive }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      personal detail
      
      <div className="py-5">
        <Button
          variant={"blue"}
          className={"rounded"}
          onClick={() => setstep(3)}
        >
          Add Details
        </Button>
      </div>
    </div>
  );
};

export default Step2;
