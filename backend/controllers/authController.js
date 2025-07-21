const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret_123';

// Register user
exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;  // match frontend: username
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 12);
    user = new User({ email, username, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '3d' });

    res.status(201).json({ 
      token, 
      user: { id: user._id, email: user.email, username: user.username }
    });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '3d' });

    res.json({ 
      token, 
      user: { id: user._id, email: user.email, username: user.username }
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: 'Login failed' });
  }
};

// Get current user (protected)
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); 
    res.json(user);
  } catch (err) {
    console.error("Get user error:", err.message);
    res.status(500).json({ message: 'Failed to get user' });
  }
};
