import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './utils/PrivateRoutes';
import RoleBaseRoutes from './utils/RoleBaseRoutes';
import Register from './pages/Register'

function App() { 
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <RoleBaseRoutes requiredRole={["admin"]}>
             <Dashboard />
            </RoleBaseRoutes>
          </PrivateRoute>
          } />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;