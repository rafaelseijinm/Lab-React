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
            <Link to="../components/Atividade1.js">Atividade 1</Link>
          </li>
          <li>
            <Link to="./components/Atividade2.js">Atividade 2</Link>
          </li>
          <li>
            <Link to="./components/Atividade3">Atividade 3</Link>
          </li>
          <li>
            <Link to="./components/Atividade4">Atividade 4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
