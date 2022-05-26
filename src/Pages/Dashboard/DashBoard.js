import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content bg-gray-100 p-4'>
        <h2 className='text-2xl text-primary font-bold'>
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
              to='/dashboard'
              end
            >
              My Profile
            </NavLink>
          </li>

          {admin || (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/myOrders'
              >
                My Orders
              </NavLink>
            </li>
          )}

          {admin || (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/addReview'
              >
                Add A Review
              </NavLink>
            </li>
          )}

          {admin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/manageAllOrders'
              >
                Manage All Orders
              </NavLink>
            </li>
          )}

          {admin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/addAProduct'
              >
                Add A Product
              </NavLink>
            </li>
          )}

          {admin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/manageProducts'
              >
                Manage Products
              </NavLink>
            </li>
          )}

          {admin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to='/dashboard/makeAdmin'
              >
                Make Admin
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
