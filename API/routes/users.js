const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Create User
router.post('/api/users/register', usersController.create);

// Login User
router.post('/api/users/login', usersController.login);

// Get user by id
router.get('/api/users/:userId', usersController.getUser);

module.exports=router;