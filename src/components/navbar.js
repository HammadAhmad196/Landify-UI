import React from 'react'
import Landifylogo from '../assests/Landifylogo.svg'
import Googleplayicon from '../assests/Googleplayicon.svg'
import Appstoreicon from '../assests/Appstoreicon.svg'
export default function Navbar() {
  return (
      <div className={`max-h-screen w-screen flex flex-col px-12 md:flex-row justify-between lg:px-24 xl:px-36`}>
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <img src={Landifylogo} alt='' />
          <nav className='flex flex-col md:flex-row mx-1'>
            <ul className='p-2 md:p-1 xl:p-3'>About</ul>
            <ul className='p-2 md:p-1 xl:p-3'>Products</ul>
            <ul className='p-2 md:p-1 xl:p-3'>Pricing</ul>
            <ul className='p-2 md:p-1 xl:p-3'>Blog</ul>
            <ul className='p-2 md:p-1 xl:p-3'>Jobs</ul>
            <ul className='p-2 md:p-1 xl:p-3'>More</ul>
          </nav>
        </div>
        <div className='flex justify-center py-3 xl:mr-4'>
          <img src={Googleplayicon} alt='' className='w-1/3 h-1/3 px-1 py-1 xl:px-0 xl:py-0'/>
          <img src={Appstoreicon} alt='' className='w-1/3 h-1/3 px-1 py-1 '/>
        </div>
      </div>
  )
}

// {`flex w-p-4 items-center ${isDragActive && 'border-blue-500'} bg-gray-100`}
// className='flex flex-col px-12 md:flex-row justify-between lg:px-24'
