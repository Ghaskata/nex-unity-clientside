import { UploadCloud } from "lucide-react";
import React, { useEffect } from "react";
import Input from "../../components/ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, updateUserData } from "../../reducers/authSlice";

const FrontSettingPage = () => {
  const userData = useSelector(selectUserData);
  const dispatch=useDispatch()
  
  const [editUser, seteditUser] = useState({
    first_name:"",
    middle_name:"",
    surname:"",
    gender:"0",
    isPrivate:false,
    profile_pic:null
  });
  const [previewURL, setpreviewURL] = useState(null);
  
  useEffect(()=>{
    seteditUser(userData)
  },[])
  console.log("user",userData)
  console.log("edittttuser",editUser)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("edit user", editUser);
    dispatch(updateUserData(editUser))
  };

  const handleProfileChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setpreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
    seteditUser({ ...editUser, [e.target.name]: e.target.files[0] });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3 container my-5">
        <div>
          <h2 className="font-500 text-22 flex-shrink-0 md:text-24 lg:text-28 text-textPrimary">
            Profile Settings
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="p-5 md:p-10 border  border-backgroundv3 bg-backgroundv1 text-textPrimary rounded-lg">
          <form
            className="grid grid-cols-2 md:grid-cols-3 gap-5  "
            action=""
            onSubmit={handleSubmit}
          >
            <div className="col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 ">
                <div>
                  <label htmlFor="" className="text-14 md:text-16 mb-2">
                    First name
                  </label>
                  <Input
                    name="first_name"
                    value={editUser.first_name}
                    onChange={(e) =>
                      seteditUser({
                        ...editUser,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-textGray h-10 w-full rounded-lg px-5 text-12"
                    placeholder="Type Here"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-14 md:text-16 mb-2">
                    Middle name
                  </label>
                  <Input
                    value={editUser.middle_name}
                    name={"middle_name"}
                    onChange={(e) =>
                      seteditUser({
                        ...editUser,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-textGray h-10 w-full rounded-lg px-5 text-12"
                    placeholder="Type Here"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-14 md:text-16 mb-2">
                    Surname
                  </label>
                  <Input
                    value={editUser.surname}
                    name={"surname"}
                    onChange={(e) =>
                      seteditUser({
                        ...editUser,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-textGray h-10 w-full rounded-lg px-5 text-12"
                    placeholder="Type Here"
                  />
                </div>

                <div className="flex justify-center items-center gap-2">
                  <div className="w-[100px] flex-shrink-0 text-14 md:text-16 mb-2">
                    Gender
                  </div>
                  <div className="flex justify-start gap-10 items-center flex-grow w-full">
                    <div className="h-full flex justify-start items-start gap-3">
                      <label htmlFor="male" className="text-14 md:text-16">
                        Male
                      </label>
                      <input
                        type="radio"
                        value={"0"}
                        id="male"
                        name="gender"
                        checked={editUser.gender === 0}
                        onChange={(e) =>
                          seteditUser({ ...editUser, gender: +e.target.value })
                        }
                        className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="h-full flex justify-start items-start gap-3">
                      <label htmlFor="female" className="text-14 md:text-16 ">
                        Female
                      </label>
                      <input
                        type="radio"
                        id="female"
                        value={"1"}
                        name="gender"
                        checked={editUser.gender === 1}
                        onChange={(e) =>
                          seteditUser({ ...editUser, gender: +e.target.value })
                        }
                        className="bg-backgroundv2 focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-[100px] flex-shrink-0 text-14 md:text-16 mb-2">
                    Status
                  </div>
                  <div className="flex justify-start gap-5 items-center flex-grow w-full">
                    <div className="h-full flex justify-start items-start gap-3">
                      <label
                        htmlFor="public"
                        className={`text-14 md:text-16  py-1 px-3 rounded-full cursor-pointer  ${
                          editUser.isPrivate === false &&
                          "bg-green-600/30 text-green-700"
                        }`}
                      >
                        Public
                      </label>
                      <input
                        type="radio"
                        id="public"
                        value={"public"}
                        name="isPrivate"
                        onChange={(e) =>
                          seteditUser({ ...editUser, isPrivate: false })
                        }
                        className="bg-backgroundv2 hidden focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="h-full flex justify-start items-start gap-3">
                      <label
                        htmlFor="private"
                        className={`text-14 md:text-16 py-1 px-3 cursor-pointer rounded-full ${
                          editUser.isPrivate === true &&
                          "bg-green-600/30 text-green-700"
                        }`}
                      >
                        Private
                      </label>
                      <input
                        type="radio"
                        value={"private"}
                        id="private"
                        name="isPrivate"
                        onChange={(e) =>
                          seteditUser({ ...editUser, isPrivate: true })
                        }
                        className="bg-backgroundv2 hidden focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <button className="rounded bg-blueMain h-12 px-3 gap-2 flex justify-center items-center border text-16  border-blueMain text-white hover:border-blueMain hover:text-blueMain  hover:bg-backgroundv1 transition-all duration-300 ease-linear">
                  Save changes
                </button>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 w-full flex justify-center md:justify-start items-center flex-col gap-5">
              <div className=" w-[150px] h-[150px] rounded-full overflow-hidden z-10 shadow bg-blueMain/30">
                <img
                  src={previewURL}
                  width={247}
                  height={247}
                  alt="logo"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="profile_pic"
                  className="cursor-pointer text-textPrimary border border-textGray rounded  flex gap-2 items-center py-1 px-3"
                >
                  <UploadCloud className="h-5 w-5" /> Upload
                </label>
                <input
                  type="file"
                  id="profile_pic"
                  name="profile_pic"
                  className="hidden"
                  onChange={handleProfileChange}
                />
              </div>
            </div>
          </form>

          <div className="w-full border my-5  border-backgroundv3"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full text-textGray text-14 my-8">
            <div className="rounded border  border-backgroundv3 bg-backgroundv2 p-5">
              <div className="w-full flex justify-between items-start">
                <div className="flex-grow w-full">
                  <h3 className="text-textPrimary text-16 font-semibold">
                    Password
                  </h3>
                  <h4>You can change your passwoerd</h4>
                </div>
                <div className=" flex-shrink-0">
                  <button className="text-textPrimary bg-backgroundv1 border border-textGray rounded  flex gap-2 items-center py-1 px-3 ">
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded border  border-backgroundv3 bg-backgroundv2 p-5">
              <div className="w-full flex justify-between items-start">
                <div className="flex-grow w-full">
                  <h3 className="text-textPrimary text-16 font-semibold">
                    Remove Account
                  </h3>
                  <h4>Once you deelete Account , there is no going back</h4>
                </div>
                <div className=" flex-shrink-0">
                  <button className="bg-red-600 text-white  rounded flex gap-2 items-center py-1 px-3">
                    Deactive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontSettingPage;
