const express = require('express');
const app = express();
const PORT = 3100;
const route = require('./routes/index');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(route)

app.listen((PORT), () => {
  console.log(`Listen to the port http://localhost:${PORT}`)
});