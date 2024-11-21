import React, { useState } from 'react';

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