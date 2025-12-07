import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
  questionText,
  activeQuestionIndex,
  answers,
  userAnswers,
  answerState,
  handleSelectAnswer,
  handleSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <h2>
        Q{activeQuestionIndex + 1}: {questionText}
      </h2>
      <Answers
        answers={answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
