import React from "react";
import img from "../../assets/images/frontHero/home header3.jpg";
import BlueLine from "../../assets/images/frontHero/home loader blue line.svg";
import LightBlueLine from "../../assets/images/frontHero/home loader light blue line.svg";
import OrangeLine from "../../assets/images/frontHero/home loader orange line.svg";

const HeroSectionCompo = () => {
  return (
    <div className="hero_wrraper bg-gray-300 h-screen w-screen">
      <div className="relative h-full w-full flex justify-center items-center">
        <div className="w-3/4 max-w-lg flex flex-col gap-5 items-center justify-center text-center z-20">
          <h1 className="text-26 xsm:text-32 md:text-44  text-textPrimary">
            {/* Find your work and your people */}
            Become a member of the best community Platform
          </h1>
          {/* <p className='text-sm md:text-base text-gray-500'>Become a member of the best community and and work global company.</p> */}
        </div>

        <div className="absolute start-1/2 top-0 light_blue_line_wrapper overflow-hidden">
          <img src={LightBlueLine} alt="light blue line" className="object-cover"/>
        </div>
        <div className="absolute bottom-0 end-0 blue_line_wrapper overflow-hidden">
          <img src={BlueLine} alt="blue line" className="object-cover" />
        </div>
        <div className="absolute start-0 bottom-50 lg:bottom-0 orange_line_wrapper overflow-hidden">
          <img src={OrangeLine} alt="orange line" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCompo;
