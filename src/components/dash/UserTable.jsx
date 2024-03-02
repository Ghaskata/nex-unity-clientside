import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Pen, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Button } from "../ui/Button";
import Input from "../ui/Input";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { useQuery } from "react-query";
import { COMMUNITY_API_URL } from "../../security/axios";
import DataLoadingCompo from "../common/DataLoadingCompo";
import { PostAdd } from "@mui/icons-material";

const UserTable = () => {
  //   const [page, setpage] = useState(1);
  //   const [totalPages, settotalPages] = useState(Math.ceil(data.length / 5));
  //   var indexOfLastItem = page * 5;
  //   const indexOfFirstItem = indexOfLastItem - 5;

  const [selectedStatus, setselectedStatus] = useState("All");

  const axiosPrivate = useAxiosPrivate();
  const queryKey = useMemo(() => ["users"], []);

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(COMMUNITY_API_URL.getAll);
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  console.log("All users >>", users);

  return (
    <div className="w-full">
      {isLoading && <DataLoadingCompo />}
      <div className="rounded-xl w-full  text-textPrimary text-center text-12  shadow bg-backgroundv1 border-2 border-backgroundv3">
        <div className="p-5 xxl:p-8 w-full  flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full">
            <Input
              className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-textGray h-10 w-full rounded-lg px-5 text-12"
              placeholder="Search ..."
            />
          </div>
          <div className="gap-5 hidden sm:flex">
          <PostAdd/>
            {/* <StatusFilter
              selectedStatus={selectedStatus}
              setselectedStatus={setselectedStatus}
            />
            */}
          </div>
        </div>
        <div className=" p-5 xxl:p-8 text-textPrimary text-center text-12 border-t-2 border-backgroundv3">
          <Table className="border-none w-full min-w-[800px]">
            <TableHeader className=" bg-backgroundv2 text-textPrimary !rounded-lg h-16 xl:h-16  border-none ">
              <TableRow className="py-5 border-none">
                <TableHead className="text-start text-14 xl:text-16 w-[100px] truncate">
                  Id
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Front Image
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Name
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Description
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Owner
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Members
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Status
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  CreatedAt
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users
                ?.filter((item) =>
                  selectedStatus === "All"
                    ? item
                    : selectedStatus === "public"
                    ? item.isPublic === true
                    : item.isPublic === false
                )
                ?.map((user, index) => (
                  <TableRow
                    key={index}
                    className="border-y-2 border-backgroundv3 first:border-t-0"
                  >
                    <TableCell className="w-[100px] truncate">
                      {user._id}
                    </TableCell>
                    <TableCell>
                      <div className="image_cntainer w-[70px] h-[70px] overflow-hidden bg-textGray/50 rounded-lg">
                        <img
                          src={"/images/p1.png"}
                          alt="front_image"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-start text-16 xl:text-18 font-semibold text-blueMain">
                        {user.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-start text-12 xl:text-14 text-textGray">
                        {user.description}
                      </div>
                    </TableCell>
                    <TableCell>{}?</TableCell>
                    <TableCell>{}no ?</TableCell>
                    <TableCell>
                      <div className="w-full flex items-center justify-center">
                        <div
                          className={`capitalize py-1 px-3 rounded-full
                            ${
                              user.isPublic
                                ? "bg-green-600/30 text-green-700"
                                : "bg-yellow-400/30 text-yellow-700"
                            }`}
                        >
                          {user.isPublic ? "public" : "private"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-end justify-end gap-4 px-4">
                        <button className="text-blue-600">
                          <Pen className="h-6 w-6" />
                        </button>
                        <button className="text-red-600">
                          <Trash2 className="h-6 w-6 " />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
