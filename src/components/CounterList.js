import React, { useState } from 'react';
// CounterList Component
function CounterList() {
    const [counters, setCounters] = useState([0]);
    const addCounter = () => setCounters([...counters, 0]);
    const increment = (index) =>
      setCounters(
        counters.map((counter, i) => (i === index ? counter + 1 : counter))
      );
  
    return (
      <div>
        {counters.map((counter, index) => (
          <div key={index}>
            <button onClick={() => increment(index)}>+{counter}</button>
          </div>
        ))}
        <button onClick={addCounter}>Add Counter</button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

export default CounterList;