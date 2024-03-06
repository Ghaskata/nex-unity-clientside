import React from "react";

import { AiFillHome, AiFillLike, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdLibraryMusic,
  MdSubscriptions,
  MdAccountCircle,
  MdSettings,
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import {
  RiLightbulbLine,
  RiFeedbackLine,
  RiHistoryFill,
  RiVidicon2Fill,
  RiAccountCircleFill,
  RiBriefcase2Fill,
} from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import {
  Blocks,
  Briefcase,
  CalendarCheck2Icon,
  CalendarDays,
  HelpingHand,
  LucidePlusSquare,
  LucideUsers2,
  MapPinnedIcon,
  Newspaper,
  Phone,
  ShieldPlusIcon,
  User2,
  UserRoundCog,
  Users2,
} from "lucide-react";
import { FaDonate, FaHome } from "react-icons/fa";
import { HiMiniInformationCircle, HiUserGroup } from "react-icons/hi2";
import { LiaHeadsetSolid } from "react-icons/lia";

export const FrontNavlinkList = [
  { name: "Home", icon: <FaHome className="w-[24px] h-[24px]" />, type: "Page", href: "" },
  {
    name: "Add Post",
    icon: <LucidePlusSquare className="w-[24px] h-[24px]" />,
    type: "Page",
    href: "/add-post",
  },
  {
    name: "Community",
    icon: <LucideUsers2 className="w-[24px] h-[24px]" />,
    type: "Page",
    href: "/community",
  },
  { name: "Jobs", icon: <RiBriefcase2Fill className="w-[24px] h-[24px]" />, type: "Page", href: "/jobs" },
  { name: "Events", icon: <CalendarDays className="w-[24px] h-[24px]" />, type: "Page", href: "/events" },
  { name: "News", icon: <ImNewspaper className="w-[24px] h-[24px]" />, type: "Page", href: "/news" },
  { name: "Contact Us", icon: <LiaHeadsetSolid  className="w-[24px] h-[24px]" />, type: "Page", href: "/contact-us" },
  { name: "About Us", icon: <HiMiniInformationCircle className="w-[24px] h-[24px]" />, type: "Page", href: "/about-us" },
  { name: "Profile", icon: <RiAccountCircleFill className="w-[24px] h-[24px]" />, type: "Page", href: "/profile" },
  // { name: "Donation", icon: <HelpingHand className="w-[24px] h-[24px]" />, type: "Page", href: "/dontaion" },
  { name: "Settings", icon: <FiSettings className="w-[24px] h-[24px]" />, type: "Page", href: "/settings" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine className="w-[24px] h-[24px]" />,
    type: "Page",
    divider: true,
    href: "/home/feedback",
  },
];
export const DashbordNavlinkList = [
  { name: "Home", icon: <FaHome className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard" },
  { name: "Jobs", icon: <RiBriefcase2Fill className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/jobs" },
  {
    name: "Roles / Permission",
    icon: <ShieldPlusIcon className="w-[24px] h-[24px]" />,
    type: "Page",
    href: "/dashboard/roles",
  },
  { name: "Users", icon: <Users2 className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/users" },
  { name: "Categories", icon: <Blocks className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/categories" },
  { name: "Communites", icon: <HiUserGroup className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/community" },
  { name: "Community Managers", icon: <UserRoundCog className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/subadmin" },
  // { name: "Trace Request", icon: <MapPinnedIcon className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/request" },
  { name: "Events", icon: <CalendarCheck2Icon className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/events" },
  { name: "Settings", icon: <MdSettings className="w-[24px] h-[24px]" />, type: "Page", href: "/dashboard/settings" },
];

export const category = [
  { name: "Trending", icon: <MdLocalFireDepartment className="w-[30px] h-[30px]" />, type: "category" },
  { name: "Music", icon: <CgMusicNote className="w-[30px] h-[30px]" />, type: "category" },
  { name: "Films", icon: <FiFilm className="w-[30px] h-[30px]" />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp className="w-[30px] h-[30px]" />, type: "category" },
  { name: "News", icon: <ImNewspaper className="w-[30px] h-[30px]" />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy className="w-[30px] h-[30px]" />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine className="w-[30px] h-[30px]" />, type: "category" },
  {
    name: "Fashion",
    icon: <GiEclipse className="w-[30px] h-[30px]" />,
    type: "category",
  },
  { name: "Live", icon: <MdLiveTv className="w-[30px] h-[30px]" />, type: "category" },
];
