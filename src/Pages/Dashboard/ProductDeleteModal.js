import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

const ProductDeleteModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { _id, name } = deletingProduct

  const handleOrderDelete = (id) => {
    axios
      .delete(`http://localhost:5000/bikeparts/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success('Product is deleted')
          setDeletingProduct(null)
          refetch()
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <input
        type='checkbox'
        id='product-delete-confirm-modal'
        className='modal-toggle'
      />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>
            Are you sure want to delete {name}?
          </h3>
          <div className='modal-action'>
            <label
              onClick={() => handleOrderDelete(_id)}
              htmlFor='product-delete-confirm-modal'
              className='btn'
            >
              Delete
            </label>
            <label htmlFor='product-delete-confirm-modal' className='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDeleteModal
