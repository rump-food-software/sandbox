import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import React, { useContext, useEffect, useRef, useState } from 'react';
import api from '../../database/api.js';
import { FirebaseContext } from '../../firebase/FirebaseContextProvider';
import RequestAccess from "../RequestAccess.jsx";

const PhoneNumberBox = ({ setCurrentConfirmationResult, setPhone }) => {
  const captchaContainerRef = useRef();
  const { db } = useContext(FirebaseContext)
  const adminApi = api(db, 'admin');
  const [phoneNumber, setPhoneNumber] = useState();
  const [confirmedPhoneNumber, setConfirmedPhoneNumber] = useState();
  const [showRequestButton, setShowRequestButton] = useState();

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
  const checkUser = async (phone) => {
    const adminDoc = await adminApi.getDocuments();
    if (adminDoc.length < 0)
      return false;
    const allowedUsers = adminDoc[0].data().allowedUsers;
    if (allowedUsers.indexOf(phone) > -1) { return true }
    else return false;
  }
  const onSend = async (e) => {
    e.preventDefault()
    const appVerifier = window.recaptchaVerifier;
    if (!appVerifier) {

    }
    const usNumber = `+1${phoneNumber}`;
    setConfirmedPhoneNumber(usNumber);
    const userIsAuthorized = await checkUser(usNumber)
    if (!userIsAuthorized) {
      setShowRequestButton(true);
      setErrorMessage(`user ${usNumber} is not authorized`)
    }
    else {
      setErrorMessage("");
      try {
        const confirmationResult = await signInWithPhoneNumber(auth, usNumber, appVerifier);
        window.confirmationResult = confirmationResult;
        setErrorMessage("")
        setPhone(phoneNumber);
        setCurrentConfirmationResult(confirmationResult);
      }
      catch (error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <form onSubmit={onSend}>
      <input onChange={onPhoneChange} placeholder="phone"></input>
      <button type="submit">send</button>
      <p>{errorMessage}</p>
      {showRequestButton &&
        <RequestAccess phoneNumber={confirmedPhoneNumber} />
      }
      <div ref={captchaContainerRef}></div>
    </form>)
}

export default PhoneNumberBox