import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthUserContextProvider from '../auth/AuthUserContextProvider'
import FirebaseContextProvider from '../firebase/FirebaseContextProvider'
import UserBadge from './UserBadge'

const Layout = () => {
  return (
    <FirebaseContextProvider>
      <AuthUserContextProvider>
        <UserBadge />
        <Link to="/">Home</Link>
        <h1>rump</h1>
        <Outlet />
      </AuthUserContextProvider>
    </FirebaseContextProvider>)
}

export default Layout