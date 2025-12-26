import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loggedInRole, setLoggedInRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("Please enter username and select role");
      return;
    }

    setLoggedInRole(role);
  };

  // Role-based redirection (conditional rendering)
  if (loggedInRole === "Admin") {
    return <h2>👨‍💼 Welcome Admin Dashboard</h2>;
  }

  if (loggedInRole === "Student") {
    return <h2>🎓 Welcome Student Dashboard</h2>;
  }

  if (loggedInRole === "User") {
    return <h2>👤 Welcome User Dashboard</h2>;
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
          <label>Select Role:</label><br />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">--Select--</option>
            <option>Admin</option>
            <option>Student</option>
            <option>User</option>
          </select>
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
