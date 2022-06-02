import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faBoxArchive,
  faPeopleGroup,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import TitleUnderlineWhite from '../Shared/TitleUnderlineWhite'

const BusinessSummary = () => {
  return (
    <div className='bg-blue-600 p-16 mt-8'>
      <div className='container mx-auto'>
        <h2 className='text-center font-bold text-3xl uppercase text-white'>
          business summary
        </h2>
        <TitleUnderlineWhite />
        <div className='w-full p-4 rounded-lg drop-shadow-lg bg-white mt-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='bg-blue-100 p-8 rounded-md'>
            <FontAwesomeIcon className='text-primary text-4xl' icon={faGlobe} />
            <h2 className='mt-4 font-bold text-2xl'>72</h2>
            <h2 className='text-primary mt-4'>Countries</h2>
          </div>
          <div className='bg-blue-100 p-8 rounded-md'>
            <FontAwesomeIcon
              className='text-primary text-4xl'
              icon={faBoxArchive}
            />
            <h2 className='mt-4 font-bold text-2xl'>535+</h2>
            <h2 className='text-primary mt-4'>Complete Orders</h2>
          </div>
          <div className='bg-blue-100 p-8 rounded-md'>
            <FontAwesomeIcon
              className='text-primary text-4xl'
              icon={faPeopleGroup}
            />
            <h2 className='mt-4 font-bold text-2xl'>273+</h2>
            <h2 className='text-primary mt-4'>Happy Clients</h2>
          </div>
          <div className='bg-blue-100 p-8 rounded-md'>
            <FontAwesomeIcon
              className='text-primary text-4xl'
              icon={faThumbsUp}
            />
            <h2 className='mt-4 font-bold text-2xl'>432+</h2>
            <h2 className='text-primary mt-4'>Feedbacks</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessSummary
