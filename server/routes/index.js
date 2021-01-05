const route = require('express').Router()
const UserController = require('../Controllers/UserController');
const FamilyController = require('../Controllers/FamilyController');
const authentication = require('../middlewares/authentication');

route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

route.post('/families/create', authentication, FamilyController.postFamily);

module.exports = route;