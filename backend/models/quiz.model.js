import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question can not be empty'],
    },
    choices: [String],
    answer: {
      type: [String],
      required: [true, 'Answer can not be empty'],
    },
    type: String,
  },
  { collection: 'quiz' }
);

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
