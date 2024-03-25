const jwt = require('jsonwebtoken')
const jwtSecret = "voltur"

const generateToken = (payload) =>{
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
    return token;
}

const verifyToken = (token) =>{
    const payload = jwt.verify(token,jwtSecret);
    return payload;
};

const decodeToken = (token) => {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

module.exports = { generateToken, verifyToken, decodeToken }