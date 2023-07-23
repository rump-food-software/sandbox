import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PagePicker from './PagePicker'

const Pages = () => {
  const navigate = useNavigate();
  const onNewPageClick = e => {
    navigate("/pages/new");
  }
  return (
    <div>
      <p>these are the current pages</p>
      <PagePicker />
      <Button onClick={onNewPageClick}>new page</Button>
    </div>
  )
}

export default Pages