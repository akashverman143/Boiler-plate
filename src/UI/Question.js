import React, { useEffect, useState } from "react";
import { Progress, Radio } from 'antd';
import "./QuizPage.css";
import { useDispatch, useSelector } from "react-redux";
import ResulPage from './resultPage';


const options = ['rice', 'wheat', 'bread', 'choclate'];

const QuestionSection = ({match}) => {
  const dispatch = useDispatch();
  const questionsData = useSelector(state => state.questionsData);
  const questionSpinner = useSelector(state => state.questionSpinner);
  const retainedAnswer = useSelector(state => state.retainedAnswer);
  const resultData = useSelector(state => state.resultData);
  const resultSpinner = useSelector(state => state.resultSpinner);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [second, setSecond] = useState(15);
  const [answersGiven, setAnswersgiven] = useState();
  const [showResult, setShowResult] = useState(false);
  const [isAnswerDispatch, setIsAnswerDispatch] = useState(false);

  useEffect(() => {
    dispatch({ type: 'LOAD_QUIZ_QUESTION_DATA', id: match.params.id.charAt(1)});
  }, []);

  useEffect(() => {
    if (retainedAnswer && retainedAnswer.mappings && retainedAnswer.mappings.length > 0) {
      setAnswersgiven(retainedAnswer);
    }
  }, [retainedAnswer]);

  useEffect(() => {
    if(isAnswerDispatch) {
      
      dispatch({ type: 'GET_RESULT', data: answersGiven});
      setIsAnswerDispatch(false);
    }
  }, [isAnswerDispatch]);

  useEffect(() => {
    let interval = null;
    if ( second > 0) {
      interval = setInterval(() => {
        setSecond(second => second - 1);
      }, 1000);
    } else if (second === 0) {
        clearInterval(interval);
        const next = currentQuestion + 1;
        setCurrentQuestion(next);
        setSecond(15);
        if (next === questionsData.questions.length) {
          setShowResult(true);
          setIsAnswerDispatch(true);
        }
    }
    if (showResult) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [second]);

  const handleRadioButton = (option) => {
    const answerWithQuesId = {
      "ques_id": questionsData.questions[currentQuestion].id,
      "submitted_option": option
    }
    dispatch({ type: 'RETAIN_QUESTION_ANSWERS', data: answerWithQuesId})
    console.log(option);
    const next = currentQuestion + 1;
    setCurrentQuestion(next);
    setSecond(15);
    if (next === questionsData.questions.length) {
      setShowResult(true);
      setIsAnswerDispatch(true);
    }
  }
  console.log("match", resultData);
  return (
    <div className = "quizBox" >
      <div className="basicQuizHeader">
          <h1> Basic Gk Quiz </h1> 
      </div>
      {
        !questionSpinner && !showResult && questionsData && questionsData.questions && questionsData.questions.length > 0 ? 
        <>
          <Progress percent={(100/(questionsData.questions.length)) * (currentQuestion)} showInfo={false} /> 
          <div>
            <div className="time-bar timer">
              Time Remaining: 0:{second < 10 ? '0' : ''}{second}/0:15 seconds
            </div>
            <div className="questionCard">
              <div className="question questionHeader">
                <h1>{questionsData.questions[currentQuestion].name}</h1>
              </div>
              <div>
                {
                  questionsData.questions[currentQuestion].options.split(',').map((option, i) => {
                    return (
                      <div className={`answer-value-${i + 1} radioAnswer`} key={i + 1}>
                        <Radio onClick={() => handleRadioButton(option)} checked={false}>{option}</Radio>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </>: !resultSpinner && 
                showResult && 
                  resultData && 
                    resultData.questions && 
                      resultData.questions.length > 0 && 
                        questionsData && 
                          questionsData.questions && 
                            questionsData.questions.length > 0 ? 
                              <ResulPage 
                                resultData={resultData ? resultData : {}} 
                                questionsData={questionsData ? questionsData : {}}
                              /> : <h3>Loading...</h3>
      } 
    </div>
  );
}

export default QuestionSection;