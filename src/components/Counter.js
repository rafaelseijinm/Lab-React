import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default Counter;