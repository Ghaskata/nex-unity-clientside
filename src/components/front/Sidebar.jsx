import { LogOutIcon } from "lucide-react";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FrontNavlinkList } from "../../data/data.js";
import { cn } from "../../lib/utils.js";
import { selectUserData } from "../../reducers/authSlice.js";
import LogoutModal from "../dash/modal/comman/LogoutModal.jsx";


const Sidebar = ({ className }) => {
  const { pathname } = useLocation();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const userData=useSelector(selectUserData)
  // console.log("pathname",pathname)
  return (
    <div
      className={cn(
        "dash_sidebar w-[270px] xxl:w-[300px] h-full fixed top-[78px]  -start-[300px] md:start-0 transition-all duration-500 ease-in-out  z-20 shadow flex flex-col bg-backgroundv1",
        className
      )}
    >
      <ul className="w-full flex-grow py-5 flex flex-col gap-3 h-full overflow-y-scroll scrollbar mb-20">
        {userData?.role === 1 && <li className="px-3 ">
            <Link
              to={"/dashboard"}
              className={`text-base text-textPrimary md:text-lg flex items-center justify-start px-5 py-3 rounded gap-3 group/card hover:bg-backgroundv3}`}
            >
              <span className="icon"><MdSpaceDashboard className="w-[24px] h-[24px]" /></span>
              Dashboard
            </Link>
          </li>}
        {FrontNavlinkList.map((navLinkItem, index) => (
          <li className="px-3 " key={index}>
            <Link
              to={navLinkItem.href}
              className={`text-base text-textPrimary md:text-lg flex items-center justify-start px-5 py-3 rounded gap-3 group/card ${
                pathname === navLinkItem.href
                  ? "active bg-backgroundv3 !text-blueMain"
                  : "hover:bg-backgroundv3"
              }`}
            >
              <span className="icon">{navLinkItem.icon}</span>
              {navLinkItem.name}
            </Link>
          </li>
        ))}
        <li className="px-3">
          <Link
            role="button"
            className={`text-base text-textPrimary hover:bg-backgroundv3 md:text-lg flex items-center justify-start px-5 py-3 rounded gap-3 group/card `}
            onClick={() => setLogoutModalOpen(true)}
          >
            <span className="icon">
              <LogOutIcon className="w-[24px] h-[24px] group-[.active]/card:text-white" />
            </span>
            Logout
          </Link>
        </li>
      </ul>
      <LogoutModal
        logoutModalOpen={logoutModalOpen}
        setLogoutModalOpen={setLogoutModalOpen}
      />
    </div>
  );
};

export default Sidebar;
