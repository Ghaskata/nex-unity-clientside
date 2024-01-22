import React, { useState } from "react";
import Logo from "../../assets/images/Logo";
import { Link } from "react-router-dom";
import ThemeToggler from "../../components/common/ThemeToggler";
import { BellPlusIcon, MenuIcon } from "lucide-react";
import { IconButton } from "../../components/ui/IconButton";
import profile from '../../assets/images/frontHero/home header3.jpg'

const DashHeader = ({ toggleSidebar, settoggleSidebar }) => {
  return (
    <div className="dash_header bg-white dark:bg-black dark:text-white w-full fixed top-0 start-0 z-50 shadow h-[78px]">
      <div className="header_wrapper flex justify-between items-center px-5 py-4 w-full">
        <div className="logo-part flex justify-center items-center md:px-5">
          <button
            className="sidebar_button block md:hidden me-4"
            onClick={() => settoggleSidebar(!toggleSidebar)}
          >
            <MenuIcon className="h-[32px] w-[32px]" />
          </button>
          <div className="img_container">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        <div className="group of functions flex justify-center items-center gap-1 md:gap-3">
          <IconButton>
            <BellPlusIcon  className=" h-[24px] w-[24px] md:h-[32px] md:w-[32px]"/>
          </IconButton>
          <ThemeToggler />
          <button className="h-[42px] w-[42px] overflow-hidden rounded-full">
            <img src={profile} alt="profile"  className="w-full h-full object-cover"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
