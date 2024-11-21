// minhasRotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import atv1 from './components/Atv1';
import atv2 from './components/Atv2';
import atv3 from './components/Atv3';
import atv4 from './components/Atv4';

function MinhasRotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv1" element={<atv1 />} />
        <Route path="/atv2" element={<atv2 />} />
        <Route path="/atv3" element={<atv3 />} />
        <Route path="/atv4" element={<atv4 />} />
      </Routes>
    </Router>
  );
}

export default MinhasRotas;
