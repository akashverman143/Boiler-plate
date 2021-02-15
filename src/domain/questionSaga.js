import { takeLatest, put, call } from "redux-saga/effects";
import { fetchQuizQuestions } from '../adapters/questionAdapter';

function* QuizQuestionDataSaga(action) {
  try {  
    console.log("id", action.id);
    // yield put({ type: "LOAD", value: 1 });
    yield put({type: 'LOAD_QUIZ_QUESTION_DATA_SPINNER', value: true});
    const quizData = yield call(fetchQuizQuestions, action.id);
    console.log("saga", quizData);
    yield put({ type: 'LOAD_QUIZ_QUESTION_DATA_SUCESS', data: quizData});
    yield put({type: 'LOAD_QUIZ_QUESTION_DATA_SPINNER', value: false});
  }catch (e) {
    console.log(e);
  }
}

export default function* watchQuestionSaga() {
  yield takeLatest("LOAD_QUIZ_QUESTION_DATA", QuizQuestionDataSaga);
}