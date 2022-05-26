import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)] grid justify-center items-center'>
      <div className='container mx-auto'>
        <h2 className='text-center font-bold text-error text-2xl mb-8'>
          Sorry, 404 Not Found
        </h2>
        <img
          src='https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1939.jpg?w=740'
          alt='not found'
          className='block w-full lg:w-1/2 mx-auto'
        />
      </div>
    </div>
  )
}

export default NotFound
