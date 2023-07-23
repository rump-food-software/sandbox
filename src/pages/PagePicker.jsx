import React from 'react';
import { useNavigate } from 'react-router-dom';

const PagePicker = () => {
  const pages = [{ text: 'databasedemo', route: "DatabaseDemo" },
  { text: "muidemo", route: "muidemo" }]
  const navigate = useNavigate();
  return (
    <div>
      {pages && pages.map((p, i) => {
        const onPageClick = () => {
          navigate(`/pages/${p.route}`)
        }
        return <div key={i} onClick={onPageClick} style={{ cursor: "pointer" }}>{p.text}</div>
      })}
    </div>
  )
}

export default PagePicker