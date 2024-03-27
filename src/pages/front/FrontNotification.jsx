import React, { useMemo } from "react";
import customImg from "../../assets/images/customeProfile.png";
import { useSelector } from "react-redux";
import { selectUserData } from "../../reducers/authSlice";
import { useQuery, useQueryClient } from "react-query";
import { EVENT_API_URL, FOLLOW_API_URL } from "../../security/axios";
import DataLoadingCompo from "../../components/common/DataLoadingCompo";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { toast } from "react-toastify";

const FrontNotification = () => {
  const userData = useSelector(selectUserData);
  const CurrentUserId = userData._id;
  const queryClient = useQueryClient();

  const axiosPrivate = useAxiosPrivate();
  const queryKey = useMemo(() => ["get_pending_request"], []);
  //get pending request
  const {
    data: pendingRequestes,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(
        FOLLOW_API_URL.get_pending_request.replace(":user_id", CurrentUserId)
      );
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  //accept follow request
  const handleAcceptFollow = (pendingRequest) => {
    const followId = pendingRequest._id;
    const fromUserId = pendingRequest.fromUserId;
    axiosPrivate
      .get(FOLLOW_API_URL.acceptRequest.replace(":follow_id", followId))
      .then((res) => {
        toast.success("Request Accepted");
        queryClient.invalidateQueries("get_pending_request");
        queryClient.invalidateQueries(["followers", CurrentUserId]);
        queryClient.invalidateQueries(["following", fromUserId]);
      })
      .catch((error) => {
        console.log("Errro >> ", error);
      });
  };

  //reject follow request
  const handleRejectFollow = (pendingRequest) => {
    const followId = pendingRequest._id;
    axiosPrivate
      .get(FOLLOW_API_URL.declineRequest.replace(":follow_id", followId))
      .then((res) => {
        toast.success("Request is Declined");
        queryClient.invalidateQueries("get_pending_request");
      })
      .catch((error) => {
        console.log("Errro >> ", error);
      });
  };

  if (error || isError) {
    return (
      <div className="w-full bg-lightGray h-[500px] !text-textPrimary font-popins ">
        <div className="container w-full h-full flex text-center justify-center items-center">
          <h2 className="text-20 text-textPrimary font-semibold">
            No Pending Requests Found
          </h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <DataLoadingCompo />;
  }


  return (
    <div className="w-full py-5">
      <div className="container flex justify-center gap-5 items-center">
        <div className="w-full h-full max-w-[700px] flex flex-col gap-3">
          {pendingRequestes.map((pendingRequest, index) => (
            <div key={index} className=" !bg-backgroundv1 rounded-lg border-2 border-backgroundv3 flex gap-5 flex-col md:flex-row w-full justify-center items-center p-3">
              <div className="w-[80px] h-[80px] flex-shrink-0">
                <img className=" w-full h-full" src={pendingRequest?.fromUserIdDetail?.profile_pic!==""?`${process.env.REACT_APP_SERVER_IMAGE_PATH}${pendingRequest?.fromUserIdDetail?.profile_pic}`:customImg} />
              </div>
              <div className="event-info flex-grow w-full text-center md:text-start">
                <h3 className="event-name text-textPrimary">
                  {pendingRequest?.fromUserIdDetail?.first_name} {pendingRequest?.fromUserIdDetail?.surname}
                </h3>

                <p className="event-detail text-textGray">@{pendingRequest?.fromUserIdDetail?.first_name}</p>
              </div>

              <div className="flex gap-3">
                <div
                  onClick={()=>handleRejectFollow(pendingRequest)}
                  className="cursor-pointer px-5 h-11 text-14 flex justify-center items-center rounded-lg bg-red-600 text-white"
                >
                  Reject
                </div>
                <div
                  onClick={()=>handleAcceptFollow(pendingRequest)}
                  className="cursor-pointer px-5 h-11 text-14 flex justify-center items-center rounded-lg text-white bg-green-600"
                >
                  Accept
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontNotification;
