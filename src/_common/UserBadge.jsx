import React, { useContext } from 'react';
import { AuthUserContext } from "../auth/AuthUserContextProvider";
import LogoutButton from '../auth/LogoutButton';

const UserBadge = () => {

  const user = useContext(AuthUserContext)
  return (
    <div>
      {user &&
        <div>
          <p>logged in as {user.phoneNumber}</p>
          <LogoutButton />
        </div>
      }
    </div>
  )
}

export default UserBadge