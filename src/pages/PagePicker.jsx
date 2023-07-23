import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../_utils/Spinner';
import api from '../database/api';
import { FirebaseContext } from '../firebase/FirebaseContextProvider';

const PagePicker = () => {
  const navigate = useNavigate();
  const { db } = useContext(FirebaseContext);
  const pageApi = api(db, "pages");
  const [pages, setPages] = useState();
  useEffect(() => pageApi.getDocsSub(setPages), [pageApi]);
  if (!pages) return <Spinner />
  return (
    <div>
      {pages && pages.map((p, i) => {
        const { name } = p.data()
        const onPageClick = () => {
          navigate(`/pages/${name}`)
        }
        return <div key={i} onClick={onPageClick} style={{ cursor: "pointer" }}>{p.text}{name}</div>
      })}
    </div>
  )
}

export default PagePicker