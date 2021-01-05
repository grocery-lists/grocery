const { Families } = require('../models');

class FamilyController {
  static postFamily (req, res) {
    const { name } = req.body 
    const ParentId = req.loggedInUser.id
    Families.create({
      name,
      ParentId
    })
    .then(family => {
      res.status(201).json({
        id: family.id,
        name: family.name,
        parentId: family.parentId
      })
    })
    .catch(console.log)
  }
}

module.exports = FamilyController;