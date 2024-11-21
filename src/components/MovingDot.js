import React, { useState } from 'react';

// MovingDot Component
function MovingDot() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
  
    return (
      <div
        style={{ height: '200px', border: '1px solid black' }}
        onMouseMove={handleMouseMove}
      >
        <div
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: '10px',
            height: '10px',
            background: 'red',
            borderRadius: '50%',
          }}
        />
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default MovingDot;