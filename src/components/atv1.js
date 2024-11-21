import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

function atv1() {
  return (
    <>
      <h2>Atividade 01</h2>
      <Letreiro />
      <Relogio />
      <Link to="/">Voltar</Link>
    </>
  );
}

export default atv1;
