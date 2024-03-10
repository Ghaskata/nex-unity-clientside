import React from "react";
import { formatUserFriendlyTime } from "../../lib/userFriendlyTime";
import { Link } from "react-router-dom";

const CommunityPost = ({ post }) => {
  return (
    <Link
      to={`/posts/${post._id}`}
    //   state={{ postId: "65e40224d9ac46b0ac202f21" }}
    //   spy={true}
    //   hashSpy={true}
    //   offset={-50}
    //   smooth={true}
    //   duration={500}
      className="cursor-pointer w-full rounded-lg border h-[250px] border-backgroundv3 bg-backgroundv2 xxl:h-[300px] flex flex-col overflow-hidden"
    >
      <div className="h-[150px] xxl:h-[200px] w-full bg-backgroundv2 flex justify-center items-center">
        <img
          src={`${process.env.REACT_APP_SERVER_IMAGE_PATH}${post.image}`}
          width={247}
          height={247}
          alt="logo"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex-shrink-0 w-full h-[100px] p-3 bg-backgroundv1">
        <h1 className="text-20  font-semibold mb-1 text-textPrimary truncate">
          {post.content}
        </h1>
        {/* <h4 className='text-12  mb-1 text-textGray truncate'>{post.content}</h4> */}
        <h1 className="text-14 text-textPrimary">
          {formatUserFriendlyTime(post.createdAt)}
        </h1>
      </div>
    </Link>
  );
};

export default CommunityPost;
