const express = require('express');
const routers = express.Router();
const Users = require("../models/CustomerSchema");
var moment = require("moment"); // require
const userAction = require('../controllers/userController')

// get request:
routers.get("/", userAction.findUser);


routers.get("/view/:id", userAction.findUserById);

// post request:
routers.post("/search", userAction.searchUser);

// delete request:
routers.delete("/delete/:id", userAction.deleteUser);

routers.delete("/edit/delete/:id", userAction.FindAndDeleteUser);



module.exports = routers