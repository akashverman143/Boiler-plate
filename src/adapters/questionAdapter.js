
import { BASE_URL } from '../config/baseUrl';
export const fetchQuizQuestions = async (id) => {
  console.log("id in adapter", id);
  try {
    const response = await fetch(`${BASE_URL}/api/quiz-questions/all/${id}`, { headers: { 'auth-token' : '19c4ff12-e027-4320-b844-2cda768714e8', 'content-type': 'application/json'}});
    // const data = response;
    return response.json();
  } catch (e) {
    console.log(e);
  }
};