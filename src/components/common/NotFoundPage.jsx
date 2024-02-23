import React from "react";
import Icn404 from "../svg/Icn404";
import { cn } from "../../lib/utils";

const NotFoundPage = ({ className }) => {
  return (
    <div
      className={cn(
        `flex h-screen w-screen justify-center items-center `,
        className
      )}
    >
      <Icn404 />
    </div>
  );
};

export default NotFoundPage;
