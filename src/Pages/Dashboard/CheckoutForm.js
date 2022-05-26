import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'

const CheckoutForm = ({ order }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const { _id, orderPrice, name, email } = order

  const paymentData = {
    price: orderPrice,
  }

  const { data, isLoading } = useQuery(
    'paymentData',
    async () =>
      await axios.post(
        `https://agile-citadel-57926.herokuapp.com/create-payment-intent`,
        {
          paymentData,
        }
      ),
    {
      onSuccess: (data) => {
        if (data?.data?.clientSecret) {
          setClientSecret(data.data.clientSecret)
        }
      },
    }
  )

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
    }

    setSuccess('')

    setProcessing(true)

    // Confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    )

    if (intentError) {
      setCardError(intentError.message)
      setProcessing(false)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent)
      setSuccess('Congrats! Your payment is completed')

      //store payment on database
      const payment = {
        orderId: _id,
        transactionId: paymentIntent.id,
      }

      axios
        .patch(`https://agile-citadel-57926.herokuapp.com/orders/${_id}`, {
          payment,
        })
        .then((res) => {
          setProcessing(false)
        })
        .catch((err) => console.log(err))
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='text-center mt-4'>
          <button
            className='btn btn-success btn-sm text-white'
            type='submit'
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
      {success && (
        <div className='text-green-500'>
          <p>{success}</p>
          <p>
            Your transaction id is{' '}
            <span className='text-orange-500 font-bold'>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  )
}

export default CheckoutForm
