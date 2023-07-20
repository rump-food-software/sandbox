import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      {!user &&
        <Link to="/login">login</Link>
      }
    </div>
  )
}

export default UserBadge