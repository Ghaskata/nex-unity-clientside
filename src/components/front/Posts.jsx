import React from "react";
import HomeUpcommingEvent from "./HomeUpcommingEvent";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="w-full h-full">
      <div className="flex  py-5 xxl:py-10">
        <div className="flex-grow w-full p-3 xl:p-5 h-[500%] flex flex-col gap-5">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="p-3 xl:p-5 hidden lg:block relative">
          <HomeUpcommingEvent />
        </div>
      </div>
    </div>
  );
};

export default Posts;
