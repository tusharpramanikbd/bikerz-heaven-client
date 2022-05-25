import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'
import OrderDeleteModal from './OrderDeleteModal'

const ManageAllOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null)

  const {
    data: orderList,
    isLoading,
    refetch,
  } = useQuery(
    'allOrders',
    async () => await axios.get(`http://localhost:5000/orders`)
  )

  const showOrderDeleteModal = (order) => {
    setDeletingOrder(order)
  }

  const shippedBtnClickHandler = (id) => {
    const data = {
      newPaymentStatus: 'shipped',
    }
    axios
      .put(`http://localhost:5000/orders/${id}`, {
        data,
      })
      .then((res) => {
        toast.success('Product is shipped')
        refetch()
      })
      .catch((err) => console.log(err))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1 className='mt-4'>All Orders : {orderList.data.length}</h1>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.data.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.email}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.orderPrice}</td>
                <td>{order.payment}</td>
                <td>
                  <button
                    disabled={order.payment !== 'pending' ? true : false}
                    className='btn btn-xs btn-success text-white'
                    onClick={() => shippedBtnClickHandler(order._id)}
                  >
                    Shipped
                  </button>{' '}
                  <label
                    disabled={order.payment === 'shipped' ? true : false}
                    onClick={() => showOrderDeleteModal(order)}
                    htmlFor='order-delete-confirm-modal'
                    className='btn btn-xs btn-error text-white'
                  >
                    Cancel
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

export default ManageAllOrders