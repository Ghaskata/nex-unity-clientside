import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IcnOpenEye from "../svg/IcnOpenEye";
import LogoutModal from "./modal/comman/LogoutModal";
import { cn } from "../../lib/utils";
const Sidebar = ({ className, toggleSidebar, settoggleSidebar }) => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const { pathname } = useLocation();
  return (
    <>
      <div
        className={cn(
          "dash_sidebar w-[256px] h-full fixed top-[78px]  -start-[256px] md:start-0 transition-all duration-500 ease-in-out dark:text-white bg-white dark:bg-black z-20 shadow flex flex-col",
          className
        )}
      >
        <div className="w-full flex-grow py-5 space-y-5 overflow-y-scroll scrollbar">
          <ul className="border-b border-gray-100 dark:border-gray-500">
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname === "/dashboard"
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Home
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/logout"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("logout")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Jobs
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/logout"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("logout")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Roles / Permission
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/users"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("users")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Users
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/community"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("community")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Communites
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/subadmin"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("subadmin")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Community Managers
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/community"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("events")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Events
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                to={"/dashboard/settings"}
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card ${
                  pathname.includes("settings")
                    ? "active bg-blue-800 text-white"
                    : "hover:bg-gray-200/50"
                }`}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 group-[.active]/card:text-white" />
                </span>
                Settings
              </Link>
            </li>
            <li className="px-3 mb-5">
              <Link
                role="button"
                className={`text-base md:text-lg flex items-center justify-start px-5 py-3 rounded-lg gap-3 group/card hover:bg-gray-200/50`}
                onClick={() => setLogoutModalOpen(true)}
              >
                <span className="icon">
                  <IcnOpenEye className="w-[20px] h-[20px] text-black dark:text-gray-500 " />
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <LogoutModal
        logoutModalOpen={logoutModalOpen}
        setLogoutModalOpen={setLogoutModalOpen}
      />
    </>
  );
};

export default Sidebar;
