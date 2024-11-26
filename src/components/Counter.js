import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      textAlign: "center",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#2196f3",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "5px 10px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#1976d2",
    },
    value: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
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
    backLinkHover: {
      backgroundColor: "#e53935",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span style={styles.value}>{count}</span>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
