import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

const RequestAccess = ({ phoneNumber }) => {
  const { db } = useContext(FirebaseContext)
  const accessRequestsApi = api(db, 'accessRequests');

  const [accessRequestSent, setAccessRequestSent] = useState();
  const onRequestClick = () => {
    accessRequestsApi.createDoc({ phoneNumber })
    setAccessRequestSent(true);
  }
  return (
    <div>
      <Button onClick={onRequestClick}>request access</Button>
      {accessRequestSent && <p>access request sent!</p>}
    </div>)
}

export default RequestAccess