import React from 'react'
import Input from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
const ForgotPassword = () => {
    return (
        <div className='login-form-start'>
            <h4 className='text-28 text-white relative font-600 inline-block mb-[50px] before:w-[15%] before:h-[3px] before:bg-theme before:absolute before:-bottom-5 before:left-0'>
                Forgot Password
            </h4>
            <div className=''>
                <p className='text-14 text-dark-300 font-400'>Please enter your Email Address. You will receive a 4-digit code via SMS.</p>
            </div>
            <form action="">
                <div className="rounded-md py-10">
                    <div className="form-item mb-10">
                        <Input placeholder="Enter Your Email Address" lable="Email" lableClass="dark:text-dark-300 text-dark-300 font-600 text-[14px]" className="bg-dark-600 text-[14px] !text-dark-300 placeholder-dark-300" />
                    </div>
                    <Button className="w-full" size={"sm"}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword