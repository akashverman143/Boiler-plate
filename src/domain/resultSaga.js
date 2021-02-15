import { takeLatest, put, call } from "redux-saga/effects";
import { fetchQuizResult } from '../adapters/resultAdapter';

function* QuizResultDataSaga(action) {
  try {  
    console.log("id", action);
    // yield put({ type: "LOAD", value: 1 });
    yield put({type: 'LOAD_QUIZ_RESULT_DATA_SPINNER', value: true});
    const quizData = yield call(fetchQuizResult, action.data);
    console.log("saga", quizData);
    yield put({ type: 'LOAD_QUIZ_RESULT_DATA_SUCESS', data: quizData});
    yield put({type: 'LOAD_QUIZ_RESULT_DATA_SPINNER', value: false});
  }catch (e) {
    console.log(e);
  }
}

export default function* watchResultSaga() {
  yield takeLatest("GET_RESULT", QuizResultDataSaga);
}