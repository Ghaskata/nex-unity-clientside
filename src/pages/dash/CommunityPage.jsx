import React, { useState } from "react";
import { communityData } from "../../data/staticData";
import { Plus, PlusIcon } from "lucide-react";
import CommunityTable from "../../components/dash/CommunityTable";
import { Button } from "../../components/ui/Button";
import SuccessModal from "../../components/dash/modal/comman/SuccessModal";
import AddCommunityModal from "../../components/dash/modal/comman/AddCommunityModal";

const CommunityPage = () => {
  const [addCommunityModalOpen, setaddCommunityModalOpen] = useState(false);
  const [successModalOpen, setsuccessModalOpen] = useState(false);
  return (
    <div className="dash h-full min-h-screen w-full bg-backgroundv2 transition-all duration-200 ease-in-out p-8 container">
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-28 lg:text-32 text-textPrimary">Community</h3>
          <h5 className="text-12 lg:text-16 text-textGray"></h5>
        </div>
        <div>
          <Button
            className="group/btn rounded flex justify-center items-center gap-2 px-3 h-10 md:h-12"
            variant={"blueV1"}
            onClick={() => setaddCommunityModalOpen(true)}
          >
            <span>
              <Plus className="h-6 w-6 " />
            </span>
            Add Community
          </Button>
        </div>
      </div>

      <div className="py-5 lg:py-8">
        <CommunityTable />
      </div>

      <AddCommunityModal
        addCommunityModalOpen={addCommunityModalOpen}
        setaddCommunityModalOpen={setaddCommunityModalOpen}
        setsuccessModalOpen={setsuccessModalOpen}
      />
      <SuccessModal
        setsuccessModalOpen={setsuccessModalOpen}
        successModalOpen={successModalOpen}
      />
    </div>
  );
};

export default CommunityPage;
