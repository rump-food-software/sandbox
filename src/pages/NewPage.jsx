import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

const NewPage = () => {
  const [name, setName] = useState();
  const { db } = useContext(FirebaseContext);
  const pageApi = api(db, "pages");
  
  const onCreatePageClick = async () => {
    await pageApi.createDoc({ name })
  }
  const onNameChange = e => {
    setName(e.target.value);
  }
  return (
    <div>
      <p>Create a new page</p>
      <TextField onChange={onNameChange} />
      <Button onClick={onCreatePageClick}>create</Button>
    </div>
  )
}

export default NewPage