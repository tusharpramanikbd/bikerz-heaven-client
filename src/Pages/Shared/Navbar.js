import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/purchase'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Purchase
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/blogs'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Login
        </NavLink>
      </li>
    </>
  )

  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52'
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Bikerz Heaven
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
      </div>
    </div>
  )
}

export default Navbar