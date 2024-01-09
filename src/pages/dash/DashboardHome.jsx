import React from 'react'

const DashboardHome = () => {
  return (
    <div className="dash min-h-screen bg-slate-100/80 dark:bg-black/80 p-8 transition-all duration-200 ease-in-out">
      <h3 className='text-xl md:text-2xl dark:text-white'>Dashboard</h3>
      <div className='dash_home md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 lg:gap-10'>
        <div className="shadow-md rounded-2xl p-5 bg-white">
            <h3 className='text-xl mb-4'>Users</h3>
            <span className='text-base text-gray-500'>1878</span>
        </div>
        <div className="shadow-md rounded-2xl p-5 bg-white">
            <h3 className='text-xl mb-4'>Community Manager</h3>
            <span className='text-base text-gray-500'>1878</span>
        </div>
        <div className="shadow-md rounded-2xl p-5 bg-white">
            <h3 className='text-xl mb-4'>Roles</h3>
            <span className='text-base text-gray-500'>1878</span>
        </div>
        <div className="shadow-md rounded-2xl p-5 bg-white">
            <h3 className='text-xl mb-4'>Trace Requests</h3>
            <span className='text-base text-gray-500'>1878</span>
        </div>
        <div className="shadow-md rounded-2xl p-5 bg-white">
            <h3 className='text-xl mb-4'>Bussiness</h3>
            <span className='text-base text-gray-500'>1878</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome