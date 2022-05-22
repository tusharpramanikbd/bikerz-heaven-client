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
    <div className='container mx-auto mt-4'>
      <h2 className='text-center font-bold text-2xl'>Bike Parts</h2>
      <TitleUnderline />

      {bikeParts.map((bikePart) => (
        <BikePart key={bikePart._id} bikePart={bikePart} />
      ))}
    </div>
  )
}

export default BikeParts
