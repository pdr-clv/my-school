import Quiz from '../models/quiz.model.js';

export const getQuestions = async (req, res) => {
  try {
    const questions = await Quiz.find({});

    res.status(200).json({
      status: 'success',
      results: questions.length,
      data: questions,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createQuestion = async (req, res) => {
  try {
    const question = await Quiz.create(req.body);
    res.status(201).json({
      status: 'success',
      data: question,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
  return res.status();
};
