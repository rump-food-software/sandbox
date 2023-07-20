import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import React, { useEffect, useRef, useState } from 'react';

const PhoneNumberBox = ({ setCurrentConfirmationResult, setPhone }) => {
  const captchaContainerRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const auth = getAuth();
  useEffect(() => {
    if (!captchaContainerRef) return
    window.recaptchaVerifier = new RecaptchaVerifier(auth, captchaContainerRef.current, {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //onSignInSubmit();
      }
    });
  }, [auth, captchaContainerRef])
  const onPhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  }
  const onSend = async (e) => {
    e.preventDefault()
    const appVerifier = window.recaptchaVerifier;
    if (!appVerifier) {

    }
    const usNumber = `+1${phoneNumber}`;
    
    signInWithPhoneNumber(auth, usNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setErrorMessage("")
        setPhone(phoneNumber);
        setCurrentConfirmationResult(confirmationResult);
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        setErrorMessage(error.message)
      });

  }
  return (
    <form onSubmit={onSend}>
      <input onChange={onPhoneChange} placeholder="phone"></input>
      <button type="submit">send</button>
      <p>{errorMessage}</p>
      <div ref={captchaContainerRef}></div>
    </form>)
}

export default PhoneNumberBox