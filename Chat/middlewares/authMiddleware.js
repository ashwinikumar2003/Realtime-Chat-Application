import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.js';

const { secret } = authConfig;

const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header('auth-token');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
    res.json({err:`$err`});
  }
};

export default authMiddleware;
