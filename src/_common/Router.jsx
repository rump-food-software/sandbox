import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from '../admin/Admin';
import PhoneSignIn from '../auth/phone/PhoneSignIn';
import MuiDemo from '../pages/MuiDemo';
import NewPage from '../pages/NewPage';
import Page from '../pages/Page';
import Pages from '../pages/Pages';
import DatabaseDemo from '../pages/databaseDemo/DatabaseDemo';
import Home from './Home';
import Layout from './Layout';
import CsvVisualize from '../pages/csvVisualize/CsvVisualize';

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PhoneSignIn />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/pages/new" element={<NewPage />} />
          <Route path="/pages/DatabaseDemo" element={<DatabaseDemo />} />
          <Route path="/pages/MuiDemo" element={<MuiDemo />} />
          <Route path="/pages/csv-visualize" element={<CsvVisualize />} />
          <Route path="/pages/:name" element={<Page />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router