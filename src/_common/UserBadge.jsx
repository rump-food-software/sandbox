import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from "../auth/AuthUserContextProvider";
import LogoutButton from '../auth/LogoutButton';

const UserBadge = () => {

  const user = useContext(AuthUserContext)
  const userPhoneAbbr = user && user.phoneNumber && user.phoneNumber.slice(-4);
  return (
    <div>
      {user &&
          <p>
            <span>logged in as {userPhoneAbbr}</span>
            <span style={{margin:5}}><LogoutButton /></span>
          </p>
      }
      {!user &&
        <Link to="/login">login</Link>
      }
    </div>
  )
}

export default UserBadge