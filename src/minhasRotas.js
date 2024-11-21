// minhasRotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Atv1 from './components/Atv1';
import Atv2 from './components/Atv2';
import Atv3 from './components/Atv3';
import Atv4 from './components/Atv4';

function MinhasRotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv1" element={<Atv1 />} />
        <Route path="/Atv2" element={<Atv2 />} />
        <Route path="/Atv3" element={<Atv3 />} />
        <Route path="/Atv4" element={<Atv4 />} />
      </Routes>
    </Router>
  );
}

export default MinhasRotas;
