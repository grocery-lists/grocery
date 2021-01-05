const { Parent } = require('../models');
const { comparePassword } = require('../helpers/hashPassword');
const { signToken } = require('../helpers/jwt');

class UserControler {
  static userRegister (req, res) {
    const newParent = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
    Parent.create(newParent)
      .then(parent => {
        res.status(201).json({
          id: parent.id,
          email: parent.email
        })
      })
      .catch(console.log)
  }

  static userLogin (req, res) {
    const payload = {
      email: req.body.email,
      password: req.body.password
    }
    Parent.findOne({
      where: {
        email: payload.email
      }
    })
      .then(user => {
        if (!user) {
          res.status(401).json({
            'message': 'Invalid Email/Password'
          })
        } else if (!comparePassword(payload.password, user.password)) {
          res.status(401).json({
            message: 'Invalid Email/Password'
          })
        } else {
          const access_token = signToken({
            id: user.id,
            email: user.email
          })
          res.status(200).json({
            access_token: access_token
          })
        }
      })
      .catch(console.log)
  }
}

module.exports = UserControler;