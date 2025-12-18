import { useState } from "react";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, text]);
    setText("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>✨ Task Dashboard</h2>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button style={styles.addBtn} onClick={addTask}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, i) => (
          <li key={i} style={styles.item}>
            <span>{task}</span>
            <button
              style={styles.deleteBtn}
              onClick={() => removeTask(i)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 10px",
    marginBottom: "8px",
    background: "white",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ef4444",
    cursor: "pointer",
    fontSize: "16px",
  },
};
