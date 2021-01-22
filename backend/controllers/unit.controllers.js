import Unit from '../models/unit.model.js';

export const getUnits = async (req, res) => {
  try {
    const units = await Unit.find({});

    res.status(200).json({
      status: 'success',
      results: units.length,
      data: units,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createUnit = async (req, res) => {
  try {
    const unit = await Unit.create(req.body);
    res.status(201).json({
      status: 'success',
      data: unit,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
  return res.status();
};
