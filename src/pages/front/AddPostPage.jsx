import { Image, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import AddPostCategorySelect from "../../components/front/AddPostCategorySelect";
import { useSelector } from "react-redux";
import { selectUserData } from "../../reducers/authSlice";
import UserCommunitySelect from "../../components/front/UserCommunitySelect";
import { useMutation } from "react-query";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { POST_API_URL } from "../../security/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddPostPage = () => {
  let toastId;
  const axiosPrivate = useAxiosPrivate();
  const userData = useSelector(selectUserData);
  const createPostDefaultValue = {
    createUserId: userData._id,
    content: "",
    category_id: "",
    post_type: 1,
    postImage: "",
  };
  const [previewURL, setpreviewURL] = useState(null);
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectCommunity, setselectCommunity] = useState("");
  const [createPostData, setcreatePostData] = useState(createPostDefaultValue);

  const { mutateAsync: createPostApi } = useMutation(
    async (data) => {
      console.log("data in axios >>>" ,data)
      return await axiosPrivate.post(
        POST_API_URL.createPost,
        JSON.stringify(data)
      );
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
        setpreviewURL("");
        setselectedCategory("");
        setselectCommunity("");
        setcreatePostData(createPostDefaultValue);
      },
      onError: (error) => {
        console.log("error >>> ", error);
        toast.dismiss(toastId);
      },
    }
  );

  const handleAddPost = async (e) => {
    e.preventDefault();
    console.log("create post detail >>>>>> ", createPostData);

    try {
      if (createPostData.content.trim() === "") {
        toast.error("content Should not be empty");
      } else if (
        createPostData.postImage === null ||
        createPostData.postImage === ""
      ) {
        toast.error("post image is empty !!! ");
      } else {
        toastId = toast.loading("Processing, Please wait...");
        await createPostApi(createPostData);
      }
    } catch (error) {
      console.log("errror  >>> ", error);
    }
  };

  const handleProfileChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        setpreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
      setcreatePostData({
        ...createPostData,
        [e.target.name]: file,
      });
    }
  };

  useEffect(() => {
    setcreatePostData({ ...createPostData, category_id: selectedCategory });
  }, [selectedCategory, setselectedCategory]);

  return (
    <div className="w-ful h-full">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-3 container my-5">
        <div>
          <h2 className="font-500 text-22 flex-shrink-0 md:text-24 lg:text-28 text-textPrimary">
            Add Post
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="p-5 md:p-10 border  border-backgroundv3 bg-backgroundv1 text-textPrimary rounded-lg">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-3" action="">
            <div className=" flex flex-col">
              <div className="flex justify-center gap-5 items-center flex-grow w-full pb-5">
                <div className="h-full flex justify-start items-start gap-3">
                  <label
                    htmlFor="USER"
                    className={`text-18 md:text-20 py-2 px-5 font-500 transition-all duration-100 ease-linear rounded-lg cursor-pointer  ${
                      createPostData.post_type === 1 && "bg-blueMain text-white"
                    }`}
                  >
                    My Post
                  </label>
                  <input
                    type="radio"
                    id="USER"
                    value={"1"}
                    name="post_type"
                    onChange={(e) =>
                      setcreatePostData({ ...createPostData, post_type: 1 })
                    }
                    className="bg-backgroundv2 hidden focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                    placeholder="Type Here"
                  />
                </div>
                <div className="h-full flex justify-start items-start gap-3">
                  <label
                    htmlFor="COMMUNITY"
                    className={`text-18 md:text-20 py-2 px-5 font-500 transition-all duration-100 ease-linear rounded-lg cursor-pointer ${
                      createPostData.post_type === 2 && "bg-blueMain text-white"
                    }`}
                  >
                    Commmuity
                  </label>
                  <input
                    type="radio"
                    value={"2"}
                    id="COMMUNITY"
                    name="post_type"
                    onChange={(e) =>
                      setcreatePostData({ ...createPostData, post_type: 2 })
                    }
                    className="bg-backgroundv2 hidden focus:outline-none border border-backgroundv3 text-blueMain h-5 rounded-lg px-5 text-12"
                    placeholder="Type Here"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-20">
                  Content
                </label>
                <textarea
                  name="content"
                  rows={6}
                  cols={12}
                  className="bg-backgroundv2 focus:outline-none  border border-backgroundv3 text-textPrimary  w-full rounded-lg p-5 text-14"
                  placeholder="Type Here"
                  value={createPostData.content}
                  onChange={(e) =>
                    setcreatePostData({
                      ...createPostData,
                      content: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {createPostData.post_type === 2 && (
                <div className="pt-3">
                  <UserCommunitySelect
                    selectCommunity={selectCommunity}
                    setselectCommunity={setselectCommunity}
                  />
                </div>
              )}

              <div className="pb-5 pt-3">
                <AddPostCategorySelect
                  selectedCategory={selectedCategory}
                  setselectedCategory={setselectedCategory}
                />
              </div>
              <div className="py-5">
                <button
                  onClick={handleAddPost}
                  className="rounded bg-blueMain h-12 px-8 gap-2 flex justify-center items-center border text-18  border-blueMain text-white hover:border-blueMain hover:text-blueMain  hover:bg-backgroundv1 transition-all duration-300 ease-linear"
                >
                  Add Post
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-start items-center flex-col gap-5">
              <div className=" w-[300px] h-[200px] flex justify-center items-center rounded-lg overflow-hidden z-10 shadow bg-blueMain/30">
                {previewURL ? (
                  <img
                    src={previewURL}
                    width={247}
                    height={247}
                    alt="logo"
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <Image className="h-[100px] w-[200px]" strokeWidth={1.5} />
                )}
              </div>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="postImage"
                  className="cursor-pointer text-textPrimary border border-textGray rounded  flex gap-2 items-center py-1 px-3"
                >
                  <UploadCloud className="h-5 w-5" /> Upload
                </label>
                <input
                  type="file"
                  id="postImage"
                  name="postImage"
                  className="hidden"
                  onChange={handleProfileChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostPage;
