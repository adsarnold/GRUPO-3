const express = require("express");
const middleware = require("../middlewares/login");
const model = require("../model/modelLogin");
const router = express.Router();

router.get("/", function (req, res) {
  const invalidCredentials = req.invalidCredentials;

  res.render("login", {
    invalidCredentials: Boolean(invalidCredentials),
  });
});

router.post("/", middleware.validateCredentials, function (req, res) {
  const credentials = req.body;
  const user = model.authenticateUser(credentials.login, credentials.password);

  if (user === undefined) {
    return res.render("login", { invalidCredentials: true });
  }

  req.session.user = user;
  res.redirect("/curso");
});

module.exports = router;
