import React, { useState } from "react";
import IcnClose from "../../components/svg/IcnClose";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import IcnCloseEye from "../../components/svg/IcnCloseEye";
import IcnOpenEye from "../../components/svg/IcnOpenEye";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";

const Login = ({ setloginModalOpen }) => {
  const [IsshowPassword, setIsshowPassword] = useState(false);
  const [user, setUser] = useState({ name: "", password: "" });
  // const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user.name || !user.password) {
      toast.warning("fill all the fields", { hideProgressBar: true });
      return;
    }
    console.log("login user on post >>> ", user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login_wrapper flex items-center justify-center">
      <div className="bg-white dark:bg-black/90 text-black dark:text-white p-2 md:p-4 rounded-2xl w-full max-w-md shadow z-50">
        <div className="flex items-end justify-end">
          <IconButton onClick={() => setloginModalOpen(false)}>
            <IcnClose />
          </IconButton>
        </div>
        <h1 className="text-center uppercase text-3xl">Login</h1>
        <div className="p-3">
          <form
            action=""
            method="post"
            className="login_form"
            onSubmit={onLogin}
          >
            <div className="form-group mt-5">
              <Input
                lable={"Email and User Name"}
                type={"text"}
                name={"name"}
                placeholder={"Enter User Name and Email"}
                value={user.name}
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
              <Link to="/forgetPassword">Forgot password?</Link>
            </span>
            <Button className={"my-5"}>Login</Button>
          </form>
          <div className="text-center">
            <span className="text-gray-500">Don’t have an account? </span>
            <Link to={"/register"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
