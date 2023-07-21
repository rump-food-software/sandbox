import React from 'react';
import { useNavigate } from 'react-router-dom';

const PagePicker = () => {
  const pages = [{ text: 'databasedemo', route: "DatabaseDemo" },
{text:"muidemo", route:"muidemo"}]
  const navigate = useNavigate();
  return (
    <ul>
      {pages && pages.map((p, i) => {
        const onPageClick = () => {
           navigate(`/pages/${p.route}`)
           }
        return <li key={i} onClick={onPageClick}>{p.text}</li>
      })}
    </ul>
  )
}

export default PagePicker