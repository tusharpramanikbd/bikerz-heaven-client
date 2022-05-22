import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'
import BikePart from './BikePart'

const BikeParts = () => {
  const { data: bikeParts, isLoading } = useQuery('bikeParts', () =>
    fetch('bikePartsData.json').then((res) => res.json())
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-center font-bold text-3xl uppercase'>Bike Parts</h2>
      <TitleUnderline />
      <div className='mt-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {bikeParts.map((bikePart) => (
          <BikePart key={bikePart._id} bikePart={bikePart} />
        ))}
      </div>
    </div>
  )
}

export default BikeParts
