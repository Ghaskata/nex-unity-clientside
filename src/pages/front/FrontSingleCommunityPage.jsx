import { ArrowLeft } from "lucide-react";
import React, { useMemo } from "react";
import CommunityPostList from "../../components/dash/CommunityPostList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import DataLoadingCompo from "../../components/common/DataLoadingCompo";
import { COMMUNITY_API_URL } from "../../security/axios";
import axios from "axios";

const FrontSingleCommunityPage = () => {
  const navigate = useNavigate();

  const { communityId } = useParams();
  console.log("community id >> ", communityId);

  const axiosPrivate = useAxiosPrivate();

  const queryKey = useMemo(() => ["community", communityId], [communityId]);

  const {
    data: community,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      if (communityId) {
        const response = await axiosPrivate.get(
          COMMUNITY_API_URL.getCommunityById.replace(":id", communityId)
        );
        return response.data.data;
      }
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  if (error || isError) {
    return (
      <div className="w-full bg-lightGray h-[500px] !text-textPrimary font-popins ">
        <div className="container w-full h-full flex text-center justify-center items-center">
          <h2 className="text-20 text-textPrimary font-semibold">
            No Community Found
          </h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <DataLoadingCompo />;
  }

  console.log("commmunity dta >>>>> ", community);

  if (community) {
    return (
      <div className="w-full bg-lightGray h-full min-h-screen !text-textPrimary font-popins ">
        <div className="container py-5">
          <div
            className="flex items-center gap-2 !text-blueMain pb-3  container cursor-pointer"
            onClick={() => navigate("/community")}
          >
            <ArrowLeft className="h-5 w-5 text-blueMain" /> Go Back
          </div>

          <div className="py-3 container ">
            <div className="rounded-lg overflow-hidden bg-backgroundv1 p-5 relative border border-backgroundv3">
              <div className="absolute h-[150px] start-0 top-0 w-full bg-blueMain overflow-hidden">
                {community.backImage && (
                  <img
                    src={`${process.env.REACT_APP_SERVER_IMAGE_PATH}${community.backImage}`}
                    width={247}
                    height={247}
                    alt="logo"
                    className="h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <div className="flex justify-between flex-col sm:flex-row items-start sm:items-end z-10 gap-y-2 pt-20 pb-5">
                <div className="logo flex flex-col md:flex-row gap-5 items-start md:items-end">
                  <div className=" w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] bg-black rounded-lg overflow-hidden z-10 shadow">
                    <img
                      src={
                        community.frontImage
                          ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${community.frontImage}`
                          : "/images/hero3.png"
                      }
                      width={247}
                      height={247}
                      alt="logo"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h2 className="text-20 font-semibold text-textPrimary">
                      {community.name}
                      {/* Nodeflffl Co. */}
                    </h2>
                    <h5 className="text-textGray text-12">
                      {community.description}{" "}
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, amet. */}
                    </h5>
                  </div>
                </div>
                <div className=" h-full justify-end items-end flex-shrink-0">
                  <button
                    className={`${
                      true
                        ? "bg-blueMain/30 text-blueMain border-blueMain"
                        : "bg-red-400/30 text-red-700 border-red-700"
                    } rounded-full h-8 lg:h-10 px-5 gap-2 flex justify-center font-semibold items-center border text-16 transition-all duration-300 ease-linear`}
                  >
                    Join | leave
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-backgroundv3"></div>
              <div className="py-5">
                <div className="w-full gap-2 flex  justify-center items-center">
                  <div className="w-full max-w-md h-full -5 text-textGray text-16 flex flex-row  justify-between  gap-2">
                    <div className="flex gap-3">
                      <h3>Total Post : </h3>
                      <h3 className="text-blueMain text-18 font-semibold ">
                        {community.communityPostsCount}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <h3>Total Members : </h3>
                      <h3 className="text-blueMain text-18 font-semibold">
                        {community.communityParticipantsCount}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 container">
              <CommunityPostList CommunityPostList={community.communityPostsDetail}/>
          </div>
        </div>
      </div>
    );
  }
};

export default FrontSingleCommunityPage;
