import React, { useEffect, useState } from "react";
import HeroSectionCompo from "../../components/front/HeroSectionCompo";
import TopBestSectionCompo from "../../components/front/TopBestSectionCompo";
import Posts from "../../components/front/Posts";

const LandingPage = () => {
  return (
    <>
      {/* <HeroSectionCompo />
      <TopBestSectionCompo /> */}
      <div className="w-full h-full container">
        <Posts/>
      </div>
    </>
  );
};

export default LandingPage;
