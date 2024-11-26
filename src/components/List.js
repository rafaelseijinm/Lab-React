import React, { useState } from "react";

function List() {
  const [items, setItems] = useState([
    "Playstation 5",
    "Xbox Series X",
    "Nintendo Switch",
  ]);
  const [newItem, setNewItem] = useState("");

  // Função para adicionar novo item
  const addItem = () => {
    if (newItem.trim() === "") {
      alert("O campo está vazio!");
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
  };

  // Função para remover item
  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Consoles de Video Game mais influentes:</h3>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span>{item}</span>
            <button
              style={styles.deleteButton}
              onClick={() => removeItem(index)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Adicionar novo console"
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addItem}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  deleteButtonHover: {
    backgroundColor: "#e53935",
  },
  inputContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
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
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default List;
