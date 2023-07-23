import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationBox = ({ currentConfirmationResult, phone }) => {
  const [code, setCode] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate()
  const onCodeChange = (e) => {
    setCode(e.target.value);

  }
  const onCodeSubmit = e => {
    e.preventDefault();
    currentConfirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      //const user = result.user;
      setErrorMessage();
      navigate("/");
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      setErrorMessage(error.message)
    });
  }
  return (
    <form onSubmit={onCodeSubmit}>
      <p>just sent a code to {phone} put that code in here pls</p>

      <input onChange={onCodeChange} placeholder="code"></input>
      <button type="submit">send</button>
      <p>{errorMessage}</p>
    </form>)
}

export default ConfirmationBox