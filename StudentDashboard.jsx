import React, { useState } from "react";

export default function StudentDashboard() {
  const [page, setPage] = useState("dashboard");

  const students = [
    { id: 1, name: "Arun", dept: "CSE", year: "III" },
    { id: 2, name: "Priya", dept: "ECE", year: "II" },
    { id: 3, name: "Karthik", dept: "IT", year: "IV" },
    { id: 4, name: "Divya", dept: "CSE", year: "I" },
  ];

  return (
    <div style={styles.page}>
      {/* NAV BAR */}
      <div style={styles.nav}>
        <h2 style={{ margin: 0 }}>🎓 Student Manager</h2>
        <div>
          <button style={styles.navBtn} onClick={() => setPage("dashboard")}>
            Dashboard
          </button>
          <button style={styles.navBtn} onClick={() => setPage("students")}>
            Students
          </button>
          <button style={styles.navBtn} onClick={() => setPage("attendance")}>
            Attendance
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        {page === "dashboard" && (
          <div style={styles.cardGrid}>
            <div style={{ ...styles.card, background: "linear-gradient(135deg,#ff9a9e,#fad0c4)" }}>
              <h3>Total Students</h3>
              <p style={styles.big}>{students.length}</p>
            </div>

            <div style={{ ...styles.card, background: "linear-gradient(135deg,#a1c4fd,#c2e9fb)" }}>
              <h3>Departments</h3>
              <p style={styles.big}>CSE, ECE, IT</p>
            </div>

            <div style={{ ...styles.card, background: "linear-gradient(135deg,#84fab0,#8fd3f4)" }}>
              <h3>Academic Year</h3>
              <p style={styles.big}>2024 – 2025</p>
            </div>
          </div>
        )}

        {page === "students" && (
          <div style={styles.tableCard}>
            <h2>👩‍🎓 Student List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>
                      <span style={styles.badge}>{s.dept}</span>
                    </td>
                    <td>{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {page === "attendance" && (
          <div style={styles.card}>
            <h2>📋 Attendance</h2>
            <p>Attendance module can be added here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },

  nav: {
    background: "rgba(0,0,0,0.7)",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navBtn: {
    marginLeft: "10px",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    background: "#fff",
    color: "#333",
    fontWeight: "bold",
  },

  content: {
    padding: "40px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "25px",
    borderRadius: "18px",
    color: "#222",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    background: "#fff",
  },

  big: {
    fontSize: "28px",
    fontWeight: "bold",
  },

  tableCard: {
    background: "#fff",
    color: "#333",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  badge: {
    background: "#1976d2",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
  },
};
