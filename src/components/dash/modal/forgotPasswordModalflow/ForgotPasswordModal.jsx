import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import logoutLight from "../../../../assets/images/Logout.png";
import { Button } from "../../../ui/Button";
import Input from "../../../ui/Input";
import { Import } from "lucide-react";
import IcnClose from "../../../svg/IcnClose";
import { IconButton } from "../../../ui/IconButton";
import FirstStep from "./steps/FirstStep";
import SecoundStep from "./steps/SecoundStep";

const ForgotPasswordModal = ({ ForgotPasswordOpen, setForgotPasswordOpen }) => {
  const [step, setStep] = useState(1);

  const handleClose = () => {
    setForgotPasswordOpen(false);
    setTimeout(() => {
      setStep(1);
    }, 500);
  };

  return (
    <Transition appear show={ForgotPasswordOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setForgotPasswordOpen(false)}
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
                <div className="dialog-content bg-white dark:bg-black/90 text-black dark:text-white py-2 px-5 md:px-7 md:py-4 rounded-2xl w-full max-w-md shadow">
                  <div className="dialog-header ">
                    <div className="flex items-end justify-end">
                      <IconButton onClick={handleClose}>
                        <IcnClose />
                      </IconButton>
                    </div>
                    <h4 className="text-xl md:text-3xl pb-8 text-black dark:text-white relative font-semibold ">
                      Forgot Password
                    </h4>
                  </div>
                  <div className="diagol-body">
                    
                      <FirstStep step={step} setStep={setStep} isActiveStep={step===1}/>
                    
                      <SecoundStep step={step} setStep={setStep} isActiveStep={step===2}/>
                    
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ForgotPasswordModal;
