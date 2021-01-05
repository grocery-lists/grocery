const route = require("express").Router();
const GroceryController = require("../Controllers/GroceryController");

route.post("/", GroceryController.addGrocery);

module.exports = route;
