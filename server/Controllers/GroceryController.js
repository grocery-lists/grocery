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
}

module.exports = GroceryController;