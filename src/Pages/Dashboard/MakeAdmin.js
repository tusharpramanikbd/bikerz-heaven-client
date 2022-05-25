import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'

const MakeAdmin = () => {
  const {
    data: userList,
    isLoading,
    refetch,
  } = useQuery(
    'userList',
    async () => await axios.get(`http://localhost:5000/users`)
  )

  const makeAdminHandler = (email) => {
    axios
      .put(`http://localhost:5000/users/admin/${email}`)
      .then((res) => {
        toast.success(`Admin is created`)
        refetch()
      })
      .catch((err) => console.log(err))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1 className='mt-4'>Total Users : {userList.data.length}</h1>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.data.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => makeAdminHandler(user.email)}
                    className='btn btn-xs btn-success text-white'
                    disabled={user.role ? true : false}
                  >
                    Make Admin
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

export default MakeAdmin
