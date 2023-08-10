import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';


const AllowedUsers = () => {
  const [allowedUsers, setAllowedUsers] = useState();
  const { db } = useContext(FirebaseContext);
  const allowedUsersApi = api(db, "allowedUsers");
  const adminUsersApi = api(db, "adminUsers");
  useEffect(() => {
    allowedUsersApi.getDocsSub((data) => {
      setAllowedUsers(data);
    })
  }, [allowedUsersApi])

  return (
    <div>
      <h2>allowed users</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" >
          <TableBody>
            {allowedUsers && allowedUsers.map((a, i) => {
              const { phoneNumber } = a.data();
              const onRevokeClick = () => {

              }
              const onMakeAdminClick = async () => {
                await adminUsersApi.createDoc({ phoneNumber })
              }
              return <TableRow key={i}>
                <TableCell>{phoneNumber}</TableCell>
                <TableCell><Button onClick={onMakeAdminClick}>make admin</Button></TableCell>
                <TableCell><Button onClick={onRevokeClick}>revoke</Button></TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AllowedUsers