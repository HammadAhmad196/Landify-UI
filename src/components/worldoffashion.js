import React from 'react'
import Coverimage from '../assests/Coverimage.png'
export default function Worldoffashion() {
  return (
    <div className='flex flex-col px-12 py-4 lg:justify-around md:mt-0 lg:mt-4 lg:px-40'>
      <div className='flex flex-col md:flex-row md:mb-4'>
        <div className='w-full'>
          <h1 className='font-Manrope font-extrabold text-2xl'>Enter the world of all fashion trends</h1>
        </div>
        <br />
        <div className='md:ml-8'>
          <h1 className='font-Manrope text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</h1>
        </div>
        <br />
      </div>
      <div>
        <img src={Coverimage} alt='' className='' />
      </div>
    </div >
  )
}
