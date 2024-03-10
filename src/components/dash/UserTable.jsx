import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCheckIcon,
  Pen,
  Trash2,
} from "lucide-react";
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
import { AUTH_API_URL, COMMUNITY_API_URL } from "../../security/axios";
import DataLoadingCompo from "../common/DataLoadingCompo";
import defaultimage from "../../assets/images/customeProfile.png";
import girl from "../../assets/images/girl1.png";
import boy from "../../assets/images/boy.png";
import { CgBoy, CgGirl } from "react-icons/cg";
import { FaUserXmark, FaUserCheck } from "react-icons/fa6";
import { Switch } from "../ui/switch";
import { VscEye } from "react-icons/vsc";
import StatusFilter from "./userTableFilter/StatusFilter";
import GenderFilter from "./userTableFilter/GenderFilter";
import ActiveFilter from "./userTableFilter/ActiveFilter";
import IsRoot from "./userTableFilter/IsRootFilter";

const UserTable = () => {
  const [selectedStatus, setselectedStatus] = useState("All");
  const [selectedIsRoot, setselectedIsRoot] = useState("All");
  const [selectedgender, setselectedgender] = useState("All");
  const [selectedActive, setselectedActive] = useState("All");
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState("");

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
      const response = await axiosPrivate.get(AUTH_API_URL.getAllUser);
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleStatusChange = (value) => {
    console.log(value); //true or false
  };

  // console.log("All users >>", users);

  
  
  // const handleMark=()=>{
  //   if (search.trim() !== "") {
  //     const highlightText = document.getElementsByClassName("highlightText");
  //     const regex = new RegExp(`(${search.trim().toLocaleLowerCase()})`, "gi");

  //     for (let i = 0; i < highlightText.length; i++) {
  //       const originalText = highlightText[i].textContent;
  //       const highlightedText = originalText.replace(
  //         regex,
  //         (match) => `<mark>${match}</mark>`
  //       );
  //       highlightText[i].innerHTML = highlightedText;
  //     }
  //   }
  // }
  
  const handleSearch=(e)=>{
    setsearch(e.target.value)
    // handleMark()
  }

  if (isError) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <DataLoadingCompo />
        <h2 className="text-textPrimary text-center text-26">
          Network Error !!!!
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return <DataLoadingCompo />;
  }

  return (
    <div className="w-full">
      {selectedStatus === "All" &&
      selectedActive === "All" &&
      selectedIsRoot === "All" &&
      selectedgender === "All" ? (
        ""
      ) : (
        <div>
          <h3 className="text-14 text-textPrimary pb-1 ps-1">
            {
              users
                ?.filter((item) =>
                  selectedStatus === "All"
                    ? item
                    : selectedStatus === "public"
                    ? item.isPrivate === false
                    : item.isPrivate === true
                )
                ?.filter((item) =>
                  selectedgender === "All"
                    ? item
                    : selectedgender === "Male"
                    ? item.gender === 1
                    : item.gender === 2
                )
                ?.filter((item) =>
                  selectedIsRoot === "All"
                    ? item
                    : selectedIsRoot === "Root"
                    ? item.isRoot === true
                    : item.isRoot === false
                )
                ?.filter((item) =>
                  selectedActive === "All"
                    ? item
                    : selectedActive === "Active"
                    ? item.active === true
                    : item.active === false
                ).length
            }{" "}
            user found
          </h3>
        </div>
      )}
      <div className="rounded-xl w-full  text-textPrimary text-center text-12  shadow bg-backgroundv1 border-2 border-backgroundv3">
        <div className="p-5 xxl:p-8 w-full  flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full">
            <Input
              value={search}
              onChange={handleSearch}
              className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-textGray h-10 w-full rounded-lg px-5 text-12"
              placeholder="Search ..."
            />
          </div>
          <div className="gap-5 hidden sm:flex">
            {/* <StatusFilter
              selectedStatus={selectedStatus}
              setselectedStatus={setselectedStatus}
            /> */}
          </div>
        </div>
        <div className="filter_div w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-5 px-5 xxl:px-8">
          <StatusFilter
            selectedStatus={selectedStatus}
            setselectedStatus={setselectedStatus}
          />
          <GenderFilter
            selectedgender={selectedgender}
            setselectedgender={setselectedgender}
          />
          <ActiveFilter
            selectedActive={selectedActive}
            setselectedActive={setselectedActive}
          />
          <IsRoot
            selectedIsRoot={selectedIsRoot}
            setselectedIsRoot={setselectedIsRoot}
          />
        </div>
        <div className=" p-5 xxl:p-8 text-textPrimary text-center text-12 border-t-2 border-backgroundv3">
          <Table className="border-none w-full min-w-[800px]">
            <TableHeader className=" bg-backgroundv2 text-textPrimary !rounded-lg h-16 xl:h-16  border-none ">
              <TableRow className="py-5 border-none">
                <TableHead className="text-start text-14 xl:text-16 max-w-[60px] md:max-w-[100px] xl:max-w-full truncate">
                  Id
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Profile
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  First
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Middle
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Surname
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  Email
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Gender
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Status
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  isRoot
                </TableHead>
                <TableHead className="text-start text-14 xl:text-16">
                  CreatedAt
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Active
                </TableHead>
                <TableHead className="text-center text-14 xl:text-16">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {users
                ?.filter((item) => {
                  const searchLowerCase = search.trim().toLowerCase();
                  if (searchLowerCase === "") {
                    return item;
                  } else {
                    return (
                      item.first_name.toLowerCase().includes(searchLowerCase) ||
                      item.middle_name.toLowerCase().includes(searchLowerCase) ||
                      item.surname.toLowerCase().includes(searchLowerCase) ||
                      item.email.toLowerCase().includes(searchLowerCase)
                    );
                  }
                })
                ?.filter((item) =>
                  selectedStatus === "All"
                    ? item
                    : selectedStatus === "public"
                    ? item.isPrivate === false
                    : item.isPrivate === true
                )
                ?.filter((item) =>
                  selectedgender === "All"
                    ? item
                    : selectedgender === "Male"
                    ? item.gender === 1
                    : item.gender === 2
                )
                ?.filter((item) =>
                  selectedIsRoot === "All"
                    ? item
                    : selectedIsRoot === "Root"
                    ? item.isRoot === true
                    : item.isRoot === false
                )
                ?.filter((item) =>
                  selectedActive === "All"
                    ? item
                    : selectedActive === "Active"
                    ? item.active === true
                    : item.active === false
                )
                ?.map((user, index) => (
                  <TableRow
                    key={index}
                    className="border-y-2 border-backgroundv3 first:border-t-0"
                  >
                    <TableCell className="max-w-[60px] md:max-w-[100px] xl:max-w-full truncate">
                      {user._id}
                    </TableCell>
                    <TableCell>
                      <div className="image_cntainer w-[60px] h-[60px] overflow-hidden bg-blueMain rounded-full">
                        <img
                          src={
                            user.profile_pic !== ""
                              ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${user.profile_pic}`
                              : defaultimage
                          }
                          alt="front_image"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="highlightText text-start text-16 xl:text-18 font-semibold text-textPrimary">
                        {user.first_name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="highlightText text-start text-14 xl:text-16 text-textGray">
                        {user.middle_name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="highlightText text-start text-14 xl:text-16 text-textGray">
                        {user.surname}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="highlightText text-start text-14 xl:text-16 text-textPrimary">
                        {user.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      {user.gender === 1 ? (
                        <div className="image_cntainer w-[40px] h-[40px] overflow-hidden">
                          <img
                            src={boy}
                            alt="male"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ) : (
                        <div className="image_cntainer w-[40px] h-[40px] overflow-hidden ">
                          <img
                            src={girl}
                            alt="female"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="w-full flex items-center justify-center">
                        <div
                          className={`capitalize py-1 w-20 rounded-full
                            ${
                              user.isPrivate
                                ? "bg-green-600/30 text-green-700"
                                : "bg-yellow-400/30 text-yellow-700"
                            }`}
                        >
                          {user.isPrivate ? "private" : "public"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full flex items-center justify-center">
                        {user.isRoot ? (
                          <FaUserCheck className="h-6 w-6 text-green-600" />
                        ) : (
                          <FaUserXmark className="h-6 w-6 text-red-600" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center items-center w-full">
                        <Switch
                          id="active"
                          checked={user.active}
                          onCheckedChange={handleStatusChange}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-end justify-end gap-4 px-4">
                        <button className="text-green-700">
                          <VscEye className="h-6 w-6" />
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
