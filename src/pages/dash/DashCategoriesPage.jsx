import React from "react";
import Input from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { CategoriesTable } from "../../components/dash/CategoriesTable";

const DashCategoriesPage = () => {
  return (
    <div className="w-full py-5 container">
        <div className="flex  items-start md:items-center container justify-start w-full md:justify-between gap-y-3 flex-col md:flex-row py-5">
          <div className="flex-grow w-full">
          <h3 className="text-28 lg:text-32 text-textPrimary">Dashboard</h3>
            <h4 className="text-textGray text-14 md:text-16 mb-1">
              Add ,Edit Or Delete a Category
            </h4>
          </div>
          <div className="w-full flex flex-shrink-0 justify-end gap-3 items-end max-w-sm xl:max-w-md">
            <Input
              className=" !border-textGray/40"
              placeholder="Search . . ."
            />
          </div>
        </div>
        <div className="container">
          <div className="p-1 md:p-5  border border-textGray/40 bg-backgroundv1 rounded-lg flex flex-col  gap-5 xl:flex-row py-3">
            <div className="w-full xl:w-[400px] flex-shrink-0 text-textPrimary text-12 container text-start flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-16 font-[500]">
                  Name
                </label>
                <Input
                  className="!border-textGray/40"
                  placeholder="Type Here"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-16 font-[500]">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  rows={4}
                  className="bg-backgroundv3 focus:outline-none border border-textGray/40 text-textGray  text-12flex  w-full rounded-md  border-input  px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground   disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              <Button variant={"blueV1"}>
                <span className="hidden sm:block">Cretae Category</span>
              </Button>
            </div>
            <div className="flex-grow w-full overflow-x-auto">
              <CategoriesTable/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DashCategoriesPage;
