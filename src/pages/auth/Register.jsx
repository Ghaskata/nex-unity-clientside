import React, { useState } from "react";
import img from "../../assets/images/frontHero/home header3.jpg";
import IcnClose from "../../components/svg/IcnClose";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import IcnCloseEye from "../../components/svg/IcnCloseEye";
import IcnOpenEye from "../../components/svg/IcnOpenEye";
import Input from "../../components/ui/Input";
import { ToastCon } from "../../components/common/Toast";
import { toast } from "react-toastify";

const Register = ({ setregisterModalOpen }) => {
  // const navigate = useNavigate();
  const [IsshowPassword, setIsshowPassword] = useState(false);
  const [IsshowConformPass, setIsshowConformPass] = useState(false);
  const [terms, setTerms] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPass: "",
  });

  const onRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!terms) {
      toast.info("Accept Our Privacy policy and terms & condition", {
        hideProgressBar: true,
      });
      return;
    }

    if (
      !user.name ||
      !user.userName ||
      !user.password ||
      !user.email ||
      !user.confirmPass
    ) {
      toast.warning("fill all the fields", { hideProgressBar: true });
      return;
    }
    if (user.password !== user.confirmPass) {
      toast.warning("password are not same", {
        hideProgressBar: true,
      });
      return;
    }
    toast.success("succesfully registred");
    console.log("register user on post /register >>> ", user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-full h-screen bg-white dark:bg-black text-dark dark:text-white grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex-1 h-screen hidden md:flex md:justify-center md:items-center col-span-1">
          <div className="image_wrapper h-dvh w-screen overflow-hidden">
            <img src={img} className="object-cover h-full w-full" alt="Logo" />
          </div>
        </div>
        <div className="register_wrapper flex-1 flex items-center justify-center">
          <div className="bg-white dark:bg-black/90 text-black dark:text-white p-2 md:p-4 rounded-2xl w-full max-w-lg">
            <h1 className="text-center uppercase text-3xl">Sign up</h1>
            <div className="p-3">
              <form
                action="register"
                method="post"
                className="login_form"
                onSubmit={onRegister}
              >
                <div className="form-group mt-5">
                  <Input
                    lable={"Name"}
                    type={"text"}
                    name={"name"}
                    placeholder={"Enter Full Name"}
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-5">
                  <Input
                    lable={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter Email Addredss"}
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-5">
                  <Input
                    lable={"User Name"}
                    type={"text"}
                    name={"userName"}
                    placeholder={"Enter User Name"}
                    value={user.userName}
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
                <div className="relative form-group mt-5">
                  <Input
                    lable={"Confirm Password"}
                    type={IsshowConformPass ? "text" : "password"}
                    name={"confirmPass"}
                    placeholder={"Confirm Password"}
                    value={user.confirmPass}
                    onChange={handleChange}
                  />
                  <span
                    className="absolute top-12 end-3"
                    onClick={() => setIsshowConformPass(!IsshowConformPass)}
                  >
                    {IsshowConformPass ? (
                      <IcnCloseEye className="h-5 w-5 text-gray-500" />
                    ) : (
                      <IcnOpenEye className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </div>
                <div className="form-group mt-5">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="size-4"
                    value={terms}
                    onChange={() => setTerms(!terms)}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-500 ms-2">
                    By click on Signup you accept our{" "}
                    <span className="text-black dark:text-white font-semibold">
                      {" "}
                      privacy policy{" "}
                    </span>{" "}
                    and{" "}
                    <span className="text-black dark:text-white font-semibold">
                      {" "}
                      terms & condition{" "}
                    </span>
                    .
                  </label>
                </div>
                <Button variant={"blue"} className="my-5 rounded-none " >Sign Up</Button>
              </form>
              <div className="text-center">
                <span className="text-gray-500">
                  I have an Already an account?{" "}
                </span>
                <Link to={"/login"}>Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastCon />
    </>
  );
};

export default Register;
