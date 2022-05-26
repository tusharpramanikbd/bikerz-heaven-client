import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const MakeAdmin = () => {
  const [user] = useAuthState(auth)
  const {
    data: userList,
    isLoading,
    refetch,
  } = useQuery(
    'userList',
    async () =>
      await axios.get(`https://agile-citadel-57926.herokuapp.com/users`)
  )

  const makeAdminHandler = (email) => {
    axios
      .put(`https://agile-citadel-57926.herokuapp.com/users/admin/${email}`)
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
            {userList.data.map((usr, index) => {
              if (usr.email !== user.email) {
                return (
                  <tr key={usr._id}>
                    <th>{index + 1}</th>
                    <td>{usr.email}</td>
                    <td>
                      <button
                        onClick={() => makeAdminHandler(usr.email)}
                        className='btn btn-xs btn-success text-white'
                        disabled={usr.role ? true : false}
                      >
                        Make Admin
                      </button>
                    </td>
                  </tr>
                )
              } else {
                return null
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MakeAdmin
