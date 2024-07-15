const { Router } = require("express");
const { loginUser, registerNewUser } = require("../controllers/user");
const app = Router();

app.post("/register", registerNewUser);
app.post("/users", loginUser);

module.exports = app;
