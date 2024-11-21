import React, { useState } from 'react';

function BucketList() {
    const [items, setItems] = useState([]);
    const addItem = () => setItems([...items, `Task ${items.length + 1}`]);
  
    return (
      <div>
        <h2>Bucket List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Task</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
export default BucketList;