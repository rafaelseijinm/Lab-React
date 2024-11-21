import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Profile from './components/Profile';
import PackingList from '../components/PackingList';
import List from '../components/List';

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