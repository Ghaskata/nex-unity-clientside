import React from "react";
import HomeUpcommingEvent from "./HomeUpcommingEvent";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-full h-full">
      <div className="flex  py-5 xxl:py-10 h-[calc(100vh-80px)]">
        <div className="flex-grow w-full p-3 xl:p-5 overflow-y-auto post-scroll">
          <div className=" w-full flex flex-col gap-5">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="p-3 xl:p-5 hidden lg:block ">
          <div className="relative">
            <HomeUpcommingEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
