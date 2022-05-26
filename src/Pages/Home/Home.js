import React from 'react'
import Banner from './Banner'
import BikeParts from './BikeParts'
import BusinessSummary from './BusinessSummary'
import ContactUs from './ContactUs'
import Reviews from './Reviews'
import SalesChart from './SalesChart'

const Home = () => {
  return (
    <div className='bg-gray-100 pb-4'>
      <Banner />
      <BikeParts />
      <BusinessSummary />
      <Reviews />
      <SalesChart />
      <ContactUs />
    </div>
  )
}

export default Home
