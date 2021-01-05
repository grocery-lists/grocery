const route = require('express').Router()
const UserController = require('../Controllers/UserController');
const FamilyController = require('../Controllers/FamilyController');
const authentication = require('../middlewares/authentication');
const auth = require('../middlewares/auth');
const GroceryController = require('../Controllers/GroceryController');

route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

route.post('/families/create', authentication, FamilyController.postFamily);
route.get('/families/read', authentication, FamilyController.readFamily);

route.get('/groceries', authentication, GroceryController.readGrocery);
route.post('/groceries', authentication, auth, GroceryController.postGrocery);
route.delete('/groceries/:id', authentication, auth, GroceryController.deleteGrocery);
route.put('/groceries/:id', authentication, auth, GroceryController.updateGrocery);
route.patch('/groceries/:id', authentication, auth, GroceryController.statusGrocery);

module.exports = route;