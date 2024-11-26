import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery2 from "./Gallery2";
import Counter from "./Counter";
import Form from "./Form";
import List from "./List";
import List2 from "./List2";
import CounterList from "./CounterList";
import BucketList from "./BucketList";
import MovingDot from "./MovingDot";
import "./Atv4.css";

function Atv4() {
  const handlePlayMovie = () => alert("Playing movie...");
  const handleUploadImage = () => alert("Uploading image...");

  return (
    <div className="atv4-container">
      <h1 className="atv4-title">Atividade 4</h1>

      {/* Toolbar Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Toolbar</h2>
        <Toolbar onPlayMovie={handlePlayMovie} onUploadImage={handleUploadImage} />
      </section>

      {/* Gallery2 Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Galeria</h2>
        <Gallery2 />
      </section>

      {/* Counter Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Contador</h2>
        <Counter />
      </section>

      {/* Form Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Formulário</h2>
        <Form />
      </section>

      {/* MovingDot Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Moving Dot</h2>
        <MovingDot />
      </section>

      {/* List Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Lista</h2>
        <List />
      </section>

      {/* List2 Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Lista de Cookies</h2>
        <List2 />
      </section>

      {/* CounterList Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Lista de Contadores</h2>
        <CounterList />
      </section>

      {/* BucketList Component */}
      <section className="atv4-section">
        <h2 className="atv4-section-title">Lista de Tarefas</h2>
        <BucketList />
      </section>

      <Link to="/" className="atv4-back-link">
        Voltar
      </Link>
    </div>
  );
}

export default Atv4;
