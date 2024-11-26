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
      <h2>Galeria de Perfis</h2>
      <Gallery />
      <h2>Packing List</h2>
      <PackingList />
      <h2>Lista renderizada</h2>
      <Lista />
      
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv3;