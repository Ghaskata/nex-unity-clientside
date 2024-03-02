import React, { useState } from "react";
import UserTable from "../../components/dash/UserTable";

const Users = () => {
  return (
    <div className="dash h-full min-h-screen w-full bg-backgroundv2 transition-all duration-200 ease-in-out p-8 container">
      <h3 className="text-28 lg:text-32 text-textPrimary">Users</h3>
      <div className="py-5 lg:py-8">
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
