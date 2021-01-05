const route = require('express').Router()
const UserController = require('../Controllers/UserController');

route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

module.exports = route;