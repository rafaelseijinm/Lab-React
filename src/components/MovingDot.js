import React, { useState } from "react";

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect(); // Obter as dimensões do contêiner
    const x = e.clientX - rect.left; // Coordenada X relativa ao contêiner
    const y = e.clientY - rect.top; // Coordenada Y relativa ao contêiner

    // Atualizar a posição apenas se o ponto estiver dentro dos limites
    if (x >= 0 && x <= 250 && y >= 0 && y <= 250) {
      setPosition({ x, y });
    }
  };

  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        border: "2px solid black",
        position: "relative",
        overflow: "hidden", // Impedir que o ponto saia da caixa
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: "absolute",
          left: position.x - 5, // Centralizar o ponto
          top: position.y - 5, // Centralizar o ponto
          width: "10px",
          height: "10px",
          background: "red",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default MovingDot;
