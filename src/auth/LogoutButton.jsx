import { getAuth, signOut } from "firebase/auth";
import React, { useState } from 'react';

const LogoutButton = () => {
  const auth = getAuth();
  const [showConfirm, setShowConfirm] = useState();
  const signOutEvent = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  const logoutClick = e => {
    setShowConfirm(true)
  }
  return (
    <>
      {!showConfirm &&
        <span style={{ cursor: "pointer" }} onClick={logoutClick}>logout</span>
      }
      {showConfirm &&
        <span style={{ cursor: "pointer" }} onClick={signOutEvent}>confirm?</span>
      }

    </>

  )
}

export default LogoutButton