import React, { useState } from "react";
import { formatUserFriendlyTime } from "../../lib/userFriendlyTime";
import { Link } from "react-router-dom";
import { Delete, Edit2, Trash2 } from "lucide-react";
import SuccessModal from "./modal/comman/SuccessModal";
import swal from "sweetalert";

const CommunityPost = ({ post, isCommunityAdmin }) => {
  const [successModalOpen, setsuccessModalOpen] = useState(false);

  const handleDeletePost = () => {
    swal({
      title: "Are you sure?",
      text: "You Really want to Delete This Posts !!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        //deleet post
      }
    });
  };

  const handleEditPost = () => {};

  return (
    <div className="relative w-full rounded-lg border h-[250px] border-backgroundv3 bg-backgroundv2 xxl:h-[300px] flex flex-col overflow-hidden">
      {isCommunityAdmin && (
        <div className="absolute top-2 end-2 flex gap-3">
          <button>
            <Edit2 className="h-5 w-5 text-blue-700" />
          </button>
          <button>
            <Trash2 className="h-5 w-5 text-red-700" />
          </button>
        </div>
      )}
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
      <SuccessModal
        setsuccessModalOpen={setsuccessModalOpen}
        successModalOpen={successModalOpen}
      />
    </div>
  );
};

export default CommunityPost;
