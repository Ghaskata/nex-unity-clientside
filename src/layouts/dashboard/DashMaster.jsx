import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashHeader from "./DashHeader";
import Sidebar from "../../components/dash/Sidebar";

const DashMaster = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  console.log("toggle sidebar >>> ", toggleSidebar);
  const { pathname } = useLocation();

  useEffect(() => {
    settoggleSidebar(false);
  }, [pathname]);

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        settoggleSidebar={settoggleSidebar}
      />
      <Sidebar className={`${toggleSidebar ? "start-0" : "-start-[300px]"}`} />

      <DashHeader
        toggleSidebar={toggleSidebar}
        settoggleSidebar={settoggleSidebar}
      />
      <div className="main_layout_container main ps-0 md:ps-[300px] pt-[78px] transition-all duration-500 ease-in-out min-h-[100vh] w-screen">
        <Outlet />
      </div>
    </>
  );
};

export default DashMaster;
