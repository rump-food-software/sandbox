import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserBadge from './UserBadge'

const Header = () => {
  const navigate = useNavigate()
  const onHomeClick = ()=>{
    navigate("/");
  }
  return (
    <div style={{ minHeight: 70, backgroundColor:"#ddbbdd" }}>
      <div onClick={onHomeClick} style={{ float: "left", margin:5, cursor: "pointer" }}>
        <p>rump</p>
      </div>
      <div style={{ float: "left", margin:5 }}>
        <p>
          <Link to="/pages" style={{ margin: 2 }}>pages</Link>
        </p>
      </div>
      <div style={{ float: "right" }}>
        <UserBadge />
      </div>
    </div>
  )
}

export default Header