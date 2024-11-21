// minhasRotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Atv01 from './components/Atv01';
import Atv02 from './components/Atv02';
import Atv03 from './components/Atv03';
import Atv04 from './components/Atv04';

function MinhasRotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atv01" element={<Atv01 />} />
        <Route path="/Atv02" element={<Atv02 />} />
        <Route path="/Atv03" element={<Atv03 />} />
        <Route path="/Atv04" element={<Atv04 />} />
      </Routes>
    </Router>
  );
}

export default MinhasRotas;
