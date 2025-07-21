const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret_123';

module.exports = function(req, res, next) {
  // Get token from Authorization header (expects: "Bearer <token>")
  const token = req.header('Authorization')?.split(' ')[1]; 
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    // Verify token using JWT_SECRET
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded payload (usually contains userId) to req.user
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
