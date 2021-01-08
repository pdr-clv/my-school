import axios from 'axios';

//const url = 'http://localhost:8080/posts';
const url = 'questions';

export const fetchQuestions = () => axios.get(url);