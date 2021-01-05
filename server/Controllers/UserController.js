const { Parent } = require('../models');


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
}

module.exports = UserControler;