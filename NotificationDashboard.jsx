import React, { useState } from "react";

export default function NotificationDashboard() {
  const [notifications, setNotifications] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const messages = [
    "📊 New report is ready",
    "👤 New user registered",
    "⚠️ Server usage is high",
    "✅ Backup completed successfully",
    "📩 You received a new message",
  ];

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      text: messages[Math.floor(Math.random() * messages.length)],
      read: false,
    };

    setNotifications([newNotification, ...notifications]);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div style={styles.container}>
      <h2>📊 Dashboard Notifications</h2>

      {/* Bell Section */}
      <div style={styles.bell}>
        🔔
        {unreadCount > 0 && (
          <span style={styles.badge}>{unreadCount}</span>
        )}
      </div>

      <button onClick={addNotification} style={styles.addBtn}>
        + Generate Notification
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div style={styles.toast}>
          🔔 New Notification Received!
        </div>
      )}

      {/* Notification List */}
      <div style={styles.list}>
        {notifications.length === 0 && (
          <p>No notifications yet</p>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              ...styles.card,
              backgroundColor: n.read ? "#f0f0f0" : "#e3f2fd",
            }}
          >
            <span>{n.text}</span>
            <div>
              {!n.read && (
                <button
                  style={styles.readBtn}
                  onClick={() => markAsRead(n.id)}
                >
                  Mark Read
                </button>
              )}
              <button
                style={styles.removeBtn}
                onClick={() => removeNotification(n.id)}
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  bell: {
    fontSize: "40px",
    position: "relative",
    display: "inline-block",
    marginBottom: "10px",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 8px",
    fontSize: "12px",
  },
  addBtn: {
    padding: "8px 14px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  toast: {
    background: "#323232",
    color: "#fff",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "15px",
  },
  list: {
    textAlign: "left",
  },
  card: {
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  readBtn: {
    marginRight: "6px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeBtn: {
    background: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
