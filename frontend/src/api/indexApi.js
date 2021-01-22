import axios from 'axios';

//const url = 'http://localhost:8080/api/v1/quiz';
const url = '/api/v1/quiz';

export const fetchQuestions = () => axios.get(url);

export const fetchUnits = () => axios.get('/api/v1/unit');
