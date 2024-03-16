import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserData } from '../../reducers/authSlice';
import useAxiosPrivate from '../../security/useAxiosPrivate';
import { useQueryClient } from 'react-query';
import CommunityPostList from '../../components/dash/CommunityPostList';
import EditCommunityModal from '../../components/dash/modal/comman/EditCommunityModal';
import SuccessModal from '../../components/dash/modal/comman/SuccessModal';
import { ArrowLeft, HeartHandshake, LogOut } from 'lucide-react';
import UserPostList from '../../components/front/UserPostList';

const OtherProfilePage = () => {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  const [successModalOpen, setsuccessModalOpen] = useState(false);
  const [editCommunityModalOpen, seteditCommunityModalOpen] = useState(false);



  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();


  return (
<div className="w-full bg-lightGray h-full min-h-screen !text-textPrimary font-popins ">
        <div className="container py-5">
          {/* <div
            className="flex items-center gap-2 !text-blueMain pb-3  container cursor-pointer"
            onClick={() => navigate("/community")}
          >
            <ArrowLeft className="h-5 w-5 text-blueMain" /> Go Back
          </div> */}

          <div className="container">
            <div className="rounded-lg overflow-hidden bg-backgroundv1 p-5 relative border border-backgroundv3">
              <div className="absolute h-[150px] md:h-[200px] start-0 top-0 w-full bg-blueMain overflow-hidden">
                 {/* {false && 
                  <img
                    src={`${process.env.REACT_APP_SERVER_IMAGE_PATH}${community.backImage}`}
                    width={247}
                    height={247}
                    alt="logo"
                    className="h-full w-full object-cover object-center"
                  />
                 } */}
              </div>
              <div className="flex justify-between flex-row items-end z-10 pt-20">
                <div className="logo flex flex-row gap-5 items-start md:items-end">
                  <div className=" w-[180px] h-[180px] flex-shrink-0 lg:w-[200px] lg:h-[200px] bg-black rounded-full border-8 border-blueMain overflow-hidden z-10 shadow">
                    {/* <img
                      src={
                        false
                          ? `${process.env.REACT_APP_SERVER_IMAGE_PATH}${community.frontImage}`
                          : "/images/hero3.png"
                      }
                      width={247}
                      height={247}
                      alt="logo"
                      className="h-full w-full object-cover object-center"
                    /> */}
                  </div>
                  <div>
                    <h2 className="text-28  lg:text-30 xl:text-32  hidden lg:block flex-shrink-0 font-semibold text-textPrimary">
                      Nodeflffl Co.
                    </h2>
                  </div>
                </div>

                <div className=" h-full justify-end items-end flex-shrink-0">
                  {1==2 ? (
                    <button
                      className={`${"bg-red-700 flex gap-2 items-center justify-center text-white border-red-700 hover:bg-transparent hover:text-red-700"} rounded-lg h-10 px-5 gap-2 flex justify-center font-semibold items-center border text-16 transition-all duration-300 ease-linear`}
                    >
                      unfollow
                    </button>
                  ) : (
                    <button
                      className={`${"bg-blueMain flex gap-2 items-center justify-center text-white border-blueMain hover:bg-transparent hover:text-blueMain"} rounded-lg h-10 px-5 gap-2 flex justify-center font-semibold items-center border text-16 transition-all duration-300 ease-linear`}
                    >
                      <HeartHandshake /> follow
                    </button>
                  )}
                </div>
              </div>
              <div className="my-4">
                <h2 className="text-28 block md:hidden font-semibold text-textPrimary">
                  Nodeflffl Co.
                </h2>
                <h5 className="text-textGray text-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, amet.
                </h5>
              </div>
              <div className="h-[1px] w-full bg-backgroundv3"></div>
              <div className="py-5">
                <div className="w-full gap-2 flex  justify-center items-center">
                  <div className="w-full max-w-md h-full -5 text-textGray text-16 flex flex-row  justify-between  gap-2">
                    <div className="flex gap-3">
                      <h3>Total Post : </h3>
                      <h3 className="text-blueMain text-18 font-semibold ">
                        8349
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <h3>Total Community : </h3>
                      <h3 className="text-blueMain text-18 font-semibold">
                         cmcnm
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 container">
            <UserPostList userData={userData}/>
          </div>
        </div>

        {/* <EditCommunityModal
          editCommunityModalOpen={editCommunityModalOpen}
          seteditCommunityModalOpen={seteditCommunityModalOpen}
          setsuccessModalOpen={setsuccessModalOpen}
          editCommunity={community}
        /> */}
        <SuccessModal
          successModalOpen={successModalOpen}
          setsuccessModalOpen={setsuccessModalOpen}
        />
      </div>
        )
}

export default OtherProfilePage