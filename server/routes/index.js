const route = require('express').Router()
const UserController = require('../Controllers/UserController');
const FamilyController = require('../Controllers/FamilyController');
const authentication = require('../middlewares/authentication');
const auth = require('../middlewares/auth');
const GroceryController = require('../Controllers/GroceryController');

route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

route.post('/families/create', authentication, FamilyController.postFamily);

route.get('/groceries', authentication, GroceryController.readGrocery);
route.post('/groceries', authentication, auth, GroceryController.postGrocery);


module.exports = route;