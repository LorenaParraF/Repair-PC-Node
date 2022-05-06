const express = require('express');
const { body } = require('express-validator');

// Controllers
const {
  getAllRepairs,
  getRepairById,
  createRepair,
  repairCompleted,
  repairCancelled,
  repairPending,
} = require('../controllers/repairs.controller');

const router = express.Router();

router.get('/', getAllRepairs);

router.post(
  '/',
  body('date').isISO8601(),
  body('computerNumber').isNumeric(),
  body('comments').isLength({ min: 1 }),
  createRepair
);

router.get('/:id', getRepairById);

router.patch('/:id', repairCompleted);

router.patch('/:id', repairPending);

router.delete('/:id', repairCancelled);

module.exports = { repairsRouter: router };
