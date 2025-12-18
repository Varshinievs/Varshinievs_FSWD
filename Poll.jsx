import React, { useState } from "react";

function Poll() {
  const question = "Which programming language do you like most?";
  const options = ["JavaScript", "Python", "Java", "C++"];

  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C++": 0,
  });

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (option) => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>{question}</h2>

      {options.map((option) => {
        const count = votes[option];
        const percent = totalVotes
          ? Math.round((count / totalVotes) * 100)
          : 0;

        return (
          <div key={option} style={{ marginBottom: 15 }}>
            <button onClick={() => handleVote(option)}>
              {option}
            </button>

            <div style={{ background: "#ddd", height: 20, marginTop: 5 }}>
              <div
                style={{
                  background: "#4caf50",
                  width: `${percent}%`,
                  height: "100%",
                }}
              />
            </div>

            <p>{count} votes ({percent}%)</p>
          </div>
        );
      })}
    </div>
  );
}

export default Poll;

