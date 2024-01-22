import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";
import CustomSelect from "../../components/ui/CustomSelect";
import { subAdminTable, subAdminTableFields } from "../../data/staticData";
import CommunityManagerDetailTable from "../../components/dash/CommunityManagerDetailTable";

const CommunityManagers = () => {
  let [isOpenModal, setIsOpenModal] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [filter, setfilter] = useState("");

  const handleSearchData = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchData(e.target.value);
    console.log(`searchData >>> ${searchData}`);
    console.log(`filter >>> ${filter}`);
    console.log("----------------");
  };

  const filterUser = (e) => {
    setSearchData(e.target.value);
  };
  console.log(searchData);

  return (
    <div className="dash min-h-screen bg-slate-100/80 dark:bg-black/80 p-8 transition-all duration-200 ease-out">
      <h3 className="text-xl md:text-2xl dark:text-white">
        Community Managers
      </h3>
      <form
        action=""
        className="flex gap-3 my-4 w-full xl:w-3/4 xxl:w-1/2 h-[40px]"
        onSubmit={handleSearchData}
      >
        <div className="search_form">
          <div className="form_group flex justify-center gap-2">
            <CustomSelect
              list={subAdminTableFields}
              className="rounded-2xl col-span-1 min-w-[100px]"
              setValue={setfilter}
            />
            <input
              type="text"
              placeholder="search here "
              className="rounded-lg outline-none col-span-3 w-full px-3"
              value={searchData}
              onChange={filterUser}
            />
          </div>
        </div>
        <Button
          className={"text-sm rounded-xl"}
          variant={"blue"}
          onClick={handleSearchData}
        >
          Search
        </Button>
      </form>
      <CommunityManagerDetailTable
        data={subAdminTable}
        filter={filter}
        searchData={searchData}
      />
    </div>
  );
};

export default CommunityManagers;
