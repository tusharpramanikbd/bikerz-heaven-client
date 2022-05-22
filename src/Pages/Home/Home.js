import React from 'react'
import Banner from './Banner'
import BikeParts from './BikeParts'
import BusinessSummary from './BusinessSummary'

const Home = () => {
  return (
    <div className='bg-gray-100 pb-4'>
      <Banner />
      <BikeParts />
      <BusinessSummary />
    </div>
  )
}

export default Home
