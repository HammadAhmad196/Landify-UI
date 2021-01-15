import React from 'react'
import iPhoneX from '../assests/iPhoneX.png'
import bg from '../assests/Backgroundimg.png'
import Navbar from '../components/navbar'
export default function Getstarted() {
  return (
    <div style={{ background: `transparent url(${bg}) no-repeat scroll center`, backgroundSize: "cover" }}>
      <Navbar />
      <div className='flex flex-col px-12 justify-center lg:justify-between items-center md:flex-row md:px-24 lg:ml-4 xl:px-30'>
        <div className='flex flex-col justify-center items-center w-full md:justify-left md:items-start lg:mb-12'>
          <h1 className='font-Manrope text-2xl font-bold md:font-extrabold md:text-3xl lg:text-5xl'>Organise projects.</h1>
          <h1 className='font-Manrope text-2xl font-bold md:font-extrabold md:text-3xl lg:text-5xl'>Get more done.</h1>
          <div className='flex font-Manrope text-sm transition duration-500 ease-in-out hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-110 bg-purple-600 text-white rounded-md px-4 py-2'>
            <button className='outline-none'>Get Started</button>
          </div>
        </div>
        <div className='flex justify-center items-center md:w-4/5 md:h-4/5 md:mt-12'>
          <img src={iPhoneX} alt='' className='md:h-4/5 md:w-4/5 lg:w-3/4 lg:h-3/4 xl:w-1/2 xl:h-1/2 xl:ml-16'></img>
        </div>
      </div>
    </div>
  )
}

