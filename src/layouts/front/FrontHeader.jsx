import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../../components/common/ThemeToggler";
import darkLogo from "../../assets/images/darkLogo.jpeg";
import lightLogo from "../../assets/images/whiteLogo.png";

const FrontHeader = () => {
  return (
    <header className="header__wrapper bg-backgroundv1 p-1 z-20 shadow">
      <div className="header_wrapper flex justify-between items-center shadow px-5 py-2">
        <div className="logo">
          <div className="img_container h-[62px] w-[70px]">
            <Link to={"/"} className="flex items-center gap-3 lg:gap-5">
              {/* <Logo /> */}

              <img
                src={darkLogo}
                alt="dark logo"
                width={687}
                height={567}
                className="hidden dark:block w-full h-full object-cover object-center"
              />
              <img
                src={lightLogo}
                alt="light logo"
                width={550}
                height={453}
                className="block dark:hidden w-full h-full object-cover object-center"
              />

              <h1 className="text-textPrimary text-2xl md:text-3xl hidden sm:block">
                NexGen
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default FrontHeader;
