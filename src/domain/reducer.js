const initialState= {
  quizData: [],
  questionsData: {},
  spinner: false,
  questionSpinner: false,
  retainedAnswer: {
    "quiz_id": 0,
    "mappings": [] 
  },
  resultData: {},
  resultSpinner: false
};

export const reducer = (state=initialState, action) => {
  const newState= {...state};

  switch(action.type){
    case 'LOAD_QUIZ_DATA_SPINNER': 
      newState.spinner= action.value;
      break;
    case 'LOAD_QUIZ_DATA_SUCESS':
      console.log("data in reducer", action.data);
      newState.quizData= action.data;
      break;
    case 'LOAD_QUIZ_QUESTION_DATA_SUCESS':
      newState.questionsData = action.data;
      break;
    case 'LOAD_QUIZ_QUESTION_DATA_SPINNER':
      newState.questionSpinner = action.value;
      break;
    case 'RETAIN_QUESTION_ANSWERS':
      console.log("action.data", action.data);
      const data = newState.retainedAnswer.mappings;

      newState.retainedAnswer = {
        "quiz_id": newState.questionsData.questions[0].quiz,
        "mappings": [...data, action.data]
      };
      break;
    case 'LOAD_QUIZ_RESULT_DATA_SUCESS': 
      newState.resultData= action.data;
      break;
    case 'LOAD_QUIZ_RESULT_DATA_SPINNER':
      newState.resultSpinner= action.value;
      break;          
  }

  return newState;
}