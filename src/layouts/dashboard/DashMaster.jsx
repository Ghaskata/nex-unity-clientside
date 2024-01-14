import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashHeader from "./DashHeader";
import Sidebar from "../../components/dash/Sidebar";

const DashMaster = () => {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  console.log(toggleSidebar);
  const { pathname } = useLocation();

  useEffect(() => {
    settoggleSidebar(false);
  }, [pathname]);

  return (
    <div>
      <Sidebar
        toggleSidebar={toggleSidebar}
        settoggleSidebar={settoggleSidebar}
      />
      {toggleSidebar && (
        <div className="w-full fixed z-50 top-0 start-0 bg-black/50 transition-all duration-500 ease-in h-full">
          <Sidebar className="absolute start-0 z-50 transition-all duration-500 ease-in" />
        </div>
      )}
      <DashHeader
        toggleSidebar={toggleSidebar}
        settoggleSidebar={settoggleSidebar}
      />
      <div className="main_layout_container main ms-0 md:ms-[256px] mt-[78px] transition-all duration-200 ease-in-out">
        <Outlet />
      </div>
    </div>
  );
};

export default DashMaster;
