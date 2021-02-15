
import { BASE_URL } from '../config/baseUrl';
export const fetchQuizResult = async (data) => {
  console.log("data in adapter", data);
  try {
    const response = await fetch(`${BASE_URL}/api/user/quiz-score`, { method: "post", headers: { 'auth-token' : '19c4ff12-e027-4320-b844-2cda768714e8', 'content-type': 'application/json'}, body: JSON.stringify(data)});
    // const data = response;
    return response.json();
  } catch (e) {
    console.log(e);
  }
};