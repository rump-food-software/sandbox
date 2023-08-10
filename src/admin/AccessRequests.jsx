import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

const AccessRequests = () => {
  const [accessRequests, setAccessRequests] = useState();
  const { db } = useContext(FirebaseContext);
  const accessRequestsApi = api(db, 'accessRequests');
  const allowedUsersApi = api(db, "allowedUsers");
  useEffect(() => {
    accessRequestsApi.getDocsSub(data => {
      setAccessRequests(data)
    })
  }, [accessRequestsApi])
  return (
    <div>
      <h2>user requests</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" >
          <TableHead><TableRow>
            <TableCell>phone</TableCell>
            <TableCell>approved?</TableCell>
            <TableCell>approve</TableCell>
            <TableCell>delete</TableCell>
            
            </TableRow></TableHead>
          <TableBody>
            {accessRequests && accessRequests.map((a, i) => {
              const { phoneNumber, isApproved } = a.data();
              const onDeleteClick = async () => {
                await accessRequestsApi.deleteDocument(a.id)
              }
              const onApproveClick = async () => {
                await allowedUsersApi.createDoc({phoneNumber})
                await accessRequestsApi.set(a.id, { ...a.data(), isApproved: true })
              }
              return <TableRow key={i}>
                <TableCell>{phoneNumber}</TableCell>
                <TableCell><span>{(isApproved && "yes") || "no"}</span></TableCell>
                <TableCell><Button onClick={onApproveClick}>approve</Button></TableCell>
                <TableCell><Button onClick={onDeleteClick}>delete</Button></TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>)
}

export default AccessRequests