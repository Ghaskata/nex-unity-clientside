import React, { useState } from "react";
import img from "../../assets/images/frontHero/home header3.jpg";
import IcnGoogle from "../../components/svg/IcnGoogle";
import { Buttonvariants } from "../../components/ui/Button";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import LoginModal from "../../pages/auth/LoginModal";
import { ToastCon } from "../../components/common/Toast";
import RegisterModal from "../../pages/auth/RegisterModal";

const AuthMaster = () => {
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [registerModalOpen, setregisterModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white dark:bg-black text-dark dark:text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 min-h-screen">
        <div className="w-full hidden md:flex md:justify-center md:items-center col-span-1">
          <div className="image_wrapper md:m-10 max-w-lg overflow-hidden rounded-2xl">
            <img src={img} className="object-cover w-full" alt="Logo" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center md:items-start px-0 sm:px-4 gap-8 col-span-2 lg:col-span-1">
          <h1 className="capitalize text-4xl sm:text-5xl">Happening now</h1>
          <h4 className="text-2xl sm:text-3xl">Join today.</h4>
          <div className="w-full sm:w-1/2 md:3/4 p-4 sm:p-0">
            <button
              className={cn(
                Buttonvariants({ variant: "black" }),
                "bg-black dark:bg-white hover:bg-white dark:hover:bg-black gap-2 md:gap-3"
              )}
              onClick={() => console.log("sign Up with google")}
            >
              <IcnGoogle className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-sm text-gray-500">Sign Up With Google</span>
            </button>
            <div className="flex flex-row justify-center items-center my-3 mx-5">
              <hr className="w-full border-[1px] border-gray-500/20" />
              <span className="mx-1">or</span>
              <hr className="w-full border-[1px] border-gray-500/20" />
            </div>
            <Link
              className={cn(
                Buttonvariants({ variant: "blue" }),
                "gap-2 md:gap-3"
              )}
              role="button"
              // to={"/register"}
              onClick={()=>setregisterModalOpen(true)}
            >
              <span className="text-sm">Create Account</span>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 md:3/4 p-4 sm:p-0 mt-5 flex flex-col items-center sm:items-start">
            <h5 className="text-md sm:text-lg mb-3">
              Already have an account ?
            </h5>
            <Link
              className={cn(
                Buttonvariants({ variant: "black" }),
                "bg-white dark:bg-black hover:bg-slate-300 dark:hover:bg-white  gap-2 md:gap-3"
              )}
              // to={'/login'}
              role="button"
              onClick={() => setloginModalOpen(true)}
            >
              <span className="text-sm text-blue-500">Sign In</span>
            </Link>
          </div>
        </div>
      </div>

      <LoginModal
        loginModalOpen={loginModalOpen}
        setloginModalOpen={setloginModalOpen}
      />
      <RegisterModal
        registerModalOpen={registerModalOpen}
        setregisterModalOpen={setregisterModalOpen}
      />
      <ToastCon />
    </>
  );
};

export default AuthMaster;
