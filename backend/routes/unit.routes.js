import express from 'express';
import { getUnits, createUnit } from '../controllers/unit.controllers.js';

const router = express.Router();

router.route('/').get(getUnits).post(createUnit);

export default router;
