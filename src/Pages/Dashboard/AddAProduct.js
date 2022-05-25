import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import TitleUnderline from '../Shared/TitleUnderline'

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    axios
      .post('http://localhost:5000/bikeparts', {
        data,
      })
      .then((res) => {
        reset()
        toast.success(`New product is added`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='mt-4 min-h-[calc(100vh-110px)] flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-md p-4 md:p-8 md:w-3/4 lg:w-3/5 mx-auto'>
        <h2 className='text-center text-2xl font-bold'>Add A Product</h2>
        <TitleUnderline />
        <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Product Name'
              className='input input-bordered w-full'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Minimum Order Quantity</span>
            </label>
            <input
              type='number'
              placeholder='0'
              className='input input-bordered w-full'
              {...register('minOrderQuantity', {
                required: {
                  value: true,
                  message: 'Minimum Order Quantity is required',
                },
              })}
            />
            <label className='label'>
              {errors.minOrderQuantity?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.minOrderQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Available Quantity</span>
            </label>
            <input
              type='number'
              placeholder='0'
              className='input input-bordered w-full'
              {...register('availableQuantity', {
                required: {
                  value: true,
                  message: 'Available Quantity is required',
                },
              })}
            />
            <label className='label'>
              {errors.availableQuantity?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Price</span>
            </label>
            <input
              type='number'
              placeholder='0'
              className='input input-bordered w-full'
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is required',
                },
              })}
            />
            <label className='label'>
              {errors.price?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Image</span>
            </label>
            <input
              type='text'
              placeholder='Image url'
              className='input input-bordered w-full'
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is required',
                },
              })}
            />
            <label className='label'>
              {errors.image?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>

          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Description</span>
            </label>
            <textarea
              class='textarea textarea-bordered h-24'
              placeholder='Product Description'
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is required',
                },
              })}
            ></textarea>
            <label className='label'>
              {errors.description?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <input
            className='btn btn-primary w-full'
            type='submit'
            value='Add Product'
          />
        </form>
      </div>
    </div>
  )
}

export default AddAProduct
