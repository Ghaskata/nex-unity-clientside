import React, { useEffect, useMemo } from "react";
import HomeUpcommingEvent from "./HomeUpcommingEvent";
import Post from "./Post";
import HomeCommunitySuggetion from "./HomeCommunitySuggetion";
import HomeFollowSuggestion from "./HomeFollowSuggestion";
import HomeCategoriesSec from "./HomeCategoriesSec";
import { useLocation } from "react-router-dom";
import { getAllPost } from "../../utils/post";
import DataLoadingCompo from "../common/DataLoadingCompo";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { POST_API_URL } from "../../security/axios";

const Posts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  if (category) {
    console.log("category >>>>>> ", category);
  }

  const axiosPrivate = useAxiosPrivate();
  const queryKey = useMemo(() => ["posts"], []);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(
        POST_API_URL.getPublicAndFollowingPost
      );
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    toast.error(error.message);
  }
  console.log("all posts >> ", posts);
  return (
    <div className=" w-full h-full pe-0 lg:pe-[270px] xl:pe-[300px]">
      <div className="container">
        {isLoading && <DataLoadingCompo />}

        <HomeCategoriesSec />
        <div className="flex  py-5 xxl:py-10 ">
          <div className=" w-full flex flex-col gap-5">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      <div className="fixed end-0 top-0 w-[270px] xl:w-[300px] pt-[100px] h-screen !pb-10 flex-shrink-0 hidden lg:flex  flex-col gap-5  overflow-y-auto post-scroll">
        <HomeUpcommingEvent />
        <HomeCommunitySuggetion />
        <HomeFollowSuggestion />
      </div>
    </div>
  );
};

export default Posts;
