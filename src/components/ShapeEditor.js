import React, { useState } from 'react';
// ShapeEditor Component
function ShapeEditor() {
    const [shapes, setShapes] = useState([]);
    const addCircle = () => setShapes([...shapes, 'Circle']);
  
    return (
      <div>
        {shapes.map((shape, index) => (
          <div key={index}>{shape}</div>
        ))}
        <button onClick={addCircle}>Add Circle</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
export default ShapeEditor;  