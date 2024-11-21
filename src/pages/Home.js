// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div>
      <h1>Laboratório React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 1</Link>
          </li>
          <li>
            <Link to="/Atv02">Atividade 2</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 3</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;