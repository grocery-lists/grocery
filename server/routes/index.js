const route = require('express').Router()
const UserController = require('../Controllers/UserController');

route.post('/register', UserController.userRegister)

module.exports = route;