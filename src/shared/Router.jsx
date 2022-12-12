import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Update from '../pages/Modify';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/modify" element={<Update />} />
        <Route path="details" element={<Details />} />
        {/* <Route path="details/:id" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
