const user = require("../models/user");
const registerNewUser = (req, res) => {
  try {
    console.log(req.body);
    User.create(req.body);
    res.send("ok created");
  } catch (err) {
    res.send("sth went wrong");
  }
};
const loginUser = (req, res) => {
  res.post("ok");
};

module.exports = { registerNewUser, loginUser };
