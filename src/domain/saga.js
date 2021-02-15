import { takeLatest, put, call } from "redux-saga/effects";
import { fetchQuizDetails } from '../adapters/quizAdapter';

function* QuizDataSaga() {
  try {  
    // yield put({ type: "LOAD", value: 1 });
    yield put({type: 'LOAD_QUIZ_DATA_SPINNER', value: true});
    const quizData = yield call(fetchQuizDetails);
    console.log("saga", quizData);
    yield put({ type: 'LOAD_QUIZ_DATA_SUCESS', data: quizData});
    yield put({type: 'LOAD_QUIZ_DATA_SPINNER', value: false});
  }catch (e) {
    console.log(e);
  }
}

export default function* watchSaga() {
  yield takeLatest("LOAD_QUIZ_DATA", QuizDataSaga);
}