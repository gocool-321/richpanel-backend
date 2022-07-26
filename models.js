const mongoose = require("mongoose");
const { userDetailsSchema } = require("./schemas");
const userModel = mongoose.model("user", userDetailsSchema);
exports.userModel = userModel;
