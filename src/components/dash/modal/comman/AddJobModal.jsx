import React, { Fragment, useCallback, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui/Button";
import { IoCloseOutline } from "react-icons/io5";
import { AwardIcon, Image, Plus, UploadCloud } from "lucide-react";
import { selectUserData } from "../../../../reducers/authSlice";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../../../../security/useAxiosPrivate";
import { COMMUNITY_API_URL, JOB_API_URL } from "../../../../security/axios";

const AddJobModal = ({
  addJobModalOpen,
  setaddJobModalOpen,
  setsuccessModalOpen,
}) => {
  let toastId;
  const userData = useSelector(selectUserData);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const defaultValue = {
    title: "",
    companyName: "",
    content: "",
  };
  const [newJob, setnewJob] = useState(defaultValue);
  const [ImagePreview, setImagePreview] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImagePreview(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  //Job add api
  const { mutateAsync: createJobApi } = useMutation(
    async (data) => {
      console.log("data in axios >>>", data);
      return await axiosPrivate.post(JOB_API_URL.create, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    {
      onSuccess: (res) => {
        console.log("res >>> ", res.data.message);
        toast.update(toastId, {
          render: res.data.message,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
        });
        queryClient.invalidateQueries("jobs");
        setsuccessModalOpen(true);
        handleClose();
      },
      onError: (error) => {
        console.log("error >>> ", error);
        toast.dismiss(toastId);
      },
    }
  );

  const handleJobAdd = async () => {
    try {
      if (
        newJob.title.trim() === "" ||
        newJob.content.trim() === "" ||
        newJob.companyName.trim() === "" ||
        ImagePreview === ""
      ) {
        toast.error("All fields are required");
      } else {
        console.log("new job  addeddd >>>", newJob);
        toastId = toast.loading("Processing, Please wait...");
        const formData = new FormData();
        formData.append("title", newJob.title);
        formData.append("companyName", newJob.companyName);
        formData.append("content", newJob.content);
        ImagePreview && formData.append("jobImage", ImagePreview);

        await createJobApi(formData);
      }
    } catch (error) {
      console.log("ERRROR> >>", error);
    }
  };

  const handleClose = () => {
    setImagePreview("");
    setnewJob(defaultValue);
    setaddJobModalOpen(false);
  };
  return (
    <Transition appear show={addJobModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
              <Dialog.Panel className="w-full max-w-[800px] text-textPrimary mx-2 transform rounded-2xl bg-backgroundv1 border border-blueMain shadow-xl transition-all">
                <div className="dialog-content">
                  <span
                    className="close absolute top-6 right-6 cursor-pointer"
                    onClick={handleClose}
                  >
                    <IoCloseOutline className="w-6 h-6 text-textPrimary text-dan" />
                  </span>
                  <div className="dialog-body py-6 px-5 md:px-[30px] md:py-6">
                    <div className="content">
                      <Dialog.Title
                        className={"border-b-2 border-b-backgroundv3"}
                      >
                        <h5 className="mb-4 text-22 text-textPrimary flex gap-3 items-center">
                          <Plus className="h-6 w-6" /> Add New Job
                        </h5>
                      </Dialog.Title>

                      <div className="mt-8 flex flex-col-reverse md:flex-row gap-5 gap-y-5 mb-4">
                        <div className="grid grid-cols-1 gap-3 flex-grow">
                          <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-16">
                              Job Title
                            </label>
                            <input
                              name="name"
                              className="bg-backgroundv2 h-12 focus:outline-none  border border-backgroundv3 text-textPrimary  w-full rounded-lg p-3 text-14"
                              placeholder="Type Here . . ."
                              value={newJob.title}
                              onChange={(e) =>
                                setnewJob({
                                  ...newJob,
                                  title: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-16">
                              Company Name
                            </label>
                            <input
                              name="name"
                              className="bg-backgroundv2 h-12 focus:outline-none  border border-backgroundv3 text-textPrimary  w-full rounded-lg p-3 text-14"
                              placeholder="Type Here . . ."
                              value={newJob.companyName}
                              onChange={(e) =>
                                setnewJob({
                                  ...newJob,
                                  companyName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-[300px] flex flex-col gap-5 flex-shrink-0">
                          <div className="flex justify-center items-center w-full  h-full">
                            <div
                              {...getRootProps()}
                              className={`${
                                isDragActive
                                  ? "border-4 border-dashed border-blueMain"
                                  : ""
                              }${
                                !ImagePreview && "border-2 border-blueMain"
                              } cursor-pointer w-[150px] h-[150px] flex flex-col gap-3 justify-center items-center rounded-2xl overflow-hidden z-10 shadow bg-blueMain/30`}
                            >
                              <input {...getInputProps()} />

                              {ImagePreview ? (
                                <img
                                  src={URL.createObjectURL(ImagePreview)}
                                  alt="Front Image Preview"
                                  width={247}
                                  height={247}
                                  className="h-full w-full object-cover object-center"
                                />
                              ) : (
                                <div className="flex flex-col gap-3 justify-center items-center ">
                                  <Image
                                    className="h-6 w-6"
                                    strokeWidth={1.5}
                                  />
                                  <h5 className="mb-4 text-12 text-textPrimary">
                                    Job Image
                                  </h5>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 w-full mb-8">
                        <label htmlFor="" className="text-16">
                          job description
                        </label>
                        <textarea
                          name="content"
                          rows={6}
                          cols={12}
                          value={newJob.content}
                          onChange={(e) =>
                            setnewJob({
                              ...newJob,
                              content: e.target.value,
                            })
                          }
                          className="bg-backgroundv2 focus:outline-none  border border-backgroundv3 text-textPrimary  w-full rounded-lg p-3 text-14"
                          placeholder="Type Here . . ."
                        ></textarea>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <Button
                          variant={"blueV1"}
                          className="w-full max-w-sm rounded-lg"
                          onClick={handleJobAdd}
                        >
                          Add Job
                        </Button>
                      </div>
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

export default AddJobModal;