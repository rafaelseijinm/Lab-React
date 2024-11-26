import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Laboratório React</h1>
      <nav>
        <ul className="home-list">
          <li className="home-list-item">
            <Link to="./components/Atividade1">
              <button className="home-button">Atividade 1</button>
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="./components/Atividade2">
              <button className="home-button">Atividade 2</button>
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="./components/Atividade3">
              <button className="home-button">Atividade 3</button>
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="./components/Atividade4">
              <button className="home-button">Atividade 4</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
