import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'
import Review from './Review'

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(
    'reviews',
    async () =>
      await axios.get('https://agile-citadel-57926.herokuapp.com/reviews')
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-center font-bold text-3xl uppercase'>Our Reviews</h2>
      <TitleUnderline />
      <div className='mt-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {reviews.data.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
