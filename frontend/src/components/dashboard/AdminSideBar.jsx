import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa'
import { FaRegChartBar } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiSettings } from "react-icons/fi";


const AdminSideBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className='bg-teal-600 h-12 flex justify-center items-center'>
        <h3 className='text-2xl text-center font-bold'>QuickBook</h3>
      </div>
      <div className='px-4'>
        <NavLink 
  to="/dashboard"
  className={({ isActive }) => `${isActive ? "bg-teal-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}
>
  <FaTachometerAlt />
  <span>Dashboard</span>
</NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <FaRegChartBar />
         <span>Chat of Accounts</span>
        </NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <FaFileInvoice />
         <span>Invoices</span>
        </NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <FaUsers />
         <span>Customers</span>
        </NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <FaMoneyBillWave />
         <span>Expenses</span>
        </NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <MdOutlineAnalytics />
         <span>Reports</span>
        </NavLink>
        <NavLink to="/dashboard"
         className="flex items-center space-x-4 block py-2.5 px-4 rounded">
         <FiSettings />
         <span>Settings</span>
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSideBar
