import React, { useState } from "react";

export default function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `✅ Registration Successful!\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`
    );

    // Clear form
    setName("");
    setEmail("");
    setEvent("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", width: "350px" }}>
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Select Event:</label>
          <br />
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option>Tech Workshop</option>
            <option>Cultural Fest</option>
            <option>Sports Meet</option>
            <option>Seminar</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
