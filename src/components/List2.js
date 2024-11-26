import React, { useState } from "react";

function List2() {
  const [cookies, setCookies] = useState(["🍪 Cookie 1", "🍪 Cookie 2", "🍪 Cookie 3"]);

  const addCookie = () => {
    setCookies([...cookies, `🍪 Cookie ${cookies.length + 1}`]);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Lista de Cookies</h3>
      <ul style={styles.list}>
        {cookies.map((cookie, index) => (
          <li key={index} style={styles.listItem}>
            {cookie}
          </li>
        ))}
      </ul>
      <button style={styles.addButton} onClick={addCookie}>
        Adicionar Cookie
      </button>
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
  addButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
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

export default List2;
