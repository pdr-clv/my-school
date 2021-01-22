import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema({
  unitId: {
    type: Number,
    required: [true, 'Unit can not be empty'],
  },
  level: {
    type: String,
    required: [true, 'You must assing a level to the unit'],
  },
  title: {
    type: String,
    required: [true, 'A unit must have a title'],
  },
  grammar: String,
  questionsBlock: [String],
  tags: [String],
  picture: String,
});

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;
