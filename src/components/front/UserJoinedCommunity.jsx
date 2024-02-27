import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import CommunityCard from "./CommunityCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import JoinedCommunityCard from "./JoinedCommunityCard";

const MyJoinedcommunity = [
  {
    id: 1,
    image: "",
    name: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 2,
    image: "",
    name: "Lorem  dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 3,
    image: "",
    name: " ipsum dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 4,
    image: "",
    name: "dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 5,
    image: "",
    name: "Lorem",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 6,
    image: "",
    name: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 7,
    image: "",
    name: "Lorem  dolor",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
  {
    id: 8,
    image: "",
    name: " ipsum dolor",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    members: "123",
  },
];

const UserJoinedCommunity = () => {
  const swiperRef = useRef(null);

  const nextslide = () => {
    swiperRef.current?.swiper?.slidePrev();
  };
  const prevslide = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <div className="w-full container component text-textPrimary">
      <div className="mb-5 md:mb-8 rounded-xl gap-5 bg-backgroundv1 border-2 border-backgroundv3 p-5">
        <h2 className="font-500 text-22  md:text-24 lg:text-28">
          My Joined Communites
        </h2>
      </div>
      <div className="my_community_container my-3">
        <Swiper
          ref={swiperRef}
          // slidesPerView={1}
          // spaceBetween={20}
          freeMode={true}
          breakpoints={{
            1500: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            680: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            370: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[FreeMode]}
          className="h-full w-full "
        >
          {MyJoinedcommunity.map((item, itemIndex) => (
            <SwiperSlide
              className="community w-full h-full overflow-hidden"
              key={itemIndex}
            >
              <JoinedCommunityCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="see__all relative w-full flex justify-between items-center py-5">
        <Link to={"/"}>
          <Button
            className="group/btn rounded flex justify-center items-center gap-2 md:gap-3 h-10 md:h-12 lg:px-10"
            variant={"blueV1"}
          >
            See All{" "}
            <span>
              <ArrowRight className="h-6 w-6 " />
            </span>
          </Button>
        </Link>
        <div className=" flex gap-1 md:gap-3">
          <button onClick={nextslide}>
            {" "}
            <Button
              className={`bg-backgroundv3 border border-blueMain text-blueMain rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-blueMain hover:text-white transition-all duration-300 ease-linear`}
            >
              <ArrowLeft />
            </Button>
          </button>
          <button onClick={prevslide}>
            <Button
              className={`bg-backgroundv3 border border-blueMain text-blueMain rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0  hover:bg-blueMain hover:text-white transition-all duration-300 ease-linear`}
            >
              <ArrowRight />
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserJoinedCommunity;
