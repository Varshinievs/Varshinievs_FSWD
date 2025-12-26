import React, { useState } from "react";

export default function BlogDashboard() {
  const [likes, setLikes] = useState(120);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { text: "Great article!", time: "2 mins ago" },
  ]);

  const addComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      text: comment,
      time: "Just now",
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div style={styles.page}>
      {/* Blog Content */}
      <div style={styles.blog}>
        <h1>🚀 The Future of Web Development</h1>
        <p style={styles.meta}>By Pavishna • Aug 2025</p>

        <p>
          Web development is evolving rapidly with frameworks like React,
          AI-powered interfaces, and real-time user experiences becoming the
          new standard. Developers today focus more on interactivity, speed,
          and scalability.
        </p>

        <p>
          Real-time updates such as live comments, notifications, and dynamic
          dashboards improve user engagement significantly.
        </p>

        {/* Like Section */}
        <button style={styles.likeBtn} onClick={() => setLikes(likes + 1)}>
          ❤️ Like ({likes})
        </button>

        {/* Comment Section */}
        <div style={styles.commentBox}>
          <h3>💬 Comments</h3>

          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.input}
          />
          <button onClick={addComment} style={styles.commentBtn}>
            Post
          </button>

          <div>
            {comments.map((c, index) => (
              <div key={index} style={styles.comment}>
                <p>{c.text}</p>
                <small>{c.time}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3>👩‍💻 Author</h3>
        <p><strong>Pavishna</strong></p>
        <p>Web & Data Enthusiast</p>
        <hr />
        <h4>🔥 Trending Topics</h4>
        <ul>
          <li>React & UI Design</li>
          <li>Real-Time Web Apps</li>
          <li>AI in Frontend</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    fontFamily: "Arial",
    gap: "20px",
  },
  blog: {
    flex: "2",
    minWidth: "300px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  sidebar: {
    flex: "1",
    minWidth: "200px",
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "10px",
  },
  meta: {
    color: "gray",
    fontSize: "14px",
  },
  likeBtn: {
    margin: "10px 0",
    padding: "8px 14px",
    border: "none",
    borderRadius: "20px",
    background: "#ff4081",
    color: "#fff",
    cursor: "pointer",
  },
  commentBox: {
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "8px",
    borderRadius: "6px",
  },
  commentBtn: {
    padding: "6px 12px",
    background: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  comment: {
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "10px",
  },
};
