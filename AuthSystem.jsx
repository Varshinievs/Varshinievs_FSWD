import React, { useState } from "react";

export default function AuthSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials (simulation)
    if (username === "admin" && password === "1234") {
      alert("✅ Login Successful!");
      setLoggedIn(true);
    } else {
      alert("❌ Invalid Username or Password");
    }
  };

  if (loggedIn) {
    return <h2 style={{ padding: "20px" }}>Welcome, Admin 👋</h2>;
  }

  return (
    <div style={{ padding: "20px", width: "300px", fontFamily: "Arial" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
