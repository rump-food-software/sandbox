import React, { useState } from 'react';

const DatabaseDemoRow = ({ document, deleteDoc, updateDoc }) => {
  const [val, setVal] = useState();
  const data = document.data();
  const deleteClick = async () => {
    deleteDoc(document.id);
  }
  const updateClick = async () => {

    await updateDoc(document.id, { val })
  }
  const onValChange = (e) => {
    setVal(e.target.value)
  }
  return <div>
    {data.name}
    <span>, val: {data.val}</span>
    <input style={{ margin: 3 }} placeholder='update val' onChange={onValChange}></input>
    <button onClick={updateClick}>update</button>
    <button onClick={deleteClick}>delete</button>
  </div>
}

export default DatabaseDemoRow