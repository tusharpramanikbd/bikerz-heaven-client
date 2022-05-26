import React from 'react'

const Banner = () => {
  return (
    <div className='carousel w-full h-[calc(100vh-64px)]'>
      <div id='slide1' className='carousel-item relative w-full'>
        <div className='bg-slide-1 w-full bg-no-repeat bg-center bg-cover'>
          <div className='bg-gray-900 w-full h-full bg-opacity-50'>
            <div className='container mx-auto w-full h-full flex justify-center items-center'>
              <div className='w-3/5 md:w-3/4 lg:w-1/2 text-center'>
                <h2 className='text-indigo-400 text-2xl md:text-4xl font-bold capitalize'>
                  a motor bike parts inventory system
                </h2>
                <h2 className='text-white text-sm md:text-2xl font-bold capitalize mt-4'>
                  your one stop solution to find all the motor bike parts
                </h2>
                <a href='#bikeParts' className='btn btn-primary mt-8'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <div className='bg-slide-2 w-full bg-no-repeat bg-center bg-cover'>
          <div className='bg-gray-900 w-full h-full bg-opacity-50'>
            <div className='container mx-auto w-full h-full flex justify-center items-center'>
              <div className='w-3/5 md:w-3/4 lg:w-1/2 text-center'>
                <h2 className='text-indigo-400 text-2xl md:text-4xl font-bold capitalize'>
                  a motor bike parts inventory system
                </h2>
                <h2 className='text-white text-sm md:text-2xl font-bold capitalize mt-4'>
                  your one stop solution to find all the motor bike parts
                </h2>
                <a href='#bikeParts' className='btn btn-primary mt-8'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <div className='bg-slide-3 w-full bg-no-repeat bg-center bg-cover'>
          <div className='bg-gray-900 w-full h-full bg-opacity-50'>
            <div className='container mx-auto w-full h-full flex justify-center items-center'>
              <div className='w-3/5 md:w-3/4 lg:w-1/2 text-center'>
                <h2 className='text-indigo-400 text-2xl md:text-4xl font-bold capitalize'>
                  a motor bike parts inventory system
                </h2>
                <h2 className='text-white text-sm md:text-2xl font-bold capitalize mt-4'>
                  your one stop solution to find all the motor bike parts
                </h2>
                <a href='#bikeParts' className='btn btn-primary mt-8'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
