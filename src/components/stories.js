import React from 'react'
import HubspotLogo from '../assests/HubspotLogo.svg'
import AirbnbLogo from '../assests/AirbnbLogo.svg'
import BookMyShowLogo from '../assests/BookMyShowLogo.svg'
import QuoteLogo from '../assests/QuoteLogo.svg'
export default function Stories() {
  return (
    <div className='flex flex-col px-12 min-h-screen md:flex-row bg-blue-200 lg:px-48'>
      <div className='flex flex-col mt-12 xl:ml-32 xl:mr-8'>
        <div>
          <img src={QuoteLogo} alt='' />
          <p className='font-Manrope text-3xl font-bold'>Real Stories from Real Customers</p>
        </div>
        <div>
          <p className='font-Manrope text-sm font-light'>Get inspired by these stories</p>
        </div>
        <div className='md:ml-32 bg-white rounded-default py-4 px-4'>
          <img src={HubspotLogo} alt='' className='px-2 py-2' />
          <p className='font-Manrope text-xs px-4 ml-4 py-2'>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
          <h1 className='font-Manrope text-xs font-bold px-4 ml-4'>Floyd Miles</h1>
          <p className='font-Manrope text-xs ml-8 text-gray-600'>Vice President, GoPro</p>
        </div>
      </div>
      <div className='flex flex-col md:ml-4 md:mt-16 xl:mr-32'>
        <div className='mt-4 bg-white rounded-default py-4 px-4'>
          <img src={AirbnbLogo} alt='' className='px-2 py-2' />
          <p className='font-Manrope text-xs px-4 ml-4 py-2'>I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
          <h1 className='font-Manrope text-xs font-bold px-4 ml-4'>Jane Cooper</h1>
          <p className='font-Manrope text-xs ml-8 text-gray-600'>CEO Airbnb</p>
        </div>
        <div className='mt-4 mb-6 bg-white rounded-default py-4 px-4 md:mr-16'>
          <img src={BookMyShowLogo} alt='' className='px-2 py-2' />
          <p className='font-Manrope text-xs px-4 ml-4 py-2'>Landify saved our time in designing my company page.</p>
          <h1 className='font-Manrope text-xs font-bold px-4 ml-4'>Kristin Watson</h1>
          <p className='font-Manrope text-xs ml-8 text-gray-600'>Co-Founder, BookMyShow</p>
        </div>
      </div>
    </div>
  )
}
