import { useCallback, useState } from "react";

import QUESTIONS from "../../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>
          Q{activeQuestionIndex + 1}: {QUESTIONS[activeQuestionIndex].text}
        </h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                Ans:{index + 1} {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
