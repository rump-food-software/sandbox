import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneSignIn from '../auth/phone/PhoneSignIn';
import DatabaseDemo from '../pages/databaseDemo/DatabaseDemo';
import PagePicker from '../pages/PagePicker';
import Home from './Home';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PhoneSignIn />} />
          <Route path="/pages" element={<PagePicker />} />
            <Route path="/pages/DatabaseDemo" element={<DatabaseDemo />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router