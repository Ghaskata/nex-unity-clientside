import React from "react";
import { Link } from "react-router-dom";

const HomeUpcommingEvent = () => {
  return (
    <div className="w-[250px] xl:w-[300px] rounded-xl flex flex-col gap-3 justify-center items-center border-2 border-backgroundv3 bg-backgroundv1 text-textPrimary p-3 xl:p-5">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-500 text-18 xxl:text-20">Upcomming Events</h2>
        <div className="w-[28px] h-[28px] flex justify-center items-center rounded-full bg-backgroundv3 text-12 xl:text-14">
          12
        </div>
      </div>
      <hr className="border border-backgroundv3 w-full "/>

      <ul className="flex flex-col gap-3 w-[100%] xl:w-[95%]">
        <li className="flex gap-2 items-center w-full">
          <div className="w-[50px] h-[50px] rounded flex-shrink-0 bg-backgroundv3 flex flex-col justify-center items-center">
            <h3 className="text-14 font-500 ">20</h3>
            <h3 className="text-10 text-textGray">Dec</h3>
          </div>
          <div className="flex-grow w-[calc(100%-50px)]">
            <h3 className="text-14 font-500 capitalize truncate">Product designer</h3>
            <h3 className="text-10 text-textGray truncate">123 intrested Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi similique nesciunt unde adipisci ducimus voluptates modi cumque, culpa porro.</h3>
          </div>
        </li>
        <li className="flex gap-2 items-center w-full">
          <div className="w-[50px] h-[50px] rounded flex-shrink-0 bg-backgroundv3 flex flex-col justify-center items-center">
            <h3 className="text-14 font-500 ">20</h3>
            <h3 className="text-10 text-textGray">Dec</h3>
          </div>
          <div className="flex-grow w-[calc(100%-50px)]">
            <h3 className="text-14 font-500 capitalize truncate">Product designer</h3>
            <h3 className="text-10 text-textGray truncate">123 intrested Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi similique nesciunt unde adipisci ducimus voluptates modi cumque, culpa porro.</h3>
          </div>
        </li>
        <li className="flex gap-2 items-center w-full">
          <div className="w-[50px] h-[50px] rounded flex-shrink-0 bg-backgroundv3 flex flex-col justify-center items-center">
            <h3 className="text-14 font-500 ">20</h3>
            <h3 className="text-10 text-textGray">Dec</h3>
          </div>
          <div className="flex-grow w-[calc(100%-50px)]">
            <h3 className="text-14 font-500 capitalize truncate">Product designer</h3>
            <h3 className="text-10 text-textGray truncate">123 intrested Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi similique nesciunt unde adipisci ducimus voluptates modi cumque, culpa porro.</h3>
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

export default HomeUpcommingEvent;
