import React, { useEffect } from "react";
import roket from "../../assets/images/rocket-go-to-top.svg";

const GoToTop = () => {
  let yscroll = window.scrollY;
  let screenH = window.screen.height;

  useEffect(() => {
    const handleScroll = () => {
      yscroll = window.scrollY;
      screenH = window.screen.height;
      const goToTop = document.getElementsByClassName("goToTop");
      if (yscroll > screenH) {
        goToTop[0].classList.replace("-bottom-16", "bottom-16");
      } else {
        goToTop[0].classList.replace("bottom-16", "-bottom-16");
      }

      console.log("screenY", screenH);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleGoTop = () => {
    const goToTop = document.getElementsByClassName("goToTop");
    goToTop[0].classList.replace("bottom-16", "bottom-28");
    window.scroll({ behavior: "smooth", top: 0, left: 0 });
    setTimeout(() => {
      goToTop[0].classList.replace( "bottom-28","-bottom-16");
    }, 500);
  };


  
  return (
    <>
      <div
        onClick={handleGoTop}
        className="goToTop cursor-pointer fixed animate-bounce transition-all duration-300 ease-linear -bottom-16 end-10 h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] z-50"
      >
        <img
          src={roket}
          alt="roket"
          className=" object-cover hover:scale-150 transition-all duration-300 ease-linear"
        />
      </div>
      {/* <div className="hoverImg cursor-pointer fixed animate-bounce transition-all duration-1000 ease-linear top-[110%] end-10 h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] z-50">
        <img
          src={roket}
          alt="roket"
          className=" object-cover transition-all duration-300 ease-linear"
        />
      </div> */}
    </>
  );
};

export default GoToTop;
