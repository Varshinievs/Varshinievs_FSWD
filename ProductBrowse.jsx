import React, { useState } from "react";

export default function ProductBrowser() {
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, category: "Electronics", color: "#ff9a9e" },
    { id: 2, name: "Smart Watch", price: 2999, category: "Electronics", color: "#a18cd1" },
    { id: 3, name: "T-Shirt", price: 799, category: "Fashion", color: "#fbc2eb" },
    { id: 4, name: "Sneakers", price: 2499, category: "Fashion", color: "#84fab0" },
    { id: 5, name: "Notebook Set", price: 399, category: "Books", color: "#fddb92" },
    { id: 6, name: "Programming Book", price: 699, category: "Books", color: "#cfd9df" },
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🛒 ShopEase</h1>
      <p style={styles.sub}>Browse products by category</p>

      {/* CATEGORY NAVIGATION */}
      <div style={styles.nav}>
        {["All", "Electronics", "Fashion", "Books"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              ...styles.navBtn,
              background: category === cat ? "#000" : "#fff",
              color: category === cat ? "#fff" : "#000",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div style={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={{ ...styles.card, background: p.color }}>
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <span style={styles.tag}>{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "5px",
  },

  sub: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#f1f1f1",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  navBtn: {
    padding: "10px 18px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "20px",
    borderRadius: "20px",
    color: "#222",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    transition: "transform 0.3s",
  },

  tag: {
    display: "inline-block",
    marginTop: "10px",
    padding: "4px 10px",
    background: "#000",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "12px",
  },
};
