const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(+10)
  const hash = bcrypt.hash(password, salt)
  
  return hash
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

module.exports = { hashPassword, comparePassword };