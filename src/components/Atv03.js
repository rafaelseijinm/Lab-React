import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery';
import Profile from '../Profile';
import PackingList from '../PackingList';
import List from '../List';

function Atv03() {
  return (
    <div>
      <h2>Atividade 03</h2>
      <Gallery />
      <Profile />
      <PackingList />
      <List />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv03;