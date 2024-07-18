const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  phoneNumber: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  role: {
    type: String,
    enum: ["user", "Driver"],
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
