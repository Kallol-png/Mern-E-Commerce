import React from 'react'
import UseAuth from '../../hooks/UseAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
const PrivateOutlet = () => {

  const {user} = UseAuth()
  const location = useLocation()
  return user.email? <Outlet/>: <Navigate to='/login' state={{from:location}} replace/>
}

export default PrivateOutlet;