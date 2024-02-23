import React from 'react'
import { communityData } from '../../data/staticData'
import { PlusIcon } from 'lucide-react'

const CommunityPage = () => {
    return (
        <div className="dash h-full min-h-screen w-full bg-backgroundv2 p-8 transition-all duration-200 ease-in-out">
            <h3 className='text-28 lg:text-32 text-textPrimary'>Dashboard</h3>
            <div className='dash_home md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8'>
                {
                    communityData.map((community) => (
                        <div className="shadow-md rounded-2xl p-5 bg-white">
                            <h3 className='text-xl mb-4'>{community.name}</h3>
                            <span className='text-base text-gray-500'>{community.total}</span>
                        </div>
                    ))
                }
                <div className="shadow-md rounded-2xl p-5 bg-white flex justify-center items-center">
                    <PlusIcon className='text-gray-500 h-[32px] w-[32px] md:h-[48px] md:w-[48px]'/>
                </div>
            </div>
        </div>)
}

export default CommunityPage