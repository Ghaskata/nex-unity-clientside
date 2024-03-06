import React from "react";
import "../../pages/front/css/CommunityPageCss.css";
import { useNavigate } from "react-router-dom";

const JoinedCommunityCard1 = ({ data }) => {
  const navigate = useNavigate();
  console.log("data?>>> ", data);
  console.log(
    "ggggggggg > ",
    `${process.env.REACT_APP_SERVER_IMAGE_PATH}${data.backImage}`
  );
  return (
    <figure className="snip1336 hover:scale-[0.97] transition-all duration-200 ease-linear rounded-lg overflow-hidden">
      <img
        src={
          data.backImage 
            ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${data.backImage}`
            : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
        }
        alt="sample74"
        className="!h-[200px] w-full"
      />
      <figcaption>
        <img
          src={
            data.frontImage 
              ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${data.frontImage}`
              : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
          }
          alt="profile-sample2"
          className="profile !h-[90px] !w-[90px]"
        />
        <h2>
          {data?.name}
          <span>Photographer</span>
        </h2>
        <p>{data?.description}</p>
        <div className="flex gap-3 h-11">
          <div className="flex rounded justify-center items-center h-full border border-red-600 bg-red-600 w-full text-white hover:text-red-600 hover:bg-transparent transition-all duration-300 ease-linear">
            Leave
          </div>
          <div
            onClick={() => navigate(`/community/${data._id}`)}
            className="flex rounded h-full justify-center items-center bg-transparent w-full border border-white text-white hover:text-blueMain hover:border-blueMain transition-all duration-300 ease-linear"
          >
            More Info
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default JoinedCommunityCard1;
