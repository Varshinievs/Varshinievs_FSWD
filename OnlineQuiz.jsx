import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

function OnlineQuiz({ score, setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  if (showResult) {
    return (
      <div>
        <h2>🎉 Quiz Completed!</h2>
        <p>
          Final Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.quizBox}>
      <h3>{questions[currentQuestion].question}</h3>

      {questions[currentQuestion].options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          disabled={selected !== null}
          style={{
            ...styles.optionBtn,
            backgroundColor:
              selected === option
                ? option === questions[currentQuestion].answer
                  ? "#4CAF50"
                  : "#F44336"
                : "#eee",
          }}
        >
          {option}
        </button>
      ))}

      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
    </div>
  );
}

const styles = {
  quizBox: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  optionBtn: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
  },
};

export default OnlineQuiz;
