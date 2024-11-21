import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['Playstation 5', 'Xbox Series X', 'Nintendo Switch']);

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="list">
      <h3>Consoles de Video Game mais influentes:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span> 
            <button onClick={() => removeItem(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
