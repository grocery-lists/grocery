const jwt = require('jsonwebtoken');

const signToken = (payload) => {
  const token = jwt.sign(payload, 'secret')
  return token
}

const verifyToken = (token) => {
  const decoded = jwt.verify(token, 'secret')
  return decoded
}

module.exports = {
  signToken,
  verifyToken
}