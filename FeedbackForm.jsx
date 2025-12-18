import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) return;

    const newFeedback = {
      id: Date.now(),
      name,
      message,
    };

    setFeedbackList((prev) => [...prev, newFeedback]);
    setName("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>📋 Feedback Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>

      <hr />

      <h3>🗂 Submitted Feedback</h3>

      {feedbackList.length === 0 && <p>No feedback yet.</p>}

      {feedbackList.map((item) => (
        <div key={item.id} style={styles.card}>
          <strong>{item.name}</strong>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
  },
  textarea: {
    padding: "8px",
    fontSize: "16px",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  card: {
    background: "#f4f4f4",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "4px",
  },
};

export default Feedback;
