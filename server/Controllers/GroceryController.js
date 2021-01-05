const {Grocery} = require('../models')

class GroceryController {
  static postGrocery (req, res) {
    const { name, category, price, qty } = req.body
    const ParentId = req.loggedInUser.id
    Grocery.create({
      name,
      category,
      price,
      qty,
      ParentId
    })
    .then(_ => {
      res.status(201).json({
        message: 'Add Grocery Successful'
      })
    })
    .catch(console.log)
  }

  static readGrocery (req, res) {
    const ParentId = req.loggedInUser.id
    Grocery.findAll({
      where: {
        ParentId
      }
    })
    .then((item) => {
      res.status(200).json({
        item
      })
    })
    .catch(console.log)
  }

  static deleteGrocery (req, res) {
    const id = +req.params.id
    Grocery.destroy({
      where: {
        id
      }
    })
    .then(() => {
      res.status(200).json({
        message: 'Grocery has been deleted'
      })
    })
    .catch(console.log)
  }

  static updateGrocery(req, res) {
    const id = +req.params.id

    const {name, category, qty, price} = req.body

    Grocery.update({name, category, qty, price, status}, {
      where: {
        id
      }, returning: true
    })
    .then(_ => {
      res.status(200).json('Grocery has been updated')
    })
    .catch(console.log)
  }

  static statusGrocery(req, res) {
    const id = +req.params.id

    const { status } = req.body

    Grocery.update({status}, {
      where: {
        id
      }, returning: true
    })
    .then(_ => {
      res.status(200).json('Grocery has been updated')
    })
    .catch(console.log)
  }
}

module.exports = GroceryController;