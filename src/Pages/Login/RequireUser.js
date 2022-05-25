import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'
import Loading from '../Shared/Loading'

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)
  const location = useLocation()
  if (loading || adminLoading) {
    return <Loading />
  }
  if (!user || admin) {
    return <Navigate to='/dashboard' state={{ from: location }} replace />
  }
  return children
}

export default RequireUser
