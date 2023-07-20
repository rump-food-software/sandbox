import React, { useState, useContext } from 'react';
import ConfirmationBox from "./ConfirmationBox";
import PhoneNumberBox from "./PhoneNumberBox";
import { AuthUserContext } from '../AuthUserContextProvider';

const PhoneSignIn = () => {
  const [currentConfirmationResult, setCurrentConfirmationResult] = useState();
  const [phone, setPhone] = useState();
const currentUser = useContext(AuthUserContext);
if(currentUser) return <div>already logged in</div>
  return (
    <div>PhoneSignIn
      {!currentConfirmationResult &&
        <PhoneNumberBox setCurrentConfirmationResult={setCurrentConfirmationResult} setPhone={setPhone} />
      }
      {currentConfirmationResult &&
        <ConfirmationBox currentConfirmationResult={currentConfirmationResult} phone={phone}  />
      }
    </div>
  )
}

export default PhoneSignIn