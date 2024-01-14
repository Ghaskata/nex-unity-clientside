import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import logoutLight from '../../../../assets/images/Logout.png'
import { Button } from '../../../ui/Button'

const LogoutModal = ({ logoutModalOpen, setLogoutModalOpen }) => {
    return (
        <Transition appear show={logoutModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setLogoutModalOpen(false)}>
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
                                    <div className='dialog-body py-6 px-5 md:px-[30px] md:py-6'>
                                        <div className='logout-content'>
                                            <div className='icon'>
                                                <img src={logoutLight} alt="" className='max-w-[140px] md:max-w-[200px] mx-auto dark:hidden block' />
                                                {/* <img src={LogoutGifLight} alt="" className='max-w-[140px] md:max-w-[200px] mx-auto dark:block hidden' /> */}
                                            </div>
                                            <h5 className='mb-4 text-lg text-black dark:text-white text-center '>
                                                Are you sure want to logout?
                                            </h5>
                                            <p className='text-center text-base text-black dark:text-white mb-7'>Your Password has been Changed successfully.</p>
                                            <Button variant={"blue"} className="w-full rounded-lg" onClick={() => setLogoutModalOpen(false)}>
                                                Logout
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}

export default LogoutModal
