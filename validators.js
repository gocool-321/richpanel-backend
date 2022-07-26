const { userModel } = require("./models");

const validate = async (obj) => {
  const user = await userModel.findOne({ email: obj.email });
  console.log(user);
  if (!user) return false;
  return user.password === obj.password;
};

const writeToDB = async (obj) => {
  const user = new userModel(obj);
  const res = await user.save();
  return res;
};

exports.validate = validate;
exports.writeToDB = writeToDB;
