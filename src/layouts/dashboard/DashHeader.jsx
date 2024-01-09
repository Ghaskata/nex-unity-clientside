import React, { useState } from 'react'
import Logo from '../../assets/images/Logo'
import { Link } from 'react-router-dom'
import ThemeToggler from '../../components/common/ThemeToggler'
import { MenuIcon } from 'lucide-react'

const DashHeader = ({ toggleSidebar, settoggleSidebar }) => {

    return (
        <div className='dash_header bg-white dark:bg-black dark:text-white w-full fixed top-0 start-0 z-50 shadow h-[78px]'>
            <div className="header_wrapper flex justify-between items-center px-5 md:px-10 py-4">
                <div className="logo-part flex justify-center items-center">
                    <button className='sidebar_button block md:hidden me-4' onClick={()=>settoggleSidebar(!toggleSidebar)}>
                        <MenuIcon className='h-[32px] w-[32px]' />
                    </button>
                    <div className="img_container">
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>
                </div>
                <div className="group of functions">
                    {/* <ThemeToggler /> */}
                </div>
            </div>
        </div>
    )
}

export default DashHeader