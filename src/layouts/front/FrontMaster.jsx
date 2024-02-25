import React, { useState } from "react";
import FrontHeader from "./FrontHeader";
import { Outlet } from "react-router-dom";
import FrontFooter from "./FrontFooter";

const FrontMaster = () => {
  return (
    <>
      <FrontHeader />
      <div className="ps-0 md:ps-[270px] xxl:ps-[300px] min-h-screen pt-[80px] transition-all duration-500 ease-linear  bg-backgroundv2">
        <Outlet />
      </div>
      {/* <FrontFooter /> */}
    </>
  );
};

export default FrontMaster;
