import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneSignIn from '../auth/phone/PhoneSignIn';
import DatabaseDemo from '../pages/DatabaseDemo';
import Home from './Home';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/DatabaseDemo" element={<DatabaseDemo />} />
          <Route path="/login" element={<PhoneSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router