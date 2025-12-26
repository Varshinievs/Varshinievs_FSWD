import React, { useState } from "react";

export default function StudentFeedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      alert("Please provide rating and comments");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", width: "350px", fontFamily: "Arial" }}>
      <h2>Student Feedback</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Optional"
          />
        </div>

        <br />

        <div>
          <label>Rating:</label><br />
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">--Select Rating--</option>
            <option>1 ⭐</option>
            <option>2 ⭐⭐</option>
            <option>3 ⭐⭐⭐</option>
            <option>4 ⭐⭐⭐⭐</option>
            <option>5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <br />

        <div>
          <label>Comments:</label><br />
          <textarea
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your feedback"
          />
        </div>

        <br />

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Display Feedback */}
      {submitted && (
        <div style={{ marginTop: "20px", borderTop: "1px solid #ccc" }}>
          <h3>Submitted Feedback</h3>
          <p><strong>Name:</strong> {name || "Anonymous"}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Comment:</strong> {comment}</p>
        </div>
      )}
    </div>
  );
}
