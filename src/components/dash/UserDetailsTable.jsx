import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import TableCompo from "./TableCompo";
import {
  ArrowLeft,
  ArrowRight,
  CheckCheckIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { userTable } from "../../data/staticData";
import { Button } from "../ui/Button";
import CustomSelect from "../ui/CustomSelect";

export const userTableFields = ["username", "firstname", "lastname", "email"];

const UserDetailsTable = ({ className }) => {
  const [searchData, setSearchData] = useState("");
  const [filter, setfilter] = useState("");

  const [userData, setuserData] = useState(userTable);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(Math.ceil(userData.length / 6));
  const lastIndex = page * 6;
  const firstIndex = lastIndex - 6;

  const handleSearchData = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchData(e.target.value);
    // console.log(`searchData >>> ${searchData}`);
    // console.log(`filter >>> ${filter}`);
    // console.log("----------------");
  };

  const filterUser = (e) => {
    setSearchData(e.target.value);
  };


  useEffect(() => {
    if (searchData.trim() === "") {
      settotalPages(Math.ceil(userData.length / 6));
    } else {
      settotalPages(
        Math.ceil(
          userData.filter((item) =>
            item.name.toLocaleLowerCase().includes(searchData.trim())
          ).length / 6
        )
      );
    }
  }, [searchData, setSearchData]);
  return (
    <div className="w-full">
      <form
        action=""
        className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4 w-full xl:w-3/4 xxl:w-1/2 h-[40px]"
        onSubmit={handleSearchData}
      >
        <div className="search_form col-span-1 md:col-span-3">
          <div className="form_group flex justify-center grid-cols-4 gap-1">
            <CustomSelect
              list={userTableFields}
              className="rounded col-span-1"
              setValue={setfilter}
            />
            <input
              type="text"
              placeholder="search here "
              className="rounded outline-none col-span-3 w-full px-3"
              value={searchData}
              onChange={filterUser}
            />
          </div>
        </div>
        <Button
          className={"text-sm rounded-none"}
          variant={"blueV1"}
          onClick={handleSearchData}
        >
          Search
        </Button>
      </form>
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table
          className={cn(
            "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
            className
          )}
        >
          <thead className="w-full text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="p-5 text-center">
              User Photo
            </th>
            <th scope="col" className="p-5 text-center">
              User name
            </th>
            <th scope="col" className="p-5 text-center">
              First name
            </th>
            <th scope="col" className="p-5 text-center">
              Last name
            </th>
            <th scope="col" className="p-5 text-center">
              email
            </th>
            <th scope="col" className="p-5 text-center">
              mobile no
            </th>
            <th scope="col" className="p-5 text-center">
              Emiail Verified
            </th>
            <th scope="col" className="p-5 text-center">
              Phone Verified
            </th>
            <th scope="col" className="p-5 text-center">
              Created At
            </th>
            <th scope="col" className="p-5 text-center">
              Actions
            </th>
          </thead>
          <tbody>
            {userData
              .filter((item) =>
                searchData.trim() === ""
                  ? item
                  : item[filter].toLowerCase().includes(searchData.trim())
              )
              .slice(firstIndex, lastIndex)
              .map((user, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="font-medium align-middle ps-4 text-center py-3 flex justify-center items-center">
                    <div className="overflow-hidden h-[64px] w-[64px] rounded-full">
                      <img
                        src={require(`../../assets/images/frontHero/${user.image}`)}
                        alt="user"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.username}
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.firstname}
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.lastname}
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.email}
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.mobileno}
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    <span className="flex justify-center items-center">
                      {user.emailVerified ? (
                        <CheckCheckIcon className="text-green-800" />
                      ) : (
                        <XIcon className="text-red-800" />
                      )}
                    </span>
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    <span className="flex justify-center items-center">
                      {user.phoneVerified ? (
                        <CheckCheckIcon className="text-green-800" />
                      ) : (
                        <XIcon className="text-red-800" />
                      )}
                    </span>
                  </td>
                  <td className="font-medium align-middle ps-4 text-center">
                    {user.createdAt}
                  </td>
                  <td className="px-6 text-right">
                    <span className="flex justify-center items-center gap-3">
                      <a
                        href="/edit"
                        className="font-medium flex justify-center items-center text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <PencilIcon className="text-blue-800" />
                      </a>
                      <a
                        href="/edit"
                        className="font-medium flex justify-center items-center text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <Trash2Icon className="text-red-800" />
                      </a>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="pagination w-full mt-5 flex justify-between">
        <div>
          <Button
            variant={"outline"}
            className={`gap-3 text-textPrimary border transition-all duration-300 ease-linear h-10 ${
              page === 1
                ? "text-textGray hover:bg-transparent active:scale-1 border-textGray"
                : "bg-backgroundv1 hover:bg-backgroundv3  border-textPrimary "
            }`}
            onClick={() => page != 1 && setpage(page - 1)}
          >
            <ArrowLeft className="w-5 h-5" /> Privious
          </Button>
        </div>
        <div className="flex justify-center items-center gap-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
            key={i}
              onClick={() => setpage(i + 1)}
              variant={"outline"}
              className={`text-textGray  ${
                page === i + 1
                  ? "bg-blueMain text-white hover:bg-blueMain "
                  : "hover:bg-backgroundv3 hover:text-textGray"
              } border-none h-10 transition-all duration-300 ease-linear`}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <div>
          <Button
            variant={"outline"}
            className={`gap-3 text-textPrimary border transition-all duration-300 ease-linear h-10 ${
              page === totalPages
                ? "text-textGray hover:bg-transparent active:scale-1 border-textGray"
                : "bg-backgroundv1 hover:bg-backgroundv3  border-textPrimary "
            }`}
            onClick={() => page !== totalPages && setpage(page + 1)}
          >
            Next <ArrowRight className="w-5 h-5" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsTable;
