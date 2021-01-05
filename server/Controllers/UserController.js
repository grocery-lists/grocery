const { Parent } = require('../models');


class UserControler {
  static async userRegister (req, res, next) {
    const newParent = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
    const parent = await Parent.create(newParent)
    .then(parent => {
      res.status(201).json({
        id: parent.id,
        email: parent.email
      })
    })
    .catch(console.log)
  }
}

module.exports = UserControler;