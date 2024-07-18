const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    default: "male",
  },
  role: {
    type: String,
    enum: ["user", "Rider"],
    default: "Rider",
  },
  email: String,
  password: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
