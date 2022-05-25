import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51L1SdTLuXAZRAQ5Wc7bx0wqBsVk9hZQNQEkof9ghXjCbN2EwnTXDNp2lHVd9WpZVQo9D4uvkqkUswpdOvLKnO2U6000KaKlIxJ'
)

const Payment = () => {
  const { id } = useParams()

  const { data: order, isLoading } = useQuery(
    ['order', id],
    async () => await axios.get(`http://localhost:5000/orders/${id}`)
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)]'>
      <div className='container mx-auto w-full md:w-2/3 lg:w-1/3 p-8 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold'>Payment Details</h2>
        <TitleUnderline />
        <h2 className='mt-4 font-bold'>
          Product Name:{' '}
          <span className='font-normal'>{order.data.productName}</span>
        </h2>
        <h2 className='font-bold mt-2'>
          Product Quantity:{' '}
          <span className='font-normal'>{order.data.orderQuantity}</span>
        </h2>
        <h2 className='font-bold mt-2'>
          Order Date:{' '}
          <span className='font-normal'>{order.data.orderDate}</span>
        </h2>
        <h2 className='font-bold mt-2'>
          Shipping Address:{' '}
          <span className='font-normal'>{order.data.address}</span>
        </h2>
        <h2 className='font-bold mt-2'>
          Contact Number:{' '}
          <span className='font-normal'>{order.data.phone}</span>
        </h2>
        <h2 className='font-bold mt-2'>
          Total Price:{' '}
          <span className='font-normal'>{order.data.orderPrice}</span>
        </h2>
      </div>
      <div className='container mx-auto w-full md:w-2/3 lg:w-1/3 p-4 rounded-lg drop-shadow-lg bg-white mt-4'>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order.data} />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
