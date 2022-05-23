import React from 'react'
import Banner from './Banner'
import BikeParts from './BikeParts'
import BusinessSummary from './BusinessSummary'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div className='bg-gray-100 pb-4'>
      <Banner />
      <BikeParts />
      <BusinessSummary />
      <Reviews />
    </div>
  )
}

export default Home
