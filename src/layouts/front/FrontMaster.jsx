import React, { useState } from 'react'
import FrontHeader from './FrontHeader'
import { Outlet } from 'react-router-dom'
import FrontFooter from './FrontFooter'

const FrontMaster = () => {
  return (
    <>
      <FrontHeader />
      <Outlet />
      <FrontFooter />
    </>
  )
}

export default FrontMaster