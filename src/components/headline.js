import React from 'react'
import Phonemockup from '../assests/Phonemockup.png'
import Vector from '../assests/Vector.svg'
export default function Headline() {
  return (
    <div className='min-h-screen w-screen px-12 flex flex-col md:flex-row md:mt-16 lg:px-40'>
      <div>
        <img src={Phonemockup} alt=''className='md:w-4/5 md:h-4/5'/>
      </div>
      <div className='mt-4 md:my-12 lg:my-24'>
        <h1 className='font-Manrope font-extrabold text-2xl'>Headline</h1>
        <br />
        <p className='font-Manrope text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
        <br />
        <div className='flex'>
          <button className='font-Manrope text-xs text-purple-900'>Get started</button>
          <br />
          <img src={Vector} alt=''className='w-1/10 h-1/10'/>
        </div>
      </div>

    </div>
  )
}
