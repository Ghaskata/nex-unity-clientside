import React, { useRef } from "react";
import UserJoinedCommunity from "../../components/front/UserJoinedCommunity";
import UserCreatedCommunity from "../../components/front/UserCreatedCommunity";
import AllCommunity from "../../components/front/AllCommunity";
import AllCommunity1 from "../../components/front/AllComunity1";



const FrontCommunityPage = () => {
  return (
    <>
      {/* <AllCommunity/> */}
      <UserCreatedCommunity />
      <UserJoinedCommunity />
      <AllCommunity1/>
    </>
  );
};

export default FrontCommunityPage;
