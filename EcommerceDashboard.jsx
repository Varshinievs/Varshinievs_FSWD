import React, { useState } from "react";

export default function EcommerceDashboard() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, color: "#ff9a9e" },
    { id: 2, name: "Smart Watch", price: 2999, color: "#a18cd1" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, color: "#fbc2eb" },
    { id: 4, name: "Gaming Mouse", price: 999, color: "#84fab0" },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`🛒 ${product.name} added to cart!`);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🛍️ ColorCart Store</h1>
      <p style={styles.sub}>Simple • Colorful • Interactive</p>

      <div style={styles.cart}>
        🛒 Cart Items: <b>{cart.length}</b>
      </div>

      <div style={styles.productGrid}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{ ...styles.card, background: p.color }}
          >
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <button
              style={styles.btn}
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "5px",
  },

  sub: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#f1f1f1",
  },

  cart: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "30px",
    background: "rgba(0,0,0,0.5)",
    padding: "10px",
    borderRadius: "20px",
    width: "200px",
    margin: "auto",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    marginTop: "30px",
  },

  card: {
    padding: "20px",
    borderRadius: "18px",
    textAlign: "center",
    color: "#222",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    transition: "transform 0.3s",
  },

  btn: {
    marginTop: "15px",
    padding: "10px 16px",
    border: "none",
    borderRadius: "20px",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
  },
};
