import React, { useState } from "react";
import img from "../../assets/images/frontHero/home header3.jpg";
import IcnClose from "../../components/svg/IcnClose";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import IcnCloseEye from "../../components/svg/IcnCloseEye";
import IcnOpenEye from "../../components/svg/IcnOpenEye";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";
import ForgotPasswordModal from "../../components/dash/modal/forgotPasswordModalflow/ForgotPasswordModal";
import { CircleUserRound } from "lucide-react";
import { authenticate } from "../../utils/authenticate";

const Login = () => {
  const [IsshowPassword, setIsshowPassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [ForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user.email || !user.password) {
      toast.warning("fill all the fields", { hideProgressBar: true });
      return;
    }
    authenticate(user);

    console.log("session >>> ",JSON.parse(sessionStorage.getItem("user")))
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="w-full bg-backgroundv2 text-textPrimary grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="w-full hidden lg:flex md:justify-center md:items-center col-span-1">
          <div className="image_wrapper h-full w-full overflow-hidden">
            <img src={img} className="object-cover h-full w-full" alt="Logo" />
          </div>
        </div>
        <div className="login_wrapper flex items-center justify-center mx-2">
          <div className="bg-backgroundv1 text-textPrimary px-2 md:px-5 py-5 md:py-8 rounded-2xl w-full max-w-md shadow">
            <div className="flex flex-col w-full gap-y-2 justify-center items-center">
              {/* <CircleUserRound size={100} strokeWidth={1} className="mx-auto"/> */}
              <h1 className="text-center font-semibold uppercase text-3xl">
                Login
              </h1>
            </div>
            <div className="p-3 pt-0">
              <form
                action="login"
                method="post"
                className="login_form "
                onSubmit={handleLogin}
              >
                <div className="form-group mt-5">
                  <Input
                    lable={"Email "}
                    type={"text"}
                    name={"email"}
                    placeholder={"Enter Email"}
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative form-group mt-5">
                  <Input
                    lable={"Password"}
                    type={IsshowPassword ? "text" : "password"}
                    name={"password"}
                    placeholder={"Enter Password"}
                    value={user.password}
                    onChange={handleChange}
                  />
                  <span
                    className="absolute top-12 end-3"
                    onClick={() => setIsshowPassword(!IsshowPassword)}
                  >
                    {IsshowPassword ? (
                      <IcnCloseEye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <IcnOpenEye className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </div>
                <span className="flex justify-end text-sm">
                  <Link
                    // role="button"
                    // onClick={() => setForgotPasswordOpen(true)}
                    to={"/forgot-password"}
                  >
                    Forgot password?
                  </Link>
                </span>
                <Button
                  variant={"blue"}
                  className={"my-5 rounded-none"}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </form>
              <div className="text-center">
                <span className="text-gray-500">You Have No account? </span>
                <Link to={"/register"}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ForgotPasswordModal
        ForgotPasswordOpen={ForgotPasswordOpen}
        setForgotPasswordOpen={setForgotPasswordOpen}
      /> */}
    </>
  );
};

export default Login;
