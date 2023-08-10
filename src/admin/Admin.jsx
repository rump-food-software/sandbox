import React, { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from '../auth/AuthUserContextProvider';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';
import AccessRequests from './AccessRequests';
import AllowedUsers from './AllowedUsers';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState()
  const user = useContext(AuthUserContext);
  const { db } = useContext(FirebaseContext);

  const adminUsersApi = api(db, "adminUsers");
  useEffect(() => {
    const eff = async () => {
      if (user) {
        const adminDocs = await adminUsersApi.getDocsByField("phoneNumber", user.phoneNumber);
        if (adminDocs && adminDocs.length > 0) {
          const { isActive } = adminDocs[0].data();
          setIsAdmin(isActive)
        }
      }
      else {
        setIsAdmin(false);
      }
    }
    eff();
  }, [adminUsersApi, user])
  if (!isAdmin) {
    return (<div>you don't even go here</div>);
  }
  return (
    <div>
      <AllowedUsers />
      <AccessRequests />
    </div>
  )
}

export default Admin