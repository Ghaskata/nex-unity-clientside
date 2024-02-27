import React from "react";
import { FrontNavlinkList } from "../../data/data.js";
import { cn } from "../../lib/utils.js";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ className }) => {
  const { pathname } = useLocation();

  // console.log("pathname",pathname)
  return (
    <div
      className={cn(
        "dash_sidebar w-[270px] xxl:w-[300px] h-full fixed top-[78px]  -start-[300px] md:start-0 transition-all duration-500 ease-in-out  z-20 shadow flex flex-col bg-backgroundv1",
        className
      )}
    >
      <ul className="w-full flex-grow py-5 flex flex-col gap-3 h-full overflow-y-scroll scrollbar mb-20">
        {FrontNavlinkList.map((navLinkItem, index) => (
          <li className="px-3 " key={index} >
            <Link
              to={navLinkItem.href}
              className={`text-base text-textPrimary md:text-lg flex items-center justify-start px-5 py-3 rounded gap-3 group/card ${
                pathname === navLinkItem.href
                  ? "active bg-backgroundv3 !text-blueMain"
                  : "hover:bg-backgroundv3"
              }`}
            >
              <span className="icon">
                {navLinkItem.icon}
              </span>
              {navLinkItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
