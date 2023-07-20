import React, { useContext, useState } from 'react';
import { AuthUserContext } from './AuthUserContextProvider';
import PhoneSignIn from './phone/PhoneSignIn';

const SignInPanel = () => {
  const authUser = useContext(AuthUserContext);
  const [showSignIn, setShowSignIn] = useState(false);
  const signInClick = () => {
    setShowSignIn(true);
  }
  const onCancelClick = () => {
    setShowSignIn(false);
  }
  if (authUser) return <div>yo</div>
  return (
    <div>
      {!showSignIn && <button onClick={signInClick}>want to sign in?</button>}
      {showSignIn && <div><PhoneSignIn /><button onClick={onCancelClick}>cancel</button></div>}
    </div>
  )
}

export default SignInPanel