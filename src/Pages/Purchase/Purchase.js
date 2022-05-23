import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Purchase = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams()

  const { data: bikePart, isLoading } = useQuery(
    ['bikePart', id],
    async () => await axios.get(`http://localhost:5000/bikeParts/${id}`)
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h2>{bikePart.data.name}</h2>
      <h2>{user.displayName}</h2>
    </div>
  )
}

export default Purchase
