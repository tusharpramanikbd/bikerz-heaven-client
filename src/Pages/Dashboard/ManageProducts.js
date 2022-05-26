import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import ProductDeleteModal from './ProductDeleteModal'

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null)

  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery(
    'allProducts',
    async () =>
      await axios.get(`https://agile-citadel-57926.herokuapp.com/bikeparts`)
  )

  const showProductDeleteModal = (product) => {
    setDeletingProduct(product)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1 className='mt-4'>Total Products : {allProducts.data.length}</h1>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.data.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.availableQuantity}</td>
                <td>{product.price}</td>
                <td>
                  <label
                    onClick={() => showProductDeleteModal(product)}
                    htmlFor='product-delete-confirm-modal'
                    className='btn btn-xs btn-error text-white'
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ProductDeleteModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        />
      )}
    </div>
  )
}

export default ManageProducts
