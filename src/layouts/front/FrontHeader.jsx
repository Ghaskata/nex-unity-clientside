import React, { useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";
import ThemeToggler from "../../components/common/ThemeToggler";
import darkLogo from "../../assets/images/darkLogo.jpeg";
import lightLogo from "../../assets/images/whiteLogo.png";
import { Menu } from "lucide-react";

const FrontHeader = () => {
  let yscroll = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      yscroll = window.scrollY;
      const header__wrapper =
        document.getElementsByClassName("header__wrapper");
      if (yscroll > 180) {
        header__wrapper[0].classList.replace(
          "bg-transparent",
          "bg-backgroundv1"
        );
        header__wrapper[0].classList.replace("h-[120px]", "h-[80px]");
        header__wrapper[0].classList.replace("shadow-none", "shadow");
      } else {
        header__wrapper[0].classList.replace(
          "bg-backgroundv1",
          "bg-transparent"
        );
        header__wrapper[0].classList.replace("h-[80px]", "h-[120px]");
        header__wrapper[0].classList.replace("shadow", "shadow-none");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="header__wrapper h-[120px] bg-transparent   p-1 z-50  fixed fixed-top w-full shadow-none transition-all duration-500 ease-linear flex justify-center items-center">
      <div className="flex justify-between items-center px-5 py-2 container">
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
        <div className="flex gap-2 sm:gap-3 md:gap-5 justify-between items-center">
          <ThemeToggler />
          <Menu className="h-[24px] w-[24px] xl:h-[32px] xl:w-[32px] text-textPrimary"/>
        </div>
      </div>
    </header>
  );
};

export default FrontHeader;
