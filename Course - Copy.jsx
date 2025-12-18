import React, { useState } from "react";

function Course() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !course) return;

    const newEnrollment = {
      id: Date.now(),
      studentName,
      course,
    };

    setEnrolledCourses((prev) => [...prev, newEnrollment]);
    setStudentName("");
    setCourse("");
  };

  return (
    <div style={styles.container}>
      <h2>📚 Course Enrollment</h2>

      <form onSubmit={handleEnroll} style={styles.form}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={styles.input}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>

        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>

      <hr />

      <h3>📝 Enrolled Students</h3>

      {enrolledCourses.length === 0 && <p>No enrollments yet.</p>}

      {enrolledCourses.map((item) => (
        <div key={item.id} style={styles.card}>
          <strong>{item.studentName}</strong> enrolled in{" "}
          <em>{item.course}</em>
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
  button: {
    padding: "10px",
    fontSize: "16px",
    background: "#2196f3",
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

export default Course;
