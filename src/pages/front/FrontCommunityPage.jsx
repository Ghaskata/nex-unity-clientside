import React, { useRef } from "react";
import UserJoinedCommunity from "../../components/front/UserJoinedCommunity";
import UserCreatedCommunity from "../../components/front/UserCreatedCommunity";
import AllCommunity from "../../components/front/AllCommunity";



const FrontCommunityPage = () => {
  return (
    <>
      <AllCommunity/>
      <UserCreatedCommunity />
      <UserJoinedCommunity />
    </>
  );
};

export default FrontCommunityPage;
