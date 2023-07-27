import React, { useContext, useEffect, useState } from 'react';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

const AccessRequests = () => {
  const [accessRequests, setAccessRequests] = useState();
  const { db } = useContext(FirebaseContext);
  const accessRequestsApi = api(db, 'accessRequests');
  useEffect(() => {
    accessRequestsApi.getDocsSub(data => {
      setAccessRequests(data)
    })
  }, [accessRequestsApi])
  return (
    <div>
      <div>user requests</div>
      <div>
        {accessRequests && accessRequests.map((a, i) => {
          const { phoneNumber } = a.data();
          return <div key={i}>{phoneNumber}</div>
        })}
      </div>
    </div>)
}

export default AccessRequests