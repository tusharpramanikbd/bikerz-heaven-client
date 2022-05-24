import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const MyOrders = () => {
  const [user] = useAuthState(auth)

  const { data: myOrders, isLoading } = useQuery(
    'myOrders',
    async () =>
      await axios.get(`http://localhost:5000/orders?email=${user.email}`)
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1 className='mt-4'>My Orders : {myOrders.data.length}</h1>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.data.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.orderPrice}</td>
                <td>{order.payment}</td>
                <td>
                  <button className='btn btn-xs btn-success text-white'>
                    Pay
                  </button>{' '}
                  <button className='btn btn-xs btn-success text-white'>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
