import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const OrderDeleteModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, productName } = deletingOrder

  const handleOrderDelete = (id) => {
    axios
      .delete(`http://localhost:5000/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success('Order is deleted')
          setDeletingOrder(null)
          refetch()
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <input
        type='checkbox'
        id='order-delete-confirm-modal'
        className='modal-toggle'
      />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>
            Are you sure want to delete order: {productName}?
          </h3>
          <div className='modal-action'>
            <label
              onClick={() => handleOrderDelete(_id)}
              htmlFor='order-delete-confirm-modal'
              className='btn'
            >
              Delete
            </label>
            <label htmlFor='order-delete-confirm-modal' className='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDeleteModal
