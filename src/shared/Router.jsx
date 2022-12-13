import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Topbar from '../components/Topbar';
import Update from '../pages/Update';

function Router() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="details" element={<Details />} />
        {/* <Route path="details/:id" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
