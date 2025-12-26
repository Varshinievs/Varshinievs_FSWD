import React, { useState } from "react";

export default function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Registration Submitted Successfully!");
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px", fontFamily: "Arial" }}>
      
      {/* Registration Form */}
      <div style={{ width: "300px" }}>
        <h2>Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <br />

          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <br />

          <div>
            <label>Workshop Topic:</label><br />
            <select value={topic} onChange={(e) => setTopic(e.target.value)} required>
              <option value="">--Select--</option>
              <option>React Basics</option>
              <option>Data Science</option>
              <option>AI & ML</option>
              <option>Web Development</option>
            </select>
          </div>

          <br />

          <div>
            <label>Mode:</label><br />
            <input
              type="radio"
              value="Online"
              checked={mode === "Online"}
              onChange={(e) => setMode(e.target.value)}
            /> Online
            <br />
            <input
              type="radio"
              value="Offline"
              checked={mode === "Offline"}
              onChange={(e) => setMode(e.target.value)}
            /> Offline
          </div>

          <br />

          <button type="submit">Register</button>
        </form>
      </div>

      {/* Live Preview */}
      <div style={{ width: "300px", border: "1px solid #ccc", padding: "15px" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {name || "-"}</p>
        <p><strong>Email:</strong> {email || "-"}</p>
        <p><strong>Topic:</strong> {topic || "-"}</p>
        <p><strong>Mode:</strong> {mode || "-"}</p>
      </div>
    </div>
  );
}
