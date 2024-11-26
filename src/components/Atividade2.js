import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Atv2.css";

function Atv2() {
  const [contadorHomens, setContadorHomens] = useState(0);
  const [contadorMulheres, setContadorMulheres] = useState(0);

  const aumentarHomens = () => setContadorHomens(contadorHomens + 1);
  const reduzirHomens = () =>
    setContadorHomens(contadorHomens > 0 ? contadorHomens - 1 : 0);
  const aumentarMulheres = () => setContadorMulheres(contadorMulheres + 1);
  const reduzirMulheres = () =>
    setContadorMulheres(contadorMulheres > 0 ? contadorMulheres - 1 : 0);

  const zerarContadores = () => {
    setContadorHomens(0);
    setContadorMulheres(0);
  };

  return (
    <div className="app-contador-atv2">
      <h2>Atividade 02: Contador de Pessoas</h2>
      <div className="contagem-total-atv2">
        <input type="text" value={contadorHomens + contadorMulheres} readOnly />
        <button onClick={zerarContadores}>🔄</button>
      </div>
      <div className="secao-contadores-atv2">
        <div className="contador-individual-atv2">
          <h4>Homens</h4>
          <img src="/imagens/homem01.png" alt="Homem" />
          <button onClick={aumentarHomens}>+</button>
          <span>{contadorHomens}</span>
          <button
            onClick={reduzirHomens}
            disabled={contadorHomens === 0}
          >
            -
          </button>
        </div>
        <div className="contador-individual-atv2">
          <h4>Mulheres</h4>
          <img src="/imagens/mulher01.png" alt="Mulher" />
          <button onClick={aumentarMulheres}>+</button>
          <span>{contadorMulheres}</span>
          <button
            onClick={reduzirMulheres}
            disabled={contadorMulheres === 0}
          >
            -
          </button>
        </div>
      </div>
      <Link to="/" className="atv2-link">
        Voltar
      </Link>
    </div>
  );
}

export default Atv2;
