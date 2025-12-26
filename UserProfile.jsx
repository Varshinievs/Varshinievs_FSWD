import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSaved(false);

    // Validation
    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    // If validation passes
    setSaved(true);
  };

  return (
    <div style={{ padding: "20px", width: "320px", fontFamily: "Arial" }}>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Save Profile</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success Message */}
      {saved && <p style={{ color: "green" }}>✅ Profile Updated Successfully</p>}
    </div>
  );
}
