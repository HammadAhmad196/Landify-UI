import React from 'react'
import MarkLogo from '../assests/MarkLogo.svg'
import Googleplayicon from '../assests/Googleplayicon.svg'
import Appstoreicon from '../assests/Appstoreicon.svg'
export default function FooterMini() {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-black px-12 lg:px-40'>
      <div className='mt-8 mb-6'>
        <div>
          <img src={MarkLogo} alt='' />
        </div>
        <div className='flex mt-4'>
          <h1 className='font-Manrope text-xs text-white'>Download Now</h1>
          <h1 className='font-Manrope text-xs text-white ml-3'>License</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 mt-3'>
          <h1 className='font-Manrope text-xs text-white'>About</h1>
          <h1 className='font-Manrope text-xs text-white'>Features</h1>
          <h1 className='font-Manrope text-xs text-white'>Pricing</h1>
          <h1 className='font-Manrope text-xs text-white'>Careers</h1>
          <h1 className='font-Manrope text-xs text-white'>Help</h1>
          <h1 className='font-Manrope text-xs text-white'>Privacy Policy</h1>
        </div>
        <div className='flex mt-2'>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} className=' text-white' />
          <p className='font-Manrope text-xs text-gray-400 mt-1'>2021 Landify UIKit.All rights reserved.</p>
        </div>
      </div>
      <div className='mt-8'>
          <p className='font-Manrope text-xs text-white'>Get the app</p>
          <div className='mt-2'>
            <img src={Googleplayicon} alt='' className='w-1/4 h-1/4 md:w-1/2 md:h-1/2 xl:w-full'/>
            <img src={Appstoreicon} alt='' className='mt-2 w-1/4 h-1/4 md:w-1/2 md:h-1/2 xl:w-full'/>
          </div>
        </div>
    </div>
  )
}
