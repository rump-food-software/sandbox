import React from 'react'
import AuthUserContextProvider from '../auth/AuthUserContextProvider'
import SignInPanel from '../auth/SignInPanel'
import FirebaseContextProvider from '../firebase/FirebaseContextProvider'
import UserBadge from './UserBadge'

const Home = () => {
  return (
    <div>
      <FirebaseContextProvider>
        <AuthUserContextProvider>
          <UserBadge />
          <h1>rump</h1>
          <p>this is home</p>

          <SignInPanel />
        </AuthUserContextProvider>
      </FirebaseContextProvider>
    </div>
  )
}

export default Home