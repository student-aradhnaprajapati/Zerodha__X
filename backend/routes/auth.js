const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth'); // middleware to protect /me route

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Get current user (protected)
router.get('/me', auth, getUser);

module.exports = router;
