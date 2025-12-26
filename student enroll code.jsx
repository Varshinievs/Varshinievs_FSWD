import React, { useState } from "react";
import "./Course.css";

function Course() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    year: "",
    section: "",
    course: "",
  });

  const [enrolled, setEnrolled] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    setEnrolled([...enrolled, student]);
    setStudent({ name: "", roll: "", year: "", section: "", course: "" });
  };

  return (
    <div className="course-container">
      <div className="card">
        <h3>📘 Course Enrollment</h3>

        <form onSubmit={handleEnroll}>
          <input name="name" placeholder="Student Name" value={student.name} onChange={handleChange} required />
          <input name="roll" placeholder="Roll Number" value={student.roll} onChange={handleChange} required />

          <select name="year" value={student.year} onChange={handleChange} required>
            <option value="">Select Year</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
          </select>

          <select name="section" value={student.section} onChange={handleChange} required>
            <option value="">Select Section</option>
            <option>A</option>
            <option>B</option>
          </select>

          <select name="course" value={student.course} onChange={handleChange} required>
            <option value="">Choose Course</option>
            <option>AI</option>
            <option>IoT</option>
            <option>Web Development</option>
          </select>

          <button type="submit">Enroll Student</button>
        </form>
      </div>

      <div className="card">
        <h3>👨‍🎓 Enrolled Students</h3>

        {enrolled.length === 0 ? (
          <p>No enrollments yet</p>
        ) : (
          <ul>
            {enrolled.map((s, index) => (
              <li key={index}>
                {s.name} ({s.roll}) – {s.course}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Course;

App.jsx (Course Enrollment)

import React from "react";
import Course from "./Course";

function App() {
  return (
    <div style={{ background: "#3b82f6", minHeight: "100vh", padding: "40px" }}>
      <Course />
    </div>
  );
}

export default App;
