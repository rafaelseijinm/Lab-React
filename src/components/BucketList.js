import React, { useState } from "react";

function BucketList() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");

  // Adicionar nova tarefa
  const addItem = () => {
    if (task.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }
    setItems([...items, task]);
    setTask(""); // Limpa o campo de entrada após adicionar
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Bucket List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite uma tarefa"
          style={styles.input}
        />
        <button onClick={addItem} style={styles.addButton}>
          Adicionar Tarefa
        </button>
      </div>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  addButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: "18px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  backLink: {
    display: "inline-block",
    marginTop: "20px",
    padding: "8px 16px",
    backgroundColor: "#f44336",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
};

export default BucketList;
