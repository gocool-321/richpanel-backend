const mongoose = require("mongoose");
const { orderSchema } = require("./schemas");
const orderModel = mongoose.model("orders", orderSchema);
exports.orderModel = orderModel;
