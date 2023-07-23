import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthUserContextProvider from '../auth/AuthUserContextProvider'
import FirebaseContextProvider from '../firebase/FirebaseContextProvider'
import Header from './Header'

const Layout = () => {
  return (
    <FirebaseContextProvider>
      <AuthUserContextProvider>
        <Header />
        <Outlet />
      </AuthUserContextProvider>
    </FirebaseContextProvider>)
}

export default Layout