import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'
import OrderDeleteModal from './OrderDeleteModal'

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const [deletingOrder, setDeletingOrder] = useState(null)

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(
    'myOrders',
    async () =>
      await axios.get(`http://localhost:5000/ordersbyemail?email=${user.email}`)
  )

  const showOrderDeleteModal = (order) => {
    setDeletingOrder(order)
  }

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
              <th>Transaction Id</th>
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
                <td>{order.transactionId}</td>
                <td>
                  <Link
                    className={
                      order.payment !== 'unpaid' ? 'pointer-events-none' : null
                    }
                    to={`/dashboard/payment/${order._id}`}
                  >
                    <button
                      disabled={order.payment !== 'unpaid' ? true : false}
                      className='btn btn-xs btn-success text-white'
                    >
                      Pay
                    </button>
                  </Link>{' '}
                  <label
                    onClick={() => showOrderDeleteModal(order)}
                    htmlFor='order-delete-confirm-modal'
                    className='btn btn-xs btn-error text-white'
                    disabled={order.payment !== 'unpaid' ? true : false}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <OrderDeleteModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        />
      )}
    </div>
  )
}

export default MyOrders
