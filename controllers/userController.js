const Users = require("../models/CustomerSchema");
var moment = require("moment"); // require



 const findUser = (req, res) => {
  Users.find()
    .then((result) => {
      res.render("index", { result, moment });
    })
    .catch((err) => {
      console.log(err, "failed To Find data in MongoDB");
    });
};

 const findUserById = (req, res) => {
  Users.findById(req.params.id)
    .then((id) => {
      res.render("user/view", { userId: id, moment });
    })
    .catch((err) => {
      console.log(err, "User Not Find");
    });
};


 const searchUser = (req, res) => {
  console.log("##################################");
  const searchText = req.body.searchText.trim().toLowerCase();
  Users.find({$or: [
      { firstName: searchText },
      { lastName: searchText },
      // { age: {$eq: searchText} },
      { email: searchText },
      { phoneNumber: searchText },
      { country: searchText },
      { gender: searchText },
    ],
  })
    .then((result) => {
      console.log(result, +searchText);
      res.render("user/search", { result, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};


const deleteUser = (req, res) => {
  Users.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err, "Customer not deleted"));
};


const FindAndDeleteUser = (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err, "Customer not deleted"));
};


const addUser = (req, res) => {
  res.render("user/add");
};

const createUser = (req, res) => {
  Users.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err, "failed to connect to mongoDB");
    });
}

module.exports = {addUser, createUser, findUser, findUserById, searchUser, deleteUser, FindAndDeleteUser};