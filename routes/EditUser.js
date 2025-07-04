const express = require('express');
const routers = express.Router();
const Users = require("../models/CustomerSchema");


routers.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((id) => {
      res.render("user/edit", { userId: id });
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
});

routers.put("/:id", (req, res) => {
  Users.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "Failed To Update customer");
    });
});

module.exports = routers