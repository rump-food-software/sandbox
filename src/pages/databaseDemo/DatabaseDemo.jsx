import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../firebase/FirebaseContextProvider'
import DatabaseDemoRow from './DatabaseDemoRow'
const DatabaseDemo = () => {
  const [entries, setEntries] = useState([])
  const [text, setText] = useState([])
  const [statusMessage, setStatusMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { db } = useContext(FirebaseContext);
  const collectionString = "MyDocs"

  const getDocRef = (id) => {
    return doc(db, collectionString, id);
  }
  useEffect(() => {
    const coll = collection(db, collectionString)
    const q = query(coll);
    return onSnapshot(q, snapshot => {
      setEntries(snapshot.docs)
    })

  }, [db])
  const createMyDoc = async () => {
    try {
      const doc = { name: text }
      const coll = collection(db, collectionString)
      const result = await addDoc(coll, doc)
      setErrorMessage("");
      setStatusMessage(`created doc with id ${result.id}`)
    }
    catch (err) {
      setErrorMessage(err.message);
    }
  }
  const deleteMyDoc = async (id) => {
    const docRef = getDocRef(id);
    await deleteDoc(docRef);
    setStatusMessage(`deleted doc ${id}`)
  }
  const updateMyDoc = async (id, data) => {
    const docRef = getDocRef(id);
    const doc = await getDoc(docRef);
    const updatedData = { ...doc.data(), val: data.val };
    await setDoc(getDocRef(id), updatedData);
    setStatusMessage(`updated doc ${id}`)
  }
  const onTextChange = e => {
    setText(e.target.value)
  }
  return (
    <div>
      <p>this is a demo of database functionality in firebase</p>
      <input onChange={onTextChange} placeholder='name' />
      <button onClick={createMyDoc}>create</button>
      <div>
  {entries && entries.map((e, i) => {
        return <DatabaseDemoRow key={i} document={e} deleteDoc={deleteMyDoc} updateDoc={updateMyDoc} />
      })}

      </div>
    
      {statusMessage}
      {errorMessage}
    </div>
  )
}

export default DatabaseDemo