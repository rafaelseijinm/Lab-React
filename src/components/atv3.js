import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Profile from './Profile';
import PackingList from './PackingList';
import Lista from './Lista';

function atv3() {
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

export default atv3;