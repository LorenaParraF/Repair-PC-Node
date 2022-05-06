const express = require('express');
const { body } = require('express-validator');

// Controller

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.post(
  '/',
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  body('password').isAlphanumeric(),
  createUser
);

router.get('/:id', getUserById);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };
