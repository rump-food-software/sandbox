import React, { useState } from 'react';
import ConfirmationBox from "./ConfirmationBox";
import PhoneNumberBox from "./PhoneNumberBox";

const PhoneSignIn = () => {
  const [currentConfirmationResult, setCurrentConfirmationResult] = useState();
  const [phone, setPhone] = useState();

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