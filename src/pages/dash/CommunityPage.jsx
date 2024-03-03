import React from "react";
import { communityData } from "../../data/staticData";
import { PlusIcon } from "lucide-react";
import CommunityTable from "../../components/dash/CommunityTable";
import { Button } from "../../components/ui/Button";

const CommunityPage = () => {
  return (
    <div className="dash h-full min-h-screen w-full bg-backgroundv2 transition-all duration-200 ease-in-out p-8 container">
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-28 lg:text-32 text-textPrimary">Community</h3>
          <h5 className="text-12 lg:text-16 text-textGray"></h5>
        </div>
        {/* <div>
          <Button variant={"blueV1"} className={"px-5 h-11 flex justify-center items-center gap-3 rounded"}>Add Community<PlusIcon className="h-6 w-6"/></Button>
        </div> */}
      </div>
      
      <div className="py-5 lg:py-8">
        <CommunityTable />
      </div>
    </div>
  );
};

export default CommunityPage;
