import React from "react";
import ChartCompo from "../../components/dash/ChartCompo";
import {
  Blocks,
  Briefcase,
  CalendarCheck2,
  CalendarClock,
  MapPinned,
  ShieldPlus,
  User2,
  Users2,
} from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="dash h-full min-h-screen w-full bg-backgroundv2 p-8 transition-all duration-200 ease-in-out">
      <h3 className="text-28 lg:text-32 text-textPrimary">Dashboard</h3>
      <div className="dash_home py-5 lg:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2  3xl:grid-cols-3 gap-5">
        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#ffc107]/30 text-[#ffc107] flex items-center justify-center">
              <CalendarClock className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Today Events
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#ffc107"} />
          </div>
        </div>
        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#FF69B4]/30 text-[#FF69B4] flex items-center justify-center">
              <Users2 className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Users
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>
          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo />
          </div>
        </div>
        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#007aff]/30 text-[#007aff] flex items-center justify-center">
              <Blocks className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Categorys
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#007aff"} />
          </div>
        </div>
        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#07bc0c]/30 text-[#07bc0c] flex items-center justify-center">
              <User2 className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Community Manager
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#07bc0c"} />
          </div>
        </div>

        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#bb86fc]/30 text-[#bb86fc] flex items-center justify-center">
              <Briefcase className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Jobs
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#bb86fc"} />
          </div>
        </div>
        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#e74c3c]/30 text-[#e74c3c] flex items-center justify-center">
              <MapPinned className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Trace Requests
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#e74c3c"} />
          </div>
        </div>

        <div className="shadow-md rounded-2xl bg-white w-full h-[200px] xxl:h-[250px] overflow-hidden  p-5 relative">
          <div className="flex gap-3 items-start">
            <div className="h-[60px] w-[60px] flex-shrink-0 xl:h-[70px] xl:w-[70px] xxl:h-[80px] xxl:w-[80px] rounded-full overflow-hidden bg-[#2a7c5a]/30 text-[#2a7c5a] flex items-center justify-center">
              <CalendarCheck2 className="h-8 w-8 xl:h-9 xl:w-9 xxl:h-10 xxl:w-10" />
            </div>
            <div>
              <h3 className="text-24 xl:text-26 xxl:text-30 mb-1 xxl:mb-2">
                Total Events
              </h3>
              <span className="text-14 lg:text-16 xl:text-18 xxl:text-20 text-gray-500">
                1878
              </span>
            </div>
          </div>

          <div className="absolute -end-3 -bottom-4 w-[110%] h-full">
            <ChartCompo color={"#2a7c5a"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
