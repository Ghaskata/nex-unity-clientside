import React, { useEffect } from "react";
import HomeUpcommingEvent from "./HomeUpcommingEvent";
import Post from "./Post";
import HomeCommunitySuggetion from "./HomeCommunitySuggetion";
import HomeFollowSuggestion from "./HomeFollowSuggestion";
import HomeCategoriesSec from "./HomeCategoriesSec";
import { useLocation } from "react-router-dom";
import { getAllPost } from "../../utils/post";
import DataLoadingCompo from "../common/DataLoadingCompo";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Posts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  if (category) {
    console.log("category >>>>>> ", category);
  }

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: "posts", queryFn: getAllPost });

  if (isError) {
    toast.error(error.message)
  }
  console.log("all posts >> ",posts)
  return (
    <div className="w-full h-full">
      {isLoading && <DataLoadingCompo/>}

      <HomeCategoriesSec />
      <div className="flex  py-5 xxl:py-10 h-[calc(100vh-80px)]">
        <div className="flex-grow w-full !m-3 !xl:m-5 overflow-y-auto post-scroll">
          <div className=" w-full flex flex-col gap-5">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="!m-3 !xl:my-5 flex-shrink-0 hidden lg:flex  flex-col gap-5  overflow-y-auto post-scroll">
          <HomeUpcommingEvent />
          <HomeCommunitySuggetion />
          <HomeFollowSuggestion />
        </div>
      </div>
    </div>
  );
};

export default Posts;
