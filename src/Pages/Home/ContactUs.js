import axios from 'axios'
import { format } from 'date-fns'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import TitleUnderline from '../Shared/TitleUnderline'

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const currentDate = format(new Date(), 'PP')
    data.date = currentDate
    axios
      .post('https://agile-citadel-57926.herokuapp.com/messages', {
        data,
      })
      .then((res) => {
        reset()
        toast.success(`Your message is received`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='container mx-auto w-full lg:w-1/2 p-4 md:p-8 rounded-lg drop-shadow-lg bg-white mt-8'>
      <h2 className='text-center text-3xl font-bold uppercase'>Contact Us?</h2>
      <TitleUnderline />
      <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Full Name</span>
          </label>
          <input
            type='text'
            placeholder='Your full name'
            className='input input-bordered w-full'
            {...register('fullName', {
              required: {
                value: true,
                message: 'Full Name is required',
              },
            })}
          />
          <label className='label'>
            {errors.fullName?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.fullName.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your email address'
            className='input input-bordered w-full'
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
            })}
          />
          <label className='label'>
            {errors.email?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            className='textarea textarea-bordered h-24'
            placeholder='Your Message'
            {...register('message', {
              required: {
                value: true,
                message: 'Message is required',
              },
            })}
          ></textarea>
          <label className='label'>
            {errors.message?.type === 'required' && (
              <span className='label-text-alt text-red-500'>
                {errors.message.message}
              </span>
            )}
          </label>
        </div>

        <input
          className='btn btn-primary w-full'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  )
}

export default ContactUs
