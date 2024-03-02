import React, { useContext, useState } from "react";
import Logo from "../../assets/images/Logo";
import { Link } from "react-router-dom";
import ThemeToggler from "../../components/common/ThemeToggler";
import { BellPlusIcon, MenuIcon } from "lucide-react";
import { IconButton } from "../../components/ui/IconButton";
import profile from "../../assets/images/frontHero/home header3.jpg";
import darkLogo from "../../assets/images/darkLogo.jpeg";
import lightLogo from "../../assets/images/whiteLogo.png";
import { ThemeContext } from "../../context/ThemeContext";

const DashHeader = ({ toggleSidebar, settoggleSidebar }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="dash_header bg-backgroundv1 border border-backgroundv3 text-textPrimary w-full fixed top-0 start-0 z-50 shadow h-[78px]">
      <div className="header_wrapper flex justify-between items-center px-5 py-2 w-full">
        <div className="logo-part flex justify-center items-center md:px-5">
          <button
            className="sidebar_button block md:hidden me-4"
            onClick={() => settoggleSidebar(!toggleSidebar)}
          >
            <MenuIcon className="h-[32px] w-[32px]" />
          </button>
          <div className="img_container h-[62px] w-[70px]">
            <Link to={"/"} className="flex items-center gap-3 lg:gap-5">
              {/* <Logo /> */}

              {isDarkMode ? (
                <img
                  src={darkLogo}
                  alt="dark logo"
                  width={687}
                  height={567}
                  className=" w-full h-full object-cover object-center"
                />
              ) : (
                <img
                  src={lightLogo}
                  alt="light logo"
                  width={550}
                  height={453}
                  className=" w-full h-full object-cover object-center"
                />
              )}

              <h1 className="text-blueMain font-semibold font-playfair text-2xl md:text-3xl hidden sm:block">
                NexGen
              </h1>
            </Link>
          </div>
        </div>
        <div className="group of functions flex justify-center items-center gap-1 xl:gap-3">
          <IconButton>
            <BellPlusIcon className=" h-[24px] w-[24px] xl:h-[32px] xl:w-[32px]" />
          </IconButton>
          <ThemeToggler />
          <button className="h-[42px] w-[42px] overflow-hidden rounded-full">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
