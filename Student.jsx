import React, { useEffect, useState } from "react";

const Attendance = () => {
  const studentsList = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Ethan",
    "Sophia",
  ];

  const [students, setStudents] = useState(
    studentsList.map((name, index) => ({
      id: index,
      name,
      confidence: 0,
      status: "Absent",
    }))
  );

  // Simulated inference engine
  const inferPresence = () => Math.random();

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents((prev) =>
        prev.map((student) => {
          const confidence = inferPresence();
          return {
            ...student,
            confidence,
            status: confidence > 0.65 ? "Present" : "Absent",
          };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          background: linear-gradient(135deg, #a78bfa, #f472b6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Poppins", "Segoe UI", sans-serif;
        }

        .attendance-container {
          width: 520px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25);
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title {
          text-align: center;
          font-size: 28px;
          margin-bottom: 8px;
          color: #5b21b6;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #777;
          margin-bottom: 25px;
        }

        .student {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #f5f3ff, #ede9fe);
          border-radius: 14px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .student-name {
          font-size: 16px;
          font-weight: 600;
          color: #312e81;
        }

        .confidence {
          font-size: 14px;
          color: #555;
        }

        .status {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          min-width: 90px;
          text-align: center;
        }

        .present {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: #064e3b;
          box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
        }

        .absent {
          background: linear-gradient(135deg, #fca5a5, #ef4444);
          color: #7f1d1d;
          box-shadow: 0 6px 15px rgba(239, 68, 68, 0.4);
        }

        .footer {
          text-align: center;
          margin-top: 18px;
          font-size: 13px;
          color: #666;
        }
      `}</style>

      <div className="attendance-container">
        <h2 className="title">📊 Attendance Tracker</h2>
        <p className="subtitle">
          Live inference simulation (updates every 2.5s)
        </p>

        {students.map((student) => (
          <div className="student" key={student.id}>
            <div>
              <div className="student-name">{student.name}</div>
              <div className="confidence">
                Confidence: {student.confidence.toFixed(2)}
              </div>
            </div>

            <div
              className={`status ${
                student.status === "Present" ? "present" : "absent"
              }`}
            >
              {student.status}
            </div>
          </div>
        ))}

        <div className="footer">
          ⏱ Automatically inferred using simulated model confidence
        </div>
      </div>
    </>
  );
};

export default Attendance;
