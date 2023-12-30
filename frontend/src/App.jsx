// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Professional-Experience" element={<Home />} />
      <Route path="/Education" element={<Home />} />
      <Route path="/Projects" element={<Home />} />
      <Route path="/Resume" element={<Home />} />
    </Routes>
  );
};

export default App;
