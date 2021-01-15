import React from 'react'
import AirbnbLogo from '../assests/AirbnbLogo.svg'
import HubspotLogo from '../assests/HubspotLogo.svg'
import GoogleLogo from '../assests/GoogleLogo.svg'
import MicrosoftLogo from '../assests/MicrosoftLogo.svg'
import WalmartLogo from '../assests/WalmartLogo.svg'
import FedExLogo from '../assests/FedExLogo.svg'
export default function Logos() {
  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <div>
          <img src={AirbnbLogo} alt='logo' />
        </div>
        <div>
          <img src={HubspotLogo} alt='logo' />
        </div>
        <div>
          <img src={GoogleLogo} alt='logo' />
        </div>
        <div>
          <img src={MicrosoftLogo} alt='logo' />
        </div>
        <div>
          <img src={WalmartLogo} alt='logo' />
        </div>
        <div>
          <img src={FedExLogo} alt='logo' />
        </div>
      </div>
    </div>
  )
}
