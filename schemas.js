const mongoose = require("mongoose");

userDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

exports.userDetailsSchema = userDetailsSchema;
