import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import TitleUnderline from '../Shared/TitleUnderline'

const Purchase = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams()

  const { data: bikePart, isLoading } = useQuery(
    ['bikePart', id],
    async () => await axios.get(`http://localhost:5000/bikeParts/${id}`)
  )

  if (isLoading) {
    return <Loading />
  }

  const {
    image,
    name,
    description,
    minOrderQuantity,
    availableQuantity,
    price,
  } = bikePart.data

  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)]'>
      <div className='container mx-auto w-full p-4 md:p-8 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold'>Product Details</h2>
        <TitleUnderline />
        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 justify-center items-center'>
          <img className='w-full block' src={image} alt={name} />
          <div>
            <h2 className='mt-2 md:text-2xl'>
              <span className='font-bold'>Name:</span> {name}
            </h2>
            <h2 className='mt-2 md:text-2xl'>
              <span className='font-bold'>Minimum Order Quantity:</span>{' '}
              {minOrderQuantity}
            </h2>
            <h2 className='mt-2 md:text-2xl'>
              <span className='font-bold'>Available Quantity:</span>{' '}
              {availableQuantity}
            </h2>
            <h2 className='mt-2 md:text-2xl'>
              <span className='font-bold'>Price:</span> ${price}
            </h2>
            <h2 className='mt-2 md:text-2xl'>
              <span className='font-bold'>Description:</span> {description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
