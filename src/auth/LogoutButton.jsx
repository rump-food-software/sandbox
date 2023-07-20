import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
  const auth = getAuth();

  const signOutEvent = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      <button onClick={signOutEvent}>logout</button>
    </div>
  )
}

export default LogoutButton