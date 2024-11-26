import React, { useState } from "react";

function CounterList() {
  const [counters, setCounters] = useState([0]);

  // Adicionar novo contador
  const addCounter = () => setCounters([...counters, 0]);

  // Incrementar valor do contador específico
  const increment = (index) =>
    setCounters(
      counters.map((counter, i) => (i === index ? counter + 1 : counter))
    );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Counter List</h2>
      <div style={styles.counterList}>
        {counters.map((counter, index) => (
          <div key={index} style={styles.counterItem}>
            <span style={styles.counterValue}>{counter}</span>
            <button
              style={styles.counterButton}
              onClick={() => increment(index)}
            >
              Increment
            </button>
          </div>
        ))}
      </div>
      <button style={styles.addButton} onClick={addCounter}>
        Add Counter
      </button>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  counterList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  counterItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "200px",
    justifyContent: "space-between",
  },
  counterValue: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  counterButton: {
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  counterButtonHover: {
    backgroundColor: "#1976d2",
  },
  addButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  addButtonHover: {
    backgroundColor: "#45a049",
  },
};

export default CounterList;
