import React from "react";
import { communityData } from "../../data/staticData";
import { PlusIcon } from "lucide-react";
import CommunityTable from "../../components/dash/CommunityTable";

const CommunityPage = () => {
  return (
    <div className="dash h-full min-h-screen w-full bg-backgroundv2 transition-all duration-200 ease-in-out p-8 container">
      <h3 className="text-28 lg:text-32 text-textPrimary">Community</h3>
      <div className="py-5 lg:py-8">
        <CommunityTable />
      </div>
    </div>
  );
};

export default CommunityPage;
