import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import TitleUnderline from '../Shared/TitleUnderline'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { format } from 'date-fns'

const Purchase = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams()
  const [quantity, setQuantity] = useState(0)
  const [quantityError, setQuantityError] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const {
    data: bikePart,
    isLoading,
    refetch,
  } = useQuery(
    ['bikePart', id],
    async () => await axios.get(`http://localhost:5000/bikeParts/${id}`),
    {
      onSuccess: (data) => {
        setQuantity(data.data.minOrderQuantity)
      },
    }
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

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
    if (event.target.value === '') {
      setQuantityError('You have to add minimum order quantity')
      setIsDisabled(true)
    } else if (parseInt(event.target.value) < minOrderQuantity) {
      setQuantityError('You can not order less than minimum order quantity')
      setIsDisabled(true)
    } else if (parseInt(event.target.value) > availableQuantity) {
      setQuantityError('You can not order more than available quantity')
      setIsDisabled(true)
    } else {
      setQuantityError('')
      setIsDisabled(false)
    }
  }

  const onSubmit = async (data) => {
    data.payment = 'unpaid'
    const orderDate = format(new Date(), 'PP')
    data.orderDate = orderDate
    data.productId = id
    const orderPrice = parseInt(data.orderQuantity) * price
    data.orderPrice = orderPrice
    axios
      .post('http://localhost:5000/orders', {
        data,
      })
      .then((res) => {
        reset()
        toast.success(
          `Your order is recieved. Please pay $${orderPrice} as soon as possible.`
        )
        refetch()
      })
      .catch((err) => console.log(err))
  }

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

        <h2 className='text-center text-2xl font-bold mt-4'>Place Order</h2>
        <TitleUnderline />
        <form
          className='lg:w-3/5 border p-4 rounded-lg mx-auto mt-4 shadow-md'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              readOnly
              value={user.displayName}
              className='input input-bordered w-full'
              {...register('name')}
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              readOnly
              value={user.email}
              className='input input-bordered w-full'
              {...register('email')}
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Shipping Address</span>
            </label>
            <input
              type='text'
              placeholder='Shipping Address'
              className='input input-bordered w-full'
              {...register('address', {
                required: {
                  value: true,
                  message: 'Shipping address is required',
                },
              })}
            />
            <label className='label'>
              {errors.address?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              placeholder='Phone Number'
              className='input input-bordered w-full'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone number is required',
                },
              })}
            />
            <label className='label'>
              {errors.phone?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Order Quantity</span>
            </label>
            <input
              type='number'
              value={quantity}
              className='input input-bordered w-full'
              {...register('orderQuantity', {
                onChange: (e) => {
                  handleQuantityChange(e)
                },
              })}
            />
            <label className='label'>
              <span className='label-text-alt text-red-500'>
                {quantityError}
              </span>
            </label>
          </div>

          <input
            className='btn w-full text-white'
            type='submit'
            value='Purchase'
            disabled={isDisabled}
          />
        </form>
      </div>
    </div>
  )
}

export default Purchase
