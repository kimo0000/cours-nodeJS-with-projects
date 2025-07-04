const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Person = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: Number,
    country: String,
    gender: String
  },
  {timestamps: true}
);

const Users = mongoose.model("users", Person);

module.exports = Users;