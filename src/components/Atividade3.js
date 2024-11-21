import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Profile from './Profile';
import PackingList from './PackingList';
import Lista from './Lista';
import './Atv3.css';

function Atv3() {
  return (
    <div>
      <h2>Atividade 03</h2>
      <Gallery />
      <Profile />
      <PackingList />
      <Lista />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv3;