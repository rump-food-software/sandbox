import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneSignIn from '../auth/phone/PhoneSignIn';
import MuiDemo from '../pages/MuiDemo';
import Pages from '../pages/Pages';
import DatabaseDemo from '../pages/databaseDemo/DatabaseDemo';
import Home from './Home';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PhoneSignIn />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/pages/DatabaseDemo" element={<DatabaseDemo />} />
          <Route path="/pages/MuiDemo" element={<MuiDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router