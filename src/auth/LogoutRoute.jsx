import React, {useEffect} from 'react'
import { getAuth, signOut } from "firebase/auth";

const LogoutRoute = () => {
  const auth = getAuth();

  //const navigate = useNavigate();
  const signOutEvent = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(signOutEvent);
  return (
    <div>Logout</div>
  )
}

export default LogoutRoute