import React from 'react'
import { useAuth } from '../../context/authContext'

const NavBar = () => {
    const {user} = useAuth();
  return (
    <div className='flex items-center text-white px-5 justify-between h-12 bg-teal-600'>
      <p>Welcome, {user.name}</p>
      <button className='px-4 py-1 bg-teal-700 cursor-pointer hover:bg-teal-800'>Logout</button>
    </div>
  )
}

export default NavBar
