import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import CustomSelect from "../../components/ui/CustomSelect";
import UserDetailsTable from "../../components/dash/UserDetailsTable";
import { userTableFields } from "../../data/staticData";

const Users = () => {
 

  return (
    <div className="dash w-full h-full min-h-screen bg-backgroundv2 p-8 transition-all duration-200 ease-out">
      <h3 className="text-28 lg:text-32  text-textPrimary">Users</h3>
      
      <UserDetailsTable />
    </div>
  );
};

export default Users;
