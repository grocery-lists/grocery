const auth = (req, res, next) => {
  const loggedInUser = req.loggedInUser
  if (loggedInUser.status === true) {
    next ()
  } else {
    res.status(401).json({
      message: 'Must be parent or head of family'
    })
  }
}

module.exports = auth