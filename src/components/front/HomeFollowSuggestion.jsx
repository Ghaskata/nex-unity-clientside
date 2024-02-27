import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/frontHero/home header3.jpg";

const HomeFollowSuggestion = () => {
  return (
    <div className="w-[250px] xl:w-[300px] rounded-xl flex flex-col gap-3 justify-center items-center border-2 border-backgroundv3 bg-backgroundv1 text-textPrimary p-3 xl:p-5">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-500 text-18 xxl:text-20">Add People</h2>
      </div>
      <hr className="border border-backgroundv3 w-full "/>
      <ul className="flex flex-col gap-3 w-[100%] xl:w-[95%]">
        <li className="flex  justify-between items-center w-[100%] gap-1 xl:gap-2">
          <div className="flex items-center flex-grow overflow-hidden gap-1">
            <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full overflow-hidden">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h3 className="text-14 font-500 truncate">Lucvckd dnnandm</h3>
              <h5 className="text-[8px] text-textGray flex gap-1 items-center truncate">
                @lorem
              </h5>
            </div>
          </div>
          <div className="flex-shrink-0 ">
            <button className="rounded-full py-1 px-2 border text-10 border-blueMain bg-blueMain text-white hover:text-blueMain hover:bg-backgroundv1 transition-all duration-300 ease-linear ">
              Follow
            </button>
          </div>
        </li>
        
        <li className="flex  justify-between items-center w-[100%] gap-1 xl:gap-2">
          <div className="flex items-center flex-grow overflow-hidden gap-1">
            <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full overflow-hidden">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h3 className="text-14 font-500 truncate">Lucvckd dnnandm</h3>
              <h5 className="text-[8px] text-textGray flex gap-1 items-center truncate">
                @lorem
              </h5>
            </div>
          </div>
          <div className="flex-shrink-0 ">
            <button className="rounded-full py-1 px-2 border text-10 border-blueMain bg-blueMain text-white hover:text-blueMain hover:bg-backgroundv1 transition-all duration-300 ease-linear ">
              Follow
            </button>
          </div>
        </li>
        
        <li className="flex  justify-between items-center w-[100%] gap-1 xl:gap-2">
          <div className="flex items-center flex-grow overflow-hidden gap-1">
            <div className="w-[40px] h-[40px] flex-shrink-0 rounded-full overflow-hidden">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h3 className="text-14 font-500 truncate">Lucvckd dnnandm</h3>
              <h5 className="text-[8px] text-textGray flex gap-1 items-center truncate">
                @lorem
              </h5>
            </div>
          </div>
          <div className="flex-shrink-0 ">
            <button className="rounded-full py-1 px-2 border text-10 border-blueMain bg-blueMain text-white hover:text-blueMain hover:bg-backgroundv1 transition-all duration-300 ease-linear ">
              Follow
            </button>
          </div>
        </li>
        
      </ul>
      <hr className="border border-backgroundv3 w-full "/>
      <div className="w-full flex justify-center items-center ">
        <Link className="text-blueMain text-14">See All</Link>
      </div>
    </div>
  );
};

export default HomeFollowSuggestion;
