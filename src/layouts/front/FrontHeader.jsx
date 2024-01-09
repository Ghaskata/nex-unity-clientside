import React from 'react'
import Logo from '../../assets/images/Logo'
import ThemeToggler from '../../components/common/ThemeToggler'
const FrontHeader = () => {
  return (
    <header className='header__wrapper bg-gray-lightest bg-transparent bg-white dark:bg-black p-1 z-20 shadow'>
      <div className="header_wrapper flex justify-between items-center shadow p-5">
        <div className="logo">
          <div className="img-wrapper">
            <Logo />
          </div>
        </div>
        <div>
          <ThemeToggler/>
        </div>
      </div>
    </header>
  )
}

export default FrontHeader