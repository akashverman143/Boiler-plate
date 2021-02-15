import React from "react";
import "./QuizPage.css";
const ResulPage = (props) => {
  console.log("props", props);
  return (
    <div>
      <div className="resultHeadre">
        <h1 className="score">Your score is: {props.resultData.score}</h1>
      </div>
      <div className="answerSection">
        <div className="answerText">Answers</div>
        {
          props.resultData.questions.map((question, i) => {
            return (
              <div key={i + 1} className="displayQuestion">
                <div className={`question-${i + 1}`}>
                  Question: {props.questionsData.questions.find(q => q.id === question.ques_id).name}
                </div>
                <div className={`submitted-answer-${i + 1}`}>
                  Your Answer: {question.submitted_option ? question.submitted_option : 'no'}
                </div>
                <div className={`correct-answer-${i + 1}`}>
                  Correct Answer: {question.correct_option}
                </div>
                {props.resultData.questions.length === i + 1 ? <></> : <hr/>}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ResulPage;