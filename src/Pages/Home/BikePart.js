import React from 'react'

const BikePart = ({ bikePart }) => {
  const {
    name,
    image,
    minOrderQuantity,
    availableQuantity,
    price,
    description,
  } = bikePart
  return (
    <div className='w-full p-4 rounded-lg drop-shadow-lg hover:drop-shadow-xl bg-white mb-4 md:mb-0 flex flex-col gap-y-4'>
      <div>
        <img className='w-full block h-[300px]' src={image} alt={name} />
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
          <span className='font-bold'>Price:</span> ${price}
        </h2>
        <h2 className='mt-2'>
          <span className='font-bold'>Description:</span> {description}
        </h2>
      </div>

      <div className='text-center mt-auto'>
        <button className='btn btn-primary w-full'>Order</button>
      </div>
    </div>
  )
}

export default BikePart
