import React from "react";
import { Button } from "../ui/Button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserPostList = ({userData}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-backgroundv1 text-textPrimary rounded-lg border p-5 font-popins border-backgroundv3">
      <div className="flex justify-between items-center">
        <h2 className="text-22 font-semibold text-textPrimary">
          Posts
        </h2>
      </div>
      <div className="h-[1px] w-full bg-backgroundv3 my-5"></div>
      <div className="py-5 grid grid-cols-1 xsm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
        {/* {CommunityPostList?.slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((item, index) => (
            <CommunityPost key={index} post={item} />
          ))} */}
      </div>
    </div>
  );
};

export default UserPostList;
