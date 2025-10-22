import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate('/login');
  }
  return (
    <div>
      <h1 className = 'text-3xl font-bold text-red-500 h-screen items-center justify-center align-center'>Welcome to the Dashboard { user.name }</h1>
    </div>
  )
}

export default Dashboard
