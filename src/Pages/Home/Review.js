import React from 'react'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

const Review = ({ review }) => {
  const { name, rating, reviewText } = review

  return (
    <div className='w-full p-4 rounded-lg drop-shadow-lg bg-white mb-4 md:mb-0 text-center'>
      <h2 className='mt-2 font-bold'>{name}</h2>
      <Rating
        className='mt-2'
        emptySymbol={<FontAwesomeIcon icon={faStarRegular} />}
        fullSymbol={
          <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
        }
        initialRating={rating}
        readonly
      />

      <h2 className='mt-2'>{reviewText}</h2>
    </div>
  )
}

export default Review
