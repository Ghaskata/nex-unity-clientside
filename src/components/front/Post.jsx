import React, { useMemo, useState } from "react";
import image from "../../assets/images/frontHero/home header3.jpg";
import {
  Clock,
  ForwardIcon,
  MessageSquareMore,
  Share2,
  Smile,
  ThumbsUp,
  Watch,
} from "lucide-react";
import { Button } from "../ui/Button";
import { COMMENT_API_URL, LIKE_API_URL } from "../../security/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import Lottie from "react-lottie-player";
import likeLottie from "../../assets/lottie/like.json";
import { CgProfile } from "react-icons/cg";
import customeProfile from "../../assets/images/customeProfile.png";
import { Picker } from "emoji-mart";
import { formatUserFriendlyTime } from "../../lib/userFriendlyTime";

const Post = ({ postData, index }) => {
  const queryClient = useQueryClient();
  const [openAddCommnet, setopenAddCommnet] = useState(false);
  const [showcomment, setshowcomment] = useState(false);
  const [addCommentData, setaddCommentData] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const postId = postData._id;
  const queryKey = useMemo(() => ["comment", postId], [postId]);

  const { data: comments } = useQuery(
    queryKey,
    async () => {
      if (postId) {
        const response = await axiosPrivate.get(
          COMMENT_API_URL.getPostComment.replace(":id", postId)
        );
        return response?.data?.data;
      }
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  console.log("coments by id ", postId, ">>> ", comments);

  const { mutateAsync: toggleLike } = useMutation(
    async (data) => {
      return await axiosPrivate.post(
        LIKE_API_URL.likePost,
        JSON.stringify(data)
      );
    },
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("publicAndFollowingPosts");
      },
    }
  );
  const { mutateAsync: addcomment } = useMutation(
    async (data) => {
      return await axiosPrivate.post(
        COMMENT_API_URL.addComment,
        JSON.stringify(data)
      );
    },
    {
      onSuccess: (res) => {
        setaddCommentData("")
        queryClient.invalidateQueries(["comment", postId]);
      },
    }
  );

  const handleLikeToggle = async () => {
    const thumbsUp = document.getElementsByClassName("thumbsUp");
    thumbsUp[index].classList.replace("hidden", "flex");
    setTimeout(() => {
      thumbsUp[index].classList.replace("flex", "hidden");
    }, 1500);
    try {
      await toggleLike({ postId: postData._id });
    } catch (error) {
      console.log("error >> ", error);
    }
  };

  const handleAddcomment = async (e) => {
    e.preventDefault();
    try {
      await addcomment({ postId: postId, content: addCommentData });
    } catch (error) {
      console.log("errrror >> ", error);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setaddCommentData((prevData) => prevData + emoji.native);
    setShowEmojiPicker(false);
  };
  console.log("comment data >> ", addCommentData);

  return (
    <div className="bg-backgroundv1 border-2 border-backgroundv3 min-h-[300px] text-textPrimary rounded-xl">
      <div className="p-5">
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden ">
              <img
                src={postData?.user[0]?.profile_pic || customeProfile}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h3 className="text-16 font-500 ">
                {postData?.user[0]?.first_name || "Lucvckd nnandm"} {postData?.user[0]?.surname}
              </h3>
              <h5 className="text-10 text-textGray flex gap-1 items-center">
                <Clock className="h-3 w-3" /> {formatUserFriendlyTime(postData.createdAt)}
                {/* 20 minutes ago on */}
              </h5>
            </div>
          </div>
          <div>
            <Button
              variant={"blueV1"}
              className={
                "h-[35px] rounded bg-blueMain hover:bg-backgroundv2 hover:text-blueMain"
              }
              size={"sm"}
            >
              View Profile
            </Button>
          </div>
        </div>
        <h2 className="pt-2 text-14 text-textPrimary">
          {postData?.content
            ? postData?.content
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam sunt dolor nostrum quod sapiente corrupti maxime quibusdam nisi impedit."}
        </h2>
      </div>
      <div
        className="relative !h-[300px] w-full !overflow-hidden cursor-pointer"
        onDoubleClick={handleLikeToggle}
      >
        <img
          src={
            postData?.image
              ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${postData?.image}`
              : image
          }
          alt="post"
          className="!w-full !h-full object-cover object-center"
        />
        <div className="thumbsUp hidden absolute top-0 start-0 w-full justify-center items-center h-full">
          <Lottie
            loop
            animationData={likeLottie}
            play
            style={{ width: "60%", height: "60%" }}
          />
        </div>
      </div>
      <div className="w-full flex justify-around items-center py-2 h-[50px]">
        <div className="flex gap-1 h-full justify-center items-center">
          <button onClick={handleLikeToggle}>
            <ThumbsUp className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray ">Liked By</h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary flex h-full px-4 justify-center items-center">
            {postData?.likeCount}
          </div>
        </div>
        <div className="flex gap-1 h-full justify-center items-center">
          <button onClick={() => setopenAddCommnet(!openAddCommnet)}>
            <MessageSquareMore className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray ">Comments</h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary flex h-full px-4 justify-center items-center">
            {postData?.commentCount}
          </div>
        </div>
        {/* <div className="flex gap-1 h-full justify-center items-center">
          <button>
            <Share2 className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray hidden sm:block  md:hidden xl:block">
            Share
          </h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary hidden sm:flex  md:hidden xl:flex h-full px-2 justify-center items-center">
            12
          </div>
        </div> */}
      </div>
      <div
        className={`comment_section p-5 border-t-2 border-backgroundv3 ${
          openAddCommnet ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-2 items-center pb-3">
          <div className="w-[45px] h-[45px] flex-shrink-0 rounded-full overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <form
            className={`relative h-[40px] w-full flex-grow ${
              openAddCommnet ? "block" : "hidden"
            }`}
            onSubmit={handleAddcomment}
          >
            <input
              type="text"
              name=""
              id=""
              className="bg-backgroundv3 focus:outline-none border border-textGray/40 text-textGray w-full h-full rounded-full px-5 text-12"
              placeholder="What's on Your Mind ?"
              value={addCommentData}
              onChange={(e) => setaddCommentData(e.target.value)}
            />
            <div className="absolute end-3 top-2">
              <div>
                <Smile className="h-5 w-5 text-textGray" />
              </div>
            </div>
          </form>
        </div>

        <div
          className={`comments w-full py-3 ${showcomment ? "block" : "hidden"}`}
        >
          <h2 className="text-textPrimary mb-2">All Comments</h2>
          <div className="px-0 md:px-3 xl:px-5 flex flex-col gap-2">
            {comments?.map((comment, commentIndex) => (
              <div className="flex gap-3" key={commentIndex}>
                <div className="w-[30px] h-[30px] flex-shrink-0 rounded-full flex justify-center items-center overflow-hidden">
                  <img
                    src={
                      comment?.user[0]?.profile_pic !== ""
                        ? comment?.user[0]?.profile_pic
                        : customeProfile
                    }
                    alt="image"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="h-full flex flex-grow justify-start items-start gap-2">
                  <h2 className="text-14 text-textPrimary font-500 flex-shrink-0">
                    {comment?.user[0]?.first_name} :
                  </h2>
                  <div className="flex-grow">
                    <h4 className="text-12 text-textGray ">
                      {comment.content}
                    </h4>
                    <div>
                      <h6 className="text-10 ">{formatUserFriendlyTime(comment.createdAt)}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`border-t-2 border-backgroundv3 pt-3  w-full items-center justify-center ${
            openAddCommnet ? "flex" : "hidden"
          }`}
        >
          <button
            className="text-blueMain text-12"
            onClick={() => setshowcomment(!showcomment)}
          >
            {showcomment ? "Hide All Comments" : "View All Comments"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
