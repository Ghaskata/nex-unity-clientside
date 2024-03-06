import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Plus } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectToken, selectUserData } from "../../../../reducers/authSlice";
import useAxiosPrivate from "../../../../security/useAxiosPrivate";
import Input from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { AUTH_API_URL } from "../../../../security/axios";
import swal from "sweetalert";

const ChangePasswordModal = ({
  changePasswordModalOpen,
  setchangePasswordModalOpen,
}) => {
  let token;
  let toastId
  const userData = useSelector(selectUserData);
  const [password, setpassword] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const { mutateAsync: forgetpassTokenGenerateApi } = useMutation(
    async (data) => {
      return await axiosPrivate.post(
        AUTH_API_URL.forgetpassTokenGenerate,
        JSON.stringify(data)
      );
    },
    {
      onSuccess: (res) => {
        // toast.success(res.data.message);
        token = res.data.data;
        setTimeout(() => {
            changePassoword(token, password);
        }, 1000);
      },
      onError: (error) => {
        // if (error.response) {
        //   toast.error(error.response.data.message || "An error occurred");
        // } else {
        //   toast.error("An unexpected error occurred");
        // }
      },
    }
  );
  const { mutateAsync: forgetPasswordApi } = useMutation(
    async (data) => {
      return await axiosPrivate.post(
        AUTH_API_URL.forgetPassword,
        JSON.stringify(data)
      );
    },
    {
      onSuccess: (res) => {
        console.log("res >>>> ",res)
        toast.dismiss(toastId)
        toast.success("password change succesffulyy");
        setTimeout(() => {
          handleClose();
        }, 2000);
      },
      onError: (error) => {
        // if (error.response) {
        //   toast.update(toastId, {
        //     render: error.response.data.message,
        //     type: toast.TYPE.ERROR,
        //     isLoading: false,
        //     autoClose: 2000,
        //   });
        //   // toast.error(error.response.data.message || "An error occurred");
        // } else {
        //   toast.update(toastId, {
        //     render: "An unexpected error occurred",
        //     type: toast.TYPE.ERROR,
        //     isLoading: false,
        //     autoClose: 2000,
        //   });
        //   // toast.error("An unexpected error occurred");
        // }
      },
    }
  );

  const handleChangePasswordTokenGenerate = async () => {
    console.log("password >>> ", password);
    try {
      swal({
        title: "Are you sure?",
        text: "You Really want to Change your Password !!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          if (password.trim() === "") {
            toast.warning("password should not empty");
          } else {
            toastId=toast.loading("please wait . . . ")
            await forgetpassTokenGenerateApi({ userId: userData._id });
          }
        }
      });
    } catch (error) {
      console.log("error >> ", error);
    }
  };

  const changePassoword = async (token, password) => {
    console.log("token >>> ", token, "psssword >>> ", password);
    try {
      if (password.trim() === "") {
        toast.warning("password should not empty");
      } else {
        await forgetPasswordApi({ token: token, password: password });
      }
    } catch (error) {
      console.log("error >> ", error);
    }
  };
  const handleClose = () => {
    setpassword("");
    setchangePasswordModalOpen(false);
  };
  return (
    <Transition appear show={changePasswordModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black dark:bg-white dark:bg-opacity-15  bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-10">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-backgroundv1 border border-blueMain shadow-xl transition-all">
                <div className="dialog-content">
                  <span
                    className="close absolute top-6 right-6 cursor-pointer"
                    onClick={handleClose}
                  >
                    <IoCloseOutline  className="w-6 h-6 text-textPrimary text-dan" />
                  </span>
                  <div className="dialog-body py-6 px-5 md:px-[30px] md:py-6">
                    <div className="content">
                      <Dialog.Title
                        className={"border-b-2 border-b-backgroundv3"}
                      >
                        <h5 className="mb-4 text-22 text-textPrimary flex gap-3 items-center">
                          {/* <Plus className="h-6 w-6" /> */}
                          Change Password
                        </h5>
                      </Dialog.Title>

                      <h5 className=" text-16 mt-4 text-textGray ">
                        you want to Upadate your password then enter new
                        password and update your old passsword to new password
                      </h5>

                      <div className="my-8">
                        <Input
                          className="h-12 bg-backgroundv2 font-400 !text-14 !text-textPrimary focus:outline-none border border-backgroundv3  w-full rounded-lg px-5"
                          placeholder="Enter new password ..."
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>

                      <Button
                        variant={"blueV1"}
                        className="w-full rounded-lg"
                        onClick={handleChangePasswordTokenGenerate}
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChangePasswordModal;
