import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

import { onAuthStateChanged } from "firebase/auth";
import Spinner from '../_utils/Spinner';

export const AuthUserContext = createContext();

const AuthUserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const { auth } = useContext(FirebaseContext);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedInUser(user);
      }
      else { setLoggedInUser(null) }
    })
  }, [auth])
if(!auth) return <Spinner />

  return (
    <AuthUserContext.Provider value={loggedInUser}>
      {children}
      
      <div id='recaptcha-container'></div>
    </AuthUserContext.Provider>
  )
}

export default AuthUserContextProvider