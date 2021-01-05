const { Parent } = require('../models');
const { verifyToken } = require('../helpers/jwt');

const authentication = (req, res, next) => {
  const { access_token } = req.headers

  if (!access_token) {
    res.status(401).json({message: 'Authentication Error'})
  } else {
    const decoded = verifyToken(access_token)

    Parent.findAll({
      where: {
        email: decoded.email,
      }
    })
    .then(parent => {
      if (!parent) {
        res.status(401).json({
          message: 'Authentication Failed'
        })
      } else {
        req.loggedInUser = decoded

        next()
      }
    })
    .catch(console.log)
  }
}

module.exports = authentication