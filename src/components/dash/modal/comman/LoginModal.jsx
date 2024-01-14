import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { IconButton } from "../../../ui/IconButton";
import IcnClose from "../../../svg/IcnClose";
import Input from "../../../ui/Input";
import IcnCloseEye from "../../../svg/IcnCloseEye";
import IcnOpenEye from "../../../svg/IcnOpenEye";
import { Button } from "../../../ui/Button";
import { Link } from "react-router-dom";
import ForgotPasswordModal from "../forgotPasswordModalflow/ForgotPasswordModal";

const LoginModal = ({ loginModalOpen, setloginModalOpen }) => {
  const [IsshowPassword, setIsshowPassword] = useState(false);
  const [user, setUser] = useState({ name: "", password: "" });
  const [ForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  // const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user.name || !user.password) {
      toast.warning("fill all the fields", { hideProgressBar: true });
      return;
    }
    console.log("login user on post /login >>> ", user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Transition appear show={loginModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setloginModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black  bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-10">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white dark:bg-black/50  shadow-xl transition-all">
                <div className="dialog-content">
                  <div className="login_wrapper flex items-center justify-center">
                    <div className="bg-white dark:bg-black/90 text-black dark:text-white p-2 md:p-4 rounded-2xl w-full max-w-md shadow">
                      <div className="flex items-end justify-end">
                        <IconButton onClick={() => setloginModalOpen(false)}>
                          <IcnClose />
                        </IconButton>
                      </div>
                      <h1 className="text-center uppercase text-3xl">Login</h1>
                      <div className="p-3">
                        <form
                          action="login"
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
                            <Link
                              role="button"
                              onClick={() => setForgotPasswordOpen(true)}
                            >
                              Forgot password?
                            </Link>
                          </span>
                          <Button className={"my-5"}>Login</Button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <ForgotPasswordModal
                    ForgotPasswordOpen={ForgotPasswordOpen}
                    setForgotPasswordOpen={setForgotPasswordOpen}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
