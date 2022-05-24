import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div class='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content bg-gray-100 p-4'>
        <h2 className='text-2xl text-primary font-bold'>
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div class='drawer-side'>
        <label for='dashboard-sidebar' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Orders</Link>
          </li>
          <li>
            <Link to='/dashboard/addReview'>Add A Review</Link>
          </li>
          <li>
            <Link to='/dashboard/myProfile'>My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashBoard
