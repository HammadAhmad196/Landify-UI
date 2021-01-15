import React from 'react'
import Icon1 from '../assests/Icon1.svg'
import Icon2 from '../assests/Icon2.svg'
import Icon3 from '../assests/Icon3.svg'
import Icon4 from '../assests/Icon4.svg'
export default function Achievements() {
  return (
    <div className='flex flex-col px-12 py-4 mt-12 md:flex-row lg:justify-around'>
      <div className='flex flex-col'>
        <h1 className='font-Manrope font-extrabold text-2xl'>Our 18 years of achievements</h1>
        <p className='font-Manrope text-xs'>With our super powers we have reached this</p>
      </div>
      <div className='flex flex-col md:ml-8 justify-around'>
        <div className='flex'>
          <img src={Icon1} alt='' />
          <div>
            <p className='font-Manrope font-bold'>10,000+</p>
            <p className='font-Manrope text-xs'>Downloads per day</p>
          </div>
        </div>
        <div className='flex'>
          <img src={Icon2} alt='' />
          <div>
            <p className='font-Manrope font-bold'>2 Million</p>
            <p className='font-Manrope text-xs'>Users</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-around'>
        <div className='flex'>
          <img src={Icon3} alt='' />
          <div>
            <p className='font-Manrope font-bold'>500 +</p>
            <p className='font-Manrope text-xs'>Clients</p>
          </div>
        </div>
        <div className='flex'>
          <img src={Icon4} alt='' />
          <div>
            <p className='font-Manrope font-bold'>140</p>
            <p className='font-Manrope text-xs'>Countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}
