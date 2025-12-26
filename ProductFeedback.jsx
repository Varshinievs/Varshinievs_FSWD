ProductFeedback.jsx

import React, { useState } from "react";
import "./Feedback.css";

function ProductFeedback() {
  const [form, setForm] = useState({
    name: "",
    product: "",
    rating: "",
    comment: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form);
    setForm({ name: "", product: "", rating: "", comment: "" });
  };

  return (
    <div className="feedback-container">
      <div className="card">
        <h3>Product Feedback</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="product"
            placeholder="Product name"
            value={form.product}
            onChange={handleChange}
            required
          />

          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select rating</option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>

          <textarea
            name="comment"
            placeholder="Write your feedback..."
            value={form.comment}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      <div className="card">
        <h3>Live Feedback</h3>

        {submittedData ? (
          <>
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Product:</b> {submittedData.product}</p>
            <p><b>Rating:</b> {submittedData.rating}</p>
            <p><b>Comment:</b> {submittedData.comment}</p>
          </>
        ) : (
          <p>No feedback submitted yet</p>
        )}
      </div>
    </div>
  );
}

export default ProductFeedback;


App.jsx (Feedback)

import React from "react";
import ProductFeedback from "./ProductFeedback";

function App() {
  return (
    <div style={{ padding: "40px", background: "#3b82f6", minHeight: "100vh" }}>
      <ProductFeedback />
    </div>
  );
}

export default App;
