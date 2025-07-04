const express = require('express');
const routers = express.Router();
const userAction = require('../controllers/userController')

routers.get("/add.html", userAction.addUser);

routers.post("/add.html", userAction.createUser);

module.exports = routers