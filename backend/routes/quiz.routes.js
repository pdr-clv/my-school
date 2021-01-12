import express from 'express';
import {
  getQuestions,
  createQuestion,
} from '../controllers/quiz.controllers.js';

const router = express.Router();

router.route('/').get(getQuestions).post(createQuestion);

export default router;
