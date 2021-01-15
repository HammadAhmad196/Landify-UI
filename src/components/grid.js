import React from 'react'
import featureicon1 from '../assests/featureicon1.svg'
import featureicon2 from '../assests/featureicon2.svg'
import featureicon3 from '../assests/featureicon3.svg'
import featureicon4 from '../assests/featureicon4.svg'
import featureicon5 from '../assests/featureicon5.svg'
import featureicon6 from '../assests/featureicon6.svg'

export default function Grid() {
  return (
    <div className='mt-8 mb-16 md:mt-16 px-6 md:px-32'>
      <div className='flex flex-col justify-center items-center font-Manrope'>
        <h1 className='font-bold text-2xl'>Tailor-made features</h1>
        <p className='flex font-Manrope justify-center items-center text-sm md:mx-32 lg:mx-56'>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
      </div>
      <div className='grid grid-cols-1 mt-8 md:grid-cols-3 gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon1} alt=''/>
          <h1 className='font-Manrope font-semibold'>Robust workflow</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon2} alt=''/>
          <h1 className='font-Manrope font-semibold'>Flexibility</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon3} alt=''/>
          <h1 className='font-Manrope font-semibold'>User friendly</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon4} alt=''/>
          <h1 className='font-Manrope font-semibold'>Multiple layouts</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon5} alt=''/>
          <h1 className='font-Manrope font-semibold'>Better components</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={featureicon6} alt=''/>
          <h1 className='font-Manrope font-semibold'>Well organised</h1>
          <p className='flex justify-center items-center font-Manrope text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
      </div>
    </div>
  )
}
