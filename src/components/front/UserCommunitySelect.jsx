import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select.jsx";
import React, {
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutGrid } from "lucide-react";
import { useQuery } from "react-query";
import { CATEGORY_API_URL } from "../../security/axios.js";
import useAxiosPrivate from "../../security/useAxiosPrivate.js";
import DataLoadingCompo from "../common/DataLoadingCompo.jsx";

const UserCommunitySelect = ({ selectCommunity, setselectCommunity }) => {
  const axiosPrivate = useAxiosPrivate();
  const queryKey = useMemo(() => ["categories"], []);

  // get api
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(CATEGORY_API_URL.get);
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    categories && setselectCommunity(categories[0]._id);
  }, [categories]);

  return (
    <>
      {isLoading && <DataLoadingCompo />}
      {categories && (
        <Select
          onValueChange={(e) => setselectCommunity(e)}
          value={selectCommunity === "" ? categories[0]?._id : selectCommunity}
        >
          <SelectTrigger className="w-full !border border-backgroundv3 focus:border focus:border-backgroundv3   text-textGray text-16 bg-backgroundv2 rounded-lg py-3 px-3 h-14 ">
            <div className="flex gap-2 items-center text-textPrimary">
              <h2>User Community :</h2>
              <SelectValue className="capitalize text-textPrimary " />
            </div>
          </SelectTrigger>
          <SelectContent className="text-12 !bg-backgroundv2">
            {categories?.map((item, index) => (
              <SelectItem
                value={item._id}
                key={index}
                className="capitalize text-textGray hover:border-0 hover:outline-none focus:outline-none focus:border-none hover:bg-lightGray"
              >
                {item.category_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </>
  );
};

export default UserCommunitySelect;