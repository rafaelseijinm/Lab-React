import React, { useState } from 'react';

function List2() {
    const [items, setItems] = useState(['A', 'B', 'C']);
    const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
  
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default List2;