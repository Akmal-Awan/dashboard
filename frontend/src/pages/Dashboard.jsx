import React from 'react'
import AdminSideBar from '../components/dashboard/AdminSideBar';
import NavBar from '../components/dashboard/NavBar';

const Dashboard = () => {

  return (
    <div className='flex'>
      <AdminSideBar />
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <NavBar />
      </div>
    </div>
  )
}

export default Dashboard
