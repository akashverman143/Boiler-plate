import { BASE_URL } from '../config/baseUrl';
export const fetchQuizDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/all`, { headers: { 'auth-token' : '19c4ff12-e027-4320-b844-2cda768714e8', 'content-type': 'application/json'}});
    return response.json();
  } catch (e) {
    console.log(e);
  }
};