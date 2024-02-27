import React, { useState } from "react";
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

const Post = () => {
  const [openAddCommnet, setopenAddCommnet] = useState(false);
  const [showcomment, setshowcomment] = useState(false);
  return (
    <div className="bg-backgroundv1 border-2 border-backgroundv3 min-h-[300px] text-textPrimary rounded-xl">
      <div className="p-5">
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="">
              <h3 className="text-16 font-500 ">Lucvckd dnnandm</h3>
              <h5 className="text-10 text-textGray flex gap-1 items-center">
                <Clock className="h-3 w-3" /> 20 minutes ago on
              </h5>
            </div>
          </div>
          <div>
            <Button variant={"blueV1"} className={"h-[35px] rounded"} size={"sm"}>View Profile</Button>
          </div>
        </div>
        <div className="pt-2 text-14 text-textPrimary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aliquam sunt dolor nostrum quod sapiente corrupti maxime quibusdam
          nisi impedit.
        </div>
      </div>
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={image}
          alt="post"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full flex justify-around items-center py-2 h-[50px]">
        <div className="flex gap-1 h-full justify-center items-center">
          <button>
            <ThumbsUp className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray hidden sm:block  md:hidden xl:block">
            Liked By
          </h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary hidden sm:flex  md:hidden xl:flex h-full px-2 justify-center items-center">
            34.6k
          </div>
        </div>
        <div className="flex gap-1 h-full justify-center items-center">
          <button onClick={() => setopenAddCommnet(!openAddCommnet)}>
            <MessageSquareMore className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray hidden sm:block  md:hidden xl:block">
            Comments
          </h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary hidden sm:flex  md:hidden xl:flex h-full px-2 justify-center items-center">
            34.6k
          </div>
        </div>
        <div className="flex gap-1 h-full justify-center items-center">
          <button>
            <Share2 className="w-5 h-5" />
          </button>
          <h3 className="text-14 text-textGray hidden sm:block  md:hidden xl:block">
            Share
          </h3>
          <div className="bg-backgroundv3 text-12 rounded-full text-textPrimary hidden sm:flex  md:hidden xl:flex h-full px-2 justify-center items-center">
            12
          </div>
        </div>
      </div>
      <div
        className={`comment_section p-5 border-t-2 border-backgroundv3 ${openAddCommnet ? "block" : "hidden"}`}
      >
        <div className="flex gap-2 items-center pb-3">
          <div className="w-[45px] h-[45px] flex-shrink-0 rounded-full overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            className={`relative h-[40px] w-full flex-grow ${
              openAddCommnet ? "block" : "hidden"
            }`}
          >
            <input
              type="text"
              name=""
              id=""
              className="bg-backgroundv3 focus:outline-none border border-textGray/40 text-textGray w-full h-full rounded-full px-5 text-12"
              placeholder="What's on Your Mind ?"
            />
            <div className="absolute end-3 top-2">
              <button>
                <Smile className="h-5 w-5 text-textGray" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`comments w-full py-3 ${showcomment ? "block" : "hidden"}`}
        >
          <h2 className="text-textPrimary mb-2">All Comments</h2>
          <div className="px-0 md:px-3 xl:px-5 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-[30px] h-[30px] flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-12 text-textGray">
                <span className="text-14 text-textPrimary font-500">
                  username :
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                nulla!
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[30px] h-[30px] flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-12 text-textGray">
                <span className="text-14 text-textPrimary font-500">
                  username :
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                nulla!
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-[30px] h-[30px] flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-12 text-textGray">
                <span className="text-14 text-textPrimary font-500">
                  username :
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                nulla!
              </div>
            </div>
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
            View All Comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
