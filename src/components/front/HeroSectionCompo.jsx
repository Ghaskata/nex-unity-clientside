import React from 'react'
import img from '../../assets/images/frontHero/home header3.jpg'
import BlueLine from '../../assets/images/frontHero/home loader blue line.svg'
import LightBlueLine from '../../assets/images/frontHero/home loader light blue line.svg'
import OrangeLine from '../../assets/images/frontHero/home loader orange line.svg'

const HeroSectionCompo = () => {
  return (
    <div className="hero_wrraper p-[50px] bg-backgroundv1">
      <div className="relative h-[500px] flex justify-center items-center">
        <div className='w-[150px] sm:w-[300px] md:w-[400px] lg-w-[500px] flex flex-col gap-5 '>
          <h1 className='text-3xl md:text-5xl text-textPrimary'>
            Find your work and your people
          </h1>
          <p className='text-sm md:text-base text-gray-500'>Become a member of the best community and and work global company.</p>
        </div>
        {/* <div className="absolute z-30 grid grid-cols-1">
          <div className="light_blue_line_wrapper col-span-1 overflow-hidden">
            <img src={LightBlueLine} alt="light blue line" className='object-cover' />
          </div>
          <div className="blue_line_wrapper col-span-1 overflow-hidden">
            <img src={BlueLine} alt="blue line" className=' object-cover' />
          </div>
          <div className="orange_line_wrapper col-span-1 overflow-hidden">
            <img src={OrangeLine} alt="orange line" className=' object-cover' />
          </div>
        </div> */}
        {/* <div className="z-50">
          <div className='absolute bottom-0 left-0 w-1/6 overflow-hidden '>
            <img src={img} alt="img" className='object-cover' />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HeroSectionCompo