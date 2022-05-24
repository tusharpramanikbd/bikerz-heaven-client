import axios from 'axios'
import { format } from 'date-fns'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import TitleUnderline from '../Shared/TitleUnderline'

const AddReview = () => {
  const [user] = useAuthState(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    data.name = user.displayName
    data.email = user.email
    const currentDate = format(new Date(), 'PP')
    data.date = currentDate

    axios
      .post('http://localhost:5000/reviews', {
        data,
      })
      .then((res) => {
        reset()
        toast.success(`Your review is received`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='mt-4 min-h-[calc(100vh-110px)] flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-md p-4 md:p-8 md:w-3/4 lg:w-3/5 mx-auto'>
        <h2 className='text-center font-bold text-3xl uppercase'>
          Add your review
        </h2>
        <TitleUnderline />
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Your review</span>
            </label>
            <textarea
              class='textarea textarea-bordered h-24'
              placeholder='Review'
              {...register('review', {
                required: {
                  value: true,
                  message: 'review is required',
                },
              })}
            ></textarea>
            <label className='label'>
              {errors.review?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <div class='form-control w-full'>
            <label class='label'>
              <span class='label-text'>Your rating</span>
            </label>
            <select class='select select-bordered' {...register('rating')}>
              <option disabled selected>
                1
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <input
            className='btn btn-primary w-full mt-4'
            type='submit'
            value='Add Review'
          />
        </form>
      </div>
    </div>
  )
}

export default AddReview
