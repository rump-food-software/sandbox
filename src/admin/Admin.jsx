import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../_utils/Spinner';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';
import AccessRequests from './AccessRequests';

const Admin = () => {
  const { db } = useContext(FirebaseContext);
  const adminApi = api(db, "admin")
  const [adminData, setAdminData] = useState();
  useEffect(() => {
    adminApi.getDocsByFieldSub("isActive", true, (data) => {
      if (data && data.length > 0)
        setAdminData(data[0]);
    })
  }, [adminApi])
  if (!adminData) return <Spinner />
  const { allowedUsers } = adminData.data()
  return (
    <div>
      <div>allowed users</div>
      {adminData && <div>{allowedUsers.map((a, i) => {
        return <div key={i}>{a}</div>
      })}</div>}
      <AccessRequests />
    </div>
  )
}

export default Admin