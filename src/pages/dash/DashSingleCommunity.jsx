import { ArrowLeft } from "lucide-react";
import React from "react";
import CommunityPostList from "../../components/dash/CommunityPostList";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DashSingleCommunity = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();

  console.log("community id >> ", communityId);

  
  return (
    <div className="w-full bg-lightGray h-full min-h-screen !text-textPrimary font-popins ">
      <div className="container py-5">
        <div
          className="flex items-center gap-2 !text-blueMain pb-3  container cursor-pointer"
          onClick={() => navigate("/dashboard/community")}
        >
          <ArrowLeft className="h-5 w-5 text-blueMain" /> Go Back
        </div>

        <div className="py-3 container ">
          <div className="rounded-lg overflow-hidden bg-backgroundv1 p-5 relative border border-backgroundv3">
            <div className="absolute h-[150px] start-0 top-0 w-full bg-blueMain "></div>
            <div className="flex justify-between flex-col sm:flex-row items-start sm:items-end z-10 gap-y-2 pt-20 pb-5">
              <div className="logo flex flex-col md:flex-row gap-5 items-start md:items-end">
                <div className=" w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] bg-black rounded-lg overflow-hidden z-10 shadow">
                  <img
                    src={"/images/hero3.png"}
                    width={247}
                    height={247}
                    alt="logo"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <h2 className="text-20 font-semibold text-textPrimary">
                    Nodeflffl Co.
                  </h2>
                  <h5 className="text-textGray text-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    amet.
                  </h5>
                </div>
              </div>
              <div className=" h-full justify-end items-end flex-shrink-0">
                <div
                  className={`${
                    true
                      ? "bg-green-600/30 text-green-700 border-green-700"
                      : "bg-yellow-400/30 text-yellow-700 border-yellow-700"
                  } rounded-full h-8 lg:h-10 px-5 gap-2 flex justify-center font-semibold items-center border text-16 transition-all duration-300 ease-linear`}
                >
                  Public | private
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-backgroundv3"></div>
            <div className="py-5">
              <div className="w-full gap-2 flex  justify-center items-center">
                <div className="w-full max-w-md h-full -5 text-textGray text-16 flex flex-row  justify-between  gap-2">
                  <div className="flex gap-3">
                    <h3>Total Post : </h3>
                    <h3 className="text-blueMain text-18 font-semibold ">
                      234
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <h3>Total Members : </h3>
                    <h3 className="text-blueMain text-18 font-semibold">
                      9077
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 container">
          <CommunityPostList />
        </div>
      </div>
    </div>
  );
};

export default DashSingleCommunity;
