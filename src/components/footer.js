import React from 'react'
import Googleplaybadge from '../assests/Googleplaybadge.png'
import Appstorebadge from '../assests/Appstorebadge.png'
import Phonemockup1 from '../assests/Phonemockup1.png'
import Phonemockup2 from '../assests/Phonemockup2.png'
export default function Footer() {
  return (
    <div className='px-12 mt-8 flex flex-col bg-blue-400 md:flex-row lg:px-40'>
      <div className='flex flex-col mt-12'>
        <h2 className='font-Manrope text-3xl font-extrabold leading-10'>Manage your projects from your mobile</h2>
        <p className='font-Manrope text-sm leading-2 text-gray-900'>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
        <div className='mt-4 mb-4'>
          <p className='font-Manrope text-xs'>Get the app</p>
          <div className='flex mt-2'>
            <img src={Googleplaybadge} alt='' className='w-1/5 h-1/5 md:w-1/4 md:h-1/4'/>
            <img src={Appstorebadge} alt='' className='ml-2 w-1/5 h-1/5 md:w-1/4 md:h-1/4'/>
          </div>
        </div>
      </div>
      <div className='max-h-screen flex flex-row md:ml-8 xl:w-11/12 xl:h-11/12'>
        <div>
          <img src={Phonemockup1} alt='' className='md:ml-12 md:w-4/5 md:h-4/5'/>
        </div>
        <div className='mt-12'>
          <img src={Phonemockup2} alt='' className='md:w-4/5 md:h-4/5'/>
        </div>
      </div>
    </div>
  )
}