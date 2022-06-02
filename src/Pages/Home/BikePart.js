import React from 'react'
import { useNavigate } from 'react-router-dom'

const BikePart = ({ bikePart }) => {
  const {
    _id,
    name,
    image,
    minOrderQuantity,
    availableQuantity,
    price,
    description,
  } = bikePart

  const navigate = useNavigate()

  const handleOrderBtnClick = (id) => {
    navigate(`/purchase/${id}`)
  }

  return (
    <div className='w-full p-4 rounded-lg drop-shadow-lg hover:drop-shadow-xl bg-white mb-4 md:mb-0 flex flex-col gap-y-4'>
      <div>
        <img className='w-full block h-[220px]' src={image} alt={name} />
        <h2 className='mt-2'>
          <span className='font-bold'>Name:</span> {name}
        </h2>
        <h2 className='mt-2'>
          <span className='font-bold'>Minimum Order Quantity:</span>{' '}
          {minOrderQuantity}
        </h2>
        <h2 className='mt-2'>
          <span className='font-bold'>Available Quantity:</span>{' '}
          {availableQuantity}
        </h2>
        <h2 className='mt-2'>
          <span className='font-bold'>Price:</span>{' '}
          <span className='text-orange-500'> ${price}</span>
        </h2>
        <h2 className='mt-2 text-sm'>
          <span className='font-bold'>Description:</span> {description}
        </h2>
      </div>

      <div className='text-center mt-auto'>
        <button
          onClick={() => handleOrderBtnClick(_id)}
          className='btn btn-primary w-full'
        >
          Order
        </button>
      </div>
    </div>
  )
}

export default BikePart
