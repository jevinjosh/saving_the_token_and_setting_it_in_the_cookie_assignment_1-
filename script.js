require('dotenv').config(); // 👈 Load .env file

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET; // 👈 Use from .env

const encrypt = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return token;
};

const decrypt = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return null;
  }
};

module.exports = { encrypt, decrypt };
